import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import MeetingRoomScreen from '../screens/MeetingRoomScreen'
import { GlobalScreenOption } from '../constants'

const Stack = createNativeStackNavigator()

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={GlobalScreenOption}>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					// options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MeetingRoom"
					component={MeetingRoomScreen}
					options={{
						title: 'Start a Meeting',
						headerTintColor: 'white',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							fontSize: 20,
							fontWeight: 'bold',
							color: 'white',
						},
						headerStyle: {
							backgroundColor: '#1c1c1c',
							borderBottomColor: '#222',
							borderBottomWidth: 0.1,
						},
						// headerShadowVisible: false,
					}}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	)
}
