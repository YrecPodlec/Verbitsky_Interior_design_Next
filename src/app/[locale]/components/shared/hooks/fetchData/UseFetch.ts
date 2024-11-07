export const getServerStaticProps = async (page: number, limit: number, lang: string) => {
    const url = `https://verbitsky-design-server.vercel.app/projects?page=${page}&limit=${limit}&lang=${lang}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            total: data.total || 0,
            results: data.results || []
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Ошибка загрузки данных");
    }
};
