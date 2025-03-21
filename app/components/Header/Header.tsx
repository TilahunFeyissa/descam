import React from "react";
import { View, Text, StatusBar } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

import { Image } from "react-native";
import Button from "../Button/Button";
import { TextStyles } from "@/constants/textStyles";
interface headerProps{
    label?:string
    rightContent?:any
    hideBackBtn?:any
}
export default function Header({label,rightContent,hideBackBtn}:headerProps) {
    const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor:Colors.primary, outlineColor:"white", borderBottomLeftRadius:20}}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: "center",
          flexDirection: "row",
          padding:10,
          paddingHorizontal:20
        }}
      >
        <View style={[{flexDirection:'row',alignItems: "center",}]}>
       {!hideBackBtn && <View style={[{ width: 30, height: 40 ,}]}>
          <Button
            theme={"transparent"}
            onPress={() => router.back()}
            icon={<FontAwesome name="angle-left" size={24} color="black" />}
            
          ></Button>
        </View>}
        <Text
          style={[TextStyles.boldl18,{ fontSize: 20, textAlign: "center", paddingEnd: 40 , color:"white"}]}
        >
          {label}
        </Text>
        </View>
        {rightContent}
       
            {/* <Image source={require('@/assets/images/fortuneLogo.jpeg')} style={{width: 40, height: 40, borderRadius: 20}} /> */}
        
      </View>
      
    </SafeAreaView>
  );
}