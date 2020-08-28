import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-6ff2c.firebaseio.com/"
});

export default instance;
