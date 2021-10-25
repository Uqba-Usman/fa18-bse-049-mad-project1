import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
const Page_SIGN__IN_  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<View style = {noneModeStyles._Signin}    >
				<View style = {noneModeStyles._Group_4979}    >
					<View style = {noneModeStyles._Rectangle_1}    >
					</View>
					<Text style = {noneModeStyles._Sign_In}   >
						Sign In
					</Text>
				</View>
			</View>
			<Text style = {noneModeStyles._Thankyou_for_registration_}   >
				Thankyou for registration!
			</Text>
			<View style = {noneModeStyles._Rectangle_12}    >
			</View>
			<View style = {noneModeStyles._Rectangle_13}    >
			</View>
			<Text style = {noneModeStyles._Email_or_username}   >
				Email or username 
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<Text style = {noneModeStyles._Forgot_Password_}   >
				Forgot Password?
			</Text>
			<Text style = {noneModeStyles._Don_t_have_an_account__Sign_Up_here}   >
				Don’t have an account? Sign Up here
			</Text>
			<View style = {noneModeStyles._Rectangle_1_2}    >
			</View>
			<View style = {noneModeStyles.style13}    >
				<View style = {noneModeStyles.style14}   >
					<Svg style={{height: 14, width: 17}} viewBox = "0 0 17 14">
						<Path fill = {"white"}     d = "M16.8648 3.84C12.1587 -1.28094 4.8394 -1.27906 0.135181 3.84C-0.0417258 4.0325 -0.0451789 4.35844 0.125884 4.55813L1.03538 5.61969C1.19848 5.81031 1.46092 5.81438 1.63038 5.63156C5.50639 1.45406 11.493 1.45312 15.3698 5.63156C15.5393 5.81438 15.8018 5.81 15.9648 5.61969L16.8743 4.55813C17.0451 4.35844 17.0417 4.0325 16.8648 3.84ZM8.49998 10C7.561 10 6.79998 10.8953 6.79998 12C6.79998 13.1047 7.561 14 8.49998 14C9.43897 14 10.2 13.1047 10.2 12C10.2 10.8953 9.43897 10 8.49998 10ZM13.8834 7.38781C10.8218 4.2025 6.1747 4.20594 3.11656 7.38781C2.93328 7.57844 2.92743 7.90937 3.10142 8.11125L4.01623 9.17344C4.1756 9.35844 4.4322 9.37094 4.60193 9.19844C6.83186 6.93062 10.1732 6.93563 12.3978 9.19844C12.5675 9.37094 12.8241 9.35875 12.9835 9.17344L13.8983 8.11125C14.0725 7.90937 14.0664 7.57812 13.8834 7.38781Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style15}    >
				<View style = {noneModeStyles.style16}   >
					<Svg style={{height: 10, width: 18}} viewBox = "0 0 18 10">
						<Path fill = {"white"}     d = "M15.3 2V4H16.2V6H15.3V8H1.8V2H15.3ZM15.75 0H1.35C0.604406 0 0 0.671562 0 1.5V8.5C0 9.32844 0.604406 10 1.35 10H15.75C16.4956 10 17.1 9.32844 17.1 8.5V8H17.325C17.6978 8 18 7.66422 18 7.25V2.75C18 2.33578 17.6978 2 17.325 2H17.1V1.5C17.1 0.671562 16.4956 0 15.75 0ZM11.7 3H2.7V7H11.7V3Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._9_45}   >
				9:45
			</Text>
			<View style = {noneModeStyles._fluent_eye_show_12_filled}    >
				<View style = {noneModeStyles._Group}    >
					<View style = {noneModeStyles.style20}    >
						<View style = {noneModeStyles.style21}   >
							<Svg style={{height: 7, width: 17}} viewBox = "0 0 17 7">
								<Path fill = {"#737373"}     d = "M1.64777 6.2189C1.57169 6.42661 1.41762 6.59647 1.21829 6.69238C1.01897 6.7883 0.790097 6.80271 0.580312 6.73256C0.370527 6.66241 0.196362 6.51323 0.0948227 6.31671C-0.00671642 6.12019 -0.0276265 5.89182 0.0365353 5.68012C0.0195391 5.73111 0.0365353 5.67842 0.0365353 5.67842C0.0668412 5.58487 0.102015 5.49297 0.141912 5.40309C0.209896 5.24162 0.310174 5.01897 0.447843 4.75553C0.72658 4.22865 1.16508 3.52671 1.80754 2.82477C3.11114 1.40558 5.24077 0 8.49044 0C11.7418 0 13.8714 1.40558 15.1716 2.82477C15.8658 3.58604 16.4287 4.45734 16.8373 5.40309C16.8713 5.48297 16.8967 5.54755 16.9137 5.59514C16.9205 5.60874 16.9375 5.69712 16.9545 5.7821C16.9698 5.86028 16.9834 5.93507 16.9885 5.94866C16.9885 5.94866 17.1313 6.51464 16.4073 6.75428C16.194 6.82549 15.9613 6.80931 15.76 6.70929C15.5586 6.60926 15.4051 6.43354 15.3331 6.2206V6.2155L15.3212 6.18831C15.2358 5.96998 15.1382 5.75662 15.0289 5.54925C14.7272 4.97916 14.3542 4.44973 13.919 3.97371C12.8822 2.84346 11.1877 1.69962 8.49044 1.69962C5.79314 1.69962 4.09862 2.84346 3.06186 3.97371C2.50054 4.58909 2.04407 5.29245 1.71066 6.05574C1.69282 6.0996 1.67582 6.1438 1.65967 6.18831L1.64777 6.2189Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style22}    >
						<View style = {noneModeStyles.style23}   >
							<Svg style={{height: 7, width: 7}} viewBox = "0 0 7 7">
								<Path fill = {"#737373"}     d = "M0 3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0C4.42826 0 5.3185 0.368749 5.97488 1.02513C6.63125 1.6815 7 2.57174 7 3.5C7 4.42826 6.63125 5.3185 5.97488 5.97488C5.3185 6.63125 4.42826 7 3.5 7C2.57174 7 1.6815 6.63125 1.02513 5.97488C0.368749 5.3185 0 4.42826 0 3.5Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Sign_in_to_continue_}   >
				Sign in to continue!
			</Text>
			<View style = {noneModeStyles._Rectangle_1021}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1022}    >
			</View>
			<Text style = {noneModeStyles._Login_with_Facebook}   >
				Login with Facebook
			</Text>
			<Text style = {noneModeStyles._OR}   >
				OR
			</Text>
			<Text style = {noneModeStyles._Login_with_google_}   >
				Login with google+
			</Text>
			<View style = {noneModeStyles._facebook_1}    >
				<View style = {noneModeStyles.style31}    >
					<View style = {noneModeStyles.style32}   >
						<Svg style={{height: 34, width: 34}} viewBox = "0 0 34 34">
							<Path fill = {"#4267B2"}     d = "M32.1232 6.00856e-08H1.8752C0.839417 0.000518859 -0.000259339 0.840713 6.00856e-08 1.87675V32.1248C0.000518859 33.1606 0.840713 34.0003 1.87675 34H32.1232C33.1595 34.0003 33.9997 33.1603 34 32.124C34 32.1238 34 32.1235 34 32.1232V1.8752C33.9995 0.839417 33.1593 -0.000259339 32.1232 6.00856e-08Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 29, width: 15}} viewBox = "0 0 15 29">
							<Path fill = {"white"}     d = "M9.74501 28.9141V15.7434H14.1851L14.8503 10.5882H9.74501V7.30486C9.74501 5.81572 10.1584 4.80105 12.2938 4.80105H15V0.202675C14.5292 0.140053 12.9138 0 11.0341 0C7.10946 0 4.4235 2.39468 4.4235 6.79428V10.5882H0V15.7434H4.4235V28.9141H9.74501Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._google_plus_logo_1}    >
				<View style = {noneModeStyles._Group_2}    >
					<View style = {noneModeStyles._google_plus}    >
						<View style = {noneModeStyles.style38}    >
							<View style = {noneModeStyles.style39}   >
								<Svg style={{height: 30, width: 29}} viewBox = "0 0 29 30">
									<Path fill = {"white"}     d = "M25.0633 12.6582V8.86076H22.5317V12.6582H18.7342V15.1899H22.5317V18.9873H25.0633V15.1899H28.8608V12.6582H25.0633ZM15.3165 16.962L13.924 15.9494C13.4177 15.5697 12.9114 15.0633 12.9114 14.1772C12.9114 13.2911 13.5443 12.5316 14.1772 12.1519C15.8228 10.8861 17.4684 9.49367 17.4684 6.70886C17.4684 4.05063 15.8228 2.53165 14.9367 1.77215H17.0886L18.6076 0H10.7595C5.18987 0 2.40506 3.5443 2.40506 7.34177C2.40506 10.2532 4.68355 13.4177 8.73418 13.4177H9.74684C9.62025 13.7975 9.24051 14.4304 9.24051 15.0633C9.24051 16.3291 9.74684 16.8354 10.3797 17.5949C8.6076 17.7215 5.31646 18.1013 2.91139 19.6203C0.632912 21.0127 0 22.9114 0 24.3038C0 27.2152 2.65823 30 8.35443 30C15.1899 30 18.4811 26.2025 18.4811 22.5317C18.481 19.8734 17.0886 18.481 15.3165 16.962ZM5.6962 5.44304C5.6962 2.65823 7.34177 1.39241 9.11392 1.39241C12.4051 1.39241 14.1772 5.82279 14.1772 8.35443C14.1772 11.6456 11.519 12.2785 10.5063 12.2785C7.34177 12.2785 5.6962 8.35443 5.6962 5.44304ZM10.2531 28.2278C6.0759 28.2278 3.41767 26.3291 3.41767 23.5443C3.41767 20.7594 5.94932 19.8734 6.70881 19.4936C8.35438 18.9873 10.5063 18.8607 10.886 18.8607C11.2658 18.8607 11.5189 18.8607 11.7721 18.8607C14.8101 21.0126 16.0759 21.8987 16.0759 23.924C16.0759 26.3291 13.6709 28.2278 10.2531 28.2278Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_SIGN__IN_

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 105, 47)",
	},
