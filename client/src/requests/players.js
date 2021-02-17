import axios from "axios";

const getPlayers = async () => {
  const response = await axios.get("/players");
  return response.data;
};

const getPlayerInfo = async (playerId) => {
  const response = await axios.get(`/players/${playerId}`);
  return response.data;
};

const functions = {
  getPlayers,
  getPlayerInfo,
};

export default functions;
