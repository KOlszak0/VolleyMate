import { Text, View } from 'react-native'
import {Link} from 'expo-router'

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl color-primary font-russoRegular">VolleyMate</Text>
			<Link href="/profile" style={{color: 'blue'}}>Go to profile</Link>
		</View>
	)
}

