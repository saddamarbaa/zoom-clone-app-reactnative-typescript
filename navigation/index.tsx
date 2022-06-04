import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import { GlobalScreenOption } from '../constants'

const Stack = createNativeStackNavigator()

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={GlobalScreenOption}>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	)
}
