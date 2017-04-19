import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types.js';

const initialState = { email: ' ', password: '' };

//make a new a object - take all of the properties off of my existing state object and throw them into that objeect, then define the property email, give it a value of action.payload and toss it on top of whatever values were on that state object

//if email already has a property, it will be overwritten by the one we just had 

export default (state = initialState, action) => {
	console.log(action);
	
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED: 
			return { ...state, password: action.payload };

		default: 
			return state;
	}
};
