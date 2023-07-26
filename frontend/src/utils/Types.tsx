export type User = {
    displayName?: string;
}

export type Massage = {
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
