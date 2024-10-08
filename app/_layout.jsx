import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] =useFonts({
        "RussoOne-Regular": require("../assets/fonts/RussoOne-Regular.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf")
    })

    useEffect(()=>{
        if(error) throw error

        if(fontsLoaded) SplashScreen.hideAsync()
    },[fontsLoaded, error])


    if(!fontsLoaded && !error) return null

	return (
		<Stack>
             <Stack.Screen name='index' options={{headerShown: false}}/>
             <Stack.Screen name='(auth)' options={{headerShown: false}}/>
             <Stack.Screen name='(tabs)' options={{headerShown: false}}/>

        </Stack>
	)
}

export default RootLayout
