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
import {image_Match_Heart_Transparent_1_link} from './assets/imageLinks.js'
import {image_Service_Care_Trasparent_2_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_3_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_1__2_link} from './assets/imageLinks.js'
const Page_dog  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
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
			<View style = {noneModeStyles._Group_7}    >
				<View style = {noneModeStyles._Rectangle_10}    >
				</View>
				<View style = {noneModeStyles._Group_4}    >
					<Text style = {noneModeStyles._Name}   >
						Name
					</Text>
					<Text style = {noneModeStyles._2_2_miles_away}   >
						2.2 miles away
					</Text>
					<View style = {noneModeStyles._icon_communication_location_on_24px}    >
					</View>
					<View style = {noneModeStyles._dog_hand}    >
						<View style = {noneModeStyles._mdi_bone}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_24}    >
					<View style = {noneModeStyles._icon_action_info_24px}    >
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._HotMobs}   >
				HotMobs
			</Text>
			<View style = {noneModeStyles._cross}    >
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
				<View style = {noneModeStyles.style22}    >
					<View style = {noneModeStyles.style23}   >
						<Svg style={{height: 25, width: 25}} viewBox = "0 0 25 25">
							<Path fill = {"black"}     d = "M24.4458 3.22987C25.1847 2.49099 25.1847 1.29303 24.4458 0.554153C23.707 -0.184726 22.509 -0.184726 21.7701 0.554153L12.5 9.82428L3.22987 0.554154C2.49099 -0.184725 1.29303 -0.184726 0.554153 0.554153C-0.184726 1.29303 -0.184726 2.49099 0.554153 3.22987L9.82428 12.5L0.554153 21.7701C-0.184726 22.509 -0.184726 23.707 0.554153 24.4458C1.29303 25.1847 2.49099 25.1847 3.22987 24.4458L12.5 15.1757L21.7701 24.4458C22.509 25.1847 23.707 25.1847 24.4458 24.4458C25.1847 23.707 25.1847 22.509 24.4458 21.7701L15.1757 12.5L24.4458 3.22987Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._dog_hand_2}    >
				<View style = {noneModeStyles._Ellipse_3}    >
				</View>
				<View style = {noneModeStyles._fa_solid_paw}    >
				</View>
			</View>
			<View style = {noneModeStyles._carbon_settings_adjust}    >
				<View style = {noneModeStyles.style28}    >
					<View style = {noneModeStyles.style29}   >
						<Svg style={{height: 8, width: 21}} viewBox = "0 0 21 8">
							<Path fill = {"black"}     d = "M21 3H17.925C17.55 1.275 16.05 0 14.25 0C12.45 0 10.95 1.275 10.575 3H0V4.5H10.575C10.95 6.225 12.45 7.5 14.25 7.5C16.05 7.5 17.55 6.225 17.925 4.5H21V3ZM14.25 6C12.975 6 12 5.025 12 3.75C12 2.475 12.975 1.5 14.25 1.5C15.525 1.5 16.5 2.475 16.5 3.75C16.5 5.025 15.525 6 14.25 6Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style30}    >
					<View style = {noneModeStyles.style31}   >
						<Svg style={{height: 8, width: 21}} viewBox = "0 0 21 8">
							<Path fill = {"black"}     d = "M0 4.5H3.075C3.45 6.225 4.95 7.5 6.75 7.5C8.55 7.5 10.05 6.225 10.425 4.5H21V3H10.425C10.05 1.275 8.55 0 6.75 0C4.95 0 3.45 1.275 3.075 3H0V4.5ZM6.75 1.5C8.025 1.5 9 2.475 9 3.75C9 5.025 8.025 6 6.75 6C5.475 6 4.5 5.025 4.5 3.75C4.5 2.475 5.475 1.5 6.75 1.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._clarity_notification_solid}    >
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"#060709"}     d = "M20 17.6879L19.7718 17.4866C19.1244 16.9098 18.5578 16.2484 18.0872 15.5201C17.5733 14.5151 17.2653 13.4176 17.1812 12.2919V8.97651C17.1856 7.20846 16.5443 5.49965 15.3777 4.17112C14.211 2.8426 12.5994 1.98581 10.8456 1.76174V0.895973C10.8456 0.658346 10.7512 0.430452 10.5832 0.262425C10.4152 0.094397 10.1873 0 9.94966 0C9.71204 0 9.48414 0.094397 9.31611 0.262425C9.14809 0.430452 9.05369 0.658346 9.05369 0.895973V1.77517C7.31561 2.01539 5.72347 2.87735 4.57217 4.20141C3.42086 5.52547 2.78841 7.22191 2.79195 8.97651V12.2919C2.70789 13.4176 2.39985 14.5151 1.88591 15.5201C1.42341 16.2465 0.865902 16.9079 0.228188 17.4866L0 17.6879V19.5805H20V17.6879Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style35}    >
					<View style = {noneModeStyles.style36}   >
						<Svg style={{height: 2, width: 4}} viewBox = "0 0 4 2">
							<Path fill = {"#060709"}     d = "M0 0C0.0668126 0.482954 0.306126 0.92542 0.673743 1.24568C1.04136 1.56594 1.51245 1.74236 2 1.74236C2.48755 1.74236 2.95864 1.56594 3.32626 1.24568C3.69388 0.92542 3.93319 0.482954 4 0H0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Match_Heart_Transparent_1_container}    >
				<View style = {noneModeStyles._Match_Heart_Transparent_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._dashicons_menu_alt3}    >
				<View style = {noneModeStyles.style40}    >
					<View style = {noneModeStyles.style41}   >
						<Svg style={{height: 20, width: 26}} viewBox = "0 0 26 20">
							<Path fill = {"black"}     d = "M24.05 3.9C25.127 3.9 26 3.02696 26 1.95C26 0.873044 25.127 0 24.05 0H1.95C0.873046 0 0 0.873044 0 1.95C0 3.02696 0.873045 3.9 1.95 3.9H24.05ZM24.05 11.7C25.127 11.7 26 10.827 26 9.75C26 8.67304 25.127 7.8 24.05 7.8H1.95C0.873046 7.8 0 8.67304 0 9.75C0 10.827 0.873045 11.7 1.95 11.7H24.05ZM24.05 19.5C25.127 19.5 26 18.627 26 17.55C26 16.473 25.127 15.6 24.05 15.6H1.95C0.873046 15.6 0 16.473 0 17.55C0 18.627 0.873045 19.5 1.95 19.5H24.05Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Nav_Bar}    >
				<View style = {noneModeStyles._Group_5080}    >
					<View style = {noneModeStyles._Rectangle_1031}    >
						<View style = {noneModeStyles._Rectangle_1031_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._heroicons_solid_chat_alt_2}    >
						<View style = {noneModeStyles._Group}    >
							<View style = {noneModeStyles.style48}    >
								<View style = {noneModeStyles.style49}   >
									<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
										<Path fill = {"black"}     d = "M0 2.54545C0 1.87036 0.268181 1.22291 0.745546 0.745546C1.22291 0.268181 1.87036 0 2.54545 0H11.4545C12.1296 0 12.7771 0.268181 13.2544 0.745546C13.7318 1.22291 14 1.87036 14 2.54545V7.63636C14 8.31145 13.7318 8.9589 13.2544 9.43626C12.7771 9.91363 12.1296 10.1818 11.4545 10.1818H8.90908L5.0909 14V10.1818H2.54545C1.87036 10.1818 1.22291 9.91363 0.745546 9.43626C0.268181 8.9589 0 8.31145 0 7.63636V2.54545Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style50}    >
								<View style = {noneModeStyles.style51}   >
									<Svg style={{height: 14, width: 12}} viewBox = "0 0 12 14">
										<Path fill = {"black"}     d = "M8.37754 0V2.41497C8.37754 3.69595 7.86867 4.92447 6.96288 5.83026C6.05709 6.73605 4.82858 7.24492 3.5476 7.24492H2.13242L0 9.37855C0.338096 9.55846 0.723284 9.65989 1.13262 9.65989H3.5476L7.17006 13.2824V9.65989H9.58503C10.2255 9.65989 10.8398 9.40546 11.2927 8.95256C11.7456 8.49967 12 7.88541 12 7.24492V2.41497C12 1.77448 11.7456 1.16022 11.2927 0.707329C10.8398 0.254434 10.2255 0 9.58503 0H8.37754Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._zmdi_home}    >
						<View style = {noneModeStyles.style53}    >
							<View style = {noneModeStyles.style54}   >
								<Svg style={{height: 23, width: 27}} viewBox = "0 0 27 23">
									<Path fill = {"black"}     d = "M10.8126 22.9532H5.05855C4.4998 22.9532 4.04684 22.5002 4.04684 21.9415V12.1405H0L13.4684 0L27 12.1405H22.9532V21.9415C22.9532 22.5002 22.5002 22.9532 21.9415 22.9532H16.1874V14.8595H10.8126V22.9532Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._eva_book_fill}    >
						<View style = {noneModeStyles.style56}    >
							<View style = {noneModeStyles.style57}   >
								<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
									<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._mdi_dog_side}    >
							<View style = {noneModeStyles.style59}    >
								<View style = {noneModeStyles.style60}   >
									<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
										<Path fill = {"white"}     d = "M6.98993 0.296432C6.98993 0.0328671 6.67127 -0.0991268 6.4849 0.087242L5.80657 0.765571C5.53586 1.03628 5.53586 1.47519 5.80657 1.7459L6.36236 2.30169C6.47789 2.41722 6.66521 2.41722 6.78074 2.30169C6.89627 2.18615 7.08359 2.18615 7.19912 2.30169C7.31465 2.41722 7.50197 2.41722 7.6175 2.30169L7.82669 2.0925C8.05776 1.86143 8.05776 1.4868 7.82669 1.25573L7.07658 0.505623C7.0211 0.450142 6.98993 0.374894 6.98993 0.296432ZM0.505029 1.46492C0.389497 1.34939 0.202181 1.34939 0.0866486 1.46492C-0.0288841 1.58046 -0.0288841 1.76777 0.0866485 1.88331L0.838503 2.63516C1.02681 2.82347 1.1326 3.07887 1.1326 3.34518V3.88856C1.1326 4.07798 1.05735 4.25965 0.92341 4.39359C0.789468 4.52753 0.71422 4.7092 0.71422 4.89862V6.69468C0.71422 6.92575 0.901535 7.11307 1.1326 7.11307C1.36367 7.11307 1.55098 6.92575 1.55098 6.69468V6.14963C1.55098 5.95942 1.60728 5.77347 1.71279 5.61521L2.08965 5.04991C2.27588 4.77057 2.5894 4.60278 2.92513 4.60278H4.31229C4.86685 4.60278 5.31641 5.05234 5.31641 5.60689V6.69468C5.31641 6.92575 5.50372 7.11307 5.73479 7.11307C5.96585 7.11307 6.15317 6.92575 6.15317 6.69468V3.34518C6.15317 3.07887 6.04738 2.82347 5.85907 2.63516L5.19387 1.96995C5.03048 1.80657 4.76558 1.80657 4.60219 1.96996C4.52373 2.04842 4.41731 2.0925 4.30635 2.0925H1.4792C1.25728 2.0925 1.04444 2.00434 0.887519 1.84741L0.505029 1.46492Z"/>
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
			<View style = {noneModeStyles._Match_Heart_Transparent_1__2_container}    >
				<View style = {noneModeStyles._Match_Heart_Transparent_1__2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1__2_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_dog

const noneModeStyles = StyleSheet.create({
_page7: {
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
	height: 72,
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
_Group_7: {
	width: 381,
	height: 588,
	position: "absolute",
	left: 17,
	top: 132,
	},
_Rectangle_10: {
	width: 381,
	height: 588,
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 30,
	},
_Group_4: {
	width: 111.417,
	height: 124.333,
	position: "absolute",
	left: 20,
	top: 439,
	},
_Name: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 35,
	fontWeight: "700",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_2_2_miles_away: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 18.4167,
	top: 107.167,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_icon_communication_location_on_24px: {
	width: 12.8333,
	height: 18.3333,
	position: "absolute",
	transform: [
		{translateY: 106},
	],
	},
_dog_hand: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 30,
	top: 72,
	},
_mdi_bone: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_24: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 337,
	top: 539,
	},
_icon_action_info_24px: {
	width: 24,
	height: 24,
	position: "absolute",
	},
_HotMobs: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 155,
	top: 48,
	color: "rgb(255, 105, 47)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_cross: {
	width: 58,
	height: 58,
	position: "absolute",
	left: 114,
	top: 745,
	},
_Ellipse_1: {
	width: 58,
	height: 58,
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 1,
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
style23: {
	},
_dog_hand_2: {
	width: 58,
	height: 58,
	position: "absolute",
	left: 242,
	top: 745,
	},
_Ellipse_3: {
	width: 58,
	height: 58,
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 15,
	},
_fa_solid_paw: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 17,
	top: 17,
	},
_carbon_settings_adjust: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 304,
	top: 54,
	},
