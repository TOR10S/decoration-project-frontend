import axios from "axios";

axios.defaults.baseURL = "https://decoration-project-backend.onrender.com";

export const fetchPortfolioData = async (page = 1,) => {
  const response = await axios.get(`/decorations?perPage=10000`, {
    params: { page }
  });
  return response.data.data;
};

export const fetchPortfolioFilteredData = async (typeOfDecoration, colors, theme, page = 1) => {
  const params = {
    ...(typeOfDecoration && { typeOfDecoration }),
    ...(colors && { colors }),
    ...(theme && { theme }),
    page, perPage: 10000
  };

  const response = await axios.get(`/decorations`, { params });

  return response.data.data;
};