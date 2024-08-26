import { userStore } from "../../store/userStore";
import instance from "../../libs/axios/instance";

const useAuthMe = () => {

  const setUser = userStore((state) => state.setUser);

  const authMe = async () => {
    try {
      const user = await instance.get("/auth/me");
      if (user) {
        setUser({
          id: user.data.id,
          username: user.data.email,
        });
      }
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  return {
    authMe
  }
}

export default useAuthMe