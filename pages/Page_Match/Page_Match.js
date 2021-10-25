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
import {image_Match_Heart_Transparent_1__1_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_1__1_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_1__1_3_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_1__1_4_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_1__1_5_link} from './assets/imageLinks.js'
import {image_fot_png_link} from './assets/imageLinks.js'
const Page_Match  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
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
			<Text style = {noneModeStyles._Your_HotMobs}   >
				Your HotMobs
			</Text>
			<View style = {noneModeStyles._fa_solid_paw}    >
			</View>
			<View style = {noneModeStyles._eva_arrow_back_fill}    >
				<View style = {noneModeStyles.style15}    >
					<View style = {noneModeStyles.style16}   >
						<Svg style={{height: 15, width: 16}} viewBox = "0 0 16 15">
							<Path fill = {"black"}     d = "M15 6.00125H3.14L6.77 1.64125C6.93974 1.43704 7.0214 1.17375 6.99702 0.909329C6.97264 0.644902 6.84422 0.400991 6.64 0.231252C6.43578 0.0615137 6.1725 -0.0201482 5.90808 0.0042315C5.64365 0.0286112 5.39974 0.157036 5.23 0.361252L0.23 6.36125C0.196361 6.40898 0.166279 6.45911 0.14 6.51125C0.14 6.56125 0.14 6.59125 0.0700002 6.64125C0.0246737 6.75591 0.000941121 6.87796 0 7.00125C0.000941121 7.12454 0.0246737 7.24659 0.0700002 7.36125C0.0700002 7.41125 0.0699999 7.44125 0.14 7.49125C0.166279 7.54339 0.196361 7.59353 0.23 7.64125L5.23 13.6413C5.32402 13.7541 5.44176 13.8449 5.57485 13.9071C5.70793 13.9694 5.85309 14.0015 6 14.0013C6.23365 14.0017 6.46009 13.9203 6.64 13.7713C6.74126 13.6873 6.82496 13.5842 6.88631 13.4679C6.94766 13.3515 6.98546 13.2242 6.99754 13.0932C7.00961 12.9622 6.99573 12.8302 6.95669 12.7046C6.91764 12.579 6.8542 12.4623 6.77 12.3613L3.14 8.00125H15C15.2652 8.00125 15.5196 7.8959 15.7071 7.70836C15.8946 7.52082 16 7.26647 16 7.00125C16 6.73604 15.8946 6.48168 15.7071 6.29415C15.5196 6.10661 15.2652 6.00125 15 6.00125Z"/>
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
										<Path fill = {"black"}     d = "M8.37754 0V2.41497C8.37754 3.69595 7.86867 4.92447 6.96288 5.83026C6.05709 6.73605 4.82858 7.24492 3.5476 7.24492H2.13242L0 9.37855C0.338096 9.55846 0.723284 9.65989 1.13262 9.65989H3.5476L7.17006 13.2824V9.65989H9.58503C10.2255 9.65989 10.8398 9.40546 11.2927 8.95256C11.7456 8.49967 12 7.88541 12 7.24492V2.41497C12 1.77448 11.7456 1.16022 11.2927 0.707329C10.8398 0.254434 10.2255 0 9.58503 0H8.37754Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._zmdi_home}    >
						<View style = {noneModeStyles.style28}    >
							<View style = {noneModeStyles.style29}   >
								<Svg style={{height: 23, width: 27}} viewBox = "0 0 27 23">
									<Path fill = {"black"}     d = "M10.8126 22.9532H5.05855C4.4998 22.9532 4.04684 22.5002 4.04684 21.9414V12.1405H0L13.4684 0L27 12.1405H22.9532V21.9414C22.9532 22.5002 22.5002 22.9532 21.9415 22.9532H16.1874V14.8595H10.8126V22.9532Z"/>
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
										<Path fill = {"white"}     d = "M6.98994 0.296433C6.98994 0.0328671 6.67128 -0.0991269 6.48491 0.0872421L5.80658 0.765572C5.53587 1.03628 5.53587 1.47519 5.80658 1.7459L6.36237 2.30169C6.4779 2.41722 6.66521 2.41722 6.78075 2.30169C6.89628 2.18616 7.0836 2.18616 7.19913 2.30169C7.31466 2.41722 7.50198 2.41722 7.61751 2.30169L7.8267 2.0925C8.05777 1.86143 8.05777 1.4868 7.8267 1.25574L7.07659 0.505623C7.02111 0.450142 6.98994 0.374894 6.98994 0.296433ZM0.50503 1.46493C0.389497 1.34939 0.202181 1.34939 0.0866487 1.46493C-0.0288841 1.58046 -0.0288841 1.76777 0.0866486 1.88331L0.838503 2.63516C1.02681 2.82347 1.1326 3.07887 1.1326 3.34518V3.88856C1.1326 4.07799 1.05735 4.25965 0.923411 4.39359C0.789469 4.52754 0.71422 4.7092 0.71422 4.89863V6.69469C0.71422 6.92576 0.901536 7.11307 1.1326 7.11307C1.36367 7.11307 1.55098 6.92576 1.55098 6.69469V6.14963C1.55098 5.95943 1.60728 5.77348 1.71279 5.61521L2.08966 5.04992C2.27589 4.77057 2.5894 4.60279 2.92513 4.60279H4.3123C4.86686 4.60279 5.31641 5.05234 5.31641 5.6069V6.69469C5.31641 6.92576 5.50373 7.11307 5.73479 7.11307C5.96586 7.11307 6.15318 6.92576 6.15318 6.69469V3.34518C6.15318 3.07887 6.04739 2.82347 5.85908 2.63516L5.19387 1.96996C5.03048 1.80657 4.76558 1.80657 4.60219 1.96996C4.52373 2.04842 4.41731 2.0925 4.30635 2.0925H1.4792C1.25728 2.0925 1.04444 2.00434 0.88752 1.84742L0.50503 1.46493Z"/>
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
			<View style = {noneModeStyles._Group_5107}    >
				<View style = {noneModeStyles._Rectangle_1042}    >
				</View>
				<Text style = {noneModeStyles._Match_Found_}   >
					Match Found!
				</Text>
				<Text style = {noneModeStyles._Congrats_}   >
					Congrats!
				</Text>
				<View style = {noneModeStyles._Group_5102}    >
					<View style = {noneModeStyles._bi_chat_right_text_fill}    >
					</View>
				</View>
				<Text style = {noneModeStyles._German}   >
					German
				</Text>
				<Text style = {noneModeStyles._You}   >
					You
				</Text>
				<View style = {noneModeStyles._ant_design_heart_filled}    >
				</View>
				<View style = {noneModeStyles._Group_5104}    >
					<View style = {noneModeStyles._Rectangle_993}    >
					</View>
					<Text style = {noneModeStyles._Send_a_message}   >
						Send a message
					</Text>
					<View style = {noneModeStyles._Group_5103}    >
						<View style = {noneModeStyles.style55}    >
							<View style = {noneModeStyles.style56}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"white"}     d = "M0 1.81818C0 1.33597 0.191558 0.873508 0.532533 0.532533C0.873508 0.191558 1.33597 0 1.81818 0H8.18182C8.66403 0 9.12649 0.191558 9.46747 0.532533C9.80844 0.873508 10 1.33597 10 1.81818V5.45455C10 5.93676 9.80844 6.39922 9.46747 6.74019C9.12649 7.08117 8.66403 7.27273 8.18182 7.27273H6.36364L3.63636 10V7.27273H1.81818C1.33597 7.27273 0.873508 7.08117 0.532533 6.74019C0.191558 6.39922 0 5.93676 0 5.45455V1.81818Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style57}    >
							<View style = {noneModeStyles.style58}   >
								<Svg style={{height: 10, width: 9}} viewBox = "0 0 9 10">
									<Path fill = {"white"}     d = "M6.28316 0V1.81818C6.28316 2.78261 5.9015 3.70753 5.22216 4.38948C4.54282 5.07143 3.62143 5.45455 2.6607 5.45455H1.59932L0 7.06091C0.253572 7.19636 0.542463 7.27273 0.849467 7.27273H2.6607L5.37754 10V7.27273H7.18877C7.66914 7.27273 8.12983 7.08117 8.4695 6.74019C8.80917 6.39922 9 5.93676 9 5.45455V1.81818C9 1.33597 8.80917 0.873508 8.4695 0.532533C8.12983 0.191558 7.66914 0 7.18877 0H6.28316Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5116}    >
				<View style = {noneModeStyles._Rectangle_1042_2}    >
				</View>
				<Text style = {noneModeStyles._Match_Found__2}   >
					Match Found!
				</Text>
				<Text style = {noneModeStyles._Congrats__2}   >
					Congrats!
				</Text>
				<View style = {noneModeStyles._Group_5102_2}    >
					<View style = {noneModeStyles._bi_chat_right_text_fill_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._German_2}   >
					German
				</Text>
				<Text style = {noneModeStyles._You_2}   >
					You
				</Text>
				<View style = {noneModeStyles._ant_design_heart_filled_2}    >
				</View>
				<View style = {noneModeStyles._Group_5104_2}    >
					<View style = {noneModeStyles._Rectangle_993_2}    >
					</View>
					<Text style = {noneModeStyles._Send_a_message_2}   >
						Send a message
					</Text>
					<View style = {noneModeStyles._Group_5103_2}    >
						<View style = {noneModeStyles.style72}    >
							<View style = {noneModeStyles.style73}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"white"}     d = "M0 1.81818C0 1.33597 0.191558 0.873508 0.532533 0.532533C0.873508 0.191558 1.33597 0 1.81818 0H8.18182C8.66403 0 9.12649 0.191558 9.46747 0.532533C9.80844 0.873508 10 1.33597 10 1.81818V5.45455C10 5.93676 9.80844 6.39922 9.46747 6.74019C9.12649 7.08117 8.66403 7.27273 8.18182 7.27273H6.36364L3.63636 10V7.27273H1.81818C1.33597 7.27273 0.873508 7.08117 0.532533 6.74019C0.191558 6.39922 0 5.93676 0 5.45455V1.81818Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style74}    >
							<View style = {noneModeStyles.style75}   >
								<Svg style={{height: 10, width: 9}} viewBox = "0 0 9 10">
									<Path fill = {"white"}     d = "M6.28316 0V1.81818C6.28316 2.78261 5.9015 3.70753 5.22216 4.38948C4.54282 5.07143 3.62143 5.45455 2.6607 5.45455H1.59932L0 7.06091C0.253572 7.19636 0.542463 7.27273 0.849467 7.27273H2.6607L5.37754 10V7.27273H7.18877C7.66914 7.27273 8.12983 7.08117 8.4695 6.74019C8.80917 6.39922 9 5.93676 9 5.45455V1.81818C9 1.33597 8.80917 0.873508 8.4695 0.532533C8.12983 0.191558 7.66914 0 7.18877 0H6.28316Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5114}    >
				<View style = {noneModeStyles._Rectangle_1042_3}    >
				</View>
				<Text style = {noneModeStyles._Match_Found__3}   >
					Match Found!
				</Text>
				<Text style = {noneModeStyles._Congrats__3}   >
					Congrats!
				</Text>
				<View style = {noneModeStyles._Group_5102_3}    >
					<View style = {noneModeStyles._bi_chat_right_text_fill_3}    >
					</View>
				</View>
				<Text style = {noneModeStyles._German_3}   >
					German
				</Text>
				<Text style = {noneModeStyles._You_3}   >
					You
				</Text>
				<View style = {noneModeStyles._ant_design_heart_filled_3}    >
				</View>
				<View style = {noneModeStyles._Group_5104_3}    >
					<View style = {noneModeStyles._Rectangle_993_3}    >
					</View>
					<Text style = {noneModeStyles._Send_a_message_3}   >
						Send a message
					</Text>
					<View style = {noneModeStyles._Group_5103_3}    >
						<View style = {noneModeStyles.style89}    >
							<View style = {noneModeStyles.style90}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"white"}     d = "M0 1.81818C0 1.33597 0.191558 0.873508 0.532533 0.532533C0.873508 0.191558 1.33597 0 1.81818 0H8.18182C8.66403 0 9.12649 0.191558 9.46747 0.532533C9.80844 0.873508 10 1.33597 10 1.81818V5.45455C10 5.93676 9.80844 6.39922 9.46747 6.74019C9.12649 7.08117 8.66403 7.27273 8.18182 7.27273H6.36364L3.63636 10V7.27273H1.81818C1.33597 7.27273 0.873508 7.08117 0.532533 6.74019C0.191558 6.39922 0 5.93676 0 5.45455V1.81818Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style91}    >
							<View style = {noneModeStyles.style92}   >
								<Svg style={{height: 10, width: 9}} viewBox = "0 0 9 10">
									<Path fill = {"white"}     d = "M6.28316 0V1.81818C6.28316 2.78261 5.9015 3.70753 5.22216 4.38948C4.54282 5.07143 3.62143 5.45455 2.6607 5.45455H1.59932L0 7.06091C0.253572 7.19636 0.542463 7.27273 0.849467 7.27273H2.6607L5.37754 10V7.27273H7.18877C7.66914 7.27273 8.12983 7.08117 8.4695 6.74019C8.80917 6.39922 9 5.93676 9 5.45455V1.81818C9 1.33597 8.80917 0.873508 8.4695 0.532533C8.12983 0.191558 7.66914 0 7.18877 0H6.28316Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5117}    >
				<View style = {noneModeStyles._Rectangle_1042_4}    >
				</View>
				<Text style = {noneModeStyles._Match_Found__4}   >
					Match Found!
				</Text>
				<Text style = {noneModeStyles._Congrats__4}   >
					Congrats!
				</Text>
				<View style = {noneModeStyles._Group_5102_4}    >
					<View style = {noneModeStyles._bi_chat_right_text_fill_4}    >
					</View>
				</View>
				<Text style = {noneModeStyles._German_4}   >
					German
				</Text>
				<Text style = {noneModeStyles._You_4}   >
					You
				</Text>
				<View style = {noneModeStyles._ant_design_heart_filled_4}    >
				</View>
				<View style = {noneModeStyles._Group_5104_4}    >
					<View style = {noneModeStyles._Rectangle_993_4}    >
					</View>
					<Text style = {noneModeStyles._Send_a_message_4}   >
						Send a message
					</Text>
					<View style = {noneModeStyles._Group_5103_4}    >
						<View style = {noneModeStyles.style106}    >
							<View style = {noneModeStyles.style107}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"white"}     d = "M0 1.81818C0 1.33597 0.191558 0.873508 0.532533 0.532533C0.873508 0.191558 1.33597 0 1.81818 0H8.18182C8.66403 0 9.12649 0.191558 9.46747 0.532533C9.80844 0.873508 10 1.33597 10 1.81818V5.45455C10 5.93676 9.80844 6.39922 9.46747 6.74019C9.12649 7.08117 8.66403 7.27273 8.18182 7.27273H6.36364L3.63636 10V7.27273H1.81818C1.33597 7.27273 0.873508 7.08117 0.532533 6.74019C0.191558 6.39922 0 5.93676 0 5.45455V1.81818Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style108}    >
							<View style = {noneModeStyles.style109}   >
								<Svg style={{height: 10, width: 9}} viewBox = "0 0 9 10">
									<Path fill = {"white"}     d = "M6.28316 0V1.81818C6.28316 2.78261 5.9015 3.70753 5.22216 4.38948C4.54282 5.07143 3.62143 5.45455 2.6607 5.45455H1.59932L0 7.06091C0.253572 7.19636 0.542463 7.27273 0.849467 7.27273H2.6607L5.37754 10V7.27273H7.18877C7.66914 7.27273 8.12983 7.08117 8.4695 6.74019C8.80917 6.39922 9 5.93676 9 5.45455V1.81818C9 1.33597 8.80917 0.873508 8.4695 0.532533C8.12983 0.191558 7.66914 0 7.18877 0H6.28316Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5120}    >
				<View style = {noneModeStyles._Rectangle_1042_5}    >
				</View>
				<Text style = {noneModeStyles._Match_Found__5}   >
					Match Found!
				</Text>
				<Text style = {noneModeStyles._Congrats__5}   >
					Congrats!
				</Text>
				<View style = {noneModeStyles._Group_5102_5}    >
					<View style = {noneModeStyles._bi_chat_right_text_fill_5}    >
					</View>
				</View>
				<Text style = {noneModeStyles._German_5}   >
					German
				</Text>
				<Text style = {noneModeStyles._You_5}   >
					You
				</Text>
				<View style = {noneModeStyles._ant_design_heart_filled_5}    >
				</View>
				<View style = {noneModeStyles._Group_5104_5}    >
					<View style = {noneModeStyles._Rectangle_993_5}    >
					</View>
					<Text style = {noneModeStyles._Send_a_message_5}   >
						Send a message
					</Text>
					<View style = {noneModeStyles._Group_5103_5}    >
						<View style = {noneModeStyles.style123}    >
							<View style = {noneModeStyles.style124}   >
								<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
									<Path fill = {"white"}     d = "M0 1.81818C0 1.33597 0.191558 0.873508 0.532533 0.532533C0.873508 0.191558 1.33597 0 1.81818 0H8.18182C8.66403 0 9.12649 0.191558 9.46747 0.532533C9.80844 0.873508 10 1.33597 10 1.81818V5.45455C10 5.93676 9.80844 6.39922 9.46747 6.74019C9.12649 7.08117 8.66403 7.27273 8.18182 7.27273H6.36364L3.63636 10V7.27273H1.81818C1.33597 7.27273 0.873508 7.08117 0.532533 6.74019C0.191558 6.39922 0 5.93676 0 5.45455V1.81818Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style125}    >
							<View style = {noneModeStyles.style126}   >
								<Svg style={{height: 10, width: 9}} viewBox = "0 0 9 10">
									<Path fill = {"white"}     d = "M6.28316 0V1.81818C6.28316 2.78261 5.9015 3.70753 5.22216 4.38948C4.54282 5.07143 3.62143 5.45455 2.6607 5.45455H1.59932L0 7.06091C0.253572 7.19636 0.542463 7.27273 0.849467 7.27273H2.6607L5.37754 10V7.27273H7.18877C7.66914 7.27273 8.12983 7.08117 8.4695 6.74019C8.80917 6.39922 9 5.93676 9 5.45455V1.81818C9 1.33597 8.80917 0.873508 8.4695 0.532533C8.12983 0.191558 7.66914 0 7.18877 0H6.28316Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5113}    >
				<View style = {noneModeStyles.style128}    >
					<View style = {noneModeStyles.style129}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"#FF692F"}     d = "M19.5161 3.67173C19.2058 2.95322 18.7584 2.30211 18.1988 1.75485C17.6389 1.20596 16.9787 0.769759 16.2542 0.469978C15.5029 0.157889 14.6971 -0.0018562 13.8835 1.62724e-05C12.7422 1.62724e-05 11.6286 0.312552 10.6609 0.902897C10.4294 1.04412 10.2095 1.19923 10.0011 1.36823C9.79279 1.19923 9.57286 1.04412 9.34135 0.902897C8.37364 0.312552 7.26009 1.62724e-05 6.11876 1.62724e-05C5.2969 1.62724e-05 4.50052 0.157442 3.74811 0.469978C3.02118 0.770938 2.36601 1.20386 1.80345 1.75485C1.24319 2.30149 0.795642 2.95275 0.486167 3.67173C0.164371 4.4195 0 5.21358 0 6.0308C0 6.80172 0.157426 7.60505 0.469961 8.42228C0.731565 9.10523 1.10661 9.81364 1.58583 10.529C2.34518 11.6611 3.38928 12.8418 4.68572 14.0387C6.83412 16.0227 8.96167 17.3932 9.05196 17.4488L9.60064 17.8007C9.84372 17.9558 10.1563 17.9558 10.3993 17.8007L10.948 17.4488C11.0383 17.3909 13.1635 16.0227 15.3143 14.0387C16.6107 12.8418 17.6548 11.6611 18.4141 10.529C18.8934 9.81364 19.2707 9.10523 19.53 8.42228C19.8425 7.60505 20 6.80172 20 6.0308C20.0023 5.21358 19.8379 4.4195 19.5161 3.67173Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Match_Heart_Transparent_1__1_container}    >
					<View style = {noneModeStyles._Match_Heart_Transparent_1__1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1__1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5118}    >
				<View style = {noneModeStyles.style133}    >
					<View style = {noneModeStyles.style134}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"#FF692F"}     d = "M19.5161 3.67173C19.2058 2.95322 18.7584 2.30211 18.1988 1.75485C17.6389 1.20596 16.9787 0.769759 16.2542 0.469978C15.5029 0.157889 14.6971 -0.0018562 13.8835 1.62724e-05C12.7422 1.62724e-05 11.6286 0.312552 10.6609 0.902897C10.4294 1.04412 10.2095 1.19923 10.0011 1.36823C9.79279 1.19923 9.57286 1.04412 9.34135 0.902897C8.37364 0.312552 7.26009 1.62724e-05 6.11876 1.62724e-05C5.2969 1.62724e-05 4.50052 0.157442 3.74811 0.469978C3.02118 0.770938 2.36601 1.20386 1.80345 1.75485C1.24319 2.30149 0.795642 2.95275 0.486167 3.67173C0.164371 4.4195 0 5.21358 0 6.0308C0 6.80172 0.157426 7.60505 0.469961 8.42228C0.731565 9.10523 1.10661 9.81364 1.58583 10.529C2.34518 11.6611 3.38928 12.8418 4.68572 14.0387C6.83412 16.0227 8.96167 17.3932 9.05196 17.4488L9.60064 17.8007C9.84372 17.9558 10.1563 17.9558 10.3993 17.8007L10.948 17.4488C11.0383 17.3909 13.1635 16.0227 15.3143 14.0387C16.6107 12.8418 17.6548 11.6611 18.4141 10.529C18.8934 9.81364 19.2707 9.10523 19.53 8.42228C19.8425 7.60505 20 6.80172 20 6.0308C20.0023 5.21358 19.8379 4.4195 19.5161 3.67173Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Match_Heart_Transparent_1__1_container_2}    >
					<View style = {noneModeStyles._Match_Heart_Transparent_1__1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1__1_2_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5115}    >
				<View style = {noneModeStyles.style138}    >
					<View style = {noneModeStyles.style139}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"#FF692F"}     d = "M19.5161 3.67173C19.2058 2.95322 18.7584 2.30211 18.1988 1.75485C17.6389 1.20596 16.9787 0.769759 16.2542 0.469978C15.5029 0.157889 14.6971 -0.0018562 13.8835 1.62724e-05C12.7422 1.62724e-05 11.6286 0.312552 10.6609 0.902897C10.4294 1.04412 10.2095 1.19923 10.0011 1.36823C9.79279 1.19923 9.57286 1.04412 9.34135 0.902897C8.37364 0.312552 7.26009 1.62724e-05 6.11876 1.62724e-05C5.2969 1.62724e-05 4.50052 0.157442 3.74811 0.469978C3.02118 0.770938 2.36601 1.20386 1.80345 1.75485C1.24319 2.30149 0.795642 2.95275 0.486167 3.67173C0.164371 4.4195 0 5.21358 0 6.0308C0 6.80172 0.157426 7.60505 0.469961 8.42228C0.731565 9.10523 1.10661 9.81364 1.58583 10.529C2.34518 11.6611 3.38928 12.8418 4.68572 14.0387C6.83412 16.0227 8.96167 17.3932 9.05196 17.4488L9.60064 17.8007C9.84372 17.9558 10.1563 17.9558 10.3993 17.8007L10.948 17.4488C11.0383 17.3909 13.1635 16.0227 15.3143 14.0387C16.6107 12.8418 17.6548 11.6611 18.4141 10.529C18.8934 9.81364 19.2707 9.10523 19.53 8.42228C19.8425 7.60505 20 6.80172 20 6.0308C20.0023 5.21358 19.8379 4.4195 19.5161 3.67173Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Match_Heart_Transparent_1__1_container_3}    >
					<View style = {noneModeStyles._Match_Heart_Transparent_1__1_3}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1__1_3_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5119}    >
				<View style = {noneModeStyles.style143}    >
					<View style = {noneModeStyles.style144}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"#FF692F"}     d = "M19.5161 3.67173C19.2058 2.95322 18.7584 2.30211 18.1988 1.75485C17.6389 1.20596 16.9787 0.769759 16.2542 0.469978C15.5029 0.157889 14.6971 -0.0018562 13.8835 1.62724e-05C12.7422 1.62724e-05 11.6286 0.312552 10.6609 0.902897C10.4294 1.04412 10.2095 1.19923 10.0011 1.36823C9.79279 1.19923 9.57286 1.04412 9.34135 0.902897C8.37364 0.312552 7.26009 1.62724e-05 6.11876 1.62724e-05C5.2969 1.62724e-05 4.50052 0.157442 3.74811 0.469978C3.02118 0.770938 2.36601 1.20386 1.80345 1.75485C1.24319 2.30149 0.795642 2.95275 0.486167 3.67173C0.164371 4.4195 0 5.21358 0 6.0308C0 6.80172 0.157426 7.60505 0.469961 8.42228C0.731565 9.10523 1.10661 9.81364 1.58583 10.529C2.34518 11.6611 3.38928 12.8418 4.68572 14.0387C6.83412 16.0227 8.96167 17.3932 9.05196 17.4488L9.60064 17.8007C9.84372 17.9558 10.1563 17.9558 10.3993 17.8007L10.948 17.4488C11.0383 17.3909 13.1635 16.0227 15.3143 14.0387C16.6107 12.8418 17.6548 11.6611 18.4141 10.529C18.8934 9.81364 19.2707 9.10523 19.53 8.42228C19.8425 7.60505 20 6.80172 20 6.0308C20.0023 5.21358 19.8379 4.4195 19.5161 3.67173Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Match_Heart_Transparent_1__1_container_4}    >
					<View style = {noneModeStyles._Match_Heart_Transparent_1__1_4}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1__1_4_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5121}    >
				<View style = {noneModeStyles.style148}    >
					<View style = {noneModeStyles.style149}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"#FF692F"}     d = "M19.5161 3.67173C19.2058 2.95322 18.7584 2.30211 18.1988 1.75485C17.6389 1.20596 16.9787 0.769759 16.2542 0.469978C15.5029 0.157889 14.6971 -0.0018562 13.8835 1.62724e-05C12.7422 1.62724e-05 11.6286 0.312552 10.6609 0.902897C10.4294 1.04412 10.2095 1.19923 10.0011 1.36823C9.79279 1.19923 9.57286 1.04412 9.34135 0.902897C8.37364 0.312552 7.26009 1.62724e-05 6.11876 1.62724e-05C5.2969 1.62724e-05 4.50052 0.157442 3.74811 0.469978C3.02118 0.770938 2.36601 1.20386 1.80345 1.75485C1.24319 2.30149 0.795642 2.95275 0.486167 3.67173C0.164371 4.4195 0 5.21358 0 6.0308C0 6.80172 0.157426 7.60505 0.469961 8.42228C0.731565 9.10523 1.10661 9.81364 1.58583 10.529C2.34518 11.6611 3.38928 12.8418 4.68572 14.0387C6.83412 16.0227 8.96167 17.3932 9.05196 17.4488L9.60064 17.8007C9.84372 17.9558 10.1563 17.9558 10.3993 17.8007L10.948 17.4488C11.0383 17.3909 13.1635 16.0227 15.3143 14.0387C16.6107 12.8418 17.6548 11.6611 18.4141 10.529C18.8934 9.81364 19.2707 9.10523 19.53 8.42228C19.8425 7.60505 20 6.80172 20 6.0308C20.0023 5.21358 19.8379 4.4195 19.5161 3.67173Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Match_Heart_Transparent_1__1_container_5}    >
					<View style = {noneModeStyles._Match_Heart_Transparent_1__1_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Match_Heart_Transparent_1__1_5_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._fot_png_container}    >
				<View style = {noneModeStyles._fot_png}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_fot_png_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Match

