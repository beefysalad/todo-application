import Button from "@/components/shared/button";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { fetcher } from "@/services/config";
import useUserGlobalStore from "@/store/useUserGlobalStore";
import { Box, Text } from "@/utils/themes";

import useSWR from "swr";
const HomeScreen = () => {
  const { data, isLoading } = useSWR("category", fetcher);
  const { signOut } = useUserGlobalStore();
  const handleButtonClick = () => {
    signOut();
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Home Screen</Text>

        {data &&
          data.data &&
          Array.isArray(data.data) &&
          data.data.map((category: ICategory) => (
            <Text key={category._id}>{category.name}</Text>
          ))}
        <Button label='SignOut' onPress={handleButtonClick} />
      </Box>
    </SafeAreaWrapper>
  );
};
export default HomeScreen;
