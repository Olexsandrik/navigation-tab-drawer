import { StatusBar } from "react-native";
import BtnNavigation from "./components/BtnNavigation";
import ThemeContext from "./components/ThemeContext";
import { COLORS } from "./constants";

export default function App() {
  return (
    <>
      <ThemeContext>
        <BtnNavigation />
        <StatusBar
          backgroundColor={COLORS.appBackground}
          barStyle="light-content"
        />
      </ThemeContext>
    </>
  );
}
