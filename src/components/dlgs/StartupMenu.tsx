"use client";
import { useState } from "react";
import FileIcon from "../icons/FileIcon";

interface StartupMenuProps {
  open: boolean;
  setClose: () => void;
}

export default function StartupMenu({ open, setClose }: StartupMenuProps) {
  const [expanded, setExpanded] = useState(true);
  if (!open) return <></>;

  return (
    <div className="flex justify-center fixed w-screen h-screen left-0 top-0">
      <div
        className="flex fixed w-screen h-screen left-0 top-0 bg-black opacity-50"
        onClick={(e) => {
          e.target == e.currentTarget ? setClose() : null;
        }}
      />
      <div
        className="transition-all duration-300 absolute w-[470px] bottom-[70px] rounded-xl backdrop-blur-lg border border-gray-600 overflow-hidden"
        style={{ height: expanded ? "500px" : "200px" }}
      >
        <div className="flex w-full bg-black/20 h-[150px]">
          <FileIcon
            iconUrl="/Projects.png"
            iconName="Projects"
            onClick={() => {}}
            invert={false}
          />
          <FileIcon
            iconUrl="/GitHub.png"
            iconName="GitHub"
            onClick={() => {}}
            invert={false}
          />
          <FileIcon
            iconUrl="/LinkedIn.png"
            iconName="LinkedIn"
            onClick={() => {}}
            invert={false}
          />
          <a href="/Resume.pdf" target="_blank" className="inline-block">
            <FileIcon
              iconUrl="/Resume.png"
              iconName="Resume"
              onClick={() => {}}
              invert={false}
            />
          </a>
          <FileIcon
            iconUrl="/Win11.png"
            iconName="Windows"
            onClick={() => {}}
            invert={false}
          />
        </div>
        <div className="w-full h-[3px] px-[10px]">
          <div className="w-full h-full bg-gray-200"></div>
        </div>
        <div
          className="transition-all bg-black/20 duration-300 w-full h-[300px] overflow-hidden"
          style={{ height: expanded ? "300px" : "0px" }}
        >
          <p className="w-full text-center text-white py-[10px]">
            Phone: +1(929) 233 9817
          </p>
          <div className="w-full h-[3px] px-[10px]">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
          <p className="w-full text-center text-white py-[10px]">
            Email: loi.nguyen.eng11@gmail.com
          </p>
          <div className="w-full h-[3px] px-[10px]">
            <div className="w-full h-full bg-gray-200"></div>
          </div>
          <p className="w-full text-center text-white py-[10px]">
            LinkedIn: https://linkedin.com/loinguyen
          </p>
        </div>
        <div
          className="flex items-center w-full bg-black/50 h-[50px] cursor-pointer text-white "
          onClick={() => setExpanded(!expanded)}
        >
          <p className="flex justify-center w-full">
            Loi Nguyen: Software Engineer | Tech Lead
          </p>
        </div>
      </div>
    </div>
  );
}
