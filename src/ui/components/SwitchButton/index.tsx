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
        <SwitchButtonContainer>
            <SwitchButtonInput type="checkbox" defaultChecked={toggle} />
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
