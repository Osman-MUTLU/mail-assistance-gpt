import axios from 'axios';
import { getBearerToken } from './Session';
import { PromptRequest, SendMailRequest } from './Types';

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
    console.log(config);
    return axios.get(`${graphURL}/me`, config);
}

export const getInbox = async (top = 100) => {
    const config = await getConfigForGraph();
    return axios.get(`${graphURL}/me/mailFolders/inbox/messages?$top=${top}`, config);
}

export const sendMail = async (message : SendMailRequest) => {
    const config = await getConfigForGraph();
    return axios.post(`${graphURL}/me/sendMail`, message, config);
}

export const createChatSession = async (user_id: string) => {
    const token = await getBearerToken();
    const request = {
        user_id: user_id,
        token: token
    }
    return axios.post(`${apiUrl}/chat`, request);
}

export const sendPrompt = async (prompt: string) => {
    const token = await getBearerToken();
    const user_id = await getMe().then((response) => {
        return  response.data.id;
    });
    const request: PromptRequest = {
        user_id: user_id,
        token: token,
        question: prompt,
        expire_time: new Date(sessionStorage.getItem("expire_time") || "")
    }
    return axios.post(`${apiUrl}/chat`, request);
}

