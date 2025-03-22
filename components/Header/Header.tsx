import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Colors, { getColor } from "@/constants/Colors";
// import Button from "../Button/Button";
import { TextStyles } from "@/constants/textStyles";
import { useTheme } from "@/hooks/ThemeContext";
import Button from "../Button/Button";
import Octicons from '@expo/vector-icons/Octicons';
import { Linking,Platform } from "react-native";

interface HeaderProps {
  label?: string;
  rightContent?: any;
  hideBackBtn?: boolean;
}

export default function Header({ label, rightContent, hideBackBtn }: HeaderProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const openPhantomWallet = async () => {
    const phantomDeepLink = "https://phantom.app/ul/<version>/<method>";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=app.phantom";
    const appStoreUrl = "https://apps.apple.com/app/phantom/id1598432977";
  
    let urlToOpen = phantomDeepLink;
  
    if (Platform.OS === "android") {
      urlToOpen = "intent://open#Intent;scheme=phantom;package=app.phantom;end;";
    }
  
    const supported = await Linking.canOpenURL(urlToOpen);
  
    if (supported) {
      await Linking.openURL(urlToOpen);
    } else {
      Alert.alert(
        "Phantom Wallet Not Found",
        "Phantom Wallet app is not installed. Do you want to install it?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Install",
            onPress: () => Linking.openURL(Platform.OS === "android" ? playStoreUrl : appStoreUrl),
          },
        ]
      );
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: getColor("background"),
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={getColor("background")} />
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
          paddingHorizontal: 20,
        
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require('@/assets/images/descamLogo.png')} style={{width: 40, height: 40, borderRadius: 20}} />
     

          
        </View>
        <View style={[{flexDirection:'row', width:'auto', flex:1, justifyContent:"flex-end"}]}>
          <View>
          <Button
          onPress={()=>{openPhantomWallet()}}
          label={"Connect wallet"}
          /></View>
        
        <TouchableOpacity onPress={()=>toggleTheme()} style={{ padding: 10 }}>
   
        {theme === "dark"?<Feather name="sun" size={24} color={getColor("text")} />:<Octicons name="moon" size={24} color={getColor("text")} />}
          {/* <FontAwesome
            name={theme === "dark" ? "sun-o" : "moon-o"}
            size={28}
            color={getColor("text")}
          /> */}
        </TouchableOpacity>
        </View>
        {/* {rightContent} */}
      </View>
    </SafeAreaView>
  );
}