style28: {
	position: "absolute",
	transform: [
		{translateX: 1.5},
		{translateY: 3},
	],
	},
style29: {
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 1.5},
		{translateY: 13.5},
	],
	},
style31: {
	},
_clarity_notification_solid: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 374,
	top: 54,
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 2.0332},
		{translateY: 1.18335},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 10.2132},
		{translateY: 21.9667},
	],
	},
style36: {
	},
_Match_Heart_Transparent_1_container: {
	width: 24.7273,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 338},
		{translateY: 54},
	],
	},
_Match_Heart_Transparent_1: {
	width: "100%",
	height: "100%",
	},
_dashicons_menu_alt3: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 24,
	top: 53,
	},
style40: {
	position: "absolute",
	transform: [
		{translateY: 2.60001},
	],
	},
style41: {
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
style48: {
	position: "absolute",
	},
style49: {
	},
style50: {
	position: "absolute",
	transform: [
		{translateX: 7.27441},
		{translateY: 4.79999},
	],
	},
style51: {
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
style53: {
	position: "absolute",
	},
style54: {
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
style56: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
style57: {
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
style59: {
	position: "absolute",
	transform: [
		{translateX: 0.833313},
		{translateY: 1.25},
	],
	},
style60: {
	},
_Service_Care_Trasparent_2: {
	width: 29.7931,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 360,
	top: 18,
	},
_Service_Care_Trasparent_2_container: {
	width: 29.7931,
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
_Match_Heart_Transparent_1__2_container: {
	width: 33.0323,
	height: 32,
	position: "absolute",
	left: 255,
	top: 758,
	},
_Match_Heart_Transparent_1__2: {
	width: "100%",
	height: "100%",
	},
})

