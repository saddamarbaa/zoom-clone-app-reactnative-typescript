import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

type ButtonType = {
	title: string
	onPress: () => void
	// buttonColor,
	// titleColor,
	// buttonStyle,
	// textStyle,
}

const CustomButton = ({
	title,
	onPress,
}: // buttonColor,
// titleColor,
// buttonStyle,
// textStyle,
ButtonType) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={styles.button}
				// style={{
				// 	...styles.button,
				// 	...buttonStyle,
				// 	backgroundColor: buttonColor || '#512DA8',
				// }}
			>
				<Text style={styles.buttonText}>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default CustomButton

const styles = StyleSheet.create({
	button: {
		marginBottom: 7,
		width: '100%',
		maxWidth: 450,
		marginHorizontal: 'auto',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 11,
		backgroundColor: '#0470dc',
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	buttonText: {
		fontSize: 18,
		color: '#fff',
	},
})
