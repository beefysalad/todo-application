import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const TodayScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Today Screen</Text>
        <Button title='Navigate to Today Screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default TodayScreen;
