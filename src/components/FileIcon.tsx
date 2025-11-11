import React from 'react';

interface FileIconProps {
  iconUrl: string;
  iconName: string;
  onClick: () => void
}

export default function FileIcon({ iconUrl, iconName, onClick }: FileIconProps) {
    return <div className="w-20 h-24 mx-4 my-8">
        <div className="flex w-full justify-center">
            <img src={iconUrl} width={60} height={60} className="cursor-pointer" onClick={onClick}/>
        </div>
        <p className="flex w-full justify-center text-white mt-[10px]" onClick={onClick}>{iconName}</p>
    </div>
}
