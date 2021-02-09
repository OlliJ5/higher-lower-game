import axios from "axios";

const getPlayers = async () => {
  const response = await axios.get("http://127.0.0.1:5000/players");
  return response.data;
};

const functions = {
  getPlayers,
};

export default functions;
