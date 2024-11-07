
export const getPriceCardData = async (lang: string) => {
    const url = `https://verbitsky-design-server.vercel.app/price?lang=${lang}`;

    try {
        const response = await fetch(url);
        return await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Ошибка загрузки данных");
    }
};
