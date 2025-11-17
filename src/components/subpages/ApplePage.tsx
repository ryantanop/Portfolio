import { use, useState } from "react";
import FileIcon from "../icons/FileIcon";
import MacProjectsDlg from "@/components/dlgs/MacProjectsDlg";
import AboutMe from "../dlgs/AboutMe";
import ContactDlg from "../dlgs/ContactDlg";

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
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContactDlg, setShowContactDlg] = useState(false);
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
      <div className="absolute left-0 top-0 bg-[url('/AppleBackgroundImage.jpg')] bg-cover bg-center w-full h-full">
        <div className="flex fixed w-screen h-[25px] text-white font-bold">
          <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white hover:text-black" onClick={() => setShowAboutMe(true)}>
            About Me
          </p>
          <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white hover:text-black" onClick={() => setShowContactDlg(true)}>
            Contact
          </p>
          <p className="mx-[10px] px-[5px] cursor-pointer rounded-sm hover:bg-white hover:text-black" onClick={() => { setShowProjectDlg(true) }}>
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
          onClick={() => { }}
          invert={true}
        />
        <FileIcon
          iconUrl="/LinkedIn.png"
          iconName="LinkedIn"
          onClick={() => { }}
          invert={true}
        />
        <div className="inline-block cursor-pointer" onClick={() => window.open('/Resume.pdf')}>
          <div className="w-20 h-24 mx-4">
            <div className="flex w-full h-[60px] justify-center">
              <img
                src={"/Resume.png"}
                width={60}
                height={60}
                className="cursor-pointer invert"
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
          iconUrl="/Win11.png"
          iconName="Windows"
          onClick={() => ToggleWindow()}
          invert={true}
        />
      </div>
      <div className="flex justify-center items-center absolute left-0 bottom-0 w-full h-[80px]">
        <div className="flex justify-center items-center p-[3px] rounded-lg backdrop-blur-lg border border-white">
          <img
            src="/contacts.png"
            width={50}
            height={50}
            className="cursor-pointer mx-2"
            onClick={() => {setShowContactDlg(true)}}
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
      <AboutMe show={showAboutMe} setShow={setShowAboutMe} setShowProjects={setShowProjectDlg} />
      <ContactDlg show={showContactDlg} setShow={setShowContactDlg} setAboutMe={setShowAboutMe} />
    </div>
  );
}
