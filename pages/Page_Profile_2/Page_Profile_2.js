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
import {image_Service_Care_Trasparent_2_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_3_2_link} from './assets/imageLinks.js'
const Page_Profile_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._Rectangle_1}    >
				</View>
				<View style = {noneModeStyles.style3}    >
					<View style = {noneModeStyles.style4}   >
						<Svg style={{height: 14, width: 17}} viewBox = "0 0 17 14">
							<Path fill = {"white"}     d = "M16.8648 3.84C12.1587 -1.28094 4.8394 -1.27906 0.135181 3.84C-0.0417258 4.0325 -0.0451789 4.35844 0.125884 4.55813L1.03538 5.61969C1.19848 5.81031 1.46092 5.81438 1.63038 5.63156C5.50639 1.45406 11.493 1.45312 15.3698 5.63156C15.5393 5.81438 15.8018 5.81 15.9648 5.61969L16.8743 4.55813C17.0451 4.35844 17.0417 4.0325 16.8648 3.84ZM8.49998 10C7.561 10 6.79998 10.8953 6.79998 12C6.79998 13.1047 7.561 14 8.49998 14C9.43897 14 10.2 13.1047 10.2 12C10.2 10.8953 9.43897 10 8.49998 10ZM13.8834 7.38781C10.8218 4.2025 6.1747 4.20594 3.11656 7.38781C2.93328 7.57844 2.92743 7.90937 3.10142 8.11125L4.01623 9.17344C4.1756 9.35844 4.4322 9.37094 4.60193 9.19844C6.83186 6.93062 10.1732 6.93563 12.3978 9.19844C12.5675 9.37094 12.8241 9.35875 12.9835 9.17344L13.8983 8.11125C14.0725 7.90937 14.0664 7.57812 13.8834 7.38781Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style5}    >
					<View style = {noneModeStyles.style6}   >
						<Svg style={{height: 10, width: 18}} viewBox = "0 0 18 10">
							<Path fill = {"white"}     d = "M15.3 2V4H16.2V6H15.3V8H1.8V2H15.3ZM15.75 0H1.35C0.604406 0 0 0.671562 0 1.5V8.5C0 9.32844 0.604406 10 1.35 10H15.75C16.4956 10 17.1 9.32844 17.1 8.5V8H17.325C17.6978 8 18 7.66422 18 7.25V2.75C18 2.33578 17.6978 2 17.325 2H17.1V1.5C17.1 0.671562 16.4956 0 15.75 0ZM11.7 3H2.7V7H11.7V3Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._9_45}   >
					9:45
				</Text>
			</View>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<View style = {noneModeStyles._Rectangle_21}    >
			</View>
			<View style = {noneModeStyles._Rectangle_22}    >
			</View>
			<Text style = {noneModeStyles._Profiles}   >
				Profiles
			</Text>
			<Text style = {noneModeStyles._Personal_Profile}   >
				Personal Profile
			</Text>
			<Text style = {noneModeStyles._Register_a_Mobile_to_get_started}   >
				Register a Mobile to get started
			</Text>
			<Text style = {noneModeStyles._Mobile_Profile}   >
				Mobile Profile
			</Text>
			<Text style = {noneModeStyles._Mobile}   >
				Mobile
			</Text>
			<Text style = {noneModeStyles.__}   >
				+
			</Text>
			<View style = {noneModeStyles._Nav_Bar}    >
				<View style = {noneModeStyles._Group_5080}    >
					<View style = {noneModeStyles._Rectangle_1031}    >
						<View style = {noneModeStyles._Rectangle_1031_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._heroicons_solid_chat_alt_2}    >
						<View style = {noneModeStyles._Group}    >
							<View style = {noneModeStyles.style23}    >
								<View style = {noneModeStyles.style24}   >
									<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
										<Path fill = {"black"}     d = "M0 2.54545C0 1.87036 0.268181 1.22291 0.745546 0.745546C1.22291 0.268181 1.87036 0 2.54545 0H11.4545C12.1296 0 12.7771 0.268181 13.2544 0.745546C13.7318 1.22291 14 1.87036 14 2.54545V7.63636C14 8.31145 13.7318 8.9589 13.2544 9.43626C12.7771 9.91363 12.1296 10.1818 11.4545 10.1818H8.90908L5.0909 14V10.1818H2.54545C1.87036 10.1818 1.22291 9.91363 0.745546 9.43626C0.268181 8.9589 0 8.31145 0 7.63636V2.54545Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style25}    >
								<View style = {noneModeStyles.style26}   >
									<Svg style={{height: 14, width: 12}} viewBox = "0 0 12 14">
										<Path fill = {"black"}     d = "M8.3775 0V2.41496C8.3775 3.69594 7.86863 4.92445 6.96285 5.83023C6.05706 6.73602 4.82855 7.24488 3.54758 7.24488H2.13241L0 9.3785C0.338095 9.55841 0.72328 9.65984 1.13262 9.65984H3.54758L7.17002 13.2823V9.65984H9.58498C10.2255 9.65984 10.8397 9.40541 11.2926 8.95252C11.7455 8.49962 11.9999 7.88537 11.9999 7.24488V2.41496C11.9999 1.77447 11.7455 1.16022 11.2926 0.707325C10.8397 0.254433 10.2255 0 9.58498 0H8.3775Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._zmdi_home}    >
						<View style = {noneModeStyles.style28}    >
							<View style = {noneModeStyles.style29}   >
								<Svg style={{height: 23, width: 27}} viewBox = "0 0 27 23">
									<Path fill = {"black"}     d = "M10.8126 22.9532H5.05855C4.4998 22.9532 4.04684 22.5002 4.04684 21.9415V12.1405H0L13.4684 0L27 12.1405H22.9532V21.9415C22.9532 22.5002 22.5002 22.9532 21.9415 22.9532H16.1874V14.8595H10.8126V22.9532Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._eva_book_fill}    >
						<View style = {noneModeStyles.style31}    >
							<View style = {noneModeStyles.style32}   >
								<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
									<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._mdi_dog_side}    >
							<View style = {noneModeStyles.style34}    >
								<View style = {noneModeStyles.style35}   >
									<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
										<Path fill = {"white"}     d = "M6.98995 0.296435C6.98995 0.0328673 6.67129 -0.0991275 6.48492 0.0872427L5.80659 0.765577C5.53587 1.03629 5.53587 1.4752 5.80659 1.74591L6.36238 2.3017C6.47791 2.41724 6.66523 2.41724 6.78076 2.3017C6.8963 2.18617 7.08361 2.18617 7.19915 2.3017C7.31468 2.41724 7.502 2.41724 7.61753 2.3017L7.82672 2.09251C8.05779 1.86145 8.05779 1.48681 7.82672 1.25574L7.0766 0.505626C7.02112 0.450145 6.98995 0.374897 6.98995 0.296435ZM0.505002 1.46494C0.389469 1.3494 0.202152 1.3494 0.0866186 1.46494C-0.028915 1.58047 -0.028915 1.76779 0.0866186 1.88332L0.838478 2.63518C1.02679 2.82349 1.13258 3.07889 1.13258 3.3452V3.88859C1.13258 4.07801 1.05733 4.25968 0.923387 4.39362C0.789443 4.52757 0.714195 4.70923 0.714195 4.89866V6.69474C0.714195 6.9258 0.901511 7.11312 1.13258 7.11312C1.36365 7.11312 1.55096 6.9258 1.55096 6.69474V6.14968C1.55096 5.95947 1.60726 5.77351 1.71277 5.61525L2.08964 5.04995C2.27587 4.77061 2.58939 4.60282 2.92512 4.60282H4.3123C4.86686 4.60282 5.31642 5.05238 5.31642 5.60694V6.69474C5.31642 6.9258 5.50374 7.11312 5.7348 7.11312C5.96587 7.11312 6.15319 6.9258 6.15319 6.69474V3.3452C6.15319 3.07889 6.0474 2.82349 5.85909 2.63518L5.19388 1.96997C5.03049 1.80658 4.76558 1.80658 4.60219 1.96997C4.52373 2.04843 4.41731 2.09251 4.30635 2.09251H1.47918C1.25725 2.09251 1.04442 2.00435 0.887495 1.84743L0.505002 1.46494Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Service_Care_Trasparent_2}    >
						<View style = {noneModeStyles._Service_Care_Trasparent_2_container}    >
							<View style = {noneModeStyles._Service_Care_Trasparent_2_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Service_Care_Trasparent_2_2_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Match_Heart_Transparent_3}    >
						<View style = {noneModeStyles._Match_Heart_Transparent_3_container}    >
							<View style = {noneModeStyles._Match_Heart_Transparent_3_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_3_2_link}}/>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Profile_2

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Group_1: {
	width: 414,
	height: 33,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_1: {
	width: 414,
	height: 33,
	backgroundColor: "rgb(90, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
style3: {
	position: "absolute",
	transform: [
		{translateX: 360},
		{translateY: 9},
	],
	},
style4: {
	},
style5: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 11},
	],
	},
