import { Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

export default function AppTabs() {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarStyle: { backgroundColor: '#284776', height: 90 },
					tabBarInactiveTintColor: '#FFB200',
					tabBarActiveTintColor: '#FFB200',
					tabBarShowLabel: false,
				}}>
				<Tabs.Screen
					name="profile"
					options={{
						title: 'Profile',
						headerShown: false,
						tabBarIcon: ({ color, size, focused }) => (
							<View
								className={`justify-center items-center w-20 h-20 mb-20 rounded-full ${
									focused ? 'border-2 border-[#FFB200]' : ''
								} bg-dark`}>
								<FontAwesome name="user" color={color} size={45} />
							</View>
						),
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
						title: 'Search',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<View
								className={`display-flex justify-center items-center w-24 h-24 mb-24 bg-dark rounded-full ${
									focused ? 'border-2 border-[#FFB200]' : ''
								} bg-dark`}>
								<FontAwesome name="search" color={color} size={45} />
							</View>
						),
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: 'Settings',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<View
								className={`justify-center items-center w-20 h-20 mb-20 rounded-full ${
									focused ? 'border-2 border-[#FFB200]' : ''
								} bg-dark`}>
								<FontAwesome name="cog" color={color} size={45} />
							</View>
						),
					}}
				/>
			</Tabs>
			<Text className="pb-2 text-center bg-secondary text-white font-russoRegular"> VolleyMate</Text>
		</>
	)
}
