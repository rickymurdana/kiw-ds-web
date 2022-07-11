import React, { useState } from 'react'
import rumah1 from '../assets/48.jpg'
import rumah2 from '../assets/rumah2.jpeg'
import rumah3 from '../assets/rumah3.jpeg'
import rumah4 from '../assets/rumah4.jpeg'
import rumah5 from '../assets/rumah5.jpeg'
import rumah6 from '../assets/rumah6.jpeg'
import rumah7 from '../assets/1.jpg'
import rumah8 from '../assets/42.jpg'
import rumah9 from '../assets/16.jpg'
import rumah10 from '../assets/23.jpg'
import rumah11 from '../assets/27.jpg'
import rumah12 from '../assets/30.jpg'
import Modal from './Modal'
import ModalImage from "react-modal-image";

const About = () => {
    const imgArr = [
        { id: 1, src: rumah1 },
        { id: 2, src: rumah2 },
        { id: 3, src: rumah3 },
        { id: 4, src: rumah4 },
        { id: 5, src: rumah5 },
        { id: 6, src: rumah6 },
        { id: 7, src: rumah7 },
        { id: 8, src: rumah8 },
        { id: 9, src: rumah9 },
        { id: 10, src: rumah10 },
        { id: 11, src: rumah11 },
        { id: 12, src: rumah12 },
    ];
    const [openModal, setOpenModal] = useState(false);
    const [currentImg, setCurrentImg] = useState();
    const handleClick = (item) => {
        setOpenModal(true);
        setCurrentImg(item);
    }

    return (
        <div name='about' className='w-full my-10'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl pt-8 uppercase text-center'>Galeri</h2>
                    {/* <h3 className='text-5xl font-bold'>Trusted by developers across the world</h3> */}
                    <p className='text-3xl py-6 text-gray-500'>Galeri hasil desain interior dan eksterior klien kami.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2'>
                    {imgArr.map((item, i) => (
                        <div className='w-50 h-64 bg-zinx-200 border rounded-xl shadow-xl relative group' style={{cursor: 'pointer'}}  onClick={() => handleClick(item)}>
                            <img className="hover:opacity-25 rounded-xl" style={{width: 'auto', height: '100%'}} src={item.src} alt="/" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <div className="flex-row text-center">
                                    {/* <h1 className="text-gray-50 font-bold text-lg">Be careful on the way.</h1> */}
                                    <p className="text-gray-200 font-medium text-sm">Lihat Detail</p>
                                    {/* <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {openModal && <Modal currentImg={currentImg} dataImg={imgArr} closeModal={setOpenModal} />}
            </div>
        </div>
    )
}

export default About