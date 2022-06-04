import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	SafeAreaView,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import { RootTabScreenProps } from '../types'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Your Goals',
			// headerStyle: { backgroundColor: '#1e085a' },
			headerTintColor: 'white',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
				color: 'white',
			},
			headerTitleAlign: 'center',
			headerLeft: () => <View style={{ marginLeft: 20 }}></View>,
		})
	}, [navigation])

	return <SafeAreaView style={styles.container}>ok</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: '#1e085a',
		color: '#FFF',
		flex: 1,
	},
	flatList: {
		flex: 3,
		marginTop: 25,
	},
	emptyList: {
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		width: '100%',
		maxWidth: '90%',
		margin: 10,
		fontSize: 22,
		fontWeight: 'bold',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		cursor: 'pointer',
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: '#FFFF',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	item: {
		marginTop: 5,
		fontSize: 15,
		flex: 1,
		color: 'white',
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
})
