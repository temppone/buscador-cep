import React from 'react';

import { Close as CloseIcon, ContentCopy } from '@mui/icons-material';

import Button from '../Button';
import {
    CopyContentButton as CopyContentButton,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
} from './styles';

interface IModal {
    header: string;
    body: string;
    buttonName: string;
    onCopyContent?: () => void;
    onClose?: () => void;
}

const Modal = ({
    header,
    body,
    buttonName,
    onCopyContent,
    onClose,
}: IModal): JSX.Element => {
    return (
        <ModalContainer>
            <ModalContent>
                <CopyContentButton>
                    <Button
                        name=""
                        onClick={onCopyContent}
                        svg={<ContentCopy fontSize="medium" />}
                    />
                </CopyContentButton>

                <ModalHeader>{header}</ModalHeader>

                <ModalBody>{body}</ModalBody>

                <Button name={buttonName} onClick={onClose} />
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
