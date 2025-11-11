'use client'
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFire, faMobile, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import ProjectCategoryIcon from './ProjectCategoryIcon';

interface ProjectDlgProps {
    show: boolean,
    setShow: (show: boolean) => void
}

export default function ProjectsDlg({ show, setShow }: ProjectDlgProps) {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    if (show == false) {
        return <></>;
    }

    return <div className='flex justify-center fixed w-screen h-screen'>
        <div className='fixed w-screen h-screen opacity-30 bg-black z-0'></div>
        <div className='w-2/3 h-7/8 mt-[20px] bg-gray-700 rounded-xl overflow-hidden z-1'>
            <div className='flex justify-end w-full h-[30px]'>
                <div className='flex justify-center items-center text-white font-xl w-[50px] h-[30px] bg-red-500 rounded-bl-lg cursor-pointer' onClick={() => setShow(false)}>
                    X
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/12 text-white text-xs'>
                    <ProjectCategoryIcon iconDefinition={faStar} title="All Projects" onClick = {() => setSelectedCategory(1)} selected={selectedCategory == 1}/>
                    <ProjectCategoryIcon iconDefinition={faFire} title="Popular"  onClick = {() => setSelectedCategory(2)} selected={selectedCategory == 2}/>
                    <ProjectCategoryIcon iconDefinition={faMobile} title="Mobile"  onClick = {() => setSelectedCategory(3)} selected={selectedCategory == 3}/>
                    <ProjectCategoryIcon iconDefinition={faWebAwesome} title="Web"  onClick = {() => setSelectedCategory(4)} selected={selectedCategory == 4}/>
                </div>
                <div className='w-11/12'>
                </div>
            </div>
        </div>
    </div>
}
