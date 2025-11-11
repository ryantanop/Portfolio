import React from 'react';

interface ProjectDlgProps {
    show: boolean
}

export default function ProjectsDlg({ show }: ProjectDlgProps) {
    if (show == false) {
        return <></>;
    }

    return <div className='flex justify-center fixed w-screen h-screen'>
        <div className='fixed w-screen h-screen opacity-30 bg-black'></div>
        <div className='w-2/3 h-7/8 mt-[20px] bg-gray-700 rounded-xl overflow-hidden'>
            <div className='flex justify-end w-full h-[30px]'>
                <div className='w-[50px] h-[30px] bg-red-500 rounded-bl-lg'>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/24 text-white text-xs'>
                    <img width={30} height={30}></img>
                    <p>All Projects</p>
                    <img width={30} height={30}></img>
                    <p>Popular</p>
                    <img width={30} height={30}></img>
                    <p>Mobile</p>
                    <img width={30} height={30}></img>
                    <p>Web</p>
                </div>
                <div className='w-23/24 bg-white'>
                </div>
            </div>
        </div>
    </div>
}
