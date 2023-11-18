import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/themes";
import { Button } from "react-native";

const CategoriesScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Categories Screen</Text>
        <Button title='Navigate to Categories screen' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default CategoriesScreen;
