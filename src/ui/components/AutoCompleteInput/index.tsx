/* eslint-disable react/jsx-props-no-spreading */
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';

import { IOption } from '../../../@types';
import { InputWarning } from '../Input/styles';
import { InputContainer, AutoCompleteField, AutoCompleteLabel } from './styles';

interface IAutoCompleteInput {
    label: string;
    options: IOption[];
    inputError?: string;
    onChange: any;
}

const AutoCompleteInput = ({
    inputError,
    options,
    label,
    onChange,
}: IAutoCompleteInput) => {
    return (
        <AutoCompleteLabel>
            {label}
            <Autocomplete
                id="custom-input-demo"
                options={options?.sort((a: IOption, b: IOption) =>
                    a.label.localeCompare(b.label)
                )}
                onChange={onChange}
                renderInput={(params) => (
                    <InputContainer ref={params.InputProps.ref}>
                        <AutoCompleteField
                            inputError={!!inputError}
                            {...params.inputProps}
                        />
                        <InputWarning>{inputError}</InputWarning>
                    </InputContainer>
                )}
            />
        </AutoCompleteLabel>
    );
};

export default AutoCompleteInput;
