import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { Alert, Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "@/services/api";
import useUserGlobalStore from "@/store/useUserGlobalStore";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const { updateUser } = useUserGlobalStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IUser, "name">>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Omit<IUser, "name">) => {
    try {
      const { email, password } = data;
      const _user: IAuthenticatedUser = await loginUser({
        email,
        password,
      });
      updateUser({
        email: _user.email,
        name: _user.name,
      });
      // navigateToSignIn();
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
      <Box flex={1} px='5.5' justifyContent='center'>
        <Text variant='textXl' textAlign='center' fontWeight='300' mb='6'>
          Welcome back
        </Text>
        <Box mb='6' />
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
        <Box mb='6' />
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
        <Pressable onPress={navigateToSignUp}>
          <Text textAlign='right' color='primary' variant='textXs'>
            Register
          </Text>
        </Pressable>
        <Box mt='5.5' />
        <Button
          label={"Login"}
          onPress={handleSubmit(onSubmit)}
          uppercase={true}
        />
      </Box>
    </SafeAreaWrapper>
  );
};
export default SignInScreen;
