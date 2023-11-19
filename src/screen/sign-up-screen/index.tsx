import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { registerUser, ping } from "@/services/api";
import theme, { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Pressable, Alert } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data;

      await registerUser({
        email,
        name,
        password,
      });
      navigateToSignIn();
    } catch (error: any) {
      if (error.response) {
        Alert.alert("Error", error.response.data.message);
      } else if (error.request) {
        Alert.alert("No response received from the server:");
      } else {
        Alert.alert("Error setting up the request");
      }
    }
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} mt='12' px='5.5'>
        <Text variant='textXl' textAlign='center' fontWeight='300'>
          Welcome
        </Text>
        <Text variant='textXl' textAlign='center' fontWeight='300' mb='6'>
          Your journey starts here
        </Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label='Name'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Name'
              error={errors.name}
            />
          )}
          name='name'
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label='E-mail'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Email'
              error={errors.email}
            />
          )}
          name='email'
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label='Password'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Password'
              error={errors.password}
              secureTextEntry
            />
          )}
          name='password'
        />

        <Box mt='5.5' />
        <Pressable onPress={navigateToSignIn}>
          <Text color={"primary"} textAlign='right' variant='textXs'>
            Log in
          </Text>
        </Pressable>
        <Box mt='3.5' />
        <Button
          label={"Register"}
          onPress={handleSubmit(onSubmit)}
          uppercase={true}
        />
        <Box my='5.5' />
      </Box>
    </SafeAreaWrapper>
  );
};
export default SignUpScreen;
