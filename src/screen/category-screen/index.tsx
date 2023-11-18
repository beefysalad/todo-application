import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const CategoryScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>CategoryScreen Screen</Text>
        <Button title='Navigate to CategoryScreen screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default CategoryScreen;