const noneModeStyles = StyleSheet.create({
_page5: {
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
_Your_HotMobs: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 125,
	top: 48,
	color: "rgb(255, 137, 91)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_fa_solid_paw: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 380,
	top: 54,
	},
_eva_arrow_back_fill: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 20,
	top: 54,
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4.99875},
	],
	},
style16: {
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
		{translateX: 2.39999},
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
		{translateX: 7.2744},
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
		{translateX: 0.833328},
		{translateY: 1.25},
	],
	},
style35: {
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
_Group_5107: {
	width: 173,
	height: 169,
	position: "absolute",
	left: 24,
	top: 123,
	},
_Rectangle_1042: {
	width: 173,
	height: 169,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Match_Found_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 99,
	color: "rgb(64, 64, 64)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Congrats_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 79,
	color: "rgb(255, 105, 47)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5102: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 18,
	top: 136,
	},
_bi_chat_right_text_fill: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_German: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_You: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_ant_design_heart_filled: {
	width: 23,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 68,
	top: 24,
	},
_Group_5104: {
	width: 139,
	height: 27,
	position: "absolute",
	left: 17,
	top: 129,
	},
_Rectangle_993: {
	width: 139,
	height: 27,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Send_a_message: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 30,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Group_5103: {
	width: 15,
	height: 14,
	position: "absolute",
	left: 8,
	top: 6,
	},
style55: {
	position: "absolute",
	},
style56: {
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 4},
	],
	},
