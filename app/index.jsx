import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

function onBallPress() {

}

export default function App() {
	return (
		<SafeAreaView className="bg-primary h-full ">
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className="w-full justify-center items-center h-[85vh] px-4 py-2">
					<Text className="font-russoRegular text-5xl text-secondary">
						Volley
						<Text className="text-white">Mate</Text>
					</Text>
					<Text className="font-russoRegular text-white">Find people to play</Text>
					<TouchableOpacity onPress={() => router.push('/sign-in')} className="w-[100%] justify-center items-center">
						<Image source={require('../img/volleyball-color.png')} className="w-[80%] h-[70%]" resizeMode="contain" />
					</TouchableOpacity>
					<Text className="font-russoRegular text-secondary">Tap at the ball to continue</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
