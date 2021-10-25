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
import {image_Ellipse_25_link} from './assets/imageLinks.js'
import {image_Rectangle_22_link} from './assets/imageLinks.js'
import {image_Ellipse_25_2_link} from './assets/imageLinks.js'
import {image_Rectangle_22_2_link} from './assets/imageLinks.js'
import {image_icons8_user_90_1_2_link} from './assets/imageLinks.js'
import {image_Ellipse_5_link} from './assets/imageLinks.js'
import {image_Ellipse_25_3_link} from './assets/imageLinks.js'
import {image_Rectangle_22_3_link} from './assets/imageLinks.js'
import {image_Rectangle_23_5_link} from './assets/imageLinks.js'
import {image_Rectangle_24_link} from './assets/imageLinks.js'
import {image_Ellipse_25_4_link} from './assets/imageLinks.js'
import {image_Rectangle_22_4_link} from './assets/imageLinks.js'
import {image_kattarzis_02_1_link} from './assets/imageLinks.js'
import {image_Service_Care_Trasparent_2_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_3_2_link} from './assets/imageLinks.js'
const Page_DOGSTALK  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._posts}    >
				<View style = {noneModeStyles._Frame_30}    >
					<View style = {noneModeStyles._Frame_29}    >
						<View style = {noneModeStyles._posts_2}    >
							<View style = {noneModeStyles._posts_3}    >
								<View style = {noneModeStyles._photo}    >
									<View style = {noneModeStyles._Rectangle_21}    >
									</View>
									<View style = {noneModeStyles._profile}    >
										<View style = {noneModeStyles._Rectangle_23}    >
										</View>
										<View style = {noneModeStyles._bi_three_dots_vertical}    >
											<View style = {noneModeStyles._Group}    >
												<View style = {noneModeStyles.style12}    >
													<View style = {noneModeStyles.style13}   >
														<Svg style={{height: 13, width: 3}} viewBox = "0 0 3 13">
															<Path fill = {"black"}     d = "M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z"/>
														</Svg>
													</View>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._name_pic_time}    >
											<View style = {noneModeStyles._Ellipse_25_container}    >
												<View style = {noneModeStyles._Ellipse_25}   >
													<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_25_link}}/>
												</View>
											</View>
											<Text style = {noneModeStyles._Leslie_Alexander}   >
												Leslie Alexander
											</Text>
											<Text style = {noneModeStyles._32_min}   >
												32 min
											</Text>
										</View>
									</View>
									<View style = {noneModeStyles._el_heart_alt}    >
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_22_container}    >
									<View style = {noneModeStyles._Rectangle_22}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_22_link}}/>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._posts_4}    >
								<View style = {noneModeStyles._photo_2}    >
									<View style = {noneModeStyles._Rectangle_21_2}    >
									</View>
									<View style = {noneModeStyles._profile_2}    >
										<View style = {noneModeStyles._Rectangle_23_2}    >
										</View>
										<View style = {noneModeStyles._bi_three_dots_vertical_2}    >
											<View style = {noneModeStyles._Group_2}    >
												<View style = {noneModeStyles.style29}    >
													<View style = {noneModeStyles.style30}   >
														<Svg style={{height: 13, width: 3}} viewBox = "0 0 3 13">
															<Path fill = {"black"}     d = "M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z"/>
														</Svg>
													</View>
												</View>
											</View>
										</View>
										<View style = {noneModeStyles._name_pic_time_2}    >
											<View style = {noneModeStyles._Ellipse_25_container_2}    >
												<View style = {noneModeStyles._Ellipse_25_2}   >
													<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_25_2_link}}/>
												</View>
											</View>
											<Text style = {noneModeStyles._Leslie_Alexander_2}   >
												Leslie Alexander
											</Text>
											<Text style = {noneModeStyles._32_min_2}   >
												32 min
											</Text>
										</View>
									</View>
									<View style = {noneModeStyles._Follow}    >
										<View style = {noneModeStyles._Rectangle_1009}    >
										</View>
										<Text style = {noneModeStyles._Follow_2}   >
											Follow
										</Text>
									</View>
									<View style = {noneModeStyles._el_heart_alt_2}    >
									</View>
								</View>
								<View style = {noneModeStyles._Group_5009}    >
									<View style = {noneModeStyles.style41}    >
										<View style = {noneModeStyles.style42}   >
											<Svg style={{height: 26, width: 26}} viewBox = "0 0 26 26">
												<Path fill = {"#3A3A3A"}     d = "M13 0C5.82029 0 0 5.82029 0 13C0 20.1797 5.82029 26 13 26C20.1797 26 26 20.1797 26 13C26 5.82029 20.1797 0 13 0ZM15.8771 7.44256C17.4218 7.41843 18.8188 8.25823 19.4811 9.68992C20.0936 11.5826 19.581 13.5081 18.5006 14.9592C17.7875 15.9433 16.9353 16.7919 16.0639 17.5334C15.2623 18.2796 13.4681 19.7562 12.9926 19.7972C12.5723 19.7168 12.1005 19.2408 11.7668 18.9962C9.89194 17.571 7.87406 15.8385 6.8507 13.9434C5.99267 12.124 5.99112 9.873 7.3265 8.47817C9.05803 6.91713 11.6683 7.22267 12.9926 8.85354C13.3482 8.39215 13.7857 8.02878 14.3048 7.76442C14.8308 7.55447 15.3622 7.45062 15.8771 7.44256Z"/>
											</Svg>
										</View>
									</View>
									<View style = {noneModeStyles._Group_5008}    >
										<View style = {noneModeStyles._Ellipse_26}    >
										</View>
										<View style = {noneModeStyles._Frame_28}    >
											<View style = {noneModeStyles._fluent_comment_12_regular}    >
												<View style = {noneModeStyles._Group_3}    >
													<View style = {noneModeStyles.style48}    >
														<View style = {noneModeStyles.style49}   >
															<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
																<Path fill = {"white"}     d = "M2.4 0C1.76348 0 1.15303 0.252863 0.702944 0.702962C0.252856 1.15306 0 1.76353 0 2.40006V7.20019C0 7.83672 0.252856 8.44719 0.702944 8.89729C1.15303 9.34738 1.76348 9.60025 2.4 9.60025V11.4003C2.40006 11.5088 2.42955 11.6153 2.48534 11.7084C2.54113 11.8015 2.62112 11.8777 2.7168 11.929C2.81248 11.9802 2.92026 12.0045 3.02867 11.9993C3.13708 11.9941 3.24205 11.9596 3.3324 11.8995L6.7812 9.60025H9.6C10.2365 9.60025 10.847 9.34738 11.2971 8.89729C11.7471 8.44719 12 7.83672 12 7.20019V2.40006C12 1.76353 11.7471 1.15306 11.2971 0.702962C10.847 0.252863 10.2365 0 9.6 0H2.4Z"/>
															</Svg>
														</View>
													</View>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Rectangle_22_container_2}    >
									<View style = {noneModeStyles._Rectangle_22_2}   >
										<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_22_2_link}}/>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_1}    >
					<View style = {noneModeStyles._Rectangle_1}    >
					</View>
					<View style = {noneModeStyles.style54}    >
						<View style = {noneModeStyles.style55}   >
							<Svg style={{height: 14, width: 17}} viewBox = "0 0 17 14">
								<Path fill = {"white"}     d = "M16.8648 3.84C12.1587 -1.28094 4.8394 -1.27906 0.135181 3.84C-0.0417258 4.0325 -0.0451789 4.35844 0.125884 4.55813L1.03538 5.61969C1.19848 5.81031 1.46092 5.81438 1.63038 5.63156C5.50639 1.45406 11.493 1.45312 15.3698 5.63156C15.5393 5.81438 15.8018 5.81 15.9648 5.61969L16.8743 4.55813C17.0451 4.35844 17.0417 4.0325 16.8648 3.84ZM8.49998 10C7.561 10 6.79998 10.8953 6.79998 12C6.79998 13.1047 7.561 14 8.49998 14C9.43897 14 10.2 13.1047 10.2 12C10.2 10.8953 9.43897 10 8.49998 10ZM13.8834 7.38781C10.8218 4.2025 6.1747 4.20594 3.11656 7.38781C2.93328 7.57844 2.92743 7.90937 3.10142 8.11125L4.01623 9.17344C4.1756 9.35844 4.4322 9.37094 4.60193 9.19844C6.83186 6.93062 10.1732 6.93563 12.3978 9.19844C12.5675 9.37094 12.8241 9.35875 12.9835 9.17344L13.8983 8.11125C14.0725 7.90937 14.0664 7.57812 13.8834 7.38781Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style56}    >
						<View style = {noneModeStyles.style57}   >
							<Svg style={{height: 10, width: 18}} viewBox = "0 0 18 10">
								<Path fill = {"white"}     d = "M15.3 2V4H16.2V6H15.3V8H1.8V2H15.3ZM15.75 0H1.35C0.604406 0 0 0.671562 0 1.5V8.5C0 9.32844 0.604406 10 1.35 10H15.75C16.4956 10 17.1 9.32844 17.1 8.5V8H17.325C17.6978 8 18 7.66422 18 7.25V2.75C18 2.33578 17.6978 2 17.325 2H17.1V1.5C17.1 0.671562 16.4956 0 15.75 0ZM11.7 3H2.7V7H11.7V3Z"/>
							</Svg>
						</View>
					</View>
					<Text style = {noneModeStyles._9_45}   >
						9:45
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_20}    >
					<View style = {noneModeStyles._Rectangle_20_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._icons8_user_90_1}    >
					<View style = {noneModeStyles._icons8_user_90_1_container}    >
						<View style = {noneModeStyles._icons8_user_90_1_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_icons8_user_90_1_2_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._fa_solid_paw}    >
					<View style = {noneModeStyles.style65}    >
						<View style = {noneModeStyles.style66}   >
							<Svg style={{height: 21, width: 24}} viewBox = "0 0 24 21">
								<Path fill = {"black"}     d = "M12.0002 9.00019C8.27788 9.00019 3.00031 14.7545 3.00031 18.3868C3.00031 20.0227 4.25701 21 6.36307 21C8.65241 21 10.1641 19.8244 12.0002 19.8244C13.8522 19.8244 15.3681 21 17.6373 21C19.7433 21 21 20.0227 21 18.3868C21 14.7545 15.7225 9.00019 12.0002 9.00019ZM5.09653 8.4091C4.60904 6.78491 3.10719 5.73305 1.74221 6.0593C0.377229 6.38554 -0.333854 7.96661 0.153638 9.5908C0.641131 11.215 2.14298 12.2669 3.50796 11.9406C4.87294 11.6144 5.58402 10.0333 5.09653 8.4091ZM9.06771 7.43506C10.518 7.0535 11.2436 5.09416 10.6886 3.05888C10.1336 1.0236 8.50804 -0.31654 7.05775 0.0650169C5.60746 0.446573 4.88184 2.40592 5.43684 4.4412C5.99183 6.47648 7.61789 7.81708 9.06771 7.43506ZM22.2577 6.05977C20.8927 5.73352 19.3913 6.78538 18.9033 8.40957C18.4158 10.0338 19.1269 11.6148 20.4919 11.9411C21.8569 12.2673 23.3583 11.2155 23.8462 9.59127C24.3337 7.96708 23.6226 6.38601 22.2577 6.05977ZM14.9326 7.43506C16.3829 7.81661 18.0085 6.47648 18.5635 4.4412C19.1185 2.40592 18.3929 0.447042 16.9426 0.0650169C15.4923 -0.317008 13.8667 1.0236 13.3117 3.05888C12.7567 5.09416 13.4823 7.0535 14.9326 7.43506Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._majesticons_menu}    >
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles.style69}    >
							<View style = {noneModeStyles.style70}   >
								<Svg style={{height: 16, width: 20}} viewBox = "0 0 20 16">
									<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2C20 2.53043 19.7893 3.03914 19.4142 3.41421C19.0391 3.78929 18.5304 4 18 4H2C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2ZM0 8C0 7.46957 0.210714 6.96086 0.585786 6.58579C0.960859 6.21071 1.46957 6 2 6H18C18.5304 6 19.0391 6.21071 19.4142 6.58579C19.7893 6.96086 20 7.46957 20 8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10H2C1.46957 10 0.960859 9.78929 0.585786 9.41421C0.210714 9.03914 0 8.53043 0 8ZM0 14C0 13.4696 0.210714 12.9609 0.585786 12.5858C0.960859 12.2107 1.46957 12 2 12H18C18.5304 12 19.0391 12.2107 19.4142 12.5858C19.7893 12.9609 20 13.4696 20 14C20 14.5304 19.7893 15.0391 19.4142 15.4142C19.0391 15.7893 18.5304 16 18 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._mdi_dog_service}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles.style73}    >
							<View style = {noneModeStyles.style74}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M0 3.63635C0 2.67193 0.383115 1.74701 1.06506 1.06506C1.74701 0.383115 2.67193 0 3.63635 0H16.3636C17.328 0 18.2529 0.383115 18.9349 1.06506C19.6168 1.74701 20 2.67193 20 3.63635V10.9091C20 11.8735 19.6168 12.7984 18.9349 13.4804C18.2529 14.1623 17.328 14.5454 16.3636 14.5454H12.7272L7.27271 20V14.5454H3.63635C2.67193 14.5454 1.74701 14.1623 1.06506 13.4804C0.383115 12.7984 0 11.8735 0 10.9091V3.63635Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style75}    >
							<View style = {noneModeStyles.style76}   >
								<Svg style={{height: 20, width: 18}} viewBox = "0 0 18 20">
									<Path fill = {"black"}     d = "M12.5664 0V3.62248C12.5664 5.54396 11.8031 7.38674 10.4444 8.74543C9.08568 10.1041 7.2429 10.8674 5.32141 10.8674H3.19865L0 14.0679C0.507146 14.3378 1.08493 14.4899 1.69894 14.4899H5.32141L10.7551 19.9236V14.4899H14.3776C15.3383 14.4899 16.2597 14.1082 16.9391 13.4289C17.6184 12.7496 18.0001 11.8282 18.0001 10.8674V3.62248C18.0001 2.66173 17.6184 1.74034 16.9391 1.061C16.2597 0.381652 15.3383 0 14.3776 0H12.5664Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._eva_book_fill}    >
					<View style = {noneModeStyles.style78}    >
						<View style = {noneModeStyles.style79}   >
							<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
								<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._mdi_dog_side}    >
						<View style = {noneModeStyles.style81}    >
							<View style = {noneModeStyles.style82}   >
								<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
									<Path fill = {"white"}     d = "M6.98985 0.29643C6.98985 0.0328668 6.67119 -0.099126 6.48482 0.0872413L5.8065 0.765565C5.53579 1.03627 5.53579 1.47518 5.8065 1.74588L6.36228 2.30167C6.47781 2.4172 6.66513 2.4172 6.78066 2.30167C6.89619 2.18614 7.0835 2.18614 7.19904 2.30167C7.31457 2.4172 7.50188 2.4172 7.61741 2.30167L7.8266 2.09248C8.05767 1.86142 8.05767 1.48679 7.8266 1.25573L7.0765 0.505619C7.02102 0.450138 6.98985 0.374891 6.98985 0.29643ZM0.504995 1.46491C0.389463 1.34938 0.202149 1.34938 0.0866173 1.46491C-0.0289145 1.58045 -0.0289145 1.76776 0.0866172 1.88329L0.838466 2.63514C1.02677 2.82345 1.13256 3.07884 1.13256 3.34515V3.88853C1.13256 4.07795 1.05731 4.25962 0.923372 4.39356C0.789431 4.5275 0.714184 4.70916 0.714184 4.89858V6.69463C0.714184 6.9257 0.901498 7.11301 1.13256 7.11301C1.36362 7.11301 1.55094 6.9257 1.55094 6.69463V6.14958C1.55094 5.95938 1.60724 5.77343 1.71275 5.61517L2.08961 5.04987C2.27584 4.77053 2.58935 4.60275 2.92508 4.60275H4.31223C4.86678 4.60275 5.31634 5.0523 5.31634 5.60685V6.69463C5.31634 6.9257 5.50365 7.11301 5.73471 7.11301C5.96578 7.11301 6.15309 6.9257 6.15309 6.69463V3.34515C6.15309 3.07884 6.0473 2.82345 5.859 2.63514L5.1938 1.96994C5.03041 1.80655 4.76551 1.80655 4.60212 1.96994C4.52366 2.0484 4.41725 2.09248 4.30628 2.09248H1.47916C1.25723 2.09248 1.0444 2.00432 0.887481 1.8474L0.504995 1.46491Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_6}    >
				</View>
				<Text style = {noneModeStyles._WALL}   >
					WALL
				</Text>
				<View style = {noneModeStyles._akar_icons_edit}    >
					<View style = {noneModeStyles._Group_6}    >
						<View style = {noneModeStyles.style87}    >
							<View style = {noneModeStyles.style88}   >
								<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
									<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M6.47408 3.40787L8.59211 5.5249L6.47408 3.40787ZM7.8361 1.54285L2.10903 7.26992C1.81311 7.56542 1.6113 7.94191 1.52902 8.35193L1.00001 11L3.64805 10.47C4.05805 10.388 4.43406 10.187 4.73006 9.89095L10.4571 4.16388C10.6292 3.99178 10.7657 3.78747 10.8589 3.56261C10.952 3.33775 11 3.09675 11 2.85336C11 2.60998 10.952 2.36898 10.8589 2.14412C10.7657 1.91926 10.6292 1.71495 10.4571 1.54285C10.285 1.37075 10.0807 1.23423 9.85586 1.14109C9.631 1.04795 9.39 1.00001 9.14662 1.00001C8.90323 1.00001 8.66223 1.04795 8.43737 1.14109C8.21251 1.23423 8.0082 1.37075 7.8361 1.54285V1.54285Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style89}    >
							<View style = {noneModeStyles.style90}   >
								<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
									<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M16 11V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H6"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5010}    >
					<View style = {noneModeStyles._Rectangle_7}    >
					</View>
					<Text style = {noneModeStyles._Search____}   >
						Search....
					</Text>
					<View style = {noneModeStyles._eva_search_fill}    >
						<View style = {noneModeStyles.style95}    >
							<View style = {noneModeStyles.style96}   >
								<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
									<Path fill = {"#9E9E9E"}     d = "M18.6878 17.1894L15.1001 13.6122C16.2576 12.1375 16.8857 10.3164 16.8834 8.4417C16.8834 6.77209 16.3883 5.13997 15.4607 3.75174C14.5331 2.36352 13.2147 1.28152 11.6722 0.64259C10.1297 0.00365763 8.43234 -0.163516 6.79481 0.162209C5.15728 0.487933 3.65311 1.29193 2.47252 2.47252C1.29193 3.65311 0.487933 5.15728 0.162209 6.79481C-0.163516 8.43234 0.00365763 10.1297 0.64259 11.6722C1.28152 13.2147 2.36352 14.5331 3.75174 15.4607C5.13997 16.3883 6.77209 16.8834 8.4417 16.8834C10.3164 16.8857 12.1375 16.2576 13.6122 15.1001L17.1894 18.6878C17.2875 18.7867 17.4042 18.8652 17.5328 18.9188C17.6614 18.9724 17.7993 18.9999 17.9386 18.9999C18.0779 18.9999 18.2158 18.9724 18.3444 18.9188C18.473 18.8652 18.5897 18.7867 18.6878 18.6878C18.7867 18.5897 18.8652 18.473 18.9188 18.3444C18.9724 18.2158 18.9999 18.0779 18.9999 17.9386C18.9999 17.7993 18.9724 17.6614 18.9188 17.5328C18.8652 17.4042 18.7867 17.2875 18.6878 17.1894ZM2.11043 8.4417C2.11043 7.18949 2.48175 5.96541 3.17744 4.92423C3.87313 3.88306 4.86194 3.07157 6.01883 2.59237C7.17572 2.11317 8.44872 1.98779 9.67687 2.23208C10.905 2.47638 12.0331 3.07937 12.9186 3.96481C13.804 4.85026 14.407 5.97838 14.6513 7.20653C14.8956 8.43468 14.7702 9.70769 14.291 10.8646C13.8118 12.0215 13.0003 13.0103 11.9592 13.706C10.918 14.4016 9.69391 14.773 8.4417 14.773C6.76254 14.773 5.15216 14.1059 3.96481 12.9186C2.77747 11.7312 2.11043 10.1209 2.11043 8.4417Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1014}    >
				</View>
				<View style = {noneModeStyles._report_section}    >
					<View style = {noneModeStyles._Rectangle_997}    >
					</View>
					<Text style = {noneModeStyles._Report}   >
						Report
					</Text>
					<Text style = {noneModeStyles._Cancel}   >
						Cancel
					</Text>
					<View style = {noneModeStyles._Line_223}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_1_2}    >
				<View style = {noneModeStyles._Rectangle_1_2}    >
				</View>
				<View style = {noneModeStyles.style105}    >
					<View style = {noneModeStyles.style106}   >
						<Svg style={{height: 14, width: 17}} viewBox = "0 0 17 14">
							<Path fill = {"white"}     d = "M16.8648 3.84C12.1587 -1.28094 4.8394 -1.27906 0.135181 3.84C-0.0417258 4.0325 -0.0451789 4.35844 0.125884 4.55813L1.03538 5.61969C1.19848 5.81031 1.46092 5.81438 1.63038 5.63156C5.50639 1.45406 11.493 1.45312 15.3698 5.63156C15.5393 5.81438 15.8018 5.81 15.9648 5.61969L16.8743 4.55813C17.0451 4.35844 17.0417 4.0325 16.8648 3.84ZM8.49998 10C7.561 10 6.79998 10.8953 6.79998 12C6.79998 13.1047 7.561 14 8.49998 14C9.43897 14 10.2 13.1047 10.2 12C10.2 10.8953 9.43897 10 8.49998 10ZM13.8834 7.38781C10.8218 4.2025 6.1747 4.20594 3.11656 7.38781C2.93328 7.57844 2.92743 7.90937 3.10142 8.11125L4.01623 9.17344C4.1756 9.35844 4.4322 9.37094 4.60193 9.19844C6.83186 6.93062 10.1732 6.93563 12.3978 9.19844C12.5675 9.37094 12.8241 9.35875 12.9835 9.17344L13.8983 8.11125C14.0725 7.90937 14.0664 7.57812 13.8834 7.38781Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style107}    >
					<View style = {noneModeStyles.style108}   >
						<Svg style={{height: 10, width: 18}} viewBox = "0 0 18 10">
							<Path fill = {"white"}     d = "M15.3 2V4H16.2V6H15.3V8H1.8V2H15.3ZM15.75 0H1.35C0.604406 0 0 0.671562 0 1.5V8.5C0 9.32844 0.604406 10 1.35 10H15.75C16.4956 10 17.1 9.32844 17.1 8.5V8H17.325C17.6978 8 18 7.66422 18 7.25V2.75C18 2.33578 17.6978 2 17.325 2H17.1V1.5C17.1 0.671562 16.4956 0 15.75 0ZM11.7 3H2.7V7H11.7V3Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._9_45_2}   >
					9:45
				</Text>
			</View>
			<View style = {noneModeStyles._Rectangle_6_2}    >
			</View>
			<Text style = {noneModeStyles._DOGSTALK}   >
				DOGSTALK
			</Text>
			<View style = {noneModeStyles._search_interface_symbol_1}    >
				<View style = {noneModeStyles._Group_7}    >
					<View style = {noneModeStyles._x34__4}    >
						<View style = {noneModeStyles._Group_8}    >
							<View style = {noneModeStyles.style116}    >
								<View style = {noneModeStyles.style117}   >
									<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
										<Path fill = {"black"}     d = "M18.8201 17.9663L13.9145 13.1392C15.1991 11.7436 15.9884 9.89776 15.9884 7.86665C15.9878 3.52174 12.409 0 7.99391 0C3.57884 0 0 3.52174 0 7.86665C0 12.2116 3.57884 15.7333 7.99391 15.7333C9.90152 15.7333 11.6511 15.0735 13.0255 13.9766L17.9501 18.8227C18.19 19.0591 18.5796 19.0591 18.8195 18.8227C19.0601 18.5864 19.0601 18.2027 18.8201 17.9663ZM7.99391 14.523C4.25828 14.523 1.22998 11.5428 1.22998 7.86665C1.22998 4.19046 4.25828 1.21033 7.99391 1.21033C11.7296 1.21033 14.7578 4.19046 14.7578 7.86665C14.7578 11.5428 11.7296 14.523 7.99391 14.523Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_1024}    >
			</View>
			<Text style = {noneModeStyles._Adopt_dog}   >
				Adopt dog
			</Text>
			<Text style = {noneModeStyles._Missing}   >
				Missing
			</Text>
			<Text style = {noneModeStyles._Follow_3}   >
				Follow
			</Text>
			<View style = {noneModeStyles._Rectangle_1025}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1026}    >
			</View>
			<View style = {noneModeStyles._Rectangle_8}    >
			</View>
			<View style = {noneModeStyles._Group_5084}    >
				<View style = {noneModeStyles._Rectangle_7_2}    >
				</View>
				<Text style = {noneModeStyles._What_s_on_your_mind___}   >
					What’s on your mind...
				</Text>
				<View style = {noneModeStyles._bx_bxs_camera}    >
					<View style = {noneModeStyles._Group_5085}    >
						<View style = {noneModeStyles.style130}    >
							<View style = {noneModeStyles.style131}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"}     d = "M3 0C1.374 0 0 1.374 0 3C0 4.626 1.374 6 3 6C4.626 6 6 4.626 6 3C6 1.374 4.626 0 3 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style132}    >
							<View style = {noneModeStyles.style133}   >
								<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
									<Path fill = {"white"}     d = "M18 3H15.414L12.707 0.293001C12.6143 0.199958 12.5041 0.126171 12.3828 0.0758854C12.2614 0.0256001 12.1313 -0.000189449 12 1.04767e-06H8C7.86866 -0.000189449 7.73857 0.0256001 7.61724 0.0758854C7.4959 0.126171 7.38571 0.199958 7.293 0.293001L4.586 3H2C0.897 3 0 3.897 0 5V16C0 17.103 0.897 18 2 18H18C19.103 18 20 17.103 20 16V5C20 3.897 19.103 3 18 3ZM10 15C7.29 15 5 12.71 5 10C5 7.29 7.29 5 10 5C12.71 5 15 7.29 15 10C15 12.71 12.71 15 10 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_5_container}    >
				<View style = {noneModeStyles._Ellipse_5}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_5_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._dashicons_menu_alt3}    >
				<View style = {noneModeStyles.style137}    >
					<View style = {noneModeStyles.style138}   >
						<Svg style={{height: 20, width: 26}} viewBox = "0 0 26 20">
							<Path fill = {"black"}     d = "M24.05 3.9C25.127 3.9 26 3.02696 26 1.95C26 0.873044 25.127 0 24.05 0H1.95C0.873046 0 0 0.873044 0 1.95C0 3.02696 0.873045 3.9 1.95 3.9H24.05ZM24.05 11.7C25.127 11.7 26 10.827 26 9.75C26 8.67304 25.127 7.8 24.05 7.8H1.95C0.873046 7.8 0 8.67304 0 9.75C0 10.827 0.873045 11.7 1.95 11.7H24.05ZM24.05 19.5C25.127 19.5 26 18.627 26 17.55C26 16.473 25.127 15.6 24.05 15.6H1.95C0.873046 15.6 0 16.473 0 17.55C0 18.627 0.873045 19.5 1.95 19.5H24.05Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Frame_40}    >
				<View style = {noneModeStyles._Group_5091}    >
					<View style = {noneModeStyles._Group_5090}    >
						<View style = {noneModeStyles._photo_3}    >
							<View style = {noneModeStyles._Rectangle_21_3}    >
							</View>
							<View style = {noneModeStyles._profile_3}    >
								<View style = {noneModeStyles._Rectangle_23_3}    >
								</View>
								<View style = {noneModeStyles._bi_three_dots_vertical_3}    >
									<View style = {noneModeStyles._Group_9}    >
										<View style = {noneModeStyles.style148}    >
											<View style = {noneModeStyles.style149}   >
												<Svg style={{height: 13, width: 3}} viewBox = "0 0 3 13">
													<Path fill = {"black"}     d = "M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._name_pic_time_3}    >
									<View style = {noneModeStyles._Ellipse_25_container_3}    >
										<View style = {noneModeStyles._Ellipse_25_3}   >
											<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_25_3_link}}/>
										</View>
									</View>
									<Text style = {noneModeStyles._Leslie_Alexander_3}   >
										Leslie Alexander
									</Text>
									<Text style = {noneModeStyles._32_min_3}   >
										32 min
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Unfollow}    >
								<View style = {noneModeStyles._Rectangle_1009_2}    >
								</View>
								<Text style = {noneModeStyles._Unfollow_2}   >
									Unfollow
								</Text>
							</View>
							<View style = {noneModeStyles._el_heart_alt_3}    >
							</View>
						</View>
						<View style = {noneModeStyles._Rectangle_22_container_3}    >
							<View style = {noneModeStyles._Rectangle_22_3}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_22_3_link}}/>
							</View>
						</View>
						<View style = {noneModeStyles._Group_5089}    >
							<View style = {noneModeStyles._Frame_37}    >
								<View style = {noneModeStyles._Group_5081}    >
									<View style = {noneModeStyles._Group_5008_2}    >
										<View style = {noneModeStyles._Ellipse_26_2}    >
										</View>
										<View style = {noneModeStyles._Frame_28_2}    >
											<View style = {noneModeStyles._fluent_comment_12_regular_2}    >
												<View style = {noneModeStyles._Group_10}    >
													<View style = {noneModeStyles.style169}    >
														<View style = {noneModeStyles.style170}   >
															<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
																<Path fill = {"white"}     d = "M2.4 0C1.76348 0 1.15303 0.252863 0.702944 0.702962C0.252856 1.15306 0 1.76353 0 2.40006V7.20019C0 7.83672 0.252856 8.44719 0.702944 8.89729C1.15303 9.34738 1.76348 9.60025 2.4 9.60025V11.4003C2.40006 11.5088 2.42955 11.6153 2.48534 11.7084C2.54113 11.8015 2.62112 11.8777 2.7168 11.929C2.81248 11.9802 2.92026 12.0045 3.02867 11.9993C3.13708 11.9941 3.24205 11.9596 3.3324 11.8995L6.7812 9.60025H9.6C10.2365 9.60025 10.847 9.34738 11.2971 8.89729C11.7471 8.44719 12 7.83672 12 7.20019V2.40006C12 1.76353 11.7471 1.15306 11.2971 0.702962C10.847 0.252863 10.2365 0 9.6 0H2.4Z"/>
															</Svg>
														</View>
													</View>
												</View>
											</View>
										</View>
									</View>
									<Text style = {noneModeStyles._500}   >
										500
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_36}    >
								<View style = {noneModeStyles._Group_5082}    >
									<View style = {noneModeStyles.style174}    >
										<View style = {noneModeStyles.style175}   >
											<Svg style={{height: 26, width: 26}} viewBox = "0 0 26 26">
												<Path fill = {"#3A3A3A"}     d = "M13 0C5.82029 0 0 5.82029 0 13C0 20.1797 5.82029 26 13 26C20.1797 26 26 20.1797 26 13C26 5.82029 20.1797 0 13 0ZM15.8771 7.44256C17.4218 7.41843 18.8188 8.25823 19.4811 9.68992C20.0936 11.5826 19.581 13.5081 18.5006 14.9592C17.7875 15.9433 16.9353 16.7919 16.0639 17.5334C15.2623 18.2796 13.4681 19.7562 12.9926 19.7972C12.5723 19.7168 12.1005 19.2408 11.7668 18.9962C9.89194 17.571 7.87406 15.8385 6.8507 13.9434C5.99267 12.124 5.99112 9.873 7.3265 8.47817C9.05803 6.91713 11.6683 7.22267 12.9926 8.85354C13.3482 8.39215 13.7857 8.02878 14.3048 7.76442C14.8308 7.55447 15.3622 7.45062 15.8771 7.44256Z"/>
											</Svg>
										</View>
									</View>
									<Text style = {noneModeStyles._100k}   >
										100k
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_5088}    >
						<View style = {noneModeStyles._photo_4}    >
							<View style = {noneModeStyles._profile_4}    >
								<View style = {noneModeStyles._Rectangle_23_4}    >
								</View>
								<View style = {noneModeStyles._bi_three_dots_vertical_4}    >
									<View style = {noneModeStyles._Group_11}    >
										<View style = {noneModeStyles.style183}    >
											<View style = {noneModeStyles.style184}   >
												<Svg style={{height: 13, width: 3}} viewBox = "0 0 3 13">
													<Path fill = {"black"}     d = "M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._name_pic_time_4}    >
									<Text style = {noneModeStyles._Jane_Cooper}   >
										Jane Cooper
									</Text>
									<Text style = {noneModeStyles._32_min_4}   >
										32 min
									</Text>
								</View>
								<Text style = {noneModeStyles._No_matter_how_you_re_feeling__a_little_dog_gonna_love_you_}   >
									No matter how you're feeling, a little dog gonna love you.
								</Text>
							</View>
							<View style = {noneModeStyles._Follow_4}    >
								<View style = {noneModeStyles._Rectangle_1009_3}    >
								</View>
								<Text style = {noneModeStyles._Follow_5}   >
									Follow
								</Text>
							</View>
						</View>
						<View style = {noneModeStyles._Group_5087}    >
							<View style = {noneModeStyles._Rectangle_21_4}    >
							</View>
							<View style = {noneModeStyles._Group_5086}    >
								<View style = {noneModeStyles._Frame_39}    >
									<View style = {noneModeStyles._Group_5083}    >
										<View style = {noneModeStyles._Group_5008_3}    >
											<View style = {noneModeStyles._Ellipse_26_3}    >
											</View>
											<View style = {noneModeStyles._Frame_28_3}    >
												<View style = {noneModeStyles._fluent_comment_12_regular_3}    >
													<View style = {noneModeStyles._Group_12}    >
														<View style = {noneModeStyles.style202}    >
															<View style = {noneModeStyles.style203}   >
																<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
																	<Path fill = {"white"}     d = "M2.4 0C1.76348 0 1.15303 0.252863 0.702944 0.702962C0.252856 1.15306 0 1.76353 0 2.40006V7.20019C0 7.83672 0.252856 8.44719 0.702944 8.89729C1.15303 9.34738 1.76348 9.60025 2.4 9.60025V11.4003C2.40006 11.5088 2.42955 11.6153 2.48534 11.7084C2.54113 11.8015 2.62112 11.8777 2.7168 11.929C2.81248 11.9802 2.92026 12.0045 3.02867 11.9993C3.13708 11.9941 3.24205 11.9596 3.3324 11.8995L6.7812 9.60025H9.6C10.2365 9.60025 10.847 9.34738 11.2971 8.89729C11.7471 8.44719 12 7.83672 12 7.20019V2.40006C12 1.76353 11.7471 1.15306 11.2971 0.702962C10.847 0.252863 10.2365 0 9.6 0H2.4Z"/>
																</Svg>
															</View>
														</View>
													</View>
												</View>
											</View>
										</View>
										<Text style = {noneModeStyles._122}   >
											122
										</Text>
									</View>
								</View>
								<View style = {noneModeStyles._Frame_38}    >
									<View style = {noneModeStyles._Group_5084_2}    >
										<View style = {noneModeStyles.style207}    >
											<View style = {noneModeStyles.style208}   >
												<Svg style={{height: 26, width: 26}} viewBox = "0 0 26 26">
													<Path fill = {"#3A3A3A"}     d = "M13 0C5.82029 0 0 5.82029 0 13C0 20.1797 5.82029 26 13 26C20.1797 26 26 20.1797 26 13C26 5.82029 20.1797 0 13 0ZM15.8771 7.44256C17.4218 7.41843 18.8188 8.25823 19.4811 9.68992C20.0936 11.5826 19.581 13.5081 18.5006 14.9592C17.7875 15.9433 16.9353 16.7919 16.0639 17.5334C15.2623 18.2796 13.4681 19.7562 12.9926 19.7972C12.5723 19.7168 12.1005 19.2408 11.7668 18.9962C9.89194 17.571 7.87406 15.8385 6.8507 13.9434C5.99267 12.124 5.99112 9.873 7.3265 8.47817C9.05803 6.91713 11.6683 7.22267 12.9926 8.85354C13.3482 8.39215 13.7857 8.02878 14.3048 7.76442C14.8308 7.55447 15.3622 7.45062 15.8771 7.44256Z"/>
												</Svg>
											</View>
										</View>
										<Text style = {noneModeStyles._978}   >
											978
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_23_container}    >
					<View style = {noneModeStyles._Rectangle_23_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_23_5_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_24_container}    >
					<View style = {noneModeStyles._Rectangle_24}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_24_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5139}    >
					<View style = {noneModeStyles._Rectangle_21_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_23_6}    >
					</View>
					<View style = {noneModeStyles._bi_three_dots_vertical_5}    >
						<View style = {noneModeStyles._Group_13}    >
							<View style = {noneModeStyles.style219}    >
								<View style = {noneModeStyles.style220}   >
									<Svg style={{height: 13, width: 3}} viewBox = "0 0 3 13">
										<Path fill = {"black"}     d = "M3 11.4738C3 11.8707 2.84196 12.2514 2.56066 12.532C2.27936 12.8127 1.89782 12.9704 1.5 12.9704C1.10218 12.9704 0.720644 12.8127 0.43934 12.532C0.158035 12.2514 0 11.8707 0 11.4738C0 11.0769 0.158035 10.6962 0.43934 10.4156C0.720644 10.1349 1.10218 9.97722 1.5 9.97722C1.89782 9.97722 2.27936 10.1349 2.56066 10.4156C2.84196 10.6962 3 11.0769 3 11.4738ZM3 6.48519C3 6.88211 2.84196 7.26277 2.56066 7.54344C2.27936 7.8241 1.89782 7.98178 1.5 7.98178C1.10218 7.98178 0.720644 7.8241 0.43934 7.54344C0.158035 7.26277 0 6.88211 0 6.48519C0 6.08827 0.158035 5.70761 0.43934 5.42695C0.720644 5.14629 1.10218 4.98861 1.5 4.98861C1.89782 4.98861 2.27936 5.14629 2.56066 5.42695C2.84196 5.70761 3 6.08827 3 6.48519ZM3 1.49658C3 1.8935 2.84196 2.27416 2.56066 2.55483C2.27936 2.83549 1.89782 2.99317 1.5 2.99317C1.10218 2.99317 0.720644 2.83549 0.43934 2.55483C0.158035 2.27416 0 1.8935 0 1.49658C0 1.09966 0.158035 0.719003 0.43934 0.438339C0.720644 0.157675 1.10218 0 1.5 0C1.89782 0 2.27936 0.157675 2.56066 0.438339C2.84196 0.719003 3 1.09966 3 1.49658Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._name_pic_time_5}    >
						<View style = {noneModeStyles._Ellipse_25_container_4}    >
							<View style = {noneModeStyles._Ellipse_25_4}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_25_4_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Leslie_Alexander_4}   >
							Leslie Alexander
						</Text>
						<Text style = {noneModeStyles._Sponsored}   >
							Sponsored
						</Text>
					</View>
					<View style = {noneModeStyles._Rectangle_22_container_4}    >
						<View style = {noneModeStyles._Rectangle_22_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_22_4_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_37_2}    >
						<View style = {noneModeStyles._Group_5081_2}    >
							<View style = {noneModeStyles._Group_5008_4}    >
								<View style = {noneModeStyles._Frame_28_4}    >
									<View style = {noneModeStyles._fluent_comment_12_regular_4}    >
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_36_2}    >
						<View style = {noneModeStyles._Group_5138}    >
							<View style = {noneModeStyles._Ellipse_26_4}    >
							</View>
							<View style = {noneModeStyles._Group_14}    >
								<View style = {noneModeStyles.style237}    >
									<View style = {noneModeStyles.style238}   >
										<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
											<Path fill = {"white"}     d = "M2.4 0C1.76348 0 1.15303 0.252287 0.702944 0.701361C0.252856 1.15043 0 1.75951 0 2.3946V7.18379C0 7.81887 0.252856 8.42795 0.702944 8.87702C1.15303 9.32609 1.76348 9.57838 2.4 9.57838V11.3743C2.40006 11.4826 2.42955 11.5889 2.48534 11.6817C2.54113 11.7746 2.62112 11.8507 2.7168 11.9018C2.81248 11.9529 2.92026 11.9772 3.02867 11.972C3.13708 11.9668 3.24205 11.9324 3.3324 11.8724L6.7812 9.57838H9.6C10.2365 9.57838 10.847 9.32609 11.2971 8.87702C11.7471 8.42795 12 7.81887 12 7.18379V2.3946C12 1.75951 11.7471 1.15043 11.2971 0.701361C10.847 0.252287 10.2365 0 9.6 0H2.4Z"/>
										</Svg>
									</View>
								</View>
							</View>
							<Text style = {noneModeStyles._500_2}   >
								500
							</Text>
							<View style = {noneModeStyles._Group_5082_2}    >
								<View style = {noneModeStyles.style241}    >
									<View style = {noneModeStyles.style242}   >
										<Svg style={{height: 26, width: 26}} viewBox = "0 0 26 26">
											<Path fill = {"#3A3A3A"}     d = "M13 0C5.82029 0 0 5.80704 0 12.9704C0 20.1337 5.82029 25.9408 13 25.9408C20.1797 25.9408 26 20.1337 26 12.9704C26 5.80704 20.1797 0 13 0ZM15.8771 7.42561C17.4218 7.40153 18.8188 8.23942 19.4811 9.66784C20.0936 11.5562 19.581 13.4774 18.5006 14.9252C17.7875 15.9069 16.9353 16.7536 16.0639 17.4934C15.2623 18.2379 13.4681 19.7112 12.9926 19.7521C12.5723 19.6719 12.1005 19.197 11.7668 18.9529C9.89194 17.5309 7.87406 15.8024 6.8507 13.9116C5.99267 12.0964 5.99112 9.85051 7.3265 8.45885C9.05803 6.90137 11.6683 7.20622 12.9926 8.83337C13.3482 8.37303 13.7857 8.01049 14.3048 7.74674C14.8308 7.53726 15.3622 7.43365 15.8771 7.42561Z"/>
										</Svg>
									</View>
								</View>
								<Text style = {noneModeStyles._100k_2}   >
									100k
								</Text>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Follow_6}    >
						<View style = {noneModeStyles._Rectangle_1009_4}    >
						</View>
						<Text style = {noneModeStyles._Follow_7}   >
							Follow
						</Text>
					</View>
					<Text style = {noneModeStyles._A_dog_is_the_only_thing_on_earth_that_loves_you_more_than_you_love_yourself_}   >
						A dog is the only thing on earth that loves you more than you love yourself.{'\n'}
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5147}    >
				<View style = {noneModeStyles._Rectangle_1023}    >
				</View>
				<View style = {noneModeStyles._Group_5146}    >
					<View style = {noneModeStyles._Group_5125}    >
						<Text style = {noneModeStyles._About}   >
							About{'\n'}
						</Text>
						<View style = {noneModeStyles._Group_5073}    >
							<View style = {noneModeStyles._Rectangle_27}    >
							</View>
							<View style = {noneModeStyles._eva_settings_2_outline}    >
								<View style = {noneModeStyles._information_1}    >
									<View style = {noneModeStyles._Group_15}    >
										<View style = {noneModeStyles.style258}    >
											<View style = {noneModeStyles.style259}   >
												<Svg style={{height: 13, width: 13}} viewBox = "0 0 13 13">
													<Path fill = {"white"}     d = "M6.5 0C2.9159 0 0 2.91594 0 6.50004C0 10.0841 2.9159 13 6.5 13C10.0841 13 13 10.0841 13 6.50004C13 2.91594 10.0841 0 6.5 0ZM6.5 11.8182C3.56752 11.8182 1.18182 9.43249 1.18182 6.50004C1.18182 3.56759 3.56752 1.18182 6.5 1.18182C9.43248 1.18182 11.8182 3.56759 11.8182 6.50004C11.8182 9.43249 9.43245 11.8182 6.5 11.8182Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles.style260}    >
											<View style = {noneModeStyles.style261}   >
												<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
													<Path fill = {"white"}     d = "M0.999799 0C0.448499 0 0 0.448799 0 1.00045C0 1.5516 0.448499 2 0.999799 2C1.5511 2 1.9996 1.5516 1.9996 1.00045C1.9996 0.448799 1.5511 0 0.999799 0Z"/>
												</Svg>
											</View>
										</View>
										<View style = {noneModeStyles.style262}    >
											<View style = {noneModeStyles.style263}   >
												<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
													<Path fill = {"white"}     d = "M0.625 0C0.279833 0 0 0.279833 0 0.625V4.375C0 4.72017 0.279833 5 0.625 5C0.970166 5 1.25 4.72017 1.25 4.375V0.625C1.25 0.279833 0.970166 0 0.625 0Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_5099}    >
						<Text style = {noneModeStyles._Notifications}   >
							Notifications
						</Text>
						<View style = {noneModeStyles._Group_5070}    >
							<View style = {noneModeStyles._Rectangle_28}    >
							</View>
							<View style = {noneModeStyles._ic_baseline_ondemand_video}    >
								<View style = {noneModeStyles.style269}    >
									<View style = {noneModeStyles.style270}   >
										<Svg style={{height: 16, width: 12}} viewBox = "0 0 12 16">
											<Path fill = {"white"}     d = "M11.7523 12.0963C11.7077 12.0673 11.3722 11.8317 11.0362 11.119C10.4193 9.81035 10.2898 7.96682 10.2898 6.65074C10.2898 6.64501 10.2896 6.63934 10.2894 6.63364C10.2827 4.89428 9.24355 3.39488 7.75651 2.72214V1.69326C7.75651 0.759584 6.9999 0 6.06989 0H5.93011C5.0001 0 4.24348 0.759584 4.24348 1.69326V2.72208C2.75146 3.39699 1.71023 4.90405 1.71023 6.65074C1.71023 7.96682 1.58073 9.81032 0.963773 11.119C0.627852 11.8317 0.292346 12.0672 0.247738 12.0963C0.0598874 12.1834 -0.0327345 12.3847 0.0104811 12.5887C0.0541115 12.7947 0.246227 12.9367 0.456026 12.9367H3.71266C3.73085 14.1877 4.7496 15.2 6.00001 15.2C7.25042 15.2 8.26917 14.1877 8.28736 12.9367H11.544C11.7538 12.9367 11.9459 12.7947 11.9895 12.5887C12.0327 12.3847 11.9401 12.1834 11.7523 12.0963ZM5.13211 1.69326C5.13211 1.25148 5.4901 0.89208 5.93014 0.89208H6.06991C6.50995 0.89208 6.86794 1.25148 6.86794 1.69326V2.43298C6.5875 2.37488 6.29719 2.3443 5.99989 2.3443C5.70269 2.3443 5.41247 2.37485 5.13214 2.43289V1.69326H5.13211ZM6.00001 14.3079C5.23958 14.3079 4.6193 13.6959 4.60126 12.9367H7.39873C7.38072 13.6958 6.76045 14.3079 6.00001 14.3079ZM7.78906 12.0446C7.78897 12.0446 1.46859 12.0446 1.46859 12.0446C1.54545 11.9245 1.62368 11.7886 1.70143 11.6349C2.29691 10.458 2.59886 8.78112 2.59886 6.65074C2.59886 4.76805 4.12456 3.23638 5.99986 3.23638C7.87517 3.23638 9.40087 4.76805 9.40087 6.65223C9.40087 6.65772 9.40096 6.66318 9.40116 6.66864C9.40285 8.79047 9.70477 10.4614 10.2986 11.6349C10.3763 11.7886 10.4546 11.9245 10.5314 12.0446H7.78906Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_5100}    >
						<Text style = {noneModeStyles._My_Dog_s_Profile}   >
							My Dog’s Profile
						</Text>
						<View style = {noneModeStyles._Group_5077}    >
							<View style = {noneModeStyles._Rectangle_26}    >
							</View>
						</View>
						<View style = {noneModeStyles._dog__1__1}    >
							<View style = {noneModeStyles.style276}    >
								<View style = {noneModeStyles.style277}   >
									<Svg style={{height: 13, width: 16}} viewBox = "0 0 16 13">
										<Path fill = {"white"}     d = "M14.6105 1.93673C13.8894 1.05319 12.8079 0 11.75 0C11.4291 0 11.1056 0.212566 10.669 0.610168C10.0507 0.343599 8.69046 0 8.00002 0C7.30898 0 5.94876 0.343841 5.33107 0.610168C4.89445 0.212566 4.57095 0 4.25001 0C3.19216 0 2.1106 1.05319 1.38957 1.93673C0.852314 2.59506 0 3.8328 0 4.35165C0 5.32615 0.0325939 5.76364 0.850002 6.81758C1.47394 7.62206 1.54007 8.79396 1.9586 9.43032C2.23244 9.84672 2.64538 10.0127 3.12129 9.89764C3.59554 9.78299 3.90348 9.39636 4.03991 8.74666C4.56773 9.44967 4.47888 9.86289 4.51373 10.102C4.54882 11.0129 6.16042 12.5714 8.00002 12.5714C9.83658 12.5714 11.4511 11.0145 11.4863 10.102C11.521 9.8641 11.4292 9.45027 11.9597 8.74476C12.0991 9.41092 12.4603 9.93327 13.1656 9.93327C14.4873 9.93327 14.2668 7.95635 15.15 6.81761C15.9674 5.76367 16 5.32618 16 4.35168C16 3.83281 15.1477 2.59506 14.6105 1.93673ZM8.00002 8.94506C7.7397 8.94506 7.43139 8.56504 7.30414 8.32507C7.67383 8.18466 8.32595 8.1846 8.69586 8.32507C8.56864 8.56504 8.26033 8.94506 8.00002 8.94506ZM7.99998 10.878C8.32486 11.1153 8.7493 11.2585 9.18543 11.3114C8.39702 11.7015 7.60389 11.7019 6.81458 11.3114C7.25067 11.2585 7.67514 11.1153 7.99998 10.878ZM14.35 6.23736C13.5627 7.25241 13.442 8.72252 13.1561 8.96563C12.9776 8.94992 12.9116 8.42271 12.8957 8.24997C12.8138 7.35858 13 6.08502 13 5.31868C13 4.0108 11.9902 2.04274 11.9472 1.9596C11.8237 1.72074 11.5234 1.62398 11.2764 1.74335C11.0294 1.86278 10.9293 2.15322 11.0528 2.39205C11.3163 2.90161 12 4.4207 12 5.31868C12 5.82311 11.9046 6.63019 11.8806 7.4049C11.6103 7.63022 10.5 8.63352 10.5 9.91209C10.5 10.5114 8.76105 10.5132 8.44174 9.92819C8.4283 9.90354 8.40977 9.87528 8.38992 9.85132C9.14114 9.61953 9.75002 8.70511 9.75002 8.21978C9.75002 6.9219 6.25001 6.9219 6.25001 8.21978C6.25001 8.70493 6.85683 9.61887 7.61011 9.85132C7.59052 9.87495 7.57198 9.90308 7.5583 9.92817C7.23789 10.515 5.50001 10.5104 5.50001 9.91209C5.50001 8.63352 4.38976 7.63022 4.11941 7.4049C4.09626 6.65829 4.00001 5.81072 4.00001 5.31868C4.00001 4.42291 4.68382 2.90228 4.94723 2.39205C5.07073 2.15322 4.9706 1.86278 4.7236 1.74335C4.47663 1.62392 4.17626 1.72074 4.05279 1.9596C4.00979 2.04274 3.00001 4.0108 3.00001 5.31868C3.00001 6.08542 3.18619 7.35921 3.10429 8.24997C3.08841 8.42271 3.02244 8.94989 2.84394 8.96563C2.55504 8.71998 2.44004 7.25604 1.64997 6.23736C1.00691 5.40822 1.00006 5.18221 0.999971 4.37797C1.05797 4.15522 1.53178 3.30517 2.2446 2.45091C2.99613 1.55021 3.7236 1.00139 4.20507 0.968604C4.35279 1.04038 4.65879 1.32091 4.89645 1.5507C5.08579 1.73383 5.3912 1.74018 5.58851 1.56466C5.83695 1.40066 7.33151 0.967033 8.00002 0.967033C8.66852 0.967033 10.1631 1.40066 10.4115 1.56466C10.6086 1.73996 10.914 1.73401 11.1036 1.5507C11.5161 1.15177 11.7069 1.01164 11.795 0.968604C12.2765 1.00145 13.0039 1.5503 13.7554 2.45091C14.4682 3.30517 14.942 4.15522 15 4.37797C15 5.18221 14.9931 5.40822 14.35 6.23736Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style278}    >
								<View style = {noneModeStyles.style279}   >
									<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
										<Path fill = {"white"}     d = "M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style280}    >
								<View style = {noneModeStyles.style281}   >
									<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
										<Path fill = {"white"}     d = "M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_5124}    >
						<Text style = {noneModeStyles._My_Profile}   >
							My Profile{'\n'}
						</Text>
						<View style = {noneModeStyles._Group_5071}    >
							<View style = {noneModeStyles._Rectangle_26_2}    >
							</View>
						</View>
						<View style = {noneModeStyles._user__5__1}    >
							<View style = {noneModeStyles._user__6__1}    >
								<View style = {noneModeStyles.style288}    >
									<View style = {noneModeStyles.style289}   >
										<Svg style={{height: 13, width: 13}} viewBox = "0 0 13 13">
											<Path fill = {"white"}     d = "M11.0962 1.9038C9.86852 0.676125 8.23618 0 6.5 0C4.76372 0 3.13148 0.676125 1.9038 1.9038C0.676125 3.13148 0 4.76372 0 6.5C0 8.23618 0.676125 9.86852 1.9038 11.0962C3.13148 12.3239 4.76372 13 6.5 13C8.23618 13 9.86852 12.3239 11.0962 11.0962C12.3239 9.86852 13 8.23618 13 6.5C13 4.76372 12.3239 3.13148 11.0962 1.9038ZM3.25863 11.2325C3.53049 9.66718 4.8869 8.5126 6.5 8.5126C8.1132 8.5126 9.46951 9.66718 9.74137 11.2325C8.81848 11.8665 7.70189 12.2383 6.5 12.2383C5.29811 12.2383 4.18152 11.8665 3.25863 11.2325ZM4.43324 5.68413C4.43324 4.54443 5.3604 3.61737 6.5 3.61737C7.6396 3.61737 8.56676 4.54453 8.56676 5.68413C8.56676 6.82373 7.6396 7.75089 6.5 7.75089C5.3604 7.75089 4.43324 6.82373 4.43324 5.68413ZM10.4011 10.7041C10.1961 9.97544 9.78898 9.31429 9.21828 8.79785C8.86817 8.48096 8.46966 8.23093 8.04119 8.05468C8.81561 7.54955 9.32858 6.67565 9.32858 5.68413C9.32858 4.12449 8.05964 2.85565 6.5 2.85565C4.94036 2.85565 3.67152 4.12449 3.67152 5.68413C3.67152 6.67565 4.18449 7.54955 4.95881 8.05468C4.53044 8.23093 4.13183 8.48087 3.78172 8.79775C3.21112 9.31419 2.80388 9.97534 2.59887 10.704C1.46968 9.65538 0.761719 8.15892 0.761719 6.5C0.761719 3.33589 3.33589 0.761719 6.5 0.761719C9.66411 0.761719 12.2383 3.33589 12.2383 6.5C12.2383 8.15902 11.5303 9.65548 10.4011 10.7041Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._kattarzis_02_1_container}    >
						<View style = {noneModeStyles._kattarzis_02_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_kattarzis_02_1_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_1023_2}    >
			</View>
			<View style = {noneModeStyles._Nav_Bar}    >
				<View style = {noneModeStyles._Group_5080}    >
					<View style = {noneModeStyles._Rectangle_1031}    >
						<View style = {noneModeStyles._Rectangle_1031_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._heroicons_solid_chat_alt_2}    >
						<View style = {noneModeStyles._Group_16}    >
							<View style = {noneModeStyles.style299}    >
								<View style = {noneModeStyles.style300}   >
									<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
										<Path fill = {"black"}     d = "M0 2.54545C0 1.87036 0.268181 1.22291 0.745546 0.745546C1.22291 0.268181 1.87036 0 2.54545 0H11.4545C12.1296 0 12.7771 0.268181 13.2544 0.745546C13.7318 1.22291 14 1.87036 14 2.54545V7.63636C14 8.31145 13.7318 8.9589 13.2544 9.43626C12.7771 9.91363 12.1296 10.1818 11.4545 10.1818H8.90908L5.0909 14V10.1818H2.54545C1.87036 10.1818 1.22291 9.91363 0.745546 9.43626C0.268181 8.9589 0 8.31145 0 7.63636V2.54545Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style301}    >
								<View style = {noneModeStyles.style302}   >
									<Svg style={{height: 14, width: 12}} viewBox = "0 0 12 14">
										<Path fill = {"black"}     d = "M8.37754 0V2.41497C8.37754 3.69595 7.86867 4.92447 6.96288 5.83026C6.05709 6.73605 4.82858 7.24492 3.5476 7.24492H2.13242L0 9.37855C0.338096 9.55846 0.723284 9.65989 1.13262 9.65989H3.5476L7.17006 13.2824V9.65989H9.58503C10.2255 9.65989 10.8398 9.40546 11.2927 8.95256C11.7456 8.49967 12 7.88541 12 7.24492V2.41497C12 1.77448 11.7456 1.16022 11.2927 0.707329C10.8398 0.254434 10.2255 0 9.58503 0H8.37754Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._zmdi_home}    >
						<View style = {noneModeStyles.style304}    >
							<View style = {noneModeStyles.style305}   >
								<Svg style={{height: 23, width: 27}} viewBox = "0 0 27 23">
									<Path fill = {"black"}     d = "M10.8126 22.9532H5.05855C4.4998 22.9532 4.04684 22.5002 4.04684 21.9415V12.1405H0L13.4684 0L27 12.1405H22.9532V21.9415C22.9532 22.5002 22.5002 22.9532 21.9415 22.9532H16.1874V14.8595H10.8126V22.9532Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._eva_book_fill_2}    >
						<View style = {noneModeStyles.style307}    >
							<View style = {noneModeStyles.style308}   >
								<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
									<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._mdi_dog_side_2}    >
							<View style = {noneModeStyles.style310}    >
								<View style = {noneModeStyles.style311}   >
									<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
										<Path fill = {"white"}     d = "M6.98996 0.296432C6.98996 0.0328671 6.6713 -0.0991268 6.48493 0.087242L5.8066 0.765571C5.53589 1.03628 5.53589 1.47519 5.8066 1.7459L6.36239 2.30169C6.47792 2.41722 6.66524 2.41722 6.78077 2.30169C6.8963 2.18615 7.08362 2.18615 7.19915 2.30169C7.31469 2.41722 7.502 2.41722 7.61753 2.30169L7.82672 2.0925C8.05779 1.86143 8.05779 1.4868 7.82672 1.25573L7.07661 0.505623C7.02113 0.450142 6.98996 0.374894 6.98996 0.296432ZM0.50506 1.46492C0.389527 1.34939 0.202212 1.34939 0.0866792 1.46492C-0.0288534 1.58046 -0.0288535 1.76777 0.0866792 1.88331L0.838533 2.63516C1.02684 2.82347 1.13263 3.07887 1.13263 3.34518V3.88856C1.13263 4.07798 1.05738 4.25965 0.923441 4.39359C0.789498 4.52753 0.71425 4.7092 0.71425 4.89862V6.69468C0.71425 6.92575 0.901566 7.11307 1.13263 7.11307C1.3637 7.11307 1.55101 6.92575 1.55101 6.69468V6.14963C1.55101 5.95942 1.60731 5.77347 1.71282 5.61521L2.08969 5.04991C2.27591 4.77057 2.58943 4.60278 2.92516 4.60278H4.31232C4.86688 4.60278 5.31644 5.05234 5.31644 5.60689V6.69468C5.31644 6.92575 5.50375 7.11307 5.73482 7.11307C5.96589 7.11307 6.1532 6.92575 6.1532 6.69468V3.34518C6.1532 3.07887 6.04741 2.82347 5.8591 2.63516L5.1939 1.96995C5.03051 1.80657 4.76561 1.80657 4.60222 1.96996C4.52376 2.04842 4.41734 2.0925 4.30638 2.0925H1.47923C1.25731 2.0925 1.04447 2.00434 0.887549 1.84741L0.50506 1.46492Z"/>
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
export default Page_DOGSTALK

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_posts: {
	width: 414,
	height: 896,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 1846,
	top: 0,
	},