style58: {
	},
_Group_5116: {
	width: 173,
	height: 169,
	position: "absolute",
	left: 24,
	top: 308,
	},
_Rectangle_1042_2: {
	width: 173,
	height: 169,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Match_Found__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 99,
	color: "rgb(64, 64, 64)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Congrats__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 79,
	color: "rgb(255, 105, 47)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5102_2: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 18,
	top: 136,
	},
_bi_chat_right_text_fill_2: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_German_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_You_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_ant_design_heart_filled_2: {
	width: 23,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 68,
	top: 24,
	},
_Group_5104_2: {
	width: 139,
	height: 27,
	position: "absolute",
	left: 17,
	top: 129,
	},
_Rectangle_993_2: {
	width: 139,
	height: 27,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Send_a_message_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 30,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Group_5103_2: {
	width: 15,
	height: 14,
	position: "absolute",
	left: 8,
	top: 6,
	},
style72: {
	position: "absolute",
	},
style73: {
	},
style74: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 4},
	],
	},
style75: {
	},
_Group_5114: {
	width: 173,
	height: 169,
	position: "absolute",
	left: 217,
	top: 123,
	},
_Rectangle_1042_3: {
	width: 173,
	height: 169,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Match_Found__3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 99,
	color: "rgb(64, 64, 64)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Congrats__3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 79,
	color: "rgb(255, 105, 47)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5102_3: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 33,
	top: 136,
	},
