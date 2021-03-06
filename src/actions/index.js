import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START } from './types.js';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};


export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

//this call is going to make a request to firebase's servers - add a then clause  - then clause is executed after the sign in is finished 
export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER_START });

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => {
			loginUserSuccess(dispatch, user);
		})
		.catch((error) => {
			console.log(error);
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => {
					loginUserSuccess(dispatch, user);	
				})
				.catch(() => loginUserFail(dispatch))
		});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	})
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};
