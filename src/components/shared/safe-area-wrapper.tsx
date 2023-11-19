import theme from "@/utils/themes";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type SafeAreaWrapperProps = {
  children: ReactNode;
};
const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaWrapper;
const styles = StyleSheet.create({});
