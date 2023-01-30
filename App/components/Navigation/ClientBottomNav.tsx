import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { AppThemeColors, Colors } from "../../assets/colors";
import { CreditCardIcon } from "../../assets/icons/creditCard";
import { HomeIcon } from "../../assets/icons/home";
import { UserIcon } from "../../assets/icons/user";
import { ClientRoutingNav } from "../../routes/bookMyShow/ClientRouting";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

const ClientBottomNavigation: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          let label = route.name;
          let Icon = null;
          switch (label) {
            case ClientRoutingNav.home:
              label = "Home";
              Icon = HomeIcon;
              break;
            case ClientRoutingNav.buzz:
              label = "Live";
              Icon = CreditCardIcon;
              break;
            case ClientRoutingNav.profile:
              label = "Profile";
              Icon = UserIcon;
              break;
          }
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}
              style={styles.button}
            >
              {label === "HOME" && (
                <Entypo
                  name="home"
                  size={isFocused ? 26 : 24}
                  color={isFocused ? Colors.bmsPink : Colors.bmsBlue}
                />
              )}
              {label === "LIVE" && (
                <MaterialIcons
                  name="live-tv"
                  size={isFocused ? 26 : 24}
                  color={isFocused ? Colors.bmsPink : Colors.bmsBlue}
                />
              )}
              {label === "PROFILE" && (
                <AntDesign
                  name="user"
                  size={isFocused ? 26 : 24}
                  color={isFocused ? Colors.bmsPink : Colors.bmsBlue}
                />
              )}
              <Text style={isFocused ? styles.focusedLabel : styles.label}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppThemeColors.white,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  divider: {
    height: 1,
    width: "90%",
    alignSelf: "center",
  },
  focusedLabel: {
    color: Colors.bmsPink,
    fontWeight: "bold",
    marginTop: 0,
  },
  label: {
    color: Colors.bmsBlue,
    marginTop: 5,
  },
});

export default ClientBottomNavigation;
