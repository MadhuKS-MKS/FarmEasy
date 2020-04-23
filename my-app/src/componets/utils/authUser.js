import axios from "axios";

const isUser = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const res = await axios.get(`http://localhost:5000/api/v1/auth/me`, config);
  console.log(res);

  // this.setState({
  //   role: res.data,
  // });
  console.log(res);
};
export default isUser;
