import axios from "axios";
const api_key = "f1aa11b6d44fc9ce0a65a36dfa2ede2a";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: api_key
  }
});
