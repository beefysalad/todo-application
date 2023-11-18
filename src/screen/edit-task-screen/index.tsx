import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const EditTaskScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>EditTaskScreen Screen</Text>
        <Button title='Navigate to EditTaskScreen screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default EditTaskScreen;
