import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import MyWords from "../../tests/testData";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { playSound } from "../../services/soundHandler";
export default function Play() {
  const [data, setData] = useState(MyWords);
  const [idx, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const handlerStudy = () => {
    setShow(true);
  };

  const handlerDidntKnow = () => {
    if (idx < data.length - 1) {
      setIndex(idx + 1);
      setShow(false);
    }
  };

  const handlerKnowIt = () => {
    setData((prev) =>
      prev.map((item, index) => {
        return index === idx ? { ...item, status: item.status + 1 } : item;
      })
    );
    setIndex(idx < data.length - 1 ? idx + 1 : 0);
  };

  const checkStatus = data.every((item) => item.status === 2);

  console.log(data[idx].status, idx, data[idx].word);
  return (
    <ScrollView>
      {checkStatus ? (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            minHeight: "50%",
            maxWidth: "80%",
            margin: "auto",
          }}
        >
          <Text style={{ color: "#ffff" }}>Congrats!</Text>
          <Text style={{ color: "#ffff", marginTop: 20 }}>
            For now you have learned all the words should be printed on the
            screen
          </Text>
        </View>
      ) : (
        <View>
          <View style={[styles.dataWordsInfo, { minHeight: show ? 550 : 650 }]}>
            <Pressable onPress={handlerStudy}>
              <Text style={styles.textMain}>{data[idx].word}</Text>
            </Pressable>
            {show ? (
              <View style={styles.additionData}>
                <Text style={styles.textPhonetic}>{data[idx].phonetics}</Text>
                <Pressable
                  disabled={!data[idx].audio}
                  onPress={() => playSound(data[idx].audio)}
                >
                  <View>
                    <Ionicons
                      name="play-outline"
                      size={28}
                      style={[
                        !data[idx].audio
                          ? { color: COLORS.grey300 }
                          : { color: COLORS.primary900 },
                        { marginTop: "20" },
                      ]}
                    />
                  </View>
                </Pressable>
                <Text style={styles.textMeaning}>{data[idx].meaning}</Text>
              </View>
            ) : null}
          </View>

          {show ? (
            <View style={styles.btnContainer}>
              <Button title="Didn't know it" onPress={handlerDidntKnow} />
              <Button title="Knew it" onPress={handlerKnowIt} />
            </View>
          ) : null}
        </View>
      )}
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
    marginTop: 20,
    color: "#ffff",
  },

  textMeaning: {
    marginTop: 20,
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
