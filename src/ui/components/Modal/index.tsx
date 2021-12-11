import { Close as CloseIcon } from '@mui/icons-material';
import React from 'react';

import Button from '../Button';
import {
    CloseButton,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
} from './styles';

interface IModal {
    header: string;
    body: string;
    buttonName: string;
    onClose?: () => void;
    onClick?: () => void;
}

const Modal = ({
    header,
    body,
    buttonName,
    onClose,
    onClick,
}: IModal): JSX.Element => {
    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton>
                    <Button name="" svg={<CloseIcon />} onClick={onClose} />
                </CloseButton>
                <ModalHeader>{header}</ModalHeader>
                <ModalBody>{body}</ModalBody>
                <Button name={buttonName} onClick={onClick} />
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