_Signin: {
	width: 139,
	height: 55,
	position: "absolute",
	left: 137,
	top: 426,
	},
_Group_4979: {
	width: 139,
	height: 55,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_1: {
	width: 139,
	height: 55,
	backgroundColor: "rgb(246, 246, 246)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 10,
	},
_Sign_In: {
	width: 139,
	height: "auto",
	position: "absolute",
	left: 0,
	top: 16,
	color: "rgb(255, 137, 91)",
	fontSize: 18,
	fontWeight: "700",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Thankyou_for_registration_: {
	width: 354,
	height: "auto",
	position: "absolute",
	left: 60,
	top: 83,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_12: {
	width: 295,
	height: 50,
	backgroundColor: "rgb(246, 246, 246)",
	position: "absolute",
	left: 60,
	top: 238,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 21,
	},
_Rectangle_13: {
	width: 295,
	height: 50,
	backgroundColor: "rgb(246, 246, 246)",
	position: "absolute",
	left: 60,
	top: 302,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 21,
	},
_Email_or_username: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 74,
	top: 253,
	color: "rgb(115, 115, 115)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 74,
	top: 317,
	color: "rgb(115, 115, 115)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Forgot_Password_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 231,
	top: 362,
	color: "rgb(234, 234, 234)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Don_t_have_an_account__Sign_Up_here: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 84,
	top: 736,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_1_2: {
	width: 414,
	height: 33,
	backgroundColor: "rgba(244, 68, 79, 0)",
	position: "absolute",
	left: 0,
	top: 4,
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 360},
		{translateY: 13},
	],
	},
style14: {
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 15},
	],
	},
