import { Axios } from "../utils/axios-util";

export const getCats = async () => {

    const res = await Axios.get('/cats/')
    return res
}

