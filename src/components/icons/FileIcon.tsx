import React from "react";

interface FileIconProps {
  iconUrl: string;
  iconName: string;
  onClick: () => void;
  invert: boolean;
}

export default function FileIcon({
  iconUrl,
  iconName,
  onClick,
  invert,
}: FileIconProps) {
  return (
    <div className="w-20 h-24 mx-4 my-6">
      <div className="flex w-full h-[60px] justify-center">
        <img
          src={iconUrl}
          width={60}
          height={60}
          className={invert ? "cursor-pointer invert" : "cursor-pointer"}
          onClick={onClick}
        />
      </div>
      <p
        className="flex w-full justify-center text-white mt-[10px]"
        onClick={onClick}
      >
        {iconName}
      </p>
    </div>
  );
}
