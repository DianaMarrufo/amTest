import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import characterService from "./characterService";

const initialState = {
  characters: [],
  charactersList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  favorites: [],
  studentsActive: false,
  staffActive: false,
};

// Create new character
export const createCharacter = createAsyncThunk(
  "character/create",
  async (characterData, thunkAPI) => {
    try {
      return await characterService.createCharacter(characterData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// Get characters
export const getCharacters = createAsyncThunk(
  "character/getAll",
  async (_, thunkAPI) => {
    try {
      return await characterService.getCharacters();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    reset: (state) => initialState,
    filterStudents: (state) => {
      state.charactersList = state.characters.filter((e) => e.hogwartsStudent);
      state.staffActive = false;
      state.studentsActive = true;
    },
    filterStaff: (state, action) => {
      state.charactersList = state.characters.filter((e) => e.hogwartsStaff);
      state.staffActive = true;
      state.studentsActive = false;
    },
    addFavorite: (state, action) => {
      state.favorites += action.payload;
    },
    deleteFavorite: (state, action) => {
      state.favorites += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.characters.push(action.payload);
      })
      .addCase(createCharacter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.characters = action.payload;
        state.charactersList = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  reset,
  filterStudents,
  filterStaff,
  addFavorite,
  deleteFavorite,
} = characterSlice.actions;

export default characterSlice.reducer;
