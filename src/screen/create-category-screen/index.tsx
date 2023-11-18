import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const CreateCategoryScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>CreateCategoryScreen Screen</Text>
        <Button title='Navigate to CreateCategoryScreen screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default CreateCategoryScreen;
