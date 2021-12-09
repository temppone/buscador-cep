import { useEffect } from 'react';

interface HeadProps {
    title: string;
    description: string;
}

const Head = ({ title = '', description = '' }: HeadProps): null => {
    useEffect(() => {
        document.title = `${title} | BuscadorCEP!`;
        document
            ?.querySelector("meta[name='description']")
            ?.setAttribute('content', description || '');
    });

    return null;
};

export default Head;
