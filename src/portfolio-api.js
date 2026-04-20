import axios from "axios";

axios.defaults.baseURL = "https://decoration-project-backend.onrender.com";

export const fetchPortfolioData = async () => {
  const response = await axios.get(`/decorations`);
  return response.data;
};

export const fetchPortfolioFilteredData = async (typeOfDecoration, colors, theme) => {
      const params = {};

  if (typeOfDecoration) params.typeOfDecoration = typeOfDecoration;
  if (colors) params.colors = colors;
  if (theme) params.theme = theme;
  const response = await axios.get(`/decorations/`, {params});
  return response.data;
};