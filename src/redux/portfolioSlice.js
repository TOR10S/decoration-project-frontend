import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPortfolioData } from '../portfolio-api';

export const getPortfolio = createAsyncThunk(
  'portfolio/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetchPortfolioData();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filterType: "",
  },
  reducers: {
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolio.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPortfolio.fulfilled, (state, action) => {
        state.isLoading = false;

        state.items = Array.isArray(action.payload?.data)
          ? action.payload.data
          : [];
      })
      .addCase(getPortfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilterType } = portfolioSlice.actions;
export const portfolioReducer = portfolioSlice.reducer;