import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import { NavigationContainer } from "@react-navigation/native";
import { initFirebase } from "./src/utils";

import NavBar from "./src/navigation/AppNavigation";
import AccountStack from "./src/navigation/AccountStack";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <GluestackUIProvider config={config}>
          <AccountStack></AccountStack>
        </GluestackUIProvider>
      </NavigationContainer>

      <Toast></Toast>
    </>
  );
}
