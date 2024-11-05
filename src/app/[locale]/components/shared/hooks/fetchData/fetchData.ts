export async function fetchData(url: string) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
}
