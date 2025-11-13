'use client'
import { useEffect, useState } from "react";
import ApplePage from "@/components/ApplePage";
import Win11Page from "@/components/Win11Page";

type PortfolioItem = {
  id: string;
  title: string;
  description?: string;
};

export default function Portfolio() {
  const [windowPos, setWindowPos] = useState(0);
  const [windowToggle, setWindowToggle] = useState(1);
  const [projectData, setProjectData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) =>
        res.json()
      )
      .then((data) => {
        setProjectData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className="flex fixed top-0 w-[200vw] h-screen" style={{ left: -windowPos + 'px' }}>
      <Win11Page windowToggle={windowToggle} setWindowPos={setWindowPos} setWindowToggle={setWindowToggle} projectData={projectData}/>
      <ApplePage windowToggle={windowToggle} setWindowPos={setWindowPos} setWindowToggle={setWindowToggle} projectData={projectData}/>
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black animate-wiggle">
        <img src='/Win11.png' alt='Win11' width={50} height={50} className="animate-win11" />
      </div>
    </div>
  );
}
