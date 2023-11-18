import { Box, Text } from "@/utils/themes";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
const Button = () => {
  const [counter, setCounter] = useState<number>(0);
  const onButtonClick = () => {
    setCounter((prevCtr) => prevCtr + 1);
  };
  return (
    <>
      <Text>Hello {counter}</Text>
      <Box backgroundColor='primary' borderRadius='rounded-2xl' p='4'>
        <Text color='white' onPress={onButtonClick}>
          Click Me
        </Text>
      </Box>
    </>
  );
};
export default Button;
const styles = StyleSheet.create({});