_bi_chat_right_text_fill_3: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_German_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_You_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 125,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_ant_design_heart_filled_3: {
	width: 23,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 83,
	top: 24,
	},
_Group_5104_3: {
	width: 139,
	height: 27,
	position: "absolute",
	left: 17,
	top: 129,
	},
_Rectangle_993_3: {
	width: 139,
	height: 27,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Send_a_message_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 30,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Group_5103_3: {
	width: 15,
	height: 14,
	position: "absolute",
	left: 8,
	top: 6,
	},
style89: {
	position: "absolute",
	},
style90: {
	},
style91: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 4},
	],
	},
style92: {
	},
_Group_5117: {
	width: 173,
	height: 169,
	position: "absolute",
	left: 217,
	top: 308,
	},
_Rectangle_1042_4: {
	width: 173,
	height: 169,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Match_Found__4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 99,
	color: "rgb(64, 64, 64)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Congrats__4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 79,
	color: "rgb(255, 105, 47)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5102_4: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 33,
	top: 136,
	},
_bi_chat_right_text_fill_4: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_German_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_You_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_ant_design_heart_filled_4: {
	width: 23,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 83,
	top: 24,
	},
_Group_5104_4: {
	width: 139,
	height: 27,
	position: "absolute",
	left: 17,
	top: 129,
	},