_Frame_30: {
	width: 414,
	height: 718,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 117,
	},
_Frame_29: {
	width: 372,
	height: 937,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_posts_2: {
	width: 372,
	height: 937,
	position: "absolute",
	left: 0,
	top: 0,
	},
_posts_3: {
	width: 372,
	height: 461,
	position: "absolute",
	left: 0,
	top: 0,
	},
_photo: {
	width: 372,
	height: 461,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_21: {
	width: 372,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 410,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 20,
	},
_profile: {
	width: 372,
	height: 59,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_23: {
	width: 372,
	height: 59,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_bi_three_dots_vertical: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 346,
	top: 17,
	},
_Group: {
	width: 3,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 6.5},
		{translateY: 1.5},
	],
	},
style12: {
	position: "absolute",
	},
style13: {
	},
_name_pic_time: {
	width: 137,
	height: 31,
	position: "absolute",
	left: 10,
	top: 10,
	},
_Ellipse_25_container: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_25: {
	width: "100%",
	height: "100%",
	},
_Leslie_Alexander: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_32_min: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 16,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_el_heart_alt: {
	width: 75,
	height: 75,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 149,
	top: 224,
	},
_Rectangle_22_container: {
	width: 372,
	height: 368,
	position: "absolute",
	left: 0,
	top: 51,
	},
_Rectangle_22: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_posts_4: {
	width: 372,
	height: 461,
	position: "absolute",
	left: 0,
	top: 476,
	},
_photo_2: {
	width: 372,
	height: 461,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_21_2: {
	width: 372,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 410,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 20,
	},
_profile_2: {
	width: 372,
	height: 59,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_23_2: {
	width: 372,
	height: 59,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_bi_three_dots_vertical_2: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 346,
	top: 17,
	},
_Group_2: {
	width: 3,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 6.5},
		{translateY: 1.5},
	],
	},
style29: {
	position: "absolute",
	},
style30: {
	},
_name_pic_time_2: {
	width: 137,
	height: 31,
	position: "absolute",
	left: 10,
	top: 10,
	},
_Ellipse_25_container_2: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_25_2: {
	width: "100%",
	height: "100%",
	},
_Leslie_Alexander_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_32_min_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 16,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Follow: {
	width: 51,
	height: 19,
	position: "absolute",
	left: 290,
	top: 16,
	},
_Rectangle_1009: {
	width: 51,
	height: 19,
	backgroundColor: "rgb(254, 97, 106)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 10,
	},
_Follow_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 10,
	top: 2,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_el_heart_alt_2: {
	width: 75,
	height: 75,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 149,
	top: 224,
	},
_Group_5009: {
	width: 172,
	height: 26,
	position: "absolute",
	left: 100,
	top: 427,
	},
style41: {
	position: "absolute",
	},
style42: {
	},
_Group_5008: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 146,
	top: 0,
	},
