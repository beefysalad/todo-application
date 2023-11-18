import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const CompletedScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Completed Screen</Text>
        <Button title='Navigate to completed screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default CompletedScreen;
