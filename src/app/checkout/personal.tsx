import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/Button";
import { Link, router } from "expo-router";

const Personal = () => {
  const onNext = () => {
    //Validate form

    //navigate to next
    router.push("./payment");
  };

  return (
    <View style={styles.container}>
      <Text>Personal</Text>

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