_Ellipse_26: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_28: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 6,
	top: 6,
	},
_fluent_comment_12_regular: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Group_3: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 1},
	],
	},
style48: {
	position: "absolute",
	},
style49: {
	},
_Rectangle_22_container_2: {
	width: 372,
	height: 368,
	position: "absolute",
	left: 0,
	top: 51,
	},
_Rectangle_22_2: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
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
style54: {
	position: "absolute",
	transform: [
		{translateX: 360},
		{translateY: 9},
	],
	},
style55: {
	},
style56: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 11},
	],
	},
style57: {
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
_Rectangle_20: {
	width: 414,
	height: 61,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 835,
	},
_Rectangle_20_2: {
	width: 414,
	height: 61,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: -2
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 17,
	},
_icons8_user_90_1: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 354,
	top: 854,
	},
_icons8_user_90_1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	},
_icons8_user_90_1_2: {
	width: "100%",
	height: "100%",
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
style65: {
	position: "absolute",
	transform: [
		{translateY: 1.49966},
	],
	},
style66: {
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
_Group_4: {
	width: 20,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 4},
	],
	},
style69: {
	position: "absolute",
	},
style70: {
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
_Group_5: {
	width: 28.0005,
	height: 26.2503,
	position: "absolute",
	transform: [
		{translateX: -0.000244141},
		{translateY: 2.37488},
	],
	},
style73: {
	position: "absolute",
	},
style74: {
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 10.6089},
		{translateY: 7.00009},
	],
	},
