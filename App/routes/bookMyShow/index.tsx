import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientBottomNavigation from "../../components/Navigation/ClientBottomNav";
import { ClientRouting, ClientRoutingNav } from "./ClientRouting";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import BuzzScreen from "../../screens/BuzzScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import MoviesScreen from "../../screens/MoviesScreen";
import AdventureScreen from "../../screens/AdventureScreen";
import ComedyShowsScreen from "../../screens/ComedyShowsScreen";
import MusicShowsScreen from "../../screens/MusicShowsScreen";
import PlayScreen from "../../screens/PlaysScreen";
const ClientHomeBottomNav = createBottomTabNavigator();
const ClientHomeRoutes = createStackNavigator();

export const ClientHomeDashboard = () => {
  return (
    <ClientHomeBottomNav.Navigator
      initialRouteName={ClientRoutingNav.home}
      screenOptions={{ headerShown: false, title: "Book My Show" }}
      tabBar={(props) => <ClientBottomNavigation {...props} />}
    >
      <ClientHomeBottomNav.Screen
        name={"HOME"}
        initialParams={{
          title: "It All Starts Here!",
          subtitle: "Bengaluru >",
        }}
        component={HomeScreen}
      />
      <ClientHomeBottomNav.Screen
        initialParams={{
          title: "LIVE",
          subtitle: "Discover what’s trending in entertainment",
        }}
        name={"LIVE"}
        component={BuzzScreen}
      />
      <ClientHomeBottomNav.Screen
        name={"PROFILE"}
        initialParams={{ title: "Hey !", subtitle: "" }}
        component={ProfileScreen}
      />
    </ClientHomeBottomNav.Navigator>
  );
};

export const ClientRoutes = () => {
  return (
    <ClientHomeRoutes.Navigator
      initialRouteName={ClientRouting.home}
      screenOptions={{ headerShown: false }}
    >
      <ClientHomeRoutes.Screen
        name={ClientRouting.home}
        initialParams={{ title: "It All Starts Here!", subtitle: "Bengaluru" }}
        component={ClientHomeDashboard}
      />
      <ClientHomeRoutes.Screen
        name={ClientRouting.movies}
        initialParams={{
          title: "Now Showing",
          subtitle: "Bengaluru  |  25 Movies",
        }}
        component={MoviesScreen}
      />

      <ClientHomeRoutes.Screen
        name={ClientRouting.adventure}
        initialParams={{
          title: "Adventure",
          subtitle: "Bengaluru  |  40 Events",
        }}
        component={AdventureScreen}
      />
      <ClientHomeRoutes.Screen
        name={ClientRouting.comedyShows}
        initialParams={{
          title: "Comedy Shows",
          subtitle: "Bengaluru  |  104 Events",
        }}
        component={ComedyShowsScreen}
      />
      <ClientHomeRoutes.Screen
        name={ClientRouting.musicShows}
        initialParams={{
          title: "Music Shows",
          subtitle: "Bengaluru  |  132 Events",
        }}
        component={MusicShowsScreen}
      />
      <ClientHomeRoutes.Screen
        name={ClientRouting.plays}
        initialParams={{ title: "Play", subtitle: "Bengaluru  |  14 Events" }}
        component={PlayScreen}
      />
    </ClientHomeRoutes.Navigator>
  );
};
