"use client";
import { useState } from "react";
import {
  faStar,
  faFire,
  faMobile,
  faWebAwesome,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCategoryIcon from "../icons/ProjectCategoryIcon";
import PortfolioItem from "../items/PortfolioItem";
import { Projects } from '../../static_data/Projects'

interface Project {
  id: string;
  title: string;
  description?: string;
}

interface ProjectDlgProps {
  show: boolean;
  data: Project[];
  setShow: (show: boolean) => void;
}

export default function ProjectsDlg({ show, data, setShow }: ProjectDlgProps) {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(-1);
  if (show == false) {
    return <></>;
  }

  const captions = ['', 'My Projects', 'Popular', 'Mobile', 'Web']

  return (
    <div className="flex justify-center fixed w-screen h-screen">
      <div className="fixed w-screen h-screen opacity-30 bg-black z-0"></div>
      <div className="w-2/3 h-7/8 mt-[20px] bg-black rounded-xl overflow-hidden z-1">
        <div className="flex w-full h-[30px]">
          <div className="w-1/2">
            {selectedItem != -1 ? (
              <div
                className="flex justify-center items-center text-white font-xl w-[40px] h-[30px] rounded-bl-lg cursor-pointer"
                onClick={() => setSelectedItem(-1)}
              >
                <img src='/Back.png' alt='Back' width={20} height={20}/>
              </div>
            ) : null}
          </div>
          <div className="flex justify-end w-1/2">
            <div
              className="flex justify-center items-center text-white font-xl w-[50px] h-[30px] bg-red-500 rounded-bl-lg cursor-pointer"
              onClick={() => setShow(false)}
            >
              X
            </div>
          </div>
        </div>
        {selectedItem == -1 ? (
          <div className="flex">
            <div className="w-1/12 text-white text-xs">
              <ProjectCategoryIcon
                iconDefinition={faStar}
                title="All Projects"
                onClick={() => setSelectedCategory(1)}
                selected={selectedCategory == 1}
              />
              <ProjectCategoryIcon
                iconDefinition={faFire}
                title="Popular"
                onClick={() => setSelectedCategory(2)}
                selected={selectedCategory == 2}
              />
              <ProjectCategoryIcon
                iconDefinition={faMobile}
                title="Mobile"
                onClick={() => setSelectedCategory(3)}
                selected={selectedCategory == 3}
              />
              <ProjectCategoryIcon
                iconDefinition={faWebAwesome}
                title="Web"
                onClick={() => setSelectedCategory(4)}
                selected={selectedCategory == 4}
              />
            </div>
            <div className="flex flex-wrap w-11/12 text-white h-[800px] overflow-y-scroll pr-[30px]">
              <h1 className="text-[50px] text-white w-full mb-[50px] px-[20px] border-b-[5px] border-gray-200">
                {captions[selectedCategory]}
              </h1>
              {selectedCategory==1 ? Projects.map((val, index) => <PortfolioItem
                onClick={() => {
                  setSelectedItem(index);
                }}
                data={val}
              />):(selectedCategory==2?Projects.map((val, index) => val.popular?<PortfolioItem
                onClick={() => {
                  setSelectedItem(index);
                }}
                data={val}
              />:null):selectedCategory == 3?Projects.map((val, index) => val.mobile?<PortfolioItem
                onClick={() => {
                  setSelectedItem(index);
                }}
                data={val}
              />:null):Projects.map((val, index) => val.web?<PortfolioItem
                onClick={() => {
                  setSelectedItem(index);
                }}
                data={val}
              />:null))
              }
            </div>
          </div>
        ) : (
          <div className="p-[40px] h-[800px] overflow-y-scroll">
            <div className="flex pb-[20px] border-b-[5px] border-b-gray-200">
              <img src={`/portfolio/${Projects[selectedItem].title}/Logo.png`} width={100} height={100} className="rounded-[30px]" />
              <div className="px-[40px]">
                <p className="text-white font-bold text-[30px]">{Projects[selectedItem].title}</p>
                <p className="text-white font-bold text-[20px]">{Projects[selectedItem].category}</p>
              </div>
            </div>
            <div className="flex text-white text-[30px] py-[20px] border-b-[5px] border-b-gray-200">
              <div className="w-1/3 text-center">
                Company: {Projects[selectedItem].client}
              </div>
              <div className="w-1/3 text-center">
                Country: {Projects[selectedItem].country}
              </div>
              <div className="w-1/3 text-center">
                Language: {Projects[selectedItem].language}
              </div>
            </div>
            <p className="text-white font-bold text-[30px]">Preview:</p>
            <div className="flex justify-between border-b-[5px] border-b-gray-200">
              <img src={`/portfolio/${Projects[selectedItem].title}/First.png`} className="w-[500px] h-[300px] rounded-[50px] my-[40px]" />
              <img src={`/portfolio/${Projects[selectedItem].title}/First.png`} className="w-[500px] h-[300px] rounded-[50px] my-[40px]" />
            </div>
            <p className="text-white font-bold text-[20px] py-[20px] border-b-[5px] border-b-gray-200">{Projects[selectedItem].project_description}</p>
            <p className="text-white font-bold text-[20px] py-[30px]">My Contribution</p>
            <div className="flex justify-center w-full text-[20px] text-white">
              <div className="w-2/3 text-justify">
                Role
                {Projects[selectedItem].my_role}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
