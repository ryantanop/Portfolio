"use client";
import { useState, useEffect } from "react";
import { Projects } from "../../static_data/Projects";
import PortfolioItemDetails from "../items/PortfolioItemDetails";
import PortfolioLists from "../lists/PortfolioLists";
import ProjectsDlgHeader from "./ProjectsDlgHeader";

interface ProjectDlgProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function WinProjectsDlg({ show, setShow }: ProjectDlgProps) {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('-1');

  useEffect(() => {
    if (show) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 700);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="flex justify-center fixed w-screen h-screen">
      <div className="fixed w-screen h-screen opacity-30 bg-black z-0" />

      <div className="w-[1200px] h-7/8 mt-[30px] bg-[rgb(31_31_31)] rounded-xl overflow-hidden z-1 flex items-center justify-center">
        {loading ? (
          <div className="w-[100px]">
            <img src='/store.png' className="w-[100px] h-[100px] mb-[50px]"/>
            <div className="w-full flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-4 border-gray-400 border-t-transparent" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <ProjectsDlgHeader
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setShow={setShow}
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
            />

            {selectedItem === -1 ? (
              <PortfolioLists
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setSelectedItem={setSelectedItem}
              />
            ) : (
              <PortfolioItemDetails item={Projects[selectedItem]} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
