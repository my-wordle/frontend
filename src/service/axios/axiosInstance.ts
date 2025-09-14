import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

export const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (response: AxiosResponse<any, any>) => {
        return response.data;
    },
    (error) => {
        console.error(error);
    }
);
