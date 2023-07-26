import axios from 'axios';
import { getBearerToken } from './Session';
import { type } from 'os';

type Massage = {
    subject: string;
    body: {
        contentType: string;
        content: string;
    };
    toRecipients: [
        {
            emailAddress: {
                address: string;
            };
        }
    ];
};


const baseUrl = 'https://graph.microsoft.com/v1.0';
const getConfig = async () => {
    const token = await getBearerToken();
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
}

export const getMe = async () => {
    const config = await getConfig();
    return axios.get(`${baseUrl}/me`, config);
}

export const getInbox = async (top = 20) => {
    const config = await getConfig();
    return axios.get(`${baseUrl}/me/mailFolders/inbox/messages?$top=${top}`, config);
}

export const sendMail = async (message : Massage) => {
    const config = await getConfig();
    return axios.post(`${baseUrl}/me/sendMail`, message, config);
}

//yeni metotlar api için burada yazılacak



