type QueryParams = Record<string, string | number>;

export async function fetchData<T>(
    endpoint: string,
    locale: string,
    queryParams: QueryParams = {}
): Promise<T | null> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
        throw new Error("Базовый URL не задан в переменных окружения.");
    }

    const url = new URL(`${baseUrl}/${endpoint}`);
    url.searchParams.append('lang', locale);

    Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
    });

    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`);
        }

        // Проверяем, что ответ содержит данные и их можно прочитать как JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const textData = await response.text();
            if (textData) {
                return JSON.parse(textData) as T;
            } else {
                throw new Error("Ответ от API пустой.");
            }
        } else {
            throw new Error("Ответ от API не является JSON.");
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return null;
    }
}
