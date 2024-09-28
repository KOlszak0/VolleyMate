import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

const FormField = ({ title, value, handleChangeText, otherStyles, placeholder }) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base font-russoRegular">{title}</Text>
			<View className="flex flex-row items-center border-2 border-black bg-secondary rounded-2xl">
				<TextInput
					className={`h-16 ${title === 'Password' ? "w-48" : "w-60"} text-white text-lg p-4 font-russoRegular`}
					value={value}
					placeholder={placeholder}
					placeholderTextColor="lightgrey"
					onChangeText={handleChangeText}
					secureTextEntry={title === 'Password' && !showPassword}></TextInput>
				

				{title === 'Password' && (
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						{/* <Image
							source={!showPassword ? require('../img/eye.png') : require('../img/eye-closed.png')}
							className="w-10 h-10"
							resizeMode="contain"
						/> */}
						 <FontAwesome name={!showPassword ? "eye" : "eye-slash"} size={30} color="#fff" />
					</TouchableOpacity>
				)}
				
			</View>
		</View>
	)
}

export default FormField;
