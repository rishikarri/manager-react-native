import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers/';

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
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello 
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
