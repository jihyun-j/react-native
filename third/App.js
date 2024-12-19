import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDeatailScreen from "./screens/MealDeatailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#351401",
          },
        }}>
        <Stack.Screen
          name="MealCategories"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const categoryId = route.params.categoryId;
          //   return {
          //     title: categoryId,
          //   };
          // }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDeatailScreen}
          options={{
            headerRight: () => {
              return <Button title="Tap me" />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
