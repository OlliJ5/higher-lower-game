const mainTeamColor = (team) => {
  switch (team) {
    case "ATL":
      return "#E03A3E";
    case "TOR":
      return "#CE1141";
    case "PHI":
      return "#006BB6";
    case "NOP":
      return "#0C2340";
    case "UTA":
      return "#002B5C";
    case "HOU":
      return "#CE1141";
    case "LAC":
      return "#C8102E";
    case "MIL":
      return "#00471B";
    case "CLE":
      return "#860038";
    case "CHI":
      return "#CE1141";
    case "LAL":
      return "#552583";
    case "DEN":
      return "#0E2240";
    case "IND":
      return "#002D62";
    case "POR":
      return "#E03A3E";
    case "DAL":
      return "#00538C";
    case "SAS":
      return "#C4CED4";
    case "MIA":
      return "#98002E";
    case "NYK":
      return "#006BB6";
    case "ORL":
      return "#0077C0";
    case "DET":
      return "#C8102E";
    case "PHX":
      return "#1D1160";
    case "WAS":
      return "#002B5C";
    case "BOS":
      return "#007A33";
    case "BKN":
      return "#000000";
    case "MIN":
      return "#0C2340";
    case "CHA":
      return "#1D1160";
    case "MEM":
      return "#5D76A9";
    case "GSW":
      return "#1D428A";
    case "OKC":
      return "#007AC1";
    case "SAC":
      return "#5A2D81";
    default:
      return "#051c2d";
  }
};

const functions = {
  mainTeamColor,
};

export default functions;
