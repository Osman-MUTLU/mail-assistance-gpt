export type User = {
    displayName?: string;
}

export type Message = {
    body : {
        content: string;
        contentType: string;
    },
    subject: string,
    receivedDateTime: string;
    isRead: boolean;
    sender: {
        emailAddress: {
            name: string;
            address: string;
        }
    },
    toRecipients: [
        {
            emailAddress: {
                address: string;
            }
        }
    ],
    "saveToSentItems": "false",

    bodyPreview: string;
};

export type SendMailRequest = {
    message: {
        subject: string,
        body: {
            contentType: string;
            content: string;
        },
        toRecipients: [
            {
                emailAddress: {
                    address: string;
                }
            }
        ]
        
    },
    saveToSentItems: string;
};
