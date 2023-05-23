import axios, { AxiosResponse } from "axios";
import { baseApiURL } from "common/const";
import { IUser } from "./types";

interface getUserProfileProp {
  token: string;
}
export const getUserProfile = async (
  props: getUserProfileProp
): Promise<IUser | null> => {
  const { token } = props;

  return {
    name: "No Auth Conntent",
    userId: "666"
  };

  let res: AxiosResponse;
  try {
    res = await axios.get(`${baseApiURL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (err) {
    return null;
  }

  const user = transformUserDTOtoIUser(res.data);
  return user;
};
function transformUserDTOtoIUser(user: UserDTO) {
  return {
    name: user.name,
    userId: String(user.id)
  };
}
export interface UserDTO {
  name: string;
  id: Number;
}
