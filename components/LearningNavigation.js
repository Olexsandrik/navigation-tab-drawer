import { createDrawerNavigator } from "@react-navigation/drawer";
import Statistic from "../components/StatisticsInfo";
import InfoCard from "../components/InfoCard";

const Drawer = createDrawerNavigator();
function LearningNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Statistic" component={Statistic} />
      <Drawer.Screen name="Play" component={InfoCard} />
    </Drawer.Navigator>
  );
}

export default LearningNavigation;
