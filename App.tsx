import { AppThemeColors } from "./App/assets/colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as PaperProvider } from "react-native-paper";
import { persistor, store } from "./App/slice";
import { Provider } from "react-redux";
import { AppRoutes } from "./App/routes";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    InterRegular: require("./App/assets/fonts/Inter-Regular.ttf"),
    InterThin: require("./App/assets/fonts/Inter-Thin.ttf"),
    InterBlack: require("./App/assets/fonts/Inter-Black.ttf"),
    InterBold: require("./App/assets/fonts/Inter-Bold.ttf"),
    InterExtraBold: require("./App/assets/fonts/Inter-ExtraBold.ttf"),
    InterLight: require("./App/assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./App/assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./App/assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={{dark: false, mode: 'exact'}}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={"default"}
            backgroundColor={AppThemeColors.primaryColorDark}
          />
          <AppRoutes />
        </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
