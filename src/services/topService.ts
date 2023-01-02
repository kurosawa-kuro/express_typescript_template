export type Top = {
    message: string;
};

export const indexService = async (): Promise<Top> => {
    const data: Top = { message: 'Hello World' }

    return data;
};