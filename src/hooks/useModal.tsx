import {ReactNode, useState} from 'react';
import ReactDOM from 'react-dom';
interface ModalProps {
    children:ReactNode;
    
}

/*interface UseModalResult {
    Modal: (props: ModalProps) => JSX.Element | null;

}*/
const useModal = ()=>{
    const[show, setShow] = useState(false);
    const showModal = () =>{
        setShow(true);
    }
    const closeModal = () =>{
        setShow(false);
    }
    const Modal = ({children}:ModalProps) => {
        if(!show) return null;
        return ReactDOM.createPortal(children,document.getElementById('root') as HTMLElement);
    };
    return {Modal,showModal,closeModal};
};
export default useModal;