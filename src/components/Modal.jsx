import React, {useState}from 'react'
import { FaArrowLeft, FaArrowRight, FaArrowAltCircleUp } from 'react-icons/fa';

const Modal = ({ currentImg, dataImg, closeModal }) => {
    const [tempImg, setTempImg] = useState(currentImg);
    const prev = () => {
        const id = tempImg.id - 1;
        dataImg.forEach((item, idx) => {
            if (item.id === id) {
                setTempImg(item);
            }
        })
    }

    const next = () => {
        const id = tempImg.id + 1;
        dataImg.forEach((item, idx) => {
            if (item.id === id) {
                setTempImg(item);
            }
        })
    }
    return (
        <>
            <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="fixed inset-0 z-10">
                    <button 
                        className="p-6 bg-transparent border-0 text-gray-100 float-right"
                        onClick={() => closeModal(false)}>
                        X
                    </button>
                </div>
                <div className="px-6 bg-transparent border-0 inset-50 z-50">
                    {tempImg.id !== 1 ? <button
                        className="bg-transparent border-0 inset-50 z-50 text-gray-100"
                        onClick={() => prev()}
                        >
                            <FaArrowLeft />
                    </button> : null}
                </div>
                <div className="relative w-auto my-6 mx-auto max-w-3xl">     
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col  md:w-full bg-white outline-none focus:outline-none">
                        <img src={tempImg.src} />
                    </div>
                </div>
                <div className="px-6 bg-transparent border-0 inset-50 z-50">                    
                    {tempImg.id !== 12 ? <button
                        className="bg-transparent border-0 inset-50 z-50 text-gray-100"
                        onClick={() => next()}
                    >
                        <FaArrowRight />
                    </button> : null}
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-10 bg-black">
            </div>
        </>
    )
}

export default Modal