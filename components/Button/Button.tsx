
import Colors, { getColor } from "@/constants/Colors";
import { TextStyles } from "@/constants/textStyles";

import React from "react";
import { View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
interface ButtonProps {
  label?: string;
  onPress: () => {} | void;
  icon?: any;
  theme?: string;
  textColor?: string;
  borderColor?: string;
  border?:number;
  width?:any;
}
function Button({ label, onPress, icon, theme, border,width , textColor, borderColor}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: theme == "transparent" ? "transparent" :getColor("primary"),
          borderWidth: border?border:0,
          justifyContent: "center",
          borderRadius: 15,
          borderColor:borderColor?borderColor:'black',
          alignItems: "center",
          padding: 10,
          width: width?width:"100%",
        },
      ]}
      onPress={onPress}
    >
      <View style={[{flexDirection:'row', alignItems:'center', gap:10}]}>
      {icon}
      {label && (
        <Text style={[TextStyles.bold,{  color:textColor?textColor:theme == "primary"?"white":"black", height: 24,fontSize:17 }]}>
          {label}
        </Text>
      )}</View>
    </TouchableOpacity>
  );
}

export default Button;