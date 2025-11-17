"use client";
import { useState, useEffect } from "react";
import {
  faStar,
  faFire,
  faMobile,
  faEarth
} from "@fortawesome/free-solid-svg-icons";
import { Projects } from "../../static_data/Projects";
import PortfolioItem from "../items/PortfolioItem";
import PortfolioItemDetails from "../items/PortfolioItemDetails";
import PortfolioLists from "../lists/PortfolioLists";
import ProjectsDlgHeader from "./ProjectsDlgHeader";
import PortfolioListSider from "../lists/PortfolioListSider";
import MacProjectCategoryItem from "../items/MacProjectCategoryItem";
import ProjectCategoryIcon from "../icons/ProjectCategoryIcon";

interface ProjectDlgProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function MacProjectsDlg({ show, setShow }: ProjectDlgProps) {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('-1');

  const captions = ["", "My Projects", "Popular", "Mobile", "Web"];
  const showProjects =
    selectedCategory == 1
      ? Projects
      : selectedCategory == 2
        ? Projects.filter((val, index) => val.popular)
        : selectedCategory == 3
          ? Projects.filter((val, index) => val.mobile)
          : Projects.filter((val, index) => val.web);

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
        <div className="relative w-full h-full">
          <div className="absolute left-[15px] top-[15px] flex w-full">
            <div className="w-[13px] h-[13px] rounded-[12px] bg-red-700 mb-[15px] mr-[10px]" onClick={() => setShow(false)} />
            <div className="w-[13px] h-[13px] rounded-[12px] bg-white/30 mb-[15px] mr-[10px]" />
            <div className="w-[13px] h-[13px] rounded-[12px] bg-white/30 mb-[15px] mr-[10px]" />
            {selectedItem != -1 ? <div className="mt-[-7px] flex justify-center items-center w-[30px] h-[30px] rounded-[30px] border border-white/50 cursor-pointer" onClick={() => selectedImage=='-1'?setSelectedItem(-1):setSelectedImage('-1')}><img src='/Back.png' width={20} height={20} /></div> : <div></div>}
          </div>
          {selectedItem === -1 ? (
            <div className="flex w-full h-full">
              <div className="w-1/6 h-[calc(100%-10px)] m-[5px] px-[10px] py-[30px] text-[9px] border bg-[rgb(23_25_34)] rounded-xl border-[2px] border-[rgb(23_56_101)]">
                {loading ? <div className="flex justify-center w-full h-full">
                  <div className="animate-spin rounded-full h-6 w-6 border-4 border-gray-400 border-t-transparent" />
                </div> : <>
                  <MacProjectCategoryItem
                    iconDefinition={faStar}
                    title="All Projects"
                    onClick={() => { setSelectedCategory(1) }}
                    selected={selectedCategory == 1} />
                  <MacProjectCategoryItem
                    iconDefinition={faFire}
                    title="Popular"
                    onClick={() => { setSelectedCategory(2) }}
                    selected={selectedCategory == 2} />
                  <MacProjectCategoryItem
                    iconDefinition={faMobile}
                    title="Mobile"
                    onClick={() => { setSelectedCategory(3) }}
                    selected={selectedCategory == 3} />
                  <MacProjectCategoryItem
                    iconDefinition={faEarth}
                    title="Web"
                    onClick={() => { setSelectedCategory(4) }}
                    selected={selectedCategory == 4} />
                </>
                }
              </div>
              <div className="w-5/6">
                {loading ? <div className="w-full h-full flex justify-center items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-4 border-gray-400 border-t-transparent" />
                </div> : (selectedItem === -1 ? (
                  <div className="flex justify-between flex-wrap w-full px-[20px] text-white h-[800px] overflow-y-scroll pr-[30px] mt-[25px]">
                    <h1 className="text-[28px] text-white w-full mb-[30px] border-b-[2px] border-white/10">
                      {captions[selectedCategory]}
                    </h1>
                    {showProjects.map((val, index) => (
                      <PortfolioItem
                        key={index}
                        onClick={() => {
                          setSelectedItem(index);
                        }}
                        data={val}
                      />
                    ))}
                  </div>
                ) : (
                  <PortfolioItemDetails item={Projects[selectedItem]} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                ))}
              </div>
            </div>
          ) : (
            <PortfolioItemDetails item={Projects[selectedItem]} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
          )}
        </div>
      </div>
    </div>
  );
}
