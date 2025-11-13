'use client'
import React, { use } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFire, faMobile, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import ProjectCategoryIcon from '../icons/ProjectCategoryIcon';
import PortfolioItem from '../items/PortfolioItem';

interface Project {
    id: string;
    title: string;
    description?: string;
}

interface ProjectDlgProps {
    show: boolean,
    data: Project[],
    setShow: (show: boolean) => void
}

export default function ProjectsDlg({ show, data, setShow }: ProjectDlgProps) {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    const [selectedItem, setSelectedItem] = useState(-1);
    if (show == false) {
        return <></>;
    }

    return <div className='flex justify-center fixed w-screen h-screen'>
        <div className='fixed w-screen h-screen opacity-30 bg-black z-0'></div>
        <div className='w-2/3 h-7/8 mt-[20px] bg-black rounded-xl overflow-hidden z-1'>
            <div className='flex w-full h-[30px]'>
                <div className='w-1/2'>
                    {selectedItem != -1?<div className='flex justify-center items-center text-white font-xl w-[50px] h-[30px] rounded-bl-lg cursor-pointer' onClick={() => setSelectedItem(-1)}>
                        Back
                    </div>:null}
                </div>
                <div className='flex justify-end w-1/2'>
                    <div className='flex justify-center items-center text-white font-xl w-[50px] h-[30px] bg-red-500 rounded-bl-lg cursor-pointer' onClick={() => setShow(false)}>
                        X
                    </div>
                </div>
            </div>
            {selectedItem == -1 ?
                <div className='flex'>
                    <div className='w-1/12 text-white text-xs'>
                        <ProjectCategoryIcon iconDefinition={faStar} title="All Projects" onClick={() => setSelectedCategory(1)} selected={selectedCategory == 1} />
                        <ProjectCategoryIcon iconDefinition={faFire} title="Popular" onClick={() => setSelectedCategory(2)} selected={selectedCategory == 2} />
                        <ProjectCategoryIcon iconDefinition={faMobile} title="Mobile" onClick={() => setSelectedCategory(3)} selected={selectedCategory == 3} />
                        <ProjectCategoryIcon iconDefinition={faWebAwesome} title="Web" onClick={() => setSelectedCategory(4)} selected={selectedCategory == 4} />
                    </div>
                    <div className='flex flex-wrap w-11/12 text-white h-[800px] overflow-y-scroll'>
                        <h1 className='text-[50px] text-white w-full my-[50px]'>Featured</h1>
                        {/* {data.map((row, index) => <React.Fragment key={index}> {row.title}  </React.Fragment>)} */}
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                        <PortfolioItem onClick={() => { setSelectedItem(1) }} />
                    </div >
                </div> : <div>
                    <img src='Calendar1.png' className='w-[1300px] h-[800px]'/>
                </div>}
        </div>
    </div>
}
