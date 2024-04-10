import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Account/LoginScreen";
import Register from "../screens/Account/RegisterScreen";
import NavBar from "./AppNavigation";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>

      <Stack.Screen
        name={screen.account.login}
        component={Login}
        options={{ title: "Login" }}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.account.register}
        component={Register}
        options={{ title: "Register" }}
      ></Stack.Screen>

      <Stack.Screen
        name={screen.explore.tab}
        component={NavBar}
        options={{ title: "Home" }}
      ></Stack.Screen>

    </Stack.Navigator>
  );
};

export default AccountStack;