style16: {
	},
_9_45: {
	width: 37,
	height: 15,
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 12},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "600",
	lineHeight: 15.0394,
	fontFamily: "Poppins",
	textAlign: "left",
	},
_fluent_eye_show_12_filled: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 326,
	top: 317,
	},
_Group: {
	width: 16.6704,
	height: 10,
	position: "absolute",
	transform: [
		{translateX: 1.67419},
		{translateY: 5},
	],
	},
style20: {
	position: "absolute",
	},
style21: {
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 4.99243},
		{translateY: 3.33334},
	],
	},
style23: {
	},
_Sign_in_to_continue_: {
	width: 295,
	height: "auto",
	position: "absolute",
	left: 60,
	top: 194,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_1021: {
	width: 295,
	height: 50,
	backgroundColor: "rgb(66, 103, 178)",
	position: "absolute",
	left: 60,
	top: 572,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 21,
	},
_Rectangle_1022: {
	width: 295,
	height: 50,
	backgroundColor: "rgb(187, 52, 0)",
	position: "absolute",
	left: 60,
	top: 632,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 21,
	},
_Login_with_Facebook: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 159,
	top: 586,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_OR: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 197,
	top: 514,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Login_with_google_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 159,
	top: 646,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_facebook_1: {
	width: 34,
	height: 34,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 110,
	top: 580,
	},
style31: {
	position: "absolute",
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 13.7461},
		{translateY: 5.13483},
	],
	},
style34: {
	},
_google_plus_logo_1: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 119,
	top: 642,
	},
_Group_2: {
	width: 28.8607,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 0.56958},
	],
	},
_google_plus: {
	width: 28.8607,
	height: 30,
	position: "absolute",
	},
style38: {
	position: "absolute",
	},
style39: {
	},
})

