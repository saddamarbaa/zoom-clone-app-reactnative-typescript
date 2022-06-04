import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { contactsMenuButtons } from '../constants/temData'

export default function ContactsMenu() {
	return (
		<View style={styles.container}>
			{contactsMenuButtons.map(({ name, title, type, photoUrl, job }, index) =>
				type === 'Started' ? (
					<View style={styles.row} key={index}>
						<View style={styles.starIcon}>
							<AntDesign name="star" size={26} color="#efefef" />
						</View>
						<View>
							<Text style={styles.text}>{title}</Text>
						</View>
					</View>
				) : (
					<View style={styles.row}>
						<Image source={photoUrl} style={styles.image} />

						<View>
							<Text style={styles.text}>{name}</Text>
							<Text style={styles.jobTitle}>{job}</Text>
						</View>
					</View>
				),
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 18,
	},
	buttonContainer: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#ffff',
		marginLeft: 17,
		cursor: 'pointer',
	},
	jobTitle: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'grey',
		marginLeft: 17,
	},
	starIcon: {
		backgroundColor: '#3333',
		width: 55,
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		cursor: 'pointer',
	},
	image: {
		borderRadius: 26,
		width: 55,
		height: 55,
		cursor: 'pointer',
	},
})
