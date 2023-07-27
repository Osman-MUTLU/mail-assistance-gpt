import axios from 'axios';
import { getBearerToken } from './Session';
import { Massage } from './Types';


const graphURL = 'https://graph.microsoft.com/v1.0';

const apiUrl = 'http://localhost:8000';

const getConfigForGraph = async () => {
    const token = await getBearerToken();
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
}

export const getMe = async () => {
    const config = await getConfigForGraph();
    return axios.get(`${graphURL}/me`, config);
}

export const getInbox = async (top = 20) => {
    const config = await getConfigForGraph();
    return axios.get(`${graphURL}/me/mailFolders/inbox/messages?$top=${top}`, config);
}

export const sendMail = async (message : Massage) => {
    const config = await getConfigForGraph();
    return axios.post(`${graphURL}/me/sendMail`, message, config);
}


export const sendPrompt = async (prompt: string) => {
    const token = await getBearerToken();
    return axios.post(`${apiUrl}/prompt`, { prompt, token });
}

