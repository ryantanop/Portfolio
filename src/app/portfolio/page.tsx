'use client'
import FileIcon from "../../components/FileIcon";
import { useState } from "react";
import ProjectsDlg from "@/components/ProjectsDlg";

export default function Portfolio() {
  const [showProjectDlg, setShowProjectDlg] = useState(false);


  return (
    <div className="w-screen h-screen">
      <div className="fixed left-0 top-0 bg-[url('/background.png')] bg-cover bg-center w-full h-full">
        <FileIcon iconUrl='/Projects.png' iconName='Projects' onClick={() => setShowProjectDlg(true)}/>
      </div>
      <div className="flex justify-center items-center fixed left-0 bottom-0 w-full h-[60px] backdrop-blur-lg">
        <img src='/Win11.png' width={40} height={40} className="cursor-pointer mx-2" />
        <img src='/Projects.png' width={40} height={40} className="cursor-pointer mx-2" />
        <img src='/Calendar1.png' width={40} height={40} className="cursor-pointer mx-2" />
        <img src='/MailBox.png' width={40} height={40} className="cursor-pointer mx-2" />
      </div>
      <ProjectsDlg show={showProjectDlg} />
    </div>
  );
}
