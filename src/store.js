import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './pages/authentication/authenticationSlice';

export const store = configureStore({
	reducer: {
		authentication: authenticationReducer,
	},
});
