import axios from "axios";
import { IAxiosResponseData } from "../components/sidebarField/settingSection/interfaces";

const fetchUploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file)

    const url = new URL('/1/upload', 'https://api.imgbb.com');
    url.searchParams.set('key', '55613fc8c4bcab8867f472a0998328e1');

    const { data: response } = await axios<IAxiosResponseData>({
        method: 'post',
        url: url.toString(),
        data: formData,
    });
    return response.data.url
};

export default fetchUploadImage;