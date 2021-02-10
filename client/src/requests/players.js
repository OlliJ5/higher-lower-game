import axios from "axios";

const getPlayers = async () => {
  const response = await axios.get("http://127.0.0.1:5000/players");
  return response.data;
};

const getPlayerInfo = async (playerId) => {
  const response = await axios.get(`http://127.0.0.1:5000/players/${playerId}`);
  return response.data;
};

const functions = {
  getPlayers,
  getPlayerInfo,
};

export default functions;
