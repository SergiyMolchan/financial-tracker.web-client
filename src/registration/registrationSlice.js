import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import registrationAPI from './registrationAPI';

const initialState = {
	error: {
		message: ''
	},
	loading: false
};

export const registration = createAsyncThunk(
	'registration',
	async (data, { rejectWithValue }) => {
		try {
			console.log('data', data);
			const response = await registrationAPI(data);
			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(registration.pending,  (state) => {
			state.loading = true;
		});
		builder.addCase(registration.fulfilled,  (state) => {
			state.loading = false;
		});
		builder.addCase(registration.rejected,  (state, action) => {
			state.loading = false;
			state.error = { ...state.error, ...action.payload };
		});
	},

});

export const selectError = state => state.registration.error;
export const selectLoading = state => state.registration.loading;

export default registrationSlice.reducer;
