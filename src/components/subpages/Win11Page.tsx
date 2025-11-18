'use client'
import FileIcon from "../icons/FileIcon";
import WinProjectsDlg from "@/components/dlgs/WinProjectsDlg";
import { useState, useEffect } from "react";
import StartupMenu from "../dlgs/StartupMenu";

type PortfolioItem = {
  id: string;
  title: string;
  description?: string;
};

interface Weather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

interface ApplePageProps {
  setWindowPos: React.Dispatch<React.SetStateAction<number>>;
  windowToggle: number;
  setWindowToggle: React.Dispatch<React.SetStateAction<number>>;
  weather: Weather | null
  city: string
  weatherCondition: string

}

export default function Win11Page({
  setWindowPos,
  windowToggle,
  setWindowToggle,
  weather,
  weatherCondition,
  city

}: ApplePageProps) {
  const [showProjectDlg, setShowProjectDlg] = useState(false);
  const [showStartupMenu, setShowStartupMenu] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick(); // initial time
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="absolute left-0 top-0 bg-[url('/windows.jpeg')] bg-cover bg-center w-screen h-screen p-[18px]">
        <FileIcon
          iconUrl="/Projects.png"
          iconName="Projects"
          onClick={() => setShowProjectDlg(true)}
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
        <div className="inline-block cursor-pointer" onClick={() => window.open('/Resume.pdf')}>
          <div className="w-20 h-24 mx-4">
            <div className="flex w-full h-[60px] justify-center">
              <img
                src={"/Resume.png"}
                width={60}
                height={60}
              />
            </div>
            <p
              className="flex w-full justify-center text-white mt-[10px]"
            >
              {"Resume"}
            </p>
          </div>
        </div>
        <FileIcon
          iconUrl="/mac.png"
          iconName="Apple"
          onClick={() => ToggleWindow()}
          invert={false}
        />
      </div>
      <div className="flex justify-center items-center absolute left-0 bottom-0 w-full h-[60px] backdrop-blur-lg">
        <img
          src="/Win11_1.png"
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
        <a href="mailto:loi.nguyen.911124@gmail.com" target="_blank">
          <img
            src="/MailBox.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
        </a>
        <a href="https://calendly.com/ryantanop/30min" target="_blank">
          <img
            src="/Calendar.png"
            width={40}
            height={40}
            className="cursor-pointer mx-2"
          />
        </a>
        <p className="fixed bottom-[15px] right-[10px] text-white">{time}</p>
        <div className="fixed bottom-[5px] left-[20px] text-white">
          <p>{weather?.temperature+'°'}</p>
          <p>{weatherCondition}</p>
        </div>
      </div>
      <WinProjectsDlg show={showProjectDlg} setShow={setShowProjectDlg} />
      <StartupMenu
        open={showStartupMenu}
        setClose={() => setShowStartupMenu(false)}
      />
    </div>
  );

}
