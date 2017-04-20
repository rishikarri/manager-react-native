import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });	
	}

	renderButtonOrSpinner() {
		if (this.props.loading === true) {
			return (<Spinner />);
		} 
		
		return (
				<Button onPress={this.onButtonPress.bind(this)}> 
					Login
				</Button>
			);			
	}
	
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<CardSection>
					{this.renderButtonOrSpinner()}
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20, 
		alignSelf: 'center',
		color: 'red'
	}
}
const mapStateToProps = ({ auth }) => {

	const { email, password, error, loading } = auth;
	return {
		email, 
		password, 
		error, 
		loading
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
