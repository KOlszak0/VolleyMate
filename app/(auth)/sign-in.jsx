import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton.jsx'
import { Link } from 'expo-router'

const SignIn = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	})

	const submit = () => {}
	const [isSubmitting, setIsSubmitting] = useState(false)

	return (
		<SafeAreaView className="bg-primary h-full ">
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className="w-full justify-start items-center h-[85vh] px-4 py-16">
					<Text className="font-russoRegular text-5xl text-secondary ">
						Volley
						<Text className="text-white">Mate</Text>
					</Text>
					<Text className="font-russoRegular text-white">Find people to play</Text>
					<View className="bg-white h-[100vh] w-[80vw] p-4 mt-20 rounded-xl">
						<FormField
							title="Email"
							value={form.email}
							handleChangeText={e => setForm({ ...form, email: e })}
							otherStyles="mt-7"
							placeholder="email"
							keyboardType="email-address"></FormField>

						<FormField
							title="Password"
							value={form.password}
							handleChangeText={e => setForm({ ...form, password: e })}
							otherStyles="mt-7"
							placeholder="password"></FormField>

						<CustomButton title="Log in" handlePress={submit} containerStyles="mt-8" isLoading={isSubmitting} />
						<View className="justify-center pt-5 flex-row gap-2">
							<Text className="">Don't have account?</Text>
							<Link className="text-primary font-bold" href={'/sign-up'}>
								Sign up!
							</Link>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SignIn
