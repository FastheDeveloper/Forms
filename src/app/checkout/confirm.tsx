import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/Button";
import { Link, router } from "expo-router";

const confirm = () => {
  const onNext = () => {
    //submit form

    //navigate to home
    router.dismissAll()
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Confirm</Text>

      <CustomButton title="Submit" style={styles.button} onPress={onNext} />
    </View>
  );
};

export default confirm;

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
