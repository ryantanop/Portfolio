import { useState } from "react";
import FileIcon from "../icons/FileIcon";
import ProjectsDlg from "@/components/dlgs/ProjectsDlg";

type PortfolioItem = {
  id: string;
  title: string;
  description?: string;
};

interface ApplePageProps {
  setWindowPos: React.Dispatch<React.SetStateAction<number>>;
  windowToggle: number;
  setWindowToggle: React.Dispatch<React.SetStateAction<number>>;
  projectData: PortfolioItem[];
}

export default function ApplePage({
  setWindowPos,
  windowToggle,
  setWindowToggle,
  projectData,
}: ApplePageProps) {
  const [showProjectDlg, setShowProjectDlg] = useState(false);

  const ToggleWindow = () => {
    let intervalId = setInterval(() => {
      setWindowPos((prevPos) => {
        const newPos = prevPos + windowToggle * 40;
        if (newPos >= window.innerWidth || newPos <= 0) {
          setWindowToggle(-windowToggle);
          clearInterval(intervalId);
        }
        return newPos;
      });
    }, 1);
  };

  return (
    <div className="relative top-0 w-screen h-screen">
      <div className="absolute left-0 top-0 bg-[url('/AppleBackgroundImage.jpg')] bg-cover bg-center w-full h-full">
        <div className="flex fixed w-screen h-[25px] text-white font-bold">
          <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white hover:text-black">
            About Me
          </p>
          <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white hover:text-black">
            Contact
          </p>
          <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white hover:text-black">
            Projects
          </p>
        </div>
        <FileIcon
          iconUrl="/Projects.png"
          iconName="Projects"
          onClick={() => setShowProjectDlg(true)}
          invert={true}
        />
        <FileIcon
          iconUrl="/GitHub.png"
          iconName="GitHub"
          onClick={() => {}}
          invert={true}
        />
        <FileIcon
          iconUrl="/LinkedIn.png"
          iconName="LinkedIn"
          onClick={() => {}}
          invert={true}
        />
        <a href="/Resume.pdf" target="_blank">
          <FileIcon
            iconUrl="/Resume.png"
            iconName="Resume"
            onClick={() => {}}
            invert={true}
          />
        </a>
        <FileIcon
          iconUrl="/Win11.png"
          iconName="Windows"
          onClick={() => ToggleWindow()}
          invert={true}
        />
      </div>
      <div className="flex justify-center items-center absolute left-0 bottom-0 w-full h-[60px]">
        <div className="flex justify-center items-center p-[2px] rounded-lg backdrop-blur-lg border border-white">
          <img
            src="/Mac.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
          <img
            src="/MailBox.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
          <img
            src="/Projects.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
          <img
            src="/Calendar1.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
        </div>
      </div>
      <ProjectsDlg show={showProjectDlg} setShow={setShowProjectDlg} />
    </div>
  );
}
