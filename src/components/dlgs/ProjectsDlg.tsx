"use client";
import { useState } from "react";
import { Projects } from "../../static_data/Projects";
import PortfolioItemDetails from "../items/PortfolioItemDetails";
import PortfolioLists from "../lists/PortfolioLists";
import ProjectsDlgHeader from "./ProjectsDlgHeader";

interface ProjectDlgProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function ProjectsDlg({ show, setShow }: ProjectDlgProps) {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedItem, setSelectedItem] = useState(-1);

  if (show == false) {
    return <></>;
  }

  return (
    <div className="flex justify-center fixed w-screen h-screen">
      <div className="fixed w-screen h-screen opacity-30 bg-black z-0" />
      <div className="w-2/3 h-7/8 mt-[20px] bg-black rounded-xl overflow-hidden z-1">
        <ProjectsDlgHeader
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShow={setShow}
        />
        {selectedItem == -1 ? (
          <PortfolioLists
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSelectedItem={setSelectedItem}
          />
        ) : (
          <PortfolioItemDetails item={Projects[selectedItem]} />
        )}
      </div>
    </div>
  );
}
