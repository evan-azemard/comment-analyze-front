import axios from "axios";
import { IUserInfo } from "types/UserInfo.interface";


export const fetchUserInfo = async (token: string): Promise<IUserInfo> => {
    const response = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return response.data;
}