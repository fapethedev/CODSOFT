import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SPRING_BOOT_API_URL,
});
