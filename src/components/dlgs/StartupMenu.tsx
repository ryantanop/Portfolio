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
        onClick={(e) => { if (e.target == e.currentTarget) { setClose(); setExpanded(true) } }}
      />
      <div
        className="transition-all duration-300 absolute w-[470px] bottom-[70px] rounded-xl backdrop-blur-lg border border-gray-600 overflow-hidden"
        style={{ height: expanded ? "550px" : "250px" }}
      >
        <div className="flex w-full bg-black/20 h-[150px]">
          <FileIcon
            iconUrl="/Projects.png"
            iconName="Projects"
            onClick={() => { }}
            invert={false}
          />
          <FileIcon
            iconUrl="/GitHub.png"
            iconName="GitHub"
            onClick={() => { }}
            invert={false}
          />
          <FileIcon
            iconUrl="/LinkedIn.png"
            iconName="LinkedIn"
            onClick={() => { }}
            invert={false}
          />
          <a href="/Resume.pdf" target="_blank" className="inline-block">
            <FileIcon
              iconUrl="/Resume.png"
              iconName="Resume"
              onClick={() => { }}
              invert={false}
            />
          </a>
          <FileIcon
            iconUrl="/Win11.png"
            iconName="Windows"
            onClick={() => { }}
            invert={false}
          />
        </div>
        <div className="w-full h-[3px] px-[10px]">
          <div className="w-full h-full bg-white/50"></div>
        </div>
        <div
          className="transition-all bg-black/20 duration-300 w-full h-[300px] overflow-hidden"
          style={{ height: expanded ? "300px" : "0px" }}
        >
          <div className="px-[20px] flex w-full text-white py-[10px] HoverShowTarget">
            <div className="w-1/3">
              Phone:
            </div>
            <div className="w-1/3">
              +1(929) 233 9817
            </div>
            <div className="w-1/3 flex justify-end">
              <a href="tel:+1(929) 233 9817">
                <img src='/phone_icon.png' alt='phone_icon' width={20} height={20} className="HoverShow cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full h-[3px] px-[10px]">
            <div className="w-full h-full bg-white/50"></div>
          </div>
          <div className="px-[20px] flex w-full text-white py-[10px] HoverShowTarget">
            <div className="w-1/3">
              Email:
            </div>
            <div className="w-1/3">
              loi.nguyen.eng11@gmail.com
            </div>
            <div className="w-1/3 flex justify-end">
              <a href="mailto:loi.nguyen.911124@gmail.com" target="_blank">
                <img src='/PlainEmailBox.png' alt='mail_icon' width={20} height={20} className="HoverShow cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full h-[3px] px-[10px]">
            <div className="w-full h-full bg-white/50"></div>
          </div>
          <div className="px-[20px] flex w-full text-white py-[10px] HoverShowTarget">
            <div className="w-1/3">
              LinkedIn:
            </div>
            <div className="w-1/3">
              https://linkedin.com/loinguyen
            </div>
            <div className="w-1/3 flex justify-end">
              <a href="https://linkedin.com/in/loinugyen" target="_blank">
                <img src='/LinkedIn.png' alt='mail_icon' width={20} height={20} className="HoverShow cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full h-[3px] px-[10px]">
            <div className="w-full h-full bg-white/50"></div>
          </div>
          <div className="px-[20px] flex w-full text-white py-[10px]">
            <div className="w-1/3">
              Experience
            </div>
            <div className="w-2/3">
              10+ years
            </div>
          </div>
          <div className="px-[20px] flex w-full text-white">
            <div className="w-1/3">
              Skills
            </div>
            <div className="w-2/3">
              Javascript, Typescript, C#, Ruby, Go
            </div>
          </div>
          <div className="px-[20px] flex w-full text-white">
            <div className="w-1/3">
            </div>
            <div className="w-2/3">
              Node.js, Ruby on Rails, ASP.NET
            </div>
          </div>
          <div className="px-[20px] flex w-full text-white">
            <div className="w-1/3">
            </div>
            <div className="w-2/3">
              React.js, Angular.js
            </div>
          </div>
          <div className="px-[20px] flex w-full text-white">
            <div className="w-1/3">
            </div>
            <div className="w-2/3">
              PostgreSQL, MySQL, MongoDB
            </div>
          </div>
        </div>
        <div
          className="flex items-center w-full bg-black/50 h-[100px] cursor-pointer text-white "
          onClick={() => setExpanded(!expanded)}
        >
          <img src='/Loi.png' alt='Loi' className="ml-[20px] w-[70px] h-[70px]" />
          <p className="flex justify-center w-full">
            Loi Nguyen: Software Engineer | Tech Lead
          </p>
        </div>
      </div>
    </div>
  );
}
