import { getColor } from "@/constants/Colors";
import { Image, StyleSheet, Platform, SafeAreaView, View, FlatList } from "react-native";
import TokenCard from "./homeCards/TokenCard";

export default function Home() {
  const data=[
    {
      "username": "JohnDoe",
      "date": "2025-03-21T10:30:00Z",
      "marketcap": "678",
      "replies": 3,
      "description": "A simple post about marketcap and styling.",
      "profilePic": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "username": "JaneSmith",
      "date": "2025-03-20T15:45:00Z",
      "marketcap": "4232",
      "replies": 5,
      "description": "Sharing some thoughts on HTML structure.",
      "profilePic": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "username": "TechGuru",
      "date": "2025-03-19T12:20:00Z",
      "marketcap": "453",
      "replies": 8,
      "description": "Talking about JavaScript snippets.",
      "profilePic": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      "username": "FoodieLover",
      "date": "2025-03-18T09:10:00Z",
      "marketcap": "123",
      "replies": 2,
      "description": "Discussing favorite foods!",
      "profilePic": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      "username": "TravelerX",
      "date": "2025-03-17T18:00:00Z",
      "marketcap": "3456",
      "replies": 6,
      "description": "Exploring new places and sharing experiences.",
      "profilePic": "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ]
  
  return (
    <View
      style={{
        backgroundColor: getColor("background"),
        paddingHorizontal: 20,flex:1
      }}>
      <FlatList
      data={data}
      keyExtractor={(item) => item.username + item.date}
      renderItem={({ item }) => <TokenCard {...item} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
