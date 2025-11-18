'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FileIcon from "../icons/FileIcon";
import WinProjectsDlg from "@/components/dlgs/WinProjectsDlg";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="absolute left-0 top-0 bg-[url('/windows.jpeg')] bg-cover bg-center w-screen h-screen px-[18px] py-[30px]">
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
            <div className="flex w-full justify-center">
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
          iconUrl="/Apple1.jpg"
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
          <p>{weather?.temperature + '°'}</p>
          <p>{weatherCondition}</p>
        </div>
      </div>
      <WinProjectsDlg show={showProjectDlg} setShow={setShowProjectDlg} />
      <StartupMenu
        open={showStartupMenu}
        setClose={() => setShowStartupMenu(false)}
      />
      <div className="absolute left-0 bottom-[62px] w-full h-[25px] flex justify-center">
        <div className="flex text-[14px] text-white/90 items-center w-[150px] h-[25px] border border-white/70 rounded-4xl text-white overflow-hidden">
          <img src='/Projects.png' width={20} height={20} className="ml-[5px]" />
          <p className="ml-[3px] mr-[5px]">Made with </p>
          <div className="animate-flow_down relative text-white font-bold">
            <p>Care</p>
            <p>Love</p>
            <p>Next.js</p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 500, opacity: 0 }}     // start off-screen to the right
            animate={{ x: 0, opacity: 1 }}       // slide into place
            exit={{ x: 500, opacity: 0 }}        // slide out to the right
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center absolute right-[30px] bottom-[90px] 
                     w-[400px] h-[67px] bg-gray-200/5 rounded-[10px] 
                     border border-white/10 text-white text-[15px]"
            onClick={() => setVisible(false)}
          >
            <div className="ml-[10px] w-3/4">
              <p>Did you know?</p>
              <p className="text-[14px] text-white/80">
                This portfolio will also look great on mobile
              </p>
            </div>
            <div className="flex justify-center items-center w-1/4">
              <button
                onClick={() => setVisible(false)}
                className="flex justify-center items-center bg-blue-500/30 
                         w-[60px] h-[30px] rounded-lg text-white/70 cursor-pointer"
              >
                OK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}