style6: {
	},
_9_45: {
	width: 37,
	height: 15,
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 8},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "600",
	lineHeight: 15.0394,
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_6: {
	width: 414,
	height: 87,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 30,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Rectangle_21: {
	width: 352,
	height: 178,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 31,
	top: 146,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Rectangle_22: {
	width: 48,
	height: 48,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 309,
	top: 260,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Profiles: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 164,
	top: 38,
	color: "rgb(117, 117, 117)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Personal_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 83,
	color: "rgb(117, 117, 117)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "right",
	},
_Register_a_Mobile_to_get_started: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 89,
	top: 209,
	color: "rgb(117, 117, 117)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "right",
	},
_Mobile_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 272,
	top: 83,
	color: "rgb(255, 105, 47)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "right",
	},
_Mobile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 183,
	top: 155,
	color: "rgb(60, 60, 60)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
__: {
	width: 48,
	height: "auto",
	position: "absolute",
	left: 309,
	top: 248,
	color: "rgb(255, 255, 255)",
	fontSize: 48,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Nav_Bar: {
	width: 414,
	height: 60,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 836,
	},
_Group_5080: {
	width: 414,
	height: 60,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_1031: {
	width: 414,
	height: 60,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_1031_2: {
	width: 414,
	height: 60,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: -2
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 17,
	},
_heroicons_solid_chat_alt_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 24,
	top: 18,
	},
_Group: {
	width: 19.2,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 2.40002},
		{translateY: 3.60001},
	],
	},
style23: {
	position: "absolute",
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 7.27441},
		{translateY: 4.79999},
	],
	},
style26: {
	},
_zmdi_home: {
	width: 27,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 194,
	top: 18,
	},
style28: {
	position: "absolute",
	},
style29: {
	},
_eva_book_fill: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 18},
	],
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
style32: {
	},
_mdi_dog_side: {
	width: 10,
	height: 10,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 5},
	],
	},
style34: {
	position: "absolute",
	transform: [
		{translateX: 0.833374},
		{translateY: 1.25},
	],
	},
style35: {
	},
_Service_Care_Trasparent_2: {
	width: 29.7932,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 360,
	top: 18,
	},
_Service_Care_Trasparent_2_container: {
	width: 29.7932,
	height: 24,
	position: "absolute",
	},
_Service_Care_Trasparent_2_2: {
	width: "100%",
	height: "100%",
	},
_Match_Heart_Transparent_3: {
	width: 24.9231,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 109,
	top: 18,
	},
_Match_Heart_Transparent_3_container: {
	width: 24.9231,
	height: 24,
	position: "absolute",
	},
_Match_Heart_Transparent_3_2: {
	width: "100%",
	height: "100%",
	},
})

