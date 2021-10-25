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
import {image_Ellipse_29_link} from './assets/imageLinks.js'
import {image_Ellipse_28_link} from './assets/imageLinks.js'
import {image_Ellipse_30_link} from './assets/imageLinks.js'
import {image_Service_Care_Trasparent_2_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_3_2_link} from './assets/imageLinks.js'
import {image_Ellipse_25_link} from './assets/imageLinks.js'
const Page_Chats  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
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
						<Svg style={{height: 16, width: 17}} viewBox = "0 0 17 16">
							<Path fill = {"white"}     d = "M5.51351 9H4.13514C3.88128 9 3.67568 9.22375 3.67568 9.5V15.5C3.67568 15.7762 3.88128 16 4.13514 16H5.51351C5.76736 16 5.97297 15.7762 5.97297 15.5V9.5C5.97297 9.22375 5.76736 9 5.51351 9ZM1.83784 12H0.459459C0.205608 12 0 12.2238 0 12.5V15.5C0 15.7762 0.205608 16 0.459459 16H1.83784C2.09169 16 2.2973 15.7762 2.2973 15.5V12.5C2.2973 12.2238 2.09169 12 1.83784 12ZM9.18919 6H7.81081C7.55696 6 7.35135 6.22375 7.35135 6.5V15.5C7.35135 15.7762 7.55696 16 7.81081 16H9.18919C9.44304 16 9.64865 15.7762 9.64865 15.5V6.5C9.64865 6.22375 9.44304 6 9.18919 6ZM12.8649 3H11.4865C11.2326 3 11.027 3.22375 11.027 3.5V15.5C11.027 15.7762 11.2326 16 11.4865 16H12.8649C13.1187 16 13.3243 15.7762 13.3243 15.5V3.5C13.3243 3.22375 13.1187 3 12.8649 3ZM16.5405 0H15.1622C14.9083 0 14.7027 0.22375 14.7027 0.5V15.5C14.7027 15.7762 14.9083 16 15.1622 16H16.5405C16.7944 16 17 15.7762 17 15.5V0.5C17 0.22375 16.7944 0 16.5405 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style7}    >
					<View style = {noneModeStyles.style8}   >
						<Svg style={{height: 10, width: 18}} viewBox = "0 0 18 10">
							<Path fill = {"white"}     d = "M15.3 2V4H16.2V6H15.3V8H1.8V2H15.3ZM15.75 0H1.35C0.604406 0 0 0.671562 0 1.5V8.5C0 9.32844 0.604406 10 1.35 10H15.75C16.4956 10 17.1 9.32844 17.1 8.5V8H17.325C17.6978 8 18 7.66422 18 7.25V2.75C18 2.33578 17.6978 2 17.325 2H17.1V1.5C17.1 0.671562 16.4956 0 15.75 0ZM11.7 3H2.7V7H11.7V3Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._9_45}   >
					9:45
				</Text>
			</View>
			<Text style = {noneModeStyles._FEED}   >
				FEED
			</Text>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<Text style = {noneModeStyles._Chats}   >
				Chats
			</Text>
			<View style = {noneModeStyles._Ellipse_29_container}    >
				<View style = {noneModeStyles._Ellipse_29}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_29_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_28_container}    >
				<View style = {noneModeStyles._Ellipse_28}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_28_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_30_container}    >
				<View style = {noneModeStyles._Ellipse_30}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_30_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Recent_Chats}   >
				Recent Chats
			</Text>
			<Text style = {noneModeStyles._Amelia_Free}   >
				Amelia Free
			</Text>
			<Text style = {noneModeStyles._Doe}   >
				Doe
			</Text>
			<Text style = {noneModeStyles._where_are_you}   >
				where are you
			</Text>
			<Text style = {noneModeStyles._Are_you_looking_for_meh_}   >
				Are you looking for meh?
			</Text>
			<Text style = {noneModeStyles._Hello}   >
				Hello
			</Text>
			<Text style = {noneModeStyles._John}   >
				John
			</Text>
			<View style = {noneModeStyles._Group_5024}    >
				<Text style = {noneModeStyles._Yeah_that_s_great}   >
					Yeah that’s great
				</Text>
				<Text style = {noneModeStyles._Jane_cooper}   >
					Jane cooper
				</Text>
				<View style = {noneModeStyles._Group_5021}    >
					<View style = {noneModeStyles._Ellipse_10}    >
					</View>
					<Text style = {noneModeStyles._1}   >
						1
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5022}    >
				<View style = {noneModeStyles._Ellipse_10_2}    >
				</View>
				<Text style = {noneModeStyles._1_2}   >
					1
				</Text>
			</View>
			<View style = {noneModeStyles._Group_5023}    >
				<View style = {noneModeStyles._Ellipse_10_3}    >
				</View>
				<Text style = {noneModeStyles._6}   >
					6
				</Text>
			</View>
			<View style = {noneModeStyles._Nav_Bar}    >
				<View style = {noneModeStyles._Group_5080}    >
					<View style = {noneModeStyles._Rectangle_1031}    >
						<View style = {noneModeStyles._Rectangle_1031_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._heroicons_solid_chat_alt_2}    >
						<View style = {noneModeStyles._Group}    >
							<View style = {noneModeStyles.style44}    >
								<View style = {noneModeStyles.style45}   >
									<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
										<Path fill = {"#FF692F"}     d = "M0 3.27273C0 2.40475 0.344804 1.57231 0.958559 0.958559C1.57231 0.344804 2.40475 0 3.27273 0H14.7273C15.5952 0 16.4277 0.344804 17.0414 0.958559C17.6552 1.57231 18 2.40475 18 3.27273V9.81818C18 10.6862 17.6552 11.5186 17.0414 12.1323C16.4277 12.7461 15.5952 13.0909 14.7273 13.0909H11.4545L6.54545 18V13.0909H3.27273C2.40475 13.0909 1.57231 12.7461 0.958559 12.1323C0.344804 11.5186 0 10.6862 0 9.81818V3.27273Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style46}    >
								<View style = {noneModeStyles.style47}   >
									<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
										<Path fill = {"#FF692F"}     d = "M11.1701 0V3.21996C11.1701 4.92794 10.4916 6.56596 9.28384 7.77368C8.07612 8.9814 6.4381 9.65989 4.73013 9.65989H2.84323L0 12.5047C0.450795 12.7446 0.964379 12.8799 1.51016 12.8799H4.73013L9.56007 17.7098V12.8799H12.78C13.634 12.8799 14.453 12.5406 15.0569 11.9367C15.6608 11.3329 16 10.5139 16 9.65989V3.21996C16 2.36598 15.6608 1.54697 15.0569 0.943105C14.453 0.339245 13.634 0 12.78 0H11.1701Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._zmdi_home}    >
						<View style = {noneModeStyles.style49}    >
							<View style = {noneModeStyles.style50}   >
								<Svg style={{height: 23, width: 27}} viewBox = "0 0 27 23">
									<Path fill = {"black"}     d = "M10.8126 22.9532H5.05855C4.4998 22.9532 4.04684 22.5002 4.04684 21.9415V12.1405H0L13.4684 0L27 12.1405H22.9532V21.9415C22.9532 22.5002 22.5002 22.9532 21.9415 22.9532H16.1874V14.8595H10.8126V22.9532Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._eva_book_fill}    >
						<View style = {noneModeStyles.style52}    >
							<View style = {noneModeStyles.style53}   >
								<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
									<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._mdi_dog_side}    >
							<View style = {noneModeStyles.style55}    >
								<View style = {noneModeStyles.style56}   >
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
			<View style = {noneModeStyles._dashicons_menu_alt3}    >
				<View style = {noneModeStyles.style64}    >
					<View style = {noneModeStyles.style65}   >
						<Svg style={{height: 20, width: 26}} viewBox = "0 0 26 20">
							<Path fill = {"black"}     d = "M24.05 3.9C25.127 3.9 26 3.02696 26 1.95C26 0.873044 25.127 0 24.05 0H1.95C0.873046 0 0 0.873044 0 1.95C0 3.02696 0.873045 3.9 1.95 3.9H24.05ZM24.05 11.7C25.127 11.7 26 10.827 26 9.75C26 8.67304 25.127 7.8 24.05 7.8H1.95C0.873046 7.8 0 8.67304 0 9.75C0 10.827 0.873045 11.7 1.95 11.7H24.05ZM24.05 19.5C25.127 19.5 26 18.627 26 17.55C26 16.473 25.127 15.6 24.05 15.6H1.95C0.873046 15.6 0 16.473 0 17.55C0 18.627 0.873045 19.5 1.95 19.5H24.05Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_25_container}    >
				<View style = {noneModeStyles._Ellipse_25}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_25_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Chats

