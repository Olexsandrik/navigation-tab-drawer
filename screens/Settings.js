import { StyleSheet, Switch, Text, View } from "react-native";
import { useThemeContext } from "../components/ThemeContext";
import { COLORS } from "../constants";

function Settings() {
  const { theme, setTheme } = useThemeContext();

  const handlerChangeColor = () => {
    setTheme(!theme);
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          { color: theme ? "#ffffff" : COLORS.appBackground },
          { marginBottom: 35 },
        ]}
      >
        Choose color theme:{" "}
      </Text>
      <View style={styles.switchContainer}>
        <Text style={{ color: theme ? "#ffffff" : COLORS.appBackground }}>
          Light{" "}
        </Text>
        <Switch
          onValueChange={handlerChangeColor}
          value={theme}
          style={{
            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
          }}
        />
        <Text style={{ color: theme ? "#ffffff" : COLORS.appBackground }}>
          Dark{" "}
        </Text>
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    width: '38%',
    margin: "auto",
  },
  switchContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
