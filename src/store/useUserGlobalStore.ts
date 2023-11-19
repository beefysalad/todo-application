import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// TODO: READ MORE ABOUT ZUSTAND (STATE MANAGEMENT LIBRARY LIKE REDUX)
interface IUserGlobalStore {
  user: IAuthenticatedUser | null;
  updateUser: (user: IAuthenticatedUser | null) => void;
  signOut: () => void;
}

const useUserGlobalStore = create<IUserGlobalStore>()(
  persist(
    (set, get) => ({
      user: null,
      updateUser: (user) => {
        set({
          user,
        });
      },
      signOut: () => {
        set({
          user: null,
        });
      },
    }),
    {
      name: "todo-application-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUserGlobalStore;
