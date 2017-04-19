import { EMAIL_CHANGED } from './types.js';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};