import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faAppleAlt,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileIcon from "../icons/FileIcon";
import MacProjectsDlg from "@/components/dlgs/MacProjectsDlg";
import AboutMe from "../dlgs/AboutMe";
import ContactDlg from "../dlgs/ContactDlg";
import AppleMenuDlg from "../dlgs/AppleMenuDlg";

type PortfolioItem = {
  id: string;
  title: string;
  description?: string;
};

interface ApplePageProps {
  setWindowPos: React.Dispatch<React.SetStateAction<number>>;
  windowToggle: number;
  setWindowToggle: React.Dispatch<React.SetStateAction<number>>;
  weather: Weather | null
  city: string
  weatherCondition: string
}

interface Weather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

interface Location {
  lat: string;
  lon: string;
  city: string;
  region: string;
  country: string;
}

export default function ApplePage({
  setWindowPos,
  windowToggle,
  setWindowToggle,
  weather,
  weatherCondition,
  city
}: ApplePageProps) {
  const [showProjectDlg, setShowProjectDlg] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContactDlg, setShowContactDlg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showingDlgTitle, setShowingDlgTitle] = useState(false);
  const [time, setTime] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const now = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    } as const;
    let formatted = now.toLocaleString("en-US", options);
    const tick = () => setTime(formatted);
    tick(); // initial time
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(new Date().toLocaleTimeString());

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
      <div className="absolute right-[20px] top-[50px] text-white z-30 w-[200px] h-[180px] bg-[rgb(39_85_147)]/50 rounded-[30px] p-[20px]">
        <p className="font-bold">{city}</p>
        <p className="text-[45px] mb-[10px]">{weather?.temperature + '°'}</p>
        <p>{weatherCondition}</p>
      </div>
      <div className="absolute left-0 top-0 bg-[url('/AppleBackgroundImage.jpg')] bg-cover bg-center w-full h-full px-[18px] py-[30px]">
        <div className="flex absolute left-0 top-0 w-screen h-[25px] text-white">
          <div className="flex w-1/2">
            <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30" onClick={() => setShowMenu(true)}>
              <FontAwesomeIcon icon={faAppleAlt} size="1x" />
            </p>
            <p className="mx-[10px] px-[5px] rounded-sm font-bold">
              {showAboutMe ? 'About Me' : (showContactDlg ? 'Contact' : (showProjectDlg ? 'Projects' : 'Finder'))}
            </p>
            <p className={`mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30 ` + (showAboutMe == true ? 'hidden' : '')} onClick={() => setShowAboutMe(true)}>
              About Me
            </p>
            <p className={`mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30 ` + (showContactDlg == true ? 'hidden' : '')} onClick={() => setShowContactDlg(true)}>
              Contact
            </p>
            <p className={`mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30 ` + (showProjectDlg == true ? 'hidden' : '')} onClick={() => { setShowProjectDlg(true) }}>
              Projects
            </p>
          </div>
          <div className="w-1/2 flex justify-end px-[20px] font-normal">
            {time}
          </div>
        </div>
        <FileIcon
          iconUrl="/Projects1.png"
          iconName="Projects"
          onClick={() => setShowProjectDlg(true)}
          invert={false}
        />
        <FileIcon
          iconUrl="/GitHub1.png"
          iconName="GitHub"
          onClick={() => { }}
          invert={false}
        />
        <FileIcon
          iconUrl="/LinkedIn1.png"
          iconName="LinkedIn"
          onClick={() => { }}
          invert={false}
        />
        <div className="inline-block cursor-pointer" onClick={() => window.open('/Resume.pdf')}>
          <div className="w-20 h-24 mx-4">
            <div className="flex w-full justify-center">
              <img
                src={"/Resume1.png"}
                width={50}
                height={50}
                className="cursor-pointer rounded-2xl"
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
          iconUrl="/Win11_1.jpg"
          iconName="Windows"
          onClick={() => ToggleWindow()}
          invert={false}
        />
      </div>
      <div className="flex justify-center items-center absolute left-0 bottom-0 w-full h-[80px]">
        <div className="flex justify-center items-center p-[3px] rounded-lg backdrop-blur-lg border border-white">
          <img
            src="/Contact1.jpeg"
            width={50}
            height={50}
            className="cursor-pointer mx-2 rounded-2xl"
            onClick={() => { setShowContactDlg(true) }}
          />
          <a href="mailto:loi.nguyen.911124@gmail.com" target="_blank">
            <img
              src="/Email.jpeg"
              width={55}
              height={55}
              className="cursor-pointer mx-2 rounded-2xl"
            />
          </a>
          <img
            src="/Projects1.png"
            width={55}
            height={55}
            className="cursor-pointer mx-2 rounded-2xl"
            onClick={() => setShowProjectDlg(true)}
          />
          <a href="https://calendly.com/ryantanop/30min" target="_blank">
            <img
              src="/CalendarMac.png"
              width={55}
              height={55}
              className="cursor-pointer mx-2 rounded-2xl"
            />
          </a>
        </div>
      </div>
      <MacProjectsDlg show={showProjectDlg} setShow={setShowProjectDlg} />
      <AboutMe show={showAboutMe} setShow={setShowAboutMe} setShowProjects={setShowProjectDlg} setShowContactDlg={setShowContactDlg} />
      <ContactDlg show={showContactDlg} setShow={setShowContactDlg} setAboutMe={setShowAboutMe} />
      <AppleMenuDlg show={showMenu} setShow={setShowMenu} setShowAboutMe={setShowAboutMe} setShowContactDlg={setShowContactDlg} setShowProjectDlg={setShowProjectDlg} />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 500, opacity: 0 }}     // start off-screen to the right
            animate={{ x: 0, opacity: 1 }}       // slide into place
            exit={{ x: 500, opacity: 0 }}        // slide out to the right
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center absolute right-[30px] top-[50px] 
                     w-[400px] h-[67px] bg-gray-200/20 rounded-[10px] 
                     border border-white/10 text-white text-[15px] z-50 backdrop-blur-sm"
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
      <div className="absolute left-0 bottom-[75px] w-full h-[25px] flex justify-center">
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
    </div>
  );
}
