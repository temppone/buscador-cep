import React from 'react';

import Input from '../../ui/components/Input';

const Address = (): JSX.Element => {
    return (
        <div>
            <Input
                inputError=""
                label="Address"
                onClick={() => console.log('teste')}
            />
        </div>
    );
};

export default Address;
