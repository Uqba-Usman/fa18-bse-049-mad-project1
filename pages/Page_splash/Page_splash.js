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
const Page_splash  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page10}    >
			<Text style = {noneModeStyles._MOBSPOT}   >
				MOBSPOT
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_splash

const noneModeStyles = StyleSheet.create({
_page10: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 105, 47)",
	},
_MOBSPOT: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 87,
	top: 405,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "400",
	fontFamily: "Rock Salt",
	textAlign: "left",
	},
})

