import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getColor } from "@/constants/Colors";
import { useTheme } from "@/hooks/ThemeContext";

interface TokenCardProps {
  username: string;
  date: string;
  marketcap: string;
  replies: number;
  description: string;
  profilePic: string;
}

const TokenCard: React.FC<TokenCardProps> = ({
  username,
  date,
  marketcap,
  replies,
  description,
  profilePic,
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: getColor("background"), borderColor: getColor("icon") }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <View style={styles.userInfo}>
          <Text style={[styles.username, { color: getColor("text") }]}>{username}</Text>
          <Text style={styles.date}>{new Date(date).toLocaleDateString()}</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={[styles.description, { color: getColor("text") }]}>{description}</Text>

      {/* marketcap Content */}
      <View style={styles.marketcapContainer}>
        <Text style={styles.marketcap}>{marketcap}</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.repliesContainer}>
          <FontAwesome name="comment" size={18} color={getColor("icon")} />
          <Text style={[styles.repliesText, { color: getColor("text") }]}>{replies} Replies</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
  description: {
    marginTop: 8,
    fontSize: 14,
  },
  marketcapContainer: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 8,
  },
  marketcap: {
    fontSize: 12,
    fontStyle: "italic",
    color: "gray",
  },
  footer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  repliesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  repliesText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default TokenCard;
