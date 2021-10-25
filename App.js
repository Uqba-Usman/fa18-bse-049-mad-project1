import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_Profile_2 from "./pages/Page_Profile_2/Page_Profile_2.js";
import Page_Profile from "./pages/Page_Profile/Page_Profile.js";
import Page_Chats from "./pages/Page_Chats/Page_Chats.js";
import Page_Profile_3 from "./pages/Page_Profile_3/Page_Profile_3.js";
import Page_Match from "./pages/Page_Match/Page_Match.js";
import Page_DOGSTALK from "./pages/Page_DOGSTALK/Page_DOGSTALK.js";
import Page_dog from "./pages/Page_dog/Page_dog.js";
import Page_SIGN__IN_ from "./pages/Page_SIGN__IN_/Page_SIGN__IN_.js";
import Page_SIGN_up from "./pages/Page_SIGN_up/Page_SIGN_up.js";
import Page_splash from "./pages/Page_splash/Page_splash.js";
import Page_DOGSTALK_2 from "./pages/Page_DOGSTALK_2/Page_DOGSTALK_2.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_Profile_2StackNavigator = createStackNavigator();
const ScreenForPage_Profile_2 = () => {
	return (
		<Page_Profile_2StackNavigator.Navigator>
			<Page_Profile_2StackNavigator.Screen
				name = "Page_Profile_2"
				component = {Page_Profile_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Profile_2StackNavigator.Navigator>
	)
};
const Page_ProfileStackNavigator = createStackNavigator();
const ScreenForPage_Profile = () => {
	return (
		<Page_ProfileStackNavigator.Navigator>
			<Page_ProfileStackNavigator.Screen
				name = "Page_Profile"
				component = {Page_Profile}
				options = {{
					headerShown: false
				}}
			/>
		</Page_ProfileStackNavigator.Navigator>
	)
};
const Page_ChatsStackNavigator = createStackNavigator();
const ScreenForPage_Chats = () => {
	return (
		<Page_ChatsStackNavigator.Navigator>
			<Page_ChatsStackNavigator.Screen
				name = "Page_Chats"
				component = {Page_Chats}
				options = {{
					headerShown: false
				}}
			/>
		</Page_ChatsStackNavigator.Navigator>
	)
};
const Page_Profile_3StackNavigator = createStackNavigator();
const ScreenForPage_Profile_3 = () => {
	return (
		<Page_Profile_3StackNavigator.Navigator>
			<Page_Profile_3StackNavigator.Screen
				name = "Page_Profile_3"
				component = {Page_Profile_3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Profile_3StackNavigator.Navigator>
	)
};
const Page_MatchStackNavigator = createStackNavigator();
const ScreenForPage_Match = () => {
	return (
		<Page_MatchStackNavigator.Navigator>
			<Page_MatchStackNavigator.Screen
				name = "Page_Match"
				component = {Page_Match}
				options = {{
					headerShown: false
				}}
			/>
		</Page_MatchStackNavigator.Navigator>
	)
};
const Page_DOGSTALKStackNavigator = createStackNavigator();
const ScreenForPage_DOGSTALK = () => {
	return (
		<Page_DOGSTALKStackNavigator.Navigator>
			<Page_DOGSTALKStackNavigator.Screen
				name = "Page_DOGSTALK"
				component = {Page_DOGSTALK}
				options = {{
					headerShown: false
				}}
			/>
		</Page_DOGSTALKStackNavigator.Navigator>
	)
};
const Page_dogStackNavigator = createStackNavigator();
const ScreenForPage_dog = () => {
	return (
		<Page_dogStackNavigator.Navigator>
			<Page_dogStackNavigator.Screen
				name = "Page_dog"
				component = {Page_dog}
				options = {{
					headerShown: false
				}}
			/>
		</Page_dogStackNavigator.Navigator>
	)
};
const Page_SIGN__IN_StackNavigator = createStackNavigator();
const ScreenForPage_SIGN__IN_ = () => {
	return (
		<Page_SIGN__IN_StackNavigator.Navigator>
			<Page_SIGN__IN_StackNavigator.Screen
				name = "Page_SIGN__IN_"
				component = {Page_SIGN__IN_}
				options = {{
					headerShown: false
				}}
			/>
		</Page_SIGN__IN_StackNavigator.Navigator>
	)
};
const Page_SIGN_upStackNavigator = createStackNavigator();
const ScreenForPage_SIGN_up = () => {
	return (
		<Page_SIGN_upStackNavigator.Navigator>
			<Page_SIGN_upStackNavigator.Screen
				name = "Page_SIGN_up"
				component = {Page_SIGN_up}
				options = {{
					headerShown: false
				}}
			/>
		</Page_SIGN_upStackNavigator.Navigator>
	)
};
const Page_splashStackNavigator = createStackNavigator();
const ScreenForPage_splash = () => {
	return (
		<Page_splashStackNavigator.Navigator>
			<Page_splashStackNavigator.Screen
				name = "Page_splash"
				component = {Page_splash}
				options = {{
					headerShown: false
				}}
			/>
		</Page_splashStackNavigator.Navigator>
	)
};
const Page_DOGSTALK_2StackNavigator = createStackNavigator();
const ScreenForPage_DOGSTALK_2 = () => {
	return (
		<Page_DOGSTALK_2StackNavigator.Navigator>
			<Page_DOGSTALK_2StackNavigator.Screen
				name = "Page_DOGSTALK_2"
				component = {Page_DOGSTALK_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_DOGSTALK_2StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	const [isPage11Open, setIsPage11Open] = useState(false)
	const zIndexPage11 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Profile_2"
							component = {ScreenForPage_Profile_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Profile"
							component = {ScreenForPage_Profile}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Chats"
							component = {ScreenForPage_Chats}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Profile_3"
							component = {ScreenForPage_Profile_3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Match"
							component = {ScreenForPage_Match}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_DOGSTALK"
							component = {ScreenForPage_DOGSTALK}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_dog"
							component = {ScreenForPage_dog}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_SIGN__IN_"
							component = {ScreenForPage_SIGN__IN_}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_SIGN_up"
							component = {ScreenForPage_SIGN_up}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_splash"
							component = {ScreenForPage_splash}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_DOGSTALK_2"
							component = {ScreenForPage_DOGSTALK_2}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

