import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
	return (
		<TouchableOpacity
			className={`bg-primary rounded-xl min-h-[48px] w-36 justify-center items-center ml-auto mr-auto ${containerStyles} ${
				isLoading ? 'opacity-50' : ''
			}`}
			disabled={isLoading}>
			<Text className={`font-russoRegular text-xl ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	)
}

export default CustomButton
