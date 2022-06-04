import { StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'

import { RootTabScreenProps } from '../types'
import CustomButton from '../components/CustomButton'

export default function MeetingRoomScreen({
	navigation,
}: RootTabScreenProps<'MeetingRoom'>) {
	const [roomName, setRoomName] = useState('')
	const [roomID, setRoomID] = useState('')

	const createChatRoomHandler = () => {
		// Api Call
		console.log(roomName, roomID)
	}

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setRoomName(text)}
						value={roomName}
						placeholder="Enter name"
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Enter room id"
						onChangeText={(text) => setRoomID(text)}
						value={roomID}
					/>
				</View>
				<CustomButton title="Start Meeting" onPress={createChatRoomHandler} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#1c1c1c',
		color: '#FFF',
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	container: {
		width: '100%',
		marginTop: 60,
		paddingHorizontal: 20,
	},
	inputContainer: {
		width: '100%',
		maxWidth: 450,
		marginHorizontal: 'auto',
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#a6a6a6',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#3333',
		marginBottom: 20,
	},
	input: {
		flex: 1,
		height: 40,
		padding: 10,
		paddingHorizontal: 20,
		borderWidth: 0,
		color: '#fff',
		flexDirection: 'row',
		fontWeight: 'bold',
		width: '100%',
		outlineStyle: 'none',
		web: {
			outlineStyle: 'none',
		},
	},
})
