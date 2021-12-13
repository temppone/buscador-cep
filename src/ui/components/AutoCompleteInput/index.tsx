/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';

import { IOption } from '../../../@types';
import { InputWarning } from '../Input/styles';
import { InputContainer, AutoCompleteField, AutoCompleteLabel } from './styles';

interface IAutoCompleteInput {
    label: string;
    options: IOption[];
    // eslint-disable-next-line react/require-default-props
    inputError?: string;
    onChange: any;
    disabled?: boolean;
}

const AutoCompleteInput = function ({ inputError, options, label, onChange, disabled }: IAutoCompleteInput) {
    return (
        <AutoCompleteLabel>
            {label}

            <Autocomplete
                data-cy='autocomplete-select'
                id='custom-input-demo'
                onChange={onChange}
                options={options?.sort((a: IOption, b: IOption) => a.label.localeCompare(b.label))}
                renderInput={params => (
                    <InputContainer ref={params.InputProps.ref}>
                        <AutoCompleteField inputError={!!inputError} placeholder='Selecione' {...params.inputProps} />

                        <InputWarning>{inputError}</InputWarning>
                    </InputContainer>
                )}
                sx={{
                    width: '100%',
                }}
                disabled={disabled}
            />
        </AutoCompleteLabel>
    );
};

export default AutoCompleteInput;
