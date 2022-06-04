import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('')

	const searchHandler = (enteredText: React.SetStateAction<string>) => {
		setSearchTerm(enteredText)
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<View style={styles.icon}>
					<AntDesign name="search1" size={20} color="#858585" />
				</View>
				<TextInput
					style={styles.input}
					onChangeText={searchHandler}
					value={searchTerm}
					placeholder="Search"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 30,
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
		paddingLeft: 15,
		borderRadius: 10,
		backgroundColor: '#3333',
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
	icon: {
		cursor: 'pointer',
	},
})
