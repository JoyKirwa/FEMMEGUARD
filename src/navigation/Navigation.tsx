// external imports
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// internal imports
import routes from "@/constants/routes";

// screens
import Splash from "@/pages/Splash";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// this contains the homepage (main) tab layout
function HomeRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.Splash} component={Splash} />
    </Tab.Navigator>
  );
}

// this is the root navigator for the app
export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={routes.Splash} component={Splash} />
        <Stack.Screen name={routes.Main} component={HomeRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
