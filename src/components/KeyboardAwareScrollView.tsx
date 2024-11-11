import { PropsWithChildren, ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScrollview({
  children,
}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white",
          padding: 10,
          gap: 10,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={["bottom"]} style={{flex:1}}>{children}</SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
