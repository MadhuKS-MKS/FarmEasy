(function() {
  "use strict";

  var CLASSES = {
    button: "btn",
    checkbox: "toggle__checkbox",
    container: "mainContainer",
    form: '[data-toggle="form"]',
    input: "inputfield__input",
    inputfield: "inputfield"
  };
  var IS_ACTIVE = "is-active";
  var IS_ANIMATING = "is-animating";
  var IS_DIRTY = "is-dirty";

  var CONTAINER_CLASSES = ["is-amnesia", "is-login", "is-register"];
  var BUTTON = document.querySelectorAll("." + CLASSES.button);
  var CHECKBOX = document.querySelectorAll("." + CLASSES.checkbox);
  var CONTAINER = document.getElementById(CLASSES.container);
  var FORMTOGGLE = document.querySelectorAll(CLASSES.form);
  var INPUTFIELD = document.querySelectorAll("." + CLASSES.inputfield);
  var whichAnimationEvent = function() {
    var a;
    var el = document.createElement("loginfakeelement");
    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };

    for (a in animations) {
      if (el.style[a] !== undefined) {
        return animations[a];
      }
    }

    return false;
  };
  var mobileCheck = function() {
    var check = false;

    (function(a) {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
      ) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  };
  var eventType = mobileCheck() ? "touchstart" : "click";
  var eventBtn = mobileCheck() ? "touchstart" : "mousedown";
  var animationEnd = whichAnimationEvent();
  var animationClassToggle = function() {
    this.classList.add(IS_ANIMATING);
    if (!animationEnd) {
      this.classList.remove(IS_ANIMATING);

      return;
    }
    animationEnd &&
      this.addEventListener(animationEnd, function() {
        if (this.classList.contains(IS_ANIMATING)) {
          this.classList.remove(IS_ANIMATING);
        }
      });
  };
  [].slice.call(CHECKBOX).forEach(function(el) {
    el.addEventListener(eventBtn, animationClassToggle.bind(el));
  });
  [].slice.call(BUTTON).forEach(function(el) {
    el.addEventListener(eventBtn, animationClassToggle.bind(el));
  });
  [].slice.call(FORMTOGGLE).forEach(function(el) {
    var $target = document.getElementById(el.getAttribute("data-target"));
    var $type = "is-" + el.getAttribute("data-type");
    el.addEventListener(eventType, function(e) {
      if (e) e.preventDefault();
      if (!$target) return;
      var children = $target.parentNode.children;
      Array.prototype.filter.call(children, function(child) {
        if (child !== $target) {
          child.classList.remove(IS_ACTIVE);
        }
      });
      if (!$target.classList.contains(IS_ACTIVE)) {
        $target.classList.add(IS_ACTIVE);
      }
      CONTAINER_CLASSES.forEach(function(c) {
        CONTAINER.classList.remove(c);
      });
      CONTAINER.classList.add($type);
    });
  });
  [].slice.call(INPUTFIELD).forEach(function(el) {
    var input = el.querySelector("." + CLASSES.input);
    var checkValue = function() {
      if (input.value != "" && !el.classList.contains(IS_DIRTY)) {
        el.classList.add(IS_DIRTY);
      } else if (input.value == "" && el.classList.contains(IS_DIRTY)) {
        el.classList.remove(IS_DIRTY);
      }
    };
    input.addEventListener("input", checkValue);
    input.addEventListener("change", checkValue);
    document.addEventListener("DOMContentLoaded", checkValue);
  });
})();
