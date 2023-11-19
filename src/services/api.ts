import axiosInstance, { saveToken, APP_TOKEN } from "./config";

type RegisterUserTypes = IUser;

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    const response = await axiosInstance.post("/create-user", {
      email,
      password,
      name,
    });
    return response.data.user;
  } catch (error: any) {
    throw error;
  }
};

type LoginUserTypes = Omit<IUser, "name">;
export const loginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    saveToken(APP_TOKEN, _token);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const ping = async () => {
  try {
    const response = await axiosInstance.get("/ping");
    return response;
  } catch (error) {
    throw error;
  }
};
