import { createDrawerNavigator } from "@react-navigation/drawer";
import Statistic from "../components/StatisticsInfo";
import InfoCard from "../components/InfoCard";
import { COLORS } from "../constants";

const Drawer = createDrawerNavigator();
function LearningNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: COLORS.primary100,
        drawerActiveBackgroundColor: COLORS.primary300,
        drawerStyle: {
          backgroundColor: COLORS.primary200r,
        },
        drawerInactiveTintColor: COLORS.fontMain,
        headerStyle: {
          backgroundColor: COLORS.appBackground,
        },
        headerTintColor: COLORS.fontMain,
      }}
    >
      <Drawer.Screen name="Statistic" component={Statistic} />
      <Drawer.Screen name="Play" component={InfoCard} />
    </Drawer.Navigator>
  );
}

export default LearningNavigation;
