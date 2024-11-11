import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/Button";
import { Link, router } from "expo-router";

const Payment = () => {
  const onNext = () => {
    //Validate form

    //navigate to next
    router.push("./confirm");
  };
  return (
    <View style={styles.container}>
      <Text>Payment</Text>

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};

export default Payment;

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
