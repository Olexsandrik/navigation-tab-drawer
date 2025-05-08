import { createDrawerNavigator } from "@react-navigation/drawer";
import Statistics from "../screens/Learning/Statistics";
import Play from "../screens/Learning/Play";
import { COLORS } from "../constants";

const Drawer = createDrawerNavigator();
function LearningNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: COLORS.primary100,
        drawerActiveBackgroundColor: COLORS.primary300,
        drawerStyle: {
          backgroundColor: COLORS.primary200,
        },
        drawerInactiveTintColor: COLORS.fontMain,
        headerStyle: {
          backgroundColor: COLORS.appBackground,
        },
        headerTintColor: COLORS.primary900,
      }}
    >
      <Drawer.Screen name="Statistic" component={Statistics} />
      <Drawer.Screen name="Play" component={Play} />
    </Drawer.Navigator>
  );
}

export default LearningNavigation;
