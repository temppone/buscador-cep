import React from 'react';

interface IData {
    id: string;
    name: string;
}

interface IAutoCompleteContainer {
    data: any[];
}

const AutoCompleteInput = ({ data }: IAutoCompleteContainer) => {
    return <AutoCompleteContainer />;
};

export default AutoCompleteInput;
