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
const Page_Profile  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
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
			<View style = {noneModeStyles._icons8_user_90_1}    >
			</View>
			<View style = {noneModeStyles._fa_solid_paw}    >
			</View>
			<View style = {noneModeStyles._majesticons_menu}    >
			</View>
			<View style = {noneModeStyles._mdi_dog_service}    >
			</View>
			<View style = {noneModeStyles._eva_book_fill}    >
			</View>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<Text style = {noneModeStyles._Mobile_Profile}   >
				Mobile Profile
			</Text>
			<View style = {noneModeStyles._eva_arrow_back_fill}    >
				<View style = {noneModeStyles.style16}    >
					<View style = {noneModeStyles.style17}   >
						<Svg style={{height: 15, width: 16}} viewBox = "0 0 16 15">
							<Path fill = {"black"}     d = "M15 6.00125H3.14L6.77 1.64125C6.93974 1.43704 7.0214 1.17375 6.99702 0.909329C6.97264 0.644902 6.84422 0.400991 6.64 0.231252C6.43578 0.0615137 6.1725 -0.0201482 5.90808 0.0042315C5.64365 0.0286112 5.39974 0.157036 5.23 0.361252L0.23 6.36125C0.196361 6.40898 0.166279 6.45911 0.14 6.51125C0.14 6.56125 0.14 6.59125 0.0700002 6.64125C0.0246737 6.75591 0.000941121 6.87796 0 7.00125C0.000941121 7.12454 0.0246737 7.24659 0.0700002 7.36125C0.0700002 7.41125 0.0699999 7.44125 0.14 7.49125C0.166279 7.54339 0.196361 7.59353 0.23 7.64125L5.23 13.6413C5.32402 13.7541 5.44176 13.8449 5.57485 13.9071C5.70793 13.9694 5.85309 14.0015 6 14.0013C6.23365 14.0017 6.46009 13.9203 6.64 13.7713C6.74126 13.6873 6.82496 13.5842 6.88631 13.4679C6.94766 13.3515 6.98546 13.2242 6.99754 13.0932C7.00961 12.9622 6.99573 12.8302 6.95669 12.7046C6.91764 12.579 6.8542 12.4623 6.77 12.3613L3.14 8.00125H15C15.2652 8.00125 15.5196 7.8959 15.7071 7.70836C15.8946 7.52082 16 7.26647 16 7.00125C16 6.73604 15.8946 6.48168 15.7071 6.29415C15.5196 6.10661 15.2652 6.00125 15 6.00125Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Add_an_Image}   >
				Add an Image
			</Text>
			<View style = {noneModeStyles._Rectangle_1_2}    >
			</View>
			<View style = {noneModeStyles._Rectangle_22}    >
			</View>
			<Text style = {noneModeStyles._Next}   >
				Next
			</Text>
			<Text style = {noneModeStyles._Back}   >
				Back
			</Text>
			<View style = {noneModeStyles._eva_arrow_ios_forward_outline}    >
				<View style = {noneModeStyles.style24}    >
					<View style = {noneModeStyles.style25}   >
						<Svg style={{height: 15, width: 8}} viewBox = "0 0 8 15">
							<Path fill = {"white"}     d = "M1.07094 14.9981C0.821152 14.9985 0.579078 14.9116 0.386742 14.7522C0.278491 14.6624 0.189009 14.5522 0.12342 14.4278C0.0578313 14.3034 0.0174249 14.1673 0.00451508 14.0273C-0.00839471 13.8873 0.00644597 13.7461 0.0481868 13.6118C0.0899276 13.4776 0.157748 13.3528 0.247764 13.2448L5.03714 7.51466L0.418814 1.77382C0.330012 1.66447 0.263697 1.53864 0.22368 1.40358C0.183663 1.26852 0.170734 1.12688 0.185636 0.986799C0.200538 0.846722 0.242976 0.710971 0.310513 0.587349C0.378049 0.463727 0.469352 0.354671 0.579173 0.266449C0.689784 0.169126 0.819317 0.0957163 0.959644 0.0508276C1.09997 0.00593889 1.24806 -0.00945949 1.39462 0.00559807C1.54118 0.0206556 1.68305 0.0658444 1.81132 0.138328C1.93958 0.210813 2.05149 0.309027 2.14 0.426808L7.30354 6.84115C7.46078 7.03244 7.54674 7.27238 7.54674 7.52C7.54674 7.76762 7.46078 8.00757 7.30354 8.19886L1.95826 14.6132C1.85101 14.7426 1.71478 14.8448 1.56061 14.9117C1.40644 14.9786 1.23868 15.0082 1.07094 14.9981Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._eva_arrow_ios_forward_outline_2}    >
				<View style = {noneModeStyles.style27}    >
					<View style = {noneModeStyles.style28}   >
						<Svg style={{height: 15, width: 8}} viewBox = "0 0 8 15">
							<Path fill = {"white"}     d = "M6.47589 14.9981C6.72567 14.9985 6.96775 14.9116 7.16008 14.7522C7.26833 14.6624 7.35782 14.5522 7.4234 14.4278C7.48899 14.3034 7.5294 14.1673 7.54231 14.0273C7.55522 13.8873 7.54038 13.7461 7.49864 13.6118C7.4569 13.4776 7.38908 13.3528 7.29906 13.2448L2.50968 7.51466L7.12801 1.77382C7.21681 1.66447 7.28313 1.53864 7.32315 1.40358C7.36316 1.26852 7.37609 1.12688 7.36119 0.986799C7.34629 0.846722 7.30385 0.710971 7.23631 0.587349C7.16878 0.463727 7.07747 0.354671 6.96765 0.266449C6.85704 0.169126 6.72751 0.0957163 6.58718 0.0508276C6.44685 0.00593889 6.29876 -0.00945949 6.1522 0.00559807C6.00564 0.0206556 5.86378 0.0658444 5.73551 0.138328C5.60724 0.210813 5.49534 0.309027 5.40683 0.426808L0.243281 6.84115C0.0860424 7.03244 8.41114e-05 7.27238 8.41114e-05 7.52C8.41114e-05 7.76762 0.0860424 8.00757 0.243281 8.19886L5.58857 14.6132C5.69581 14.7426 5.83205 14.8448 5.98622 14.9117C6.14038 14.9786 6.30814 15.0082 6.47589 14.9981Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_24}    >
			</View>
			<View style = {noneModeStyles._bx_bxs_camera_plus}    >
				<View style = {noneModeStyles.style31}    >
					<View style = {noneModeStyles.style32}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"black"}     d = "M18 3H15.414L12.707 0.293001C12.6143 0.199958 12.5041 0.126171 12.3828 0.0758854C12.2614 0.0256001 12.1313 -0.000189449 12 1.04767e-06H8C7.86866 -0.000189449 7.73857 0.0256001 7.61724 0.0758854C7.4959 0.126171 7.38571 0.199958 7.293 0.293001L4.586 3H2C0.897 3 0 3.897 0 5V16C0 17.103 0.897 18 2 18H18C19.103 18 20 17.103 20 16V5C20 3.897 19.103 3 18 3ZM10 15C7.29 15 5 12.71 5 10C5 7.289 7.29 5 10 5C12.71 5 15 7.289 15 10C15 12.71 12.71 15 10 15Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"black"}     d = "M4 0H2V2H0V4H2V6H4V4H6V2H4V0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._picture_1}    >
			</View>
			<View style = {noneModeStyles._Nav_Bar}    >
				<View style = {noneModeStyles._Group_5080}    >
					<View style = {noneModeStyles._Rectangle_1031}    >
						<View style = {noneModeStyles._Rectangle_1031_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._heroicons_solid_chat_alt_2}    >
						<View style = {noneModeStyles._Group}    >
							<View style = {noneModeStyles.style42}    >
								<View style = {noneModeStyles.style43}   >
									<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
										<Path fill = {"black"}     d = "M0 2.54545C0 1.87036 0.268181 1.22291 0.745546 0.745546C1.22291 0.268181 1.87036 0 2.54545 0H11.4545C12.1296 0 12.7771 0.268181 13.2544 0.745546C13.7318 1.22291 14 1.87036 14 2.54545V7.63636C14 8.31145 13.7318 8.9589 13.2544 9.43626C12.7771 9.91363 12.1296 10.1818 11.4545 10.1818H8.90908L5.0909 14V10.1818H2.54545C1.87036 10.1818 1.22291 9.91363 0.745546 9.43626C0.268181 8.9589 0 8.31145 0 7.63636V2.54545Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style44}    >
								<View style = {noneModeStyles.style45}   >
									<Svg style={{height: 14, width: 12}} viewBox = "0 0 12 14">
										<Path fill = {"black"}     d = "M8.37758 0V2.41499C8.37758 3.69597 7.86871 4.9245 6.96292 5.83029C6.05712 6.73609 4.8286 7.24496 3.54761 7.24496H2.13243L0 9.3786C0.338098 9.55851 0.723288 9.65994 1.13263 9.65994H3.54761L7.17009 13.2824V9.65994H9.58508C10.2256 9.65994 10.8398 9.40551 11.2927 8.95261C11.7456 8.49971 12.0001 7.88545 12.0001 7.24496V2.41499C12.0001 1.77449 11.7456 1.16023 11.2927 0.707333C10.8398 0.254435 10.2256 0 9.58508 0H8.37758Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._zmdi_home}    >
						<View style = {noneModeStyles.style47}    >
							<View style = {noneModeStyles.style48}   >
								<Svg style={{height: 23, width: 27}} viewBox = "0 0 27 23">
									<Path fill = {"black"}     d = "M10.8126 22.9532H5.05855C4.4998 22.9532 4.04684 22.5002 4.04684 21.9415V12.1405H0L13.4684 0L27 12.1405H22.9532V21.9415C22.9532 22.5002 22.5002 22.9532 21.9415 22.9532H16.1874V14.8595H10.8126V22.9532Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._eva_book_fill_2}    >
						<View style = {noneModeStyles.style50}    >
							<View style = {noneModeStyles.style51}   >
								<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
									<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._mdi_dog_side}    >
							<View style = {noneModeStyles.style53}    >
								<View style = {noneModeStyles.style54}   >
									<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
										<Path fill = {"white"}     d = "M6.98985 0.29643C6.98985 0.0328668 6.67119 -0.099126 6.48482 0.0872413L5.8065 0.765565C5.53579 1.03627 5.53579 1.47518 5.8065 1.74588L6.36228 2.30167C6.47781 2.4172 6.66513 2.4172 6.78066 2.30167C6.89619 2.18614 7.0835 2.18614 7.19904 2.30167C7.31457 2.4172 7.50188 2.4172 7.61741 2.30167L7.8266 2.09248C8.05767 1.86142 8.05767 1.48679 7.8266 1.25573L7.0765 0.505619C7.02102 0.450138 6.98985 0.374891 6.98985 0.29643ZM0.504995 1.46491C0.389463 1.34938 0.202149 1.34938 0.0866173 1.46491C-0.0289145 1.58045 -0.0289145 1.76776 0.0866172 1.88329L0.838466 2.63514C1.02677 2.82345 1.13256 3.07884 1.13256 3.34515V3.88853C1.13256 4.07795 1.05731 4.25962 0.923372 4.39356C0.789431 4.5275 0.714184 4.70916 0.714184 4.89858V6.69463C0.714184 6.9257 0.901498 7.11301 1.13256 7.11301C1.36362 7.11301 1.55094 6.9257 1.55094 6.69463V6.14958C1.55094 5.95938 1.60724 5.77343 1.71275 5.61517L2.08961 5.04987C2.27584 4.77053 2.58935 4.60275 2.92508 4.60275H4.31223C4.86678 4.60275 5.31634 5.0523 5.31634 5.60685V6.69463C5.31634 6.9257 5.50365 7.11301 5.73471 7.11301C5.96578 7.11301 6.15309 6.9257 6.15309 6.69463V3.34515C6.15309 3.07884 6.0473 2.82345 5.859 2.63514L5.1938 1.96994C5.03041 1.80655 4.76551 1.80655 4.60212 1.96994C4.52366 2.0484 4.41725 2.09248 4.30628 2.09248H1.47916C1.25723 2.09248 1.0444 2.00432 0.887481 1.8474L0.504995 1.46491Z"/>
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
export default Page_Profile

