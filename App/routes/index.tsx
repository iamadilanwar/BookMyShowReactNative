import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ClientRoutes } from "./bookMyShow";

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <ClientRoutes />
    </NavigationContainer>
  );
};