style76: {
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
style78: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
style79: {
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
style81: {
	position: "absolute",
	transform: [
		{translateX: 0.833252},
		{translateY: 1.25},
	],
	},
style82: {
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
_WALL: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 177,
	top: 48,
	color: "rgb(254, 97, 106)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_akar_icons_edit: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 374,
	top: 54,
	},
_Group_6: {
	width: 16.9998,
	height: 16.9998,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3.00018},
	],
	},
style87: {
	position: "absolute",
	transform: [
		{translateX: 7},
	],
	},
style88: {
	},
style89: {
	position: "absolute",
	transform: [
		{translateY: 1.99982},
	],
	},
style90: {
	},
_Group_5010: {
	width: 320,
	height: 48,
	position: "absolute",
	left: 47,
	top: 117,
	},
_Rectangle_7: {
	width: 320,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 16,
	},
_Search____: {
	width: 93,
	height: 22,
	position: "absolute",
	left: 51,
	top: 14,
	color: "rgb(158, 158, 158)",
	fontSize: 20,
	fontWeight: "400",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_eva_search_fill: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 12,
	top: 12,
	},
style95: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style96: {
	},
_Rectangle_1014: {
	width: 414,
	height: 896,
	backgroundColor: "rgba(0, 0, 0, 0.1)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_report_section: {
	width: 223,
	height: 149,
	position: "absolute",
	left: 96,
	top: 374,
	},
