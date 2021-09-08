// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './AuthenticationAPI';
//
// const initialState = {
// 	token: localStorage.getItem('jwt-token') || null,
// 	error: null,
// 	loading: false
// };
//
// export const incrementAsync = createAsyncThunk(
// 	'authentication',
// 	async (amount) => {
// 		const response = await fetchCount(amount);
// 		return response.data;
// 	}
// );
//
// export const counterSlice = createSlice({
// 	name: 'authentication',
// 	initialState,
// 	// The `reducers` field lets us define reducers and generate associated actions
// 	reducers: {
// 		increment: async (state) => {
// 			state.loading = true;
// 			const url = '/api/auth/login';
// 			const data = {};
// 			try {
// 				const res = await fetch(url, {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json'
// 					},
// 					body: JSON.stringify(data)
// 				});
// 				const json = await res.json();
//
// 				if (res.status === 200) {
// 					const expirationDate = new Date(new Date().getTime() + json.timeLifeOfToken * 1000);
// 					localStorage.setItem('jwt-token', json.token);
// 					localStorage.setItem('expirationDate', expirationDate);
// 					// dispatch(auth_saccess(json.token));
// 					// dispatch(autoLogout(json.timeLifeOfToken));
// 					// dispatch(auth_error(null));
// 				}
// 				if (res.status === 401 || res.status === 404) {
// 					// dispatch(auth_error(json.message));
// 				}
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		},
// 	},
//
// });
//
// export const { increment } = counterSlice.actions;
//
// export const selectCount = (state) => state.counter.value;
//
// export default counterSlice.reducer;