const noneModeStyles = StyleSheet.create({
_page3: {
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
		{translateX: 336},
		{translateY: 8},
	],
	},
style6: {
	},
style7: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 11},
	],
	},
style8: {
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
_FEED: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 13,
	top: 52,
	color: "rgb(255, 255, 255)",
	fontSize: 28,
	fontWeight: "400",
	fontFamily: "Roboto",
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
_Chats: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 171,
	top: 48,
	color: "rgb(255, 137, 95)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Ellipse_29_container: {
	width: 70,
	height: 70,
	position: "absolute",
	left: 15,
	top: 320,
	},
_Ellipse_29: {
	width: "100%",
	height: "100%",
	},
_Ellipse_28_container: {
	width: 70,
	height: 70,
	position: "absolute",
	left: 15,
	top: 240,
	},
_Ellipse_28: {
	width: "100%",
	height: "100%",
	},
_Ellipse_30_container: {
	width: 70,
	height: 70,
	position: "absolute",
	left: 15,
	top: 400,
	},
_Ellipse_30: {
	width: "100%",
	height: "100%",
	},
_Recent_Chats: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 15,
	top: 121,
	color: "rgb(118, 118, 118)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Amelia_Free: {
	width: 153,
	height: "auto",
	position: "absolute",
	left: 103,
	top: 409,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Doe: {
	width: 153,
	height: "auto",
	position: "absolute",
	left: 103,
	top: 326,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_where_are_you: {
	width: 139,
	height: "auto",
	position: "absolute",
	left: 103,
	top: 445,
	color: "rgb(115, 115, 115)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Are_you_looking_for_meh_: {
	width: 186,
	height: "auto",
	position: "absolute",
	left: 103,
	top: 362,
	color: "rgb(115, 115, 115)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Hello: {
	width: 48,
	height: "auto",
	position: "absolute",
	left: 103,
	top: 279,
	color: "rgb(115, 115, 115)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_John: {
	width: 60,
	height: "auto",
	position: "absolute",
	left: 103,
	top: 243,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5024: {
	width: 287,
	height: 57,
	position: "absolute",
	left: 103,
	top: 169,
	},
_Yeah_that_s_great: {
	width: 147,
	height: "auto",
	position: "absolute",
	left: 0,
	top: 36,
	color: "rgb(115, 115, 115)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Jane_cooper: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5021: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 265,
	top: 7,
	},
_Ellipse_10: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 0,
	top: 0,
	},
_1: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 7,
	top: 3,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Group_5022: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 368,
	top: 250,
	},