const noneModeStyles = StyleSheet.create({
_page2: {
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
_icons8_user_90_1: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 354,
	top: 854,
	},
_fa_solid_paw: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 195,
	top: 854,
	},
_majesticons_menu: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 114,
	top: 854,
	},
_mdi_dog_service: {
	width: 28,
	height: 28,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 36,
	top: 852,
	},
_eva_book_fill: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 275,
	top: 854,
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
_Mobile_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 112,
	top: 56,
	color: "rgb(255, 105, 47)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "right",
	},
_eva_arrow_back_fill: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 31,
	top: 62,
	},
style16: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4.99875},
	],
	},
style17: {
	},
_Add_an_Image: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 162,
	top: 386,
	color: "rgb(60, 60, 60)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Rectangle_1_2: {
	width: 106,
	height: 42,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 215,
	top: 544,
	borderRadius: 5,
	shadowOffset: {
		width: 0,
		height: 5
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 16,
	},
_Rectangle_22: {
	width: 106,
	height: 42,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 91,
	top: 544,
	borderRadius: 5,
	shadowOffset: {
		width: 0,
		height: 5
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 16,
	},
_Next: {
	width: 38,
	height: 16,
	position: "absolute",
	left: 237,
	top: 554,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Back: {
	width: 41,
	height: 16,
	position: "absolute",
	left: 129,
	top: 555,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_eva_arrow_ios_forward_outline: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 275,
	top: 553,
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 8.99829},
		{translateY: 4.97076},
	],
	},
style25: {
	},
_eva_arrow_ios_forward_outline_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 106,
	top: 554,
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 7.94238},
		{translateY: 4.97076},
	],
	},
style28: {
	},
_Ellipse_24: {
	width: 74,
	height: 74,
	position: "absolute",
	left: 170,
	top: 430,
	},
_bx_bxs_camera_plus: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 195,
	top: 455,
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 9},
	],
	},
style34: {
	},
_picture_1: {
	width: 268,
	height: 235,
	position: "absolute",
	left: 73,
	top: 133,
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
		{translateX: 2.3999},
		{translateY: 3.60001},
	],
	},
style42: {
	position: "absolute",
	},
style43: {
	},
style44: {
	position: "absolute",
	transform: [
		{translateX: 7.27441},
		{translateY: 4.79999},
	],
	},
style45: {
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
style47: {
	position: "absolute",
	},
style48: {
	},
_eva_book_fill_2: {
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
style50: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
style51: {
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
style53: {
	position: "absolute",
	transform: [
		{translateX: 0.833252},
		{translateY: 1.25},
	],
	},
style54: {
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

