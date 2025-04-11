import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useCountdown } from "@/hooks/useCountdown";

export default function TimerScreen() {
  const { timeLeft, running, start, cancel } = useCountdown(10);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{timeLeft}</Text>
      {!running && <Button title="Start Countdown" onPress={start} />}
      {running && <Button title="Cancel Countdown" onPress={cancel} />}
      {timeLeft === 0 && <Text style={styles.done}>Time’s up!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  time: {
    fontSize: 64,
    marginBottom: 24,
  },
  done: {
    fontSize: 24,
    marginTop: 16,
    color: "green",
  },
});
