import { useEffect } from 'react';

interface HeadProps {
    title: string;

    description: string;
}

const Head = function ({ title = '', description = '' }: HeadProps): null {
    useEffect(() => {
        document.title = `${title} | BuscadorCEP!`;

        document
            // eslint-disable-next-line quotes
            ?.querySelector("meta[name='description']")
            ?.setAttribute('content', description || '');
    });

    return null;
};

export default Head;
