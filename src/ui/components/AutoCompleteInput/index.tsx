/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';

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
                onChange={onChange}
                options={options?.sort((a: IOption, b: IOption) =>
                    a.label.localeCompare(b.label)
                )}
                renderInput={(params) => (
                    <InputContainer ref={params.InputProps.ref}>
                        <AutoCompleteField
                            inputError={!!inputError}
                            placeholder="Selecione"
                            {...params.inputProps}
                        />

                        <InputWarning>{inputError}</InputWarning>
                    </InputContainer>
                )}
                sx={{
                    width: '100%',
                }}
            />
        </AutoCompleteLabel>
    );
};

export default AutoCompleteInput;