_Rectangle_997: {
	width: 223,
	height: 149,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 10,
	},
_Report: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 37,
	color: "rgb(244, 68, 79)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Cancel: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 94,
	color: "rgb(55, 119, 0)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Line_223: {
	width: 171,
	height: 1.50204e-05,
	position: "absolute",
	left: 26,
	top: 74,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Group_1_2: {
	width: 414,
	height: 33,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_1_2: {
	width: 414,
	height: 33,
	backgroundColor: "rgb(90, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
style105: {
	position: "absolute",
	transform: [
		{translateX: 360},
		{translateY: 9},
	],
	},
style106: {
	},
style107: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 11},
	],
	},
style108: {
	},
_9_45_2: {
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
_Rectangle_6_2: {
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
_DOGSTALK: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 146,
	top: 48,
	color: "rgb(255, 105, 47)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_search_interface_symbol_1: {
	width: 27,
	height: 27,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 366,
	top: 53,
	},
_Group_7: {
	width: 19,
	height: 19,
	position: "absolute",
	transform: [
		{translateX: 3.99988},
		{translateY: 4},
	],
	},
_x34__4: {
	width: 19,
	height: 19,
	position: "absolute",
	},
_Group_8: {
	width: 19,
	height: 19,
	position: "absolute",
	},
style116: {
	position: "absolute",
	},
style117: {
	},
_Rectangle_1024: {
	width: 103,
	height: 36,
	backgroundColor: "rgba(255, 105, 47, 0)",
	position: "absolute",
	left: 32,
	top: 112,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 105, 47)",
	borderRadius: 4,
	},
_Adopt_dog: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 51,
	top: 122,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Missing: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 182,
	top: 122,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Follow_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 309,
	top: 122,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_1025: {
	width: 103,
	height: 36,
	position: "absolute",
	left: 155,
	top: 112,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 105, 47)",
	borderRadius: 4,
	},
_Rectangle_1026: {
	width: 103,
	height: 36,
	position: "absolute",
	left: 278,
	top: 112,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 105, 47)",
	borderRadius: 4,
	},
_Rectangle_8: {
	width: 414,
	height: 68,
	backgroundColor: "rgb(60, 60, 60)",
	position: "absolute",
	left: 0,
	top: 158,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 105, 47)",
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 16,
	},
_Group_5084: {
	width: 317,
	height: 48,
	position: "absolute",
	left: 75,
	top: 168,
	},
_Rectangle_7_2: {
	width: 317,
	height: 48,
	backgroundColor: "rgba(255, 105, 47, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 29,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 16,
	},
_What_s_on_your_mind___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 20,
	top: 16,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_bx_bxs_camera: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 277,
	top: 12,
	},
_Group_5085: {
	width: 20,
	height: 18,
	position: "absolute",
	left: 2,
	top: 2,
	},
style130: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 7},
	],
	},
style131: {
	},
style132: {
	position: "absolute",
	},
style133: {
	},
_Ellipse_5_container: {
	width: 47,
	height: 47,
	position: "absolute",
	left: 22,
	top: 169,
	},
_Ellipse_5: {
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
style137: {
	position: "absolute",
	transform: [
		{translateY: 2.60001},
	],
	},
style138: {
	},
_Frame_40: {
	width: 414,
	height: 610,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 226,
	},
_Group_5091: {
	width: 372,
	height: 965,
	},
_Group_5090: {
	width: 372,
	height: 461,
	position: "absolute",
	left: 0,
	top: 0,
	},
_photo_3: {
	width: 372,
	height: 461,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_21_3: {
	width: 372,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 410,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 20,
	},
_profile_3: {
	width: 372,
	height: 70,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_23_3: {
	width: 372,
	height: 70,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_bi_three_dots_vertical_3: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 346,
	top: 17,
	},
_Group_9: {
	width: 3,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 6.5},
		{translateY: 1.5},
	],
	},
style148: {
	position: "absolute",
	},
style149: {
	},
_name_pic_time_3: {
	width: 137,
	height: 31,
	position: "absolute",
	left: 16,
	top: 10,
	},
_Ellipse_25_container_3: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_25_3: {
	width: "100%",
	height: "100%",
	},
_Leslie_Alexander_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_32_min_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 16,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Unfollow: {
	width: 51,
	height: 19,
	position: "absolute",
	left: 290,
	top: 16,
	},
_Rectangle_1009_2: {
	width: 51,
	height: 19,
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 105, 47)",
	borderRadius: 10,
	},
_Unfollow_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 4,
	top: 2,
	color: "rgb(255, 105, 47)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_el_heart_alt_3: {
	width: 75,
	height: 75,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 149,
	top: 224,
	},
_Rectangle_22_container_3: {
	width: 372,
	height: 368,
	position: "absolute",
	left: 0,
	top: 51,
	},
_Rectangle_22_3: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_Group_5089: {
	width: 184,
	height: 26,
	position: "absolute",
	left: 94,
	top: 427,
	},
_Frame_37: {
	width: 50,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 134,
	top: 0,
	},
_Group_5081: {
	width: 60,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_5008_2: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_26_2: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_28_2: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 6,
	top: 6,
	},
