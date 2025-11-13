import FileIcon from "../icons/FileIcon";
import ProjectsDlg from "@/components/dlgs/ProjectsDlg";
import { useState } from "react";
import StartupMenu from "../dlgs/StartupMenu";

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

export default function Win11Page({
  setWindowPos,
  windowToggle,
  setWindowToggle,
  projectData,
}: ApplePageProps) {
  const [showProjectDlg, setShowProjectDlg] = useState(false);
  const [showStartupMenu, setShowStartupMenu] = useState(false);

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
    <div className="relative top-0 w-screen h-screen animate-start1">
      <div className="absolute left-0 top-0 bg-[url('/background.png')] bg-cover bg-center w-screen h-screen">
        <FileIcon
          iconUrl="/Projects.png"
          iconName="Projects"
          onClick={() => setShowProjectDlg(true)}
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
        <a href="/Resume.pdf" target="_blank">
          <FileIcon
            iconUrl="/Resume.png"
            iconName="Resume"
            onClick={() => {}}
            invert={false}
          />
        </a>
        <FileIcon
          iconUrl="/mac.png"
          iconName="Apple"
          onClick={() => ToggleWindow()}
          invert={false}
        />
      </div>
      <div className="flex justify-center items-center absolute left-0 bottom-0 w-full h-[60px] backdrop-blur-lg">
        <img
          src="/Win11.png"
          width={40}
          height={40}
          className="cursor-pointer mx-2"
          onClick={() => setShowStartupMenu(!showStartupMenu)}
        />
        <img
          src="/Projects.png"
          width={40}
          height={40}
          className="cursor-pointer mx-2"
          onClick={() => setShowProjectDlg(true)}
        />
        <a href="https://calendly.com/ryantanop/30min" target="_blank">
          <img
            src="/Calendar1.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
        </a>
        <img
          src="/MailBox.png"
          width={40}
          height={40}
          className="cursor-pointer mx-2"
        />
      </div>
      <ProjectsDlg
        show={showProjectDlg}
        data={projectData}
        setShow={setShowProjectDlg}
      />
      <StartupMenu
        open={showStartupMenu}
        setClose={() => setShowStartupMenu(false)}
      />
    </div>
  );
}
