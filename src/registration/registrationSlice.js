import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import registrationAPI from './registrationAPI';

const initialState = {
	error: {
		message: ''
	},
	isLoading: false
};

export const registration = createAsyncThunk(
	'registration',
	async (data, { rejectWithValue }) => {
		try {
			return await registrationAPI(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(registration.pending,  (state) => {
			state.isLoading = true;
		});
		builder.addCase(registration.fulfilled,  (state) => {
			state.isLoading = false;
			state.error = initialState.error;
		});
		builder.addCase(registration.rejected,  (state, action) => {
			state.isLoading = false;
			state.error = { ...state.error, ...action.payload };
		});
	},

});

export const selectError = state => state.registration.error;
export const selectLoading = state => state.registration.isLoading;

export default registrationSlice.reducer;
