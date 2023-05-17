import MuiModal from '@mui/material/Modal';
import {useRecoilState, useRecoilValue} from "recoil";
import {modalState} from "@/atoms/modalAtom";

const Modal = () => {
    const [showModal, setShowModal] = useRecoilState(modalState)

    const handlerClose = () => {
        setShowModal(false)
    }

    return (
        <MuiModal open={showModal} onClose={handlerClose}>
        <>Modal</>
        </MuiModal>
    );
};

export default Modal;