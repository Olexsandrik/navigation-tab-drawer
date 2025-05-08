import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import MyWords from "../../tests/testData";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { playSound } from "../../services/soundHandler";
export default function Play() {
  const [data, setData] = useState(MyWords);

  const [show, setShow] = useState(false);
  const handlerStudy = () => {
    console.log("Pressed!");
    setShow(true);
  };
  return (
    <ScrollView>
      <View style={[styles.dataWordsInfo, { minHeight: show ? 550 : 650 }]}>
        <Pressable onPress={handlerStudy}>
          <Text style={styles.textMain}>{data[0].word}</Text>
        </Pressable>
        {show ? (
          <View style={styles.additionData}>
            <Text style={styles.textPhonetic}>{data[0].phonetics}</Text>
            <Pressable
              disabled={!data[0].audio}
              onPress={() => playSound(data[0].audio)}
            >
              <View>
                <Ionicons
                  name="play-outline"
                  size={28}
                  style={[
                    !data[0].audio
                      ? { color: COLORS.grey300 }
                      : { color: COLORS.primary900 },
                    { marginTop: "20" },
                  ]}
                />
              </View>
            </Pressable>
            <Text style={styles.textMeaning}>{data[0].meaning}</Text>
          </View>
        ) : null}
      </View>

      {show ? (
        <View style={styles.btnContainer}>
          <Button title="Didn't know it" />
          <Button title="Knew it" />
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dataWordsInfo: {
    minWidth: "95%",
    marginHorizontal: "2.5%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textPhonetic: {
    marginTop: "20",
    color: "#ffff",
  },

  textMeaning: {
    marginTop: "20",
    color: "#ffff",
  },

  additionData: {
    alignItems: "center",

    justifyContent: "space-around",
  },
  textMain: {
    fontSize: 60,
    padding: 10,
    color: "#ffff",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
