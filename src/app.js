import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/';
import LoginForm from './components/LoginForm.js';


// before the component renders for the first time (compnentwillmount), configure firebase 

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyD5EUG_C4s2utoGB36Sj5rjGc5kLHTPaLc',
			authDomain: 'manager-402ed.firebaseapp.com',
			databaseURL: 'https://manager-402ed.firebaseio.com',
			projectId: 'manager-402ed',
			storageBucket: 'manager-402ed.appspot.com',
			messagingSenderId: '744964124023'
			};
			firebase.initializeApp(config);
	}

	render() {
		// second argument is for any initial state we would want to add in 
		// third argument is a store enhancer
		const store = createStore(reducers, {}, applyMiddleWare(ReduxThunk));
		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
