import axios from "axios";

const getUser = user => axios.get(`https://api.github.com/users/${user}`);

export { getUser }