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
import {image_Service_Care_Trasparent_2_2_link} from './assets/imageLinks.js'
import {image_Match_Heart_Transparent_3_2_link} from './assets/imageLinks.js'
import {image_Ellipse_5_link} from './assets/imageLinks.js'
import {image_Ellipse_25_3_link} from './assets/imageLinks.js'
import {image_Rectangle_23_5_link} from './assets/imageLinks.js'
import {image_Rectangle_24_link} from './assets/imageLinks.js'
import {image_Ellipse_25_4_link} from './assets/imageLinks.js'
import {image_Rectangle_22_3_link} from './assets/imageLinks.js'
const Page_DOGSTALK_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page11}    >
			<View style = {noneModeStyles._viewport}    >
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
													<View style = {noneModeStyles._layer_6e838e}    >
														<View style = {noneModeStyles._layer_57326a}   >
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
													<View style = {noneModeStyles._layer_50eb57}    >
														<View style = {noneModeStyles._layer_df5f7e}   >
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
										<View style = {noneModeStyles._layer_534a32}    >
											<View style = {noneModeStyles._layer_1056b6}   >
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
														<View style = {noneModeStyles._layer_6aab3f}    >
															<View style = {noneModeStyles._layer_afcf6a}   >
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
						<View style = {noneModeStyles._layer_d44597}    >
							<View style = {noneModeStyles._layer_8503ab}   >
								<Svg style={{height: 14, width: 17}} viewBox = "0 0 17 14">
									<Path fill = {"white"}     d = "M16.8648 3.84C12.1587 -1.28094 4.8394 -1.27906 0.135181 3.84C-0.0417258 4.0325 -0.0451789 4.35844 0.125884 4.55813L1.03538 5.61969C1.19848 5.81031 1.46092 5.81438 1.63038 5.63156C5.50639 1.45406 11.493 1.45312 15.3698 5.63156C15.5393 5.81438 15.8018 5.81 15.9648 5.61969L16.8743 4.55813C17.0451 4.35844 17.0417 4.0325 16.8648 3.84ZM8.49998 10C7.561 10 6.79998 10.8953 6.79998 12C6.79998 13.1047 7.561 14 8.49998 14C9.43897 14 10.2 13.1047 10.2 12C10.2 10.8953 9.43897 10 8.49998 10ZM13.8834 7.38781C10.8218 4.2025 6.1747 4.20594 3.11656 7.38781C2.93328 7.57844 2.92743 7.90937 3.10142 8.11125L4.01623 9.17344C4.1756 9.35844 4.4322 9.37094 4.60193 9.19844C6.83186 6.93062 10.1732 6.93563 12.3978 9.19844C12.5675 9.37094 12.8241 9.35875 12.9835 9.17344L13.8983 8.11125C14.0725 7.90937 14.0664 7.57812 13.8834 7.38781Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_535110}    >
							<View style = {noneModeStyles._layer_8dabae}   >
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
						<View style = {noneModeStyles._layer_1ee25c}    >
							<View style = {noneModeStyles._layer_302ff4}   >
								<Svg style={{height: 21, width: 24}} viewBox = "0 0 24 21">
									<Path fill = {"black"}     d = "M12.0002 9.00019C8.27788 9.00019 3.00031 14.7545 3.00031 18.3868C3.00031 20.0227 4.25701 21 6.36307 21C8.65241 21 10.1641 19.8244 12.0002 19.8244C13.8522 19.8244 15.3681 21 17.6373 21C19.7433 21 21 20.0227 21 18.3868C21 14.7545 15.7225 9.00019 12.0002 9.00019ZM5.09653 8.4091C4.60904 6.78491 3.10719 5.73305 1.74221 6.0593C0.377229 6.38554 -0.333854 7.96661 0.153638 9.5908C0.641131 11.215 2.14298 12.2669 3.50796 11.9406C4.87294 11.6144 5.58402 10.0333 5.09653 8.4091ZM9.06771 7.43506C10.518 7.0535 11.2436 5.09416 10.6886 3.05888C10.1336 1.0236 8.50804 -0.31654 7.05775 0.0650169C5.60746 0.446573 4.88184 2.40592 5.43684 4.4412C5.99183 6.47648 7.61789 7.81708 9.06771 7.43506ZM22.2577 6.05977C20.8927 5.73352 19.3913 6.78538 18.9033 8.40957C18.4158 10.0338 19.1269 11.6148 20.4919 11.9411C21.8569 12.2673 23.3583 11.2155 23.8462 9.59127C24.3337 7.96708 23.6226 6.38601 22.2577 6.05977ZM14.9326 7.43506C16.3829 7.81661 18.0085 6.47648 18.5635 4.4412C19.1185 2.40592 18.3929 0.447042 16.9426 0.0650169C15.4923 -0.317008 13.8667 1.0236 13.3117 3.05888C12.7567 5.09416 13.4823 7.0535 14.9326 7.43506Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._majesticons_menu}    >
						<View style = {noneModeStyles._Group_4}    >
							<View style = {noneModeStyles._layer_d760a7}    >
								<View style = {noneModeStyles._layer_f842cc}   >
									<Svg style={{height: 16, width: 20}} viewBox = "0 0 20 16">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2C20 2.53043 19.7893 3.03914 19.4142 3.41421C19.0391 3.78929 18.5304 4 18 4H2C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2ZM0 8C0 7.46957 0.210714 6.96086 0.585786 6.58579C0.960859 6.21071 1.46957 6 2 6H18C18.5304 6 19.0391 6.21071 19.4142 6.58579C19.7893 6.96086 20 7.46957 20 8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10H2C1.46957 10 0.960859 9.78929 0.585786 9.41421C0.210714 9.03914 0 8.53043 0 8ZM0 14C0 13.4696 0.210714 12.9609 0.585786 12.5858C0.960859 12.2107 1.46957 12 2 12H18C18.5304 12 19.0391 12.2107 19.4142 12.5858C19.7893 12.9609 20 13.4696 20 14C20 14.5304 19.7893 15.0391 19.4142 15.4142C19.0391 15.7893 18.5304 16 18 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._mdi_dog_service}    >
						<View style = {noneModeStyles._Group_5}    >
							<View style = {noneModeStyles._layer_793870}    >
								<View style = {noneModeStyles._layer_5aafaa}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M0 3.63637C0 2.67194 0.383116 1.74702 1.06507 1.06507C1.74702 0.383116 2.67194 0 3.63637 0H16.3636C17.3281 0 18.253 0.383116 18.9349 1.06507C19.6169 1.74702 20 2.67194 20 3.63637V10.9091C20 11.8735 19.6169 12.7984 18.9349 13.4804C18.253 14.1623 17.3281 14.5455 16.3636 14.5455H12.7273L7.27273 20V14.5455H3.63637C2.67194 14.5455 1.74702 14.1623 1.06507 13.4804C0.383116 12.7984 0 11.8735 0 10.9091V3.63637Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_ddd0b9}    >
								<View style = {noneModeStyles._layer_74cd10}   >
									<Svg style={{height: 20, width: 18}} viewBox = "0 0 18 20">
										<Path fill = {"black"}     d = "M12.5663 0V3.62246C12.5663 5.54394 11.803 7.38671 10.4443 8.7454C9.08564 10.1041 7.24287 10.8674 5.3214 10.8674H3.19863L0 14.0678C0.507145 14.3377 1.08493 14.4898 1.69893 14.4898H5.3214L10.7551 19.9235V14.4898H14.3776C15.3383 14.4898 16.2597 14.1082 16.939 13.4289C17.6184 12.7495 18 11.8281 18 10.8674V3.62246C18 2.66173 17.6184 1.74034 16.939 1.06099C16.2597 0.381651 15.3383 0 14.3776 0H12.5663Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._eva_book_fill}    >
						<View style = {noneModeStyles._layer_9fb616}    >
							<View style = {noneModeStyles._layer_9faf9a}   >
								<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
									<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._mdi_dog_side}    >
							<View style = {noneModeStyles._layer_fb28e3}    >
								<View style = {noneModeStyles._layer_4efa43}   >
									<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
										<Path fill = {"white"}     d = "M6.98996 0.296432C6.98996 0.0328671 6.6713 -0.0991268 6.48493 0.087242L5.8066 0.765571C5.53589 1.03628 5.53589 1.47519 5.8066 1.7459L6.36239 2.30169C6.47792 2.41722 6.66524 2.41722 6.78077 2.30169C6.8963 2.18615 7.08362 2.18615 7.19915 2.30169C7.31469 2.41722 7.502 2.41722 7.61753 2.30169L7.82672 2.0925C8.05779 1.86143 8.05779 1.4868 7.82672 1.25573L7.07661 0.505623C7.02113 0.450142 6.98996 0.374894 6.98996 0.296432ZM0.50506 1.46492C0.389527 1.34939 0.202212 1.34939 0.0866792 1.46492C-0.0288534 1.58046 -0.0288535 1.76777 0.0866792 1.88331L0.838533 2.63516C1.02684 2.82347 1.13263 3.07887 1.13263 3.34518V3.88856C1.13263 4.07798 1.05738 4.25965 0.923441 4.39359C0.789498 4.52753 0.71425 4.7092 0.71425 4.89862V6.69468C0.71425 6.92575 0.901566 7.11307 1.13263 7.11307C1.3637 7.11307 1.55101 6.92575 1.55101 6.69468V6.14963C1.55101 5.95942 1.60731 5.77347 1.71282 5.61521L2.08969 5.04991C2.27591 4.77057 2.58943 4.60278 2.92516 4.60278H4.31232C4.86688 4.60278 5.31644 5.05234 5.31644 5.60689V6.69468C5.31644 6.92575 5.50375 7.11307 5.73482 7.11307C5.96589 7.11307 6.1532 6.92575 6.1532 6.69468V3.34518C6.1532 3.07887 6.04741 2.82347 5.8591 2.63516L5.1939 1.96995C5.03051 1.80657 4.76561 1.80657 4.60222 1.96996C4.52376 2.04842 4.41734 2.0925 4.30638 2.0925H1.47923C1.25731 2.0925 1.04447 2.00434 0.887549 1.84741L0.50506 1.46492Z"/>
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
							<View style = {noneModeStyles._layer_66be2a}    >
								<View style = {noneModeStyles._layer_7b407b}   >
									<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
										<Path fill = {"none"}   stroke = {"black"} strokeWidth = {2} d = "M6.47407 3.40786L8.59209 5.52488L6.47407 3.40786ZM7.83608 1.54284L2.10902 7.2699C1.81311 7.5654 1.61129 7.94189 1.52902 8.35191L1.00001 10.9999L3.64804 10.4699C4.05804 10.3879 4.43404 10.1869 4.73005 9.89093L10.4571 4.16387C10.6292 3.99177 10.7657 3.78746 10.8589 3.5626C10.952 3.33774 10.9999 3.09674 10.9999 2.85336C10.9999 2.60997 10.952 2.36897 10.8589 2.14411C10.7657 1.91925 10.6292 1.71494 10.4571 1.54284C10.285 1.37074 10.0807 1.23423 9.85584 1.14109C9.63098 1.04795 9.38998 1.00001 9.14659 1.00001C8.90321 1.00001 8.66221 1.04795 8.43735 1.14109C8.21249 1.23423 8.00818 1.37074 7.83608 1.54284V1.54284Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_ac9b14}    >
								<View style = {noneModeStyles._layer_a2aff3}   >
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
							<View style = {noneModeStyles._layer_28afcd}    >
								<View style = {noneModeStyles._layer_a6f394}   >
									<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
										<Path fill = {"#9E9E9E"}     d = "M18.6879 17.1895L15.1001 13.6123C16.2577 12.1376 16.8858 10.3165 16.8835 8.44173C16.8835 6.77211 16.3884 5.13999 15.4608 3.75176C14.5332 2.36352 13.2148 1.28153 11.6722 0.642592C10.1297 0.00365764 8.43236 -0.163517 6.79483 0.162209C5.1573 0.487935 3.65312 1.29193 2.47253 2.47253C1.29193 3.65312 0.487935 5.1573 0.162209 6.79483C-0.163517 8.43236 0.00365764 10.1297 0.642592 11.6722C1.28153 13.2148 2.36352 14.5332 3.75176 15.4608C5.13999 16.3884 6.77211 16.8835 8.44173 16.8835C10.3165 16.8858 12.1376 16.2577 13.6123 15.1001L17.1895 18.6879C17.2876 18.7868 17.4043 18.8653 17.5329 18.9189C17.6614 18.9724 17.7994 19 17.9387 19C18.078 19 18.2159 18.9724 18.3445 18.9189C18.4731 18.8653 18.5898 18.7868 18.6879 18.6879C18.7868 18.5898 18.8653 18.4731 18.9189 18.3445C18.9724 18.2159 19 18.078 19 17.9387C19 17.7994 18.9724 17.6614 18.9189 17.5329C18.8653 17.4043 18.7868 17.2876 18.6879 17.1895ZM2.11044 8.44173C2.11044 7.18952 2.48176 5.96543 3.17745 4.92425C3.87314 3.88308 4.86196 3.07158 6.01885 2.59238C7.17574 2.11318 8.44875 1.98779 9.6769 2.23209C10.9051 2.47638 12.0332 3.07938 12.9186 3.96483C13.8041 4.85028 14.4071 5.9784 14.6514 7.20656C14.8957 8.43471 14.7703 9.70772 14.2911 10.8646C13.8119 12.0215 13.0004 13.0103 11.9592 13.706C10.918 14.4017 9.69394 14.773 8.44173 14.773C6.76257 14.773 5.15218 14.106 3.96483 12.9186C2.77748 11.7313 2.11044 10.1209 2.11044 8.44173Z"/>
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
					<View style = {noneModeStyles._layer_58861f}    >
						<View style = {noneModeStyles._layer_655931}   >
							<Svg style={{height: 14, width: 17}} viewBox = "0 0 17 14">
								<Path fill = {"white"}     d = "M16.8648 3.84C12.1587 -1.28094 4.8394 -1.27906 0.135181 3.84C-0.0417258 4.0325 -0.0451789 4.35844 0.125884 4.55813L1.03538 5.61969C1.19848 5.81031 1.46092 5.81438 1.63038 5.63156C5.50639 1.45406 11.493 1.45312 15.3698 5.63156C15.5393 5.81438 15.8018 5.81 15.9648 5.61969L16.8743 4.55813C17.0451 4.35844 17.0417 4.0325 16.8648 3.84ZM8.49998 10C7.561 10 6.79998 10.8953 6.79998 12C6.79998 13.1047 7.561 14 8.49998 14C9.43897 14 10.2 13.1047 10.2 12C10.2 10.8953 9.43897 10 8.49998 10ZM13.8834 7.38781C10.8218 4.2025 6.1747 4.20594 3.11656 7.38781C2.93328 7.57844 2.92743 7.90937 3.10142 8.11125L4.01623 9.17344C4.1756 9.35844 4.4322 9.37094 4.60193 9.19844C6.83186 6.93062 10.1732 6.93563 12.3978 9.19844C12.5675 9.37094 12.8241 9.35875 12.9835 9.17344L13.8983 8.11125C14.0725 7.90937 14.0664 7.57812 13.8834 7.38781Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_5d0253}    >
						<View style = {noneModeStyles._layer_0e666b}   >
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
				<Text style = {noneModeStyles._MOBSTALK}   >
					MOBSTALK
				</Text>
				<View style = {noneModeStyles._search_interface_symbol_1}    >
					<View style = {noneModeStyles._Group_7}    >
						<View style = {noneModeStyles._x34__4}    >
							<View style = {noneModeStyles._Group_8}    >
								<View style = {noneModeStyles._layer_3cf8fb}    >
									<View style = {noneModeStyles._layer_6e4c41}   >
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
				<View style = {noneModeStyles._Rectangle_1025}    >
				</View>
				<View style = {noneModeStyles._Rectangle_1026}    >
				</View>
				<View style = {noneModeStyles._Nav_Bar}    >
					<View style = {noneModeStyles._Group_5080}    >
						<View style = {noneModeStyles._Rectangle_1031}    >
							<View style = {noneModeStyles._Rectangle_1031_2}    >
							</View>
						</View>
						<View style = {noneModeStyles._heroicons_solid_chat_alt_2}    >
							<View style = {noneModeStyles._Group_9}    >
								<View style = {noneModeStyles._layer_1d7d68}    >
									<View style = {noneModeStyles._layer_29cd24}   >
										<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
											<Path fill = {"black"}     d = "M0 2.54545C0 1.87036 0.268181 1.22291 0.745546 0.745546C1.22291 0.268181 1.87036 0 2.54545 0H11.4545C12.1296 0 12.7771 0.268181 13.2544 0.745546C13.7318 1.22291 14 1.87036 14 2.54545V7.63636C14 8.31145 13.7318 8.9589 13.2544 9.43626C12.7771 9.91363 12.1296 10.1818 11.4545 10.1818H8.90908L5.0909 14V10.1818H2.54545C1.87036 10.1818 1.22291 9.91363 0.745546 9.43626C0.268181 8.9589 0 8.31145 0 7.63636V2.54545Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._layer_1a831f}    >
									<View style = {noneModeStyles._layer_d0eb02}   >
										<Svg style={{height: 14, width: 12}} viewBox = "0 0 12 14">
											<Path fill = {"black"}     d = "M8.3775 0V2.41496C8.3775 3.69594 7.86863 4.92445 6.96285 5.83023C6.05706 6.73602 4.82855 7.24488 3.54758 7.24488H2.13241L0 9.3785C0.338095 9.55841 0.72328 9.65984 1.13262 9.65984H3.54758L7.17002 13.2823V9.65984H9.58498C10.2255 9.65984 10.8397 9.40541 11.2926 8.95252C11.7455 8.49962 11.9999 7.88537 11.9999 7.24488V2.41496C11.9999 1.77447 11.7455 1.16022 11.2926 0.707325C10.8397 0.254433 10.2255 0 9.58498 0H8.3775Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._zmdi_home}    >
							<View style = {noneModeStyles._layer_bd555f}    >
								<View style = {noneModeStyles._layer_24b544}   >
									<Svg style={{height: 29, width: 33}} viewBox = "0 0 33 29">
										<Path fill = {"#FF692F"}     d = "M13.2155 28.6915H5.95785C5.3991 28.6915 4.94614 28.2385 4.94614 27.6798V15.1757H0L16.4614 0L33 15.1757H28.0539V27.6798C28.0539 28.2385 27.6009 28.6915 27.0422 28.6915H19.7846V18.5744H13.2155V28.6915Z"/>
									</Svg>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._eva_book_fill_2}    >
							<View style = {noneModeStyles._layer_d56709}    >
								<View style = {noneModeStyles._layer_109fc0}   >
									<Svg style={{height: 18, width: 16}} viewBox = "0 0 16 18">
										<Path fill = {"black"}     d = "M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0ZM3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H14V16H3Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._mdi_dog_side_2}    >
								<View style = {noneModeStyles._layer_4ed12f}    >
									<View style = {noneModeStyles._layer_d32200}   >
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
							<View style = {noneModeStyles._layer_c7c7a8}    >
								<View style = {noneModeStyles._layer_45a2d0}   >
									<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
										<Path fill = {"white"}     d = "M3 0C1.374 0 0 1.374 0 3C0 4.626 1.374 6 3 6C4.626 6 6 4.626 6 3C6 1.374 4.626 0 3 0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_98754b}    >
								<View style = {noneModeStyles._layer_a26391}   >
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
					<View style = {noneModeStyles._layer_98c013}    >
						<View style = {noneModeStyles._layer_f3a3f6}   >
							<Svg style={{height: 20, width: 26}} viewBox = "0 0 26 20">
								<Path fill = {"black"}     d = "M24.05 3.9C25.127 3.9 26 3.02696 26 1.95C26 0.873044 25.127 0 24.05 0H1.95C0.873046 0 0 0.873044 0 1.95C0 3.02696 0.873045 3.9 1.95 3.9H24.05ZM24.05 11.7C25.127 11.7 26 10.827 26 9.75C26 8.67304 25.127 7.8 24.05 7.8H1.95C0.873046 7.8 0 8.67304 0 9.75C0 10.827 0.873045 11.7 1.95 11.7H24.05ZM24.05 19.5C25.127 19.5 26 18.627 26 17.55C26 16.473 25.127 15.6 24.05 15.6H1.95C0.873046 15.6 0 16.473 0 17.55C0 18.627 0.873045 19.5 1.95 19.5H24.05Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Following}   >
					Following
				</Text>
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
										<View style = {noneModeStyles._Group_10}    >
											<View style = {noneModeStyles._layer_cd9ff3}    >
												<View style = {noneModeStyles._layer_e93d4f}   >
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
							<View style = {noneModeStyles._Group_5089}    >
								<View style = {noneModeStyles._Frame_37}    >
									<View style = {noneModeStyles._Group_5081}    >
										<View style = {noneModeStyles._Group_5008_2}    >
											<View style = {noneModeStyles._Ellipse_26_2}    >
											</View>
											<View style = {noneModeStyles._Frame_28_2}    >
												<View style = {noneModeStyles._fluent_comment_12_regular_2}    >
													<View style = {noneModeStyles._Group_11}    >
														<View style = {noneModeStyles._layer_23886c}    >
															<View style = {noneModeStyles._layer_5c7232}   >
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
										<View style = {noneModeStyles._layer_3fa140}    >
											<View style = {noneModeStyles._layer_e8bd7a}   >
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
										<View style = {noneModeStyles._Group_12}    >
											<View style = {noneModeStyles._layer_2de1c7}    >
												<View style = {noneModeStyles._layer_86c9e0}   >
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
								<View style = {noneModeStyles._Follow_3}    >
									<View style = {noneModeStyles._Group_5151}    >
										<View style = {noneModeStyles._Group_5152}    >
											<View style = {noneModeStyles._Rectangle_1009_3}    >
											</View>
											<Text style = {noneModeStyles._Follow_4}   >
												Follow
											</Text>
										</View>
									</View>
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
														<View style = {noneModeStyles._Group_13}    >
															<View style = {noneModeStyles._layer_586600}    >
																<View style = {noneModeStyles._layer_a27da2}   >
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
											<View style = {noneModeStyles._layer_7514cb}    >
												<View style = {noneModeStyles._layer_3806b8}   >
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
							<View style = {noneModeStyles._Group_14}    >
								<View style = {noneModeStyles._layer_536147}    >
									<View style = {noneModeStyles._layer_acc8ff}   >
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
						<View style = {noneModeStyles._Rectangle_22_container_3}    >
							<View style = {noneModeStyles._Rectangle_22_3}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_22_3_link}}/>
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
								<View style = {noneModeStyles._Group_15}    >
									<View style = {noneModeStyles._layer_83bc25}    >
										<View style = {noneModeStyles._layer_7f9dc4}   >
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
									<View style = {noneModeStyles._layer_2d2f25}    >
										<View style = {noneModeStyles._layer_d05ef3}   >
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
						<View style = {noneModeStyles._Follow_5}    >
							<View style = {noneModeStyles._Rectangle_1009_4}    >
							</View>
							<Text style = {noneModeStyles._Follow_6}   >
								Follow
							</Text>
						</View>
						<Text style = {noneModeStyles._A_dog_is_the_only_thing_on_earth_that_loves_you_more_than_you_love_yourself_}   >
							A dog is the only thing on earth that loves you more than you love yourself.{'\n'}
						</Text>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_DOGSTALK_2

const noneModeStyles = StyleSheet.create({
_page11: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_viewport: {
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
_layer_6e838e: {
	position: "absolute",
	},
_layer_57326a: {
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
_layer_50eb57: {
	position: "absolute",
	},
_layer_df5f7e: {
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
_layer_534a32: {
	position: "absolute",
	},
_layer_1056b6: {
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
		{translateX: 0.999878},
		{translateY: 1},
	],
	},
_layer_6aab3f: {
	position: "absolute",
	},
_layer_afcf6a: {
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
_layer_d44597: {
	position: "absolute",
	transform: [
		{translateX: 360},
		{translateY: 9},
	],
	},
_layer_8503ab: {
	},
_layer_535110: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 11},
	],
	},
_layer_8dabae: {
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
	shadowColor: "rgba(0,0,0,0.25)",
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
_layer_1ee25c: {
	position: "absolute",
	transform: [
		{translateY: 1.49966},
	],
	},
_layer_302ff4: {
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
_layer_d760a7: {
	position: "absolute",
	},
_layer_f842cc: {
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
		{translateX: -0.000305176},
		{translateY: 2.37488},
	],
	},
_layer_793870: {
	position: "absolute",
	},
_layer_5aafaa: {
	},
_layer_ddd0b9: {
	position: "absolute",
	transform: [
		{translateX: 10.6088},
		{translateY: 7.00009},
	],
	},
_layer_74cd10: {
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
_layer_9fb616: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
_layer_9faf9a: {
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
_layer_fb28e3: {
	position: "absolute",
	transform: [
		{translateX: 0.833313},
		{translateY: 1.25},
	],
	},
_layer_4efa43: {
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
	width: 16.9999,
	height: 16.9998,
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3.00018},
	],
	},
_layer_66be2a: {
	position: "absolute",
	transform: [
		{translateX: 7},
	],
	},
_layer_7b407b: {
	},
_layer_ac9b14: {
	position: "absolute",
	transform: [
		{translateY: 1.99982},
	],
	},
_layer_a2aff3: {
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
	shadowColor: "rgba(0,0,0,0.25)",
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
_layer_28afcd: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
_layer_a6f394: {
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
_layer_58861f: {
	position: "absolute",
	transform: [
		{translateX: 360},
		{translateY: 9},
	],
	},
_layer_655931: {
	},
_layer_5d0253: {
	position: "absolute",
	transform: [
		{translateX: 383},
		{translateY: 11},
	],
	},
_layer_0e666b: {
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
_MOBSTALK: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 145,
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
_layer_3cf8fb: {
	position: "absolute",
	},
_layer_6e4c41: {
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
	fontWeight: "400",
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
	fontWeight: "400",
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
	shadowColor: "rgba(0,0,0,0.25)",
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
_Group_9: {
	width: 19.2,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 2.40002},
		{translateY: 3.60001},
	],
	},
_layer_1d7d68: {
	position: "absolute",
	},
_layer_29cd24: {
	},
_layer_1a831f: {
	position: "absolute",
	transform: [
		{translateX: 7.27441},
		{translateY: 4.79999},
	],
	},
_layer_d0eb02: {
	},
_zmdi_home: {
	width: 33,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 191,
	top: 15,
	},
_layer_bd555f: {
	position: "absolute",
	},
_layer_24b544: {
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
_layer_d56709: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 3},
	],
	},
_layer_109fc0: {
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
_layer_4ed12f: {
	position: "absolute",
	transform: [
		{translateX: 0.833313},
		{translateY: 1.25},
	],
	},
_layer_d32200: {
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
	shadowColor: "rgba(0,0,0,0.25)",
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
	shadowColor: "rgba(0,0,0,0.25)",
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
_layer_c7c7a8: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 7},
	],
	},
_layer_45a2d0: {
	},
_layer_98754b: {
	position: "absolute",
	},
_layer_a26391: {
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
_layer_98c013: {
	position: "absolute",
	transform: [
		{translateY: 2.60001},
	],
	},
_layer_f3a3f6: {
	},
_Following: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 299,
	top: 122,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
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
_Group_10: {
	width: 3,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 7.5},
		{translateY: 1.5},
	],
	},
_layer_cd9ff3: {
	position: "absolute",
	},
_layer_e93d4f: {
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
_Group_11: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 0.999878},
		{translateY: 0.999985},
	],
	},
_layer_23886c: {
	position: "absolute",
	},
_layer_5c7232: {
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
_layer_3fa140: {
	position: "absolute",
	},
_layer_e8bd7a: {
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
_Group_12: {
	width: 3,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 7.5},
		{translateY: 1.5},
	],
	},
_layer_2de1c7: {
	position: "absolute",
	},
_layer_86c9e0: {
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
_Follow_3: {
	width: 57,
	height: 23,
	position: "absolute",
	left: 287,
	top: 14,
	},
_Group_5151: {
	width: 57,
	height: 23,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_5152: {
	width: 57,
	height: 23,
	position: "absolute",
	left: 0,
	top: 0,
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
_Follow_4: {
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
_Group_13: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 0.999878},
		{translateY: 1},
	],
	},
_layer_586600: {
	position: "absolute",
	},
_layer_a27da2: {
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
_layer_7514cb: {
	position: "absolute",
	},
_layer_3806b8: {
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
_Group_14: {
	width: 3,
	height: 12.9704,
	position: "absolute",
	transform: [
		{translateX: 7.5},
		{translateY: 1.49658},
	],
	},
_layer_536147: {
	position: "absolute",
	},
_layer_acc8ff: {
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
_Rectangle_22_container_3: {
	width: 372,
	height: 304.305,
	position: "absolute",
	left: 0,
	top: 90.7927,
	},
_Rectangle_22_3: {
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
_Group_15: {
	width: 12,
	height: 11.9726,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 7.00452},
	],
	},
_layer_83bc25: {
	position: "absolute",
	},
_layer_7f9dc4: {
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
_layer_2d2f25: {
	position: "absolute",
	},
_layer_d05ef3: {
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
_Follow_5: {
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
_Follow_6: {
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
})

