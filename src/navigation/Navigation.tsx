// external imports
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Compass, DotsThreeOutline, UsersFour } from "phosphor-react-native";

// internal imports
import routes from "@/constants/routes";

// screens
import SignUpPage from "@/pages/auth/SignUpPage";
import LogInPage from "@/pages/auth/LogInPage";
import ExplorePage from "@/pages/main/ExplorePage";
import MyNetworkPage from "@/pages/main/MyNetworkPage";
import MorePage from "@/pages/main/MorePage";
import ProfilePage from "@/pages/more/ProfilePage";
import BlogPostPage from "@/pages/more/BlogPostPage";
import DirectMessagePage from "@/pages/more/DirectMessagePage";

// custom

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// shared styling
const headerStyle = {
  borderBottomWidth: 2,
  borderBottomColor: "black",
};

// this contains the homepage (main) tab layout
function HomeRouter() {
  return (
    <Tab.Navigator>
      {[
        { name: routes.Explore, component: ExplorePage, Icon: Compass },
        { name: routes.Network, component: MyNetworkPage, Icon: UsersFour },
        { name: routes.More, component: MorePage, Icon: DotsThreeOutline },
      ].map((e) => (
        <Tab.Screen
          key={e.name}
          name={e.name}
          component={e.component}
          options={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "lightgray",
            tabBarLabel: e.name,
            tabBarIcon: ({ color }) => <e.Icon size={32} color={color} />,
            tabBarStyle: {
              paddingTop: 8,
              paddingBottom: 12,
              height: 64,
              borderTopWidth: 2,
              borderTopColor: "black",
            },
            headerStyle,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

// auth router
export function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {[
          { name: routes.Login, component: LogInPage },
          { name: routes.Signup, component: SignUpPage },
        ].map((e) => (
          <Stack.Screen
            {...e}
            key={e.name}
            options={{
              headerStyle,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// this is the root navigator for the app
export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle,
        }}
      >
        <Stack.Screen
          name={routes.Main}
          component={HomeRouter}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={routes.Profile} component={ProfilePage} />
        <Stack.Screen
          name={routes.DirectMessage}
          component={DirectMessagePage}
          options={({ route }) => ({
            title: route.params?.user?.username ?? "Direct Message",
          })}
        />
        <Stack.Screen
          name={routes.BlogPost}
          component={BlogPostPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