_Ellipse_10_2: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 0,
	top: 0,
	},
_1_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 7,
	top: 3,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Group_5023: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 368,
	top: 333,
	},
_Ellipse_10_3: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 0,
	top: 0,
	},
_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 7,
	top: 3,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
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
	width: 32,
	height: 32,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 20,
	top: 14,
	},
_Group: {
	width: 25.6,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 3.2},
		{translateY: 4.79999},
	],
	},
style44: {
	position: "absolute",
	},
style45: {
	},
style46: {
	position: "absolute",
	transform: [
		{translateX: 9.6992},
		{translateY: 6.39999},
	],
	},
style47: {
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
style49: {
	position: "absolute",
	},
style50: {
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
style52: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
style53: {
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
style55: {
	position: "absolute",
	transform: [
		{translateX: 0.833313},
		{translateY: 1.25},
	],
	},
style56: {
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
_dashicons_menu_alt3: {
	width: 26,
	height: 26,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 24,
	top: 53,
	},
style64: {
	position: "absolute",
	transform: [
		{translateY: 2.60001},
	],
	},
style65: {
	},
_Ellipse_25_container: {
	width: 70,
	height: 70,
	position: "absolute",
	left: 15,
	top: 160,
	},
_Ellipse_25: {
	width: "100%",
	height: "100%",
	},
})

