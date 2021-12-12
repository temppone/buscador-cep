import React, { useState } from 'react';

import { ISwitchButton } from '../../../@types';
import {
    SwitchButtonContainer,
    SwitchButtonInput,
    SwitchButtonSlider,
} from './styles';

const SwitchButton = ({ onClick }: ISwitchButton): JSX.Element => {
    const [toggle, setToggle] = useState(false);

    return (
        <SwitchButtonContainer data-cy="switch-button">
            <SwitchButtonInput defaultChecked={toggle} type="checkbox" />
            <SwitchButtonSlider
                {...{ toggle }}
                onClick={() => {
                    setToggle(!toggle);
                    onClick?.();
                }}
            />
        </SwitchButtonContainer>
    );
};

export default SwitchButton;