_Rectangle_993_4: {
	width: 139,
	height: 27,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Send_a_message_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 30,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Group_5103_4: {
	width: 15,
	height: 14,
	position: "absolute",
	left: 8,
	top: 6,
	},
style106: {
	position: "absolute",
	},
style107: {
	},
style108: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 4},
	],
	},
style109: {
	},
_Group_5120: {
	width: 173,
	height: 169,
	position: "absolute",
	left: 24,
	top: 493,
	},
_Rectangle_1042_5: {
	width: 173,
	height: 169,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Match_Found__5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 31,
	top: 99,
	color: "rgb(64, 64, 64)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Congrats__5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 47,
	top: 79,
	color: "rgb(255, 105, 47)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5102_5: {
	width: 16,
	height: 16,
	position: "absolute",
	left: 33,
	top: 136,
	},
_bi_chat_right_text_fill_5: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_German_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_You_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 60,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_ant_design_heart_filled_5: {
	width: 23,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 83,
	top: 24,
	},
_Group_5104_5: {
	width: 139,
	height: 27,
	position: "absolute",
	left: 17,
	top: 129,
	},
_Rectangle_993_5: {
	width: 139,
	height: 27,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_Send_a_message_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 30,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Group_5103_5: {
	width: 15,
	height: 14,
	position: "absolute",
	left: 8,
	top: 6,
	},
style123: {
	position: "absolute",
	},
style124: {
	},
style125: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 4},
	],
	},