_fluent_comment_12_regular_2: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Group_10: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 0.999878},
		{translateY: 0.999985},
	],
	},
style169: {
	position: "absolute",
	},
style170: {
	},
_500: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 2,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Frame_36: {
	width: 53,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_5082: {
	width: 65,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
style174: {
	position: "absolute",
	},
style175: {
	},
_100k: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 3,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5088: {
	width: 372,
	height: 489,
	position: "absolute",
	left: 0,
	top: 476,
	},
_photo_4: {
	width: 372,
	height: 93,
	position: "absolute",
	left: 0,
	top: 0,
	},
_profile_4: {
	width: 372,
	height: 93,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_23_4: {
	width: 372,
	height: 93,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_bi_three_dots_vertical_4: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 346,
	top: 17,
	},
_Group_11: {
	width: 3,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 6.5},
		{translateY: 1.5},
	],
	},
style183: {
	position: "absolute",
	},
style184: {
	},
_name_pic_time_4: {
	width: 78,
	height: 31,
	position: "absolute",
	left: 56,
	top: 10,
	},
_Jane_Cooper: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_32_min_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 16,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_No_matter_how_you_re_feeling__a_little_dog_gonna_love_you_: {
	width: 346,
	height: "auto",
	position: "absolute",
	left: 16,
	top: 51,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Follow_4: {
	width: 57,
	height: 23,
	position: "absolute",
	left: 287,
	top: 14,
	},
_Rectangle_1009_3: {
	width: 57,
	height: 23,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 11.5,
	},
_Follow_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 13,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5087: {
	width: 372,
	height: 51,
	position: "absolute",
	left: 0,
	top: 438,
	},
_Rectangle_21_4: {
	width: 372,
	height: 51,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 20,
	},
_Group_5086: {
	width: 181,
	height: 26,
	position: "absolute",
	left: 94,
	top: 17,
	},
_Frame_39: {
	width: 47,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 134,
	top: 0,
	},
_Group_5083: {
	width: 55,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_5008_3: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_26_3: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_28_3: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 6,
	top: 6,
	},
_fluent_comment_12_regular_3: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Group_12: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 0.999878},
		{translateY: 1},
	],
	},
style202: {
	position: "absolute",
	},
style203: {
	},
_122: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 3,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Frame_38: {
	width: 49,
	height: 26,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_5084_2: {
	width: 59,
	height: 26,
	position: "absolute",
	left: 0,
	top: 0,
	},
style207: {
	position: "absolute",
	},
style208: {
	},
_978: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 3,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_23_container: {
	width: 372,
	height: 368,
	},
_Rectangle_23_5: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_Rectangle_24_container: {
	width: 34,
	height: 34,
	},
_Rectangle_24: {
	width: "100%",
	height: "100%",
	borderRadius: 18.5,
	},
_Group_5139: {
	width: 372,
	height: 438,
	},
_Rectangle_21_5: {
	width: 372,
	height: 58.8656,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 379.134,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 20,
	},
_Rectangle_23_6: {
	width: 372,
	height: 121.722,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 16,
	},
_bi_three_dots_vertical_5: {
	width: 16,
	height: 15.9636,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 346,
	top: 16.9613,
	},
_Group_13: {
	width: 3,
	height: 12.9704,
	position: "absolute",
	transform: [
		{translateX: 6.5},
		{translateY: 1.49658},
	],
	},
style219: {
	position: "absolute",
	},
style220: {
	},
_name_pic_time_5: {
	width: 137,
	height: 30.9294,
	position: "absolute",
	left: 16,
	top: 9.97723,
	},
_Ellipse_25_container_4: {
	width: 30,
	height: 29.9316,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Ellipse_25_4: {
	width: "100%",
	height: "100%",
	},
_Leslie_Alexander_4: {
	width: 97,
	height: 17.959,
	position: "absolute",
	left: 40,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Sponsored: {
	width: 54,
	height: 14.9658,
	position: "absolute",
	left: 40,
	top: 15.9636,
	color: "rgb(255, 105, 47)",
	fontSize: 10,
	fontWeight: "400",
	lineHeight: 11.7188,
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_22_container_4: {
	width: 372,
	height: 304.305,
	position: "absolute",
	left: 0,
	top: 90.7927,
	},
_Rectangle_22_4: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_Frame_37_2: {
	width: 50,
	height: 25.9408,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 228,
	top: 412.059,
	},
_Group_5081_2: {
	width: 14,
	height: 13,
	position: "absolute",
	left: -49,
	top: -7,
	},
_Group_5008_4: {
	width: 14,
	height: 13,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_28_4: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_fluent_comment_12_regular_4: {
	width: 14,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Frame_36_2: {
	width: 53,
	height: 25.9408,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 94,
	top: 412.059,
	},
_Group_5138: {
	width: 194,
	height: 26,
	position: "absolute",
	left: -5,
	top: -9,
	},
_Ellipse_26_4: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 134,
	top: 0,
	},
_Group_14: {
	width: 12,
	height: 11.9726,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 7.00452},
	],
	},
style237: {
	position: "absolute",
	},
style238: {
	},
_500_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 168,
	top: 2,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5082_2: {
	width: 65,
	height: 25.9408,
	position: "absolute",
	left: 0,
	top: 0.0205078,
	},
style241: {
	position: "absolute",
	},
style242: {
	},
_100k_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 2.97949,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Follow_6: {
	width: 57,
	height: 22.9476,
	position: "absolute",
	left: 279,
	top: 13.9681,
	},
_Rectangle_1009_4: {
	width: 57,
	height: 22.9476,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 11.5,
	},
_Follow_7: {
	width: 32,
	height: 14.9658,
	position: "absolute",
	left: 13,
	top: 3.99091,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	lineHeight: 11.7188,
	fontFamily: "Poppins",
	textAlign: "left",
	},
_A_dog_is_the_only_thing_on_earth_that_loves_you_more_than_you_love_yourself_: {
	width: 338,
	height: 32.9248,
	position: "absolute",
	left: 16,
	top: 47.8907,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5147: {
	width: 299,
	height: 805,
	position: "absolute",
	left: 0,
	top: 30,
	},
_Rectangle_1023: {
	width: 299,
	height: 805,
	backgroundColor: "rgb(255, 105, 47)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_5146: {
	width: 179,
	height: 294,
	position: "absolute",
	left: 30,
	top: 24,
	},
_Group_5125: {
	width: 95,
	height: 28,
	position: "absolute",
	left: 0,
	top: 266,
	},
_About: {
	width: 52,
	height: 24,
	position: "absolute",
	left: 43,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 21.0938,
	fontFamily: "ABeeZee",
	textAlign: "left",
	},
_Group_5073: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_27: {
	width: 28,
	height: 28,
	backgroundColor: "rgb(255, 152, 113)",
	position: "absolute",
	borderRadius: 4,
	},
_eva_settings_2_outline: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 2,
	top: 4,
	},
_information_1: {
	width: 13,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 5,
	top: 4,
	},
_Group_15: {
	width: 13,
	height: 13,
	position: "absolute",
	},
style258: {
	position: "absolute",
	},
style259: {
	},
style260: {
	position: "absolute",
	transform: [
		{translateX: 5.71222},
		{translateY: 2.7576},
	],
	},
style261: {
	},
style262: {
	position: "absolute",
	transform: [
		{translateX: 5.90912},
		{translateY: 5.51527},
	],
	},
style263: {
	},
_Group_5099: {
	width: 150,
	height: 28,
	position: "absolute",
	left: 0,
	top: 222,
	},
_Notifications: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 43,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "ABeeZee",
	textAlign: "left",
	},
_Group_5070: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_28: {
	width: 28,
	height: 28,
	backgroundColor: "rgb(255, 152, 113)",
	position: "absolute",
	borderRadius: 4,
	},
_ic_baseline_ondemand_video: {
	width: 19,
	height: 19,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 6,
	top: 5,
	},
style269: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 1},
	],
	},
style270: {
	},
_Group_5100: {
	width: 179,
	height: 28,
	position: "absolute",
	left: 0,
	top: 178,
	},
_My_Dog_s_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 43,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "ABeeZee",
	textAlign: "left",
	},
_Group_5077: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_26: {
	width: 28,
	height: 28,
	backgroundColor: "rgb(255, 152, 113)",
	position: "absolute",
	borderRadius: 4,
	},
_dog__1__1: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 6,
	top: 6,
	},
style276: {
	position: "absolute",
	transform: [
		{translateY: 1.14285},
	],
	},
style277: {
	},
style278: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 6},
	],
	},
style279: {
	},
style280: {
	position: "absolute",
	transform: [
		{translateX: 9.75},
		{translateY: 6},
	],
	},
style281: {
	},
_Group_5124: {
	width: 154,
	height: 28,
	position: "absolute",
	left: 0,
	top: 134,
	},
_My_Profile: {
	width: 111,
	height: 22,
	position: "absolute",
	left: 43,
	top: 3,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	lineHeight: 21.0938,
	fontFamily: "ABeeZee",
	textAlign: "left",
	},
_Group_5071: {
	width: 28,
	height: 28,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_26_2: {
	width: 28,
	height: 28,
	backgroundColor: "rgb(255, 152, 113)",
	position: "absolute",
	borderRadius: 4,
	},
_user__5__1: {
	width: 13,
	height: 15,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 7,
	},
_user__6__1: {
	width: 13,
	height: 13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 1,
	},
style288: {
	position: "absolute",
	},
style289: {
	},
_kattarzis_02_1_container: {
	width: 82,
	height: 82,
	position: "absolute",
	left: 72,
	top: 0,
	},
_kattarzis_02_1: {
	width: "100%",
	height: "100%",
	},
_Rectangle_1023_2: {
	width: 115,
	height: 805,
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	position: "absolute",
	left: 299,
	top: 30,
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
_Group_16: {
	width: 19.2,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 2.40002},
		{translateY: 3.60001},
	],
	},
style299: {
	position: "absolute",
	},
style300: {
	},
style301: {
	position: "absolute",
	transform: [
		{translateX: 7.27441},
		{translateY: 4.79999},
	],
	},
style302: {
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
style304: {
	position: "absolute",
	},
style305: {
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
style307: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
style308: {
	},
_mdi_dog_side_2: {
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
style310: {
	position: "absolute",
	transform: [
		{translateX: 0.833313},
		{translateY: 1.25},
	],
	},
style311: {
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
})

