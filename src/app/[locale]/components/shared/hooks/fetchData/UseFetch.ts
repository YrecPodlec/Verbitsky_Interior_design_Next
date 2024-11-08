export async function getStaticProps({ locale }: { locale: string }) {
    try {
        const res = await fetch(`https://verbitsky-design-server.vercel.app/price?lang=${locale}`);
        const data = await res.json();

        return {
            props: {
                data,
            },
            revalidate: 60, // Optional: page will be re-built every 60 seconds
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return {
            props: {
                error: 'Error fetching data',
            },
        };
    }
}