import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

import { RootTabScreenProps } from '../types'
import SearchBar from '../components/SearchBar'
import MenuButton from '../components/MenuButton'
import ContactsMenu from '../components/ContactsMenu'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Meet & Chat',
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#1c1c1c',
				borderBottomColor: '#222',
				borderBottomWidth: 0.1,
			},
			headerTitleAlign: 'center',
			headerTitleStyle: {
				fontSize: 20,
				fontWeight: 'bold',
				color: 'white',
			},
			headerLeft: () => (
				<View style={styles.headerLeftWrapper}>
					<TouchableOpacity activeOpacity={0.5}>
						<Entypo name="notification" size={29} color="white" />
					</TouchableOpacity>
				</View>
			),
			headerRight: () => (
				<View style={styles.headerRightWrapper}>
					<TouchableOpacity activeOpacity={0.5}>
						<Entypo name="new-message" size={28} color="white" />
					</TouchableOpacity>
				</View>
			),
		})
	}, [navigation])

	const handleNavigate = (title: string) => {
		if (title === 'New Meeting') {
			navigation.navigate('MeetingRoom')
		}
	}

	return (
		<SafeAreaView style={styles.wrapper}>
			<SearchBar />
			<MenuButton handleNavigate={handleNavigate} />
			<ContactsMenu />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#1c1c1c',
		color: '#FFF',
		flex: 1,
	},
	container: {
		// backgroundColor: '#1e085a',
		color: '#FFF',
		flex: 1,
	},
	button: {
		width: '100%',
		maxWidth: '90%',
		margin: 10,
		cursor: 'pointer',
		fontSize: 22,
		marginTop: 50,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	headerLeftWrapper: {
		marginLeft: 22,
		cursor: 'pointer',
	},
	headerRightWrapper: {
		marginRight: 22,
		cursor: 'pointer',
	},
})
