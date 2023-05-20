import {XMarkIcon} from '@heroicons/react/24/outline';
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
        <>
            <button onClick={handlerClose}
                    className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]
                    hover:bg-[#181818]'>
                <XMarkIcon className='h-6 w-6'/>
            </button>
        </>
        </MuiModal>
    );
};

export default Modal;