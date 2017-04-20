import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types.js';

const initialState = { email: ' ', password: '', user: null };

//make a new a object - take all of the properties off of my existing state object and throw them into that objeect, then define the property email, give it a value of action.payload and toss it on top of whatever values were on that state object

//if email already has a property, it will be overwritten by the one we just had 

export default (state = initialState, action) => {

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED: 
			return { ...state, password: action.payload };

		case LOGIN_USER_SUCCESS: 
			return { ...state, user: action.payload, error: '' };

		case LOGIN_USER_FAIL: 
			return { ...state, error: 'Authentication Failed', password: '' };

		default: 
			return state;
	}
};
