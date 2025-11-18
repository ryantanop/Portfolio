import { useEffect, useState } from "react";
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
      <div className="absolute left-0 top-0 bg-[url('/AppleBackgroundImage.jpg')] bg-cover bg-center w-full h-full p-[18px]">
        <div className="flex absolute left-0 top-0 w-screen h-[25px] text-white">
          <div className="flex w-1/2">
            <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30" onClick={() => setShowMenu(true)}>
              <FontAwesomeIcon icon={faAppleAlt} size="1x" />
            </p>
            <p className="mx-[10px] px-[5px] rounded-sm font-bold">
              {showAboutMe ? 'About Me' : (showContactDlg ? 'Contact' : (showProjectDlg ? 'Projects' : 'Finder'))}
            </p>
            <p className={`mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30 ` + (showAboutMe==true?'hidden':'')} onClick={() => setShowAboutMe(true)}>
              About Me
            </p>
            <p className={`mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30 ` + (showContactDlg==true?'hidden':'')} onClick={() => setShowContactDlg(true)}>
              Contact
            </p>
            <p className={`mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white/30 ` + (showProjectDlg==true?'hidden':'')} onClick={() => { setShowProjectDlg(true) }}>
              Projects
            </p>
          </div>
          <div className="w-1/2 flex justify-end px-[20px] font-normal">
            {time}
          </div>
        </div>
        <FileIcon
          iconUrl="/Projects.png"
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
            <div className="flex w-full h-[60px] justify-center">
              <img
                src={"/Resume1.png"}
                width={60}
                height={60}
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
            src="/contacts.png"
            width={50}
            height={50}
            className="cursor-pointer mx-2"
            onClick={() => { setShowContactDlg(true) }}
          />
          <a href="mailto:loi.nguyen.911124@gmail.com" target="_blank">
            <img
              src="/MacMail.png"
              width={60}
              height={60}
              className="cursor-pointer mx-2"
            />
          </a>
          <img
            src="/Projects.png"
            width={50}
            height={50}
            className="cursor-pointer mx-2"
            onClick={() => setShowProjectDlg(true)}
          />
          <a href="https://calendly.com/ryantanop/30min" target="_blank">
            <img
              src="/MacCal.png"
              width={50}
              height={50}
              className="cursor-pointer mx-2"
            />
          </a>
        </div>
      </div>

      <MacProjectsDlg show={showProjectDlg} setShow={setShowProjectDlg} />
      <AboutMe show={showAboutMe} setShow={setShowAboutMe} setShowProjects={setShowProjectDlg} setShowContactDlg={setShowContactDlg} />
      <ContactDlg show={showContactDlg} setShow={setShowContactDlg} setAboutMe={setShowAboutMe} />
      <AppleMenuDlg show={showMenu} setShow={setShowMenu} setShowAboutMe={setShowAboutMe} setShowContactDlg={setShowContactDlg} setShowProjectDlg={setShowProjectDlg} />
    </div>
  );
}
