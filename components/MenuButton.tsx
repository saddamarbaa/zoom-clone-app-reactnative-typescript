import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { menusItems } from '../constants/temData'

type MenuButtonType = {
	handleNavigate: (title: string) => void
}

export default function MenuButton({ handleNavigate }: MenuButtonType) {
	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				{menusItems.map(({ name, title }, index) => (
					<TouchableOpacity
						key={index}
						style={index === 0 ? styles.customButton : styles.button}
						onPress={() => handleNavigate(title)}>
						<View>
							<FontAwesome name={name} size={23} color="#efefef" />
						</View>
						<View>
							<Text style={styles.text}>{title}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 35,
		paddingHorizontal: 20,
		marginBottom: 20,
		borderBottomColor: '#1f1f1f',
		borderBottomWidth: 1,
	},
	buttonContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		flex: 1,
	},
	button: {
		width: 90,
		height: 80,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0470dc',
		marginBottom: 18,
	},
	customButton: {
		width: 100,
		height: 80,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff751f',
		marginBottom: 13,
	},
	text: {
		paddingTop: 10,
		fontSize: 13,
		fontWeight: 'bold',
		color: '#ffff',
	},
})
