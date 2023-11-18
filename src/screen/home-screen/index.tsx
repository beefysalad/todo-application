import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>HomeScreen Screen</Text>
        <Button title='Navigate to completed screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default HomeScreen;