style126: {
	},
_Group_5113: {
	width: 19.404,
	height: 17.3831,
	position: "absolute",
	left: 100.797,
	top: 149.808,
	},
style128: {
	position: "absolute",
	},
style129: {
	},
_Match_Heart_Transparent_1__1_container: {
	width: 11,
	height: 11,
	position: "absolute",
	left: 4.20312,
	top: 3.19238,
	},
_Match_Heart_Transparent_1__1: {
	width: "100%",
	height: "100%",
	},
_Group_5118: {
	width: 19.404,
	height: 17.3831,
	position: "absolute",
	left: 100.797,
	top: 334.808,
	},
style133: {
	position: "absolute",
	},
style134: {
	},
_Match_Heart_Transparent_1__1_container_2: {
	width: 11,
	height: 11,
	position: "absolute",
	left: 4.20312,
	top: 3.19238,
	},
_Match_Heart_Transparent_1__1_2: {
	width: "100%",
	height: "100%",
	},
_Group_5115: {
	width: 19.404,
	height: 17.3831,
	position: "absolute",
	left: 294,
	top: 149.808,
	},
style138: {
	position: "absolute",
	},
style139: {
	},
_Match_Heart_Transparent_1__1_container_3: {
	width: 11,
	height: 11,
	position: "absolute",
	left: 4.20312,
	top: 3.19238,
	},
_Match_Heart_Transparent_1__1_3: {
	width: "100%",
	height: "100%",
	},
_Group_5119: {
	width: 19.404,
	height: 17.3831,
	position: "absolute",
	left: 294,
	top: 334.808,
	},
style143: {
	position: "absolute",
	},
style144: {
	},
_Match_Heart_Transparent_1__1_container_4: {
	width: 11,
	height: 11,
	position: "absolute",
	left: 4.20312,
	top: 3.19238,
	},
_Match_Heart_Transparent_1__1_4: {
	width: "100%",
	height: "100%",
	},
_Group_5121: {
	width: 19.404,
	height: 17.3831,
	position: "absolute",
	left: 101,
	top: 519.808,
	},
style148: {
	position: "absolute",
	},
style149: {
	},
_Match_Heart_Transparent_1__1_container_5: {
	width: 11,
	height: 11,
	position: "absolute",
	left: 4.20312,
	top: 3.19238,
	},
_Match_Heart_Transparent_1__1_5: {
	width: "100%",
	height: "100%",
	},
_fot_png_container: {
	width: 25.7143,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 364},
		{translateY: 54},
	],
	},
_fot_png: {
	width: "100%",
	height: "100%",
	},
})

