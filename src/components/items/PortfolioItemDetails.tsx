'use client'
import {
  faLanguage,
  faCalendar,
  faBuilding,
  faGlobe,
  faFolder,
  faStepBackward,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PortfolioItemData {
  title: string;
  project_description: string;
  my_role: string;
  team_size: number;
  client: string;
  country: string;
  language: string;
  category: string;
  mobile: boolean;
  web: boolean;
  popular: boolean;
  start_date: string;
  end_date: string;
}

interface PortfolioItemDetailsProps {
  item: PortfolioItemData;
  selectedImage: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PortfolioItemDetails({
  item,
  selectedImage,
  setSelectedImage
}: PortfolioItemDetailsProps) {

  if (selectedImage != -1) {
    return <div className="flex justify-between text-[20px] items-center w-full h-full">
      <FontAwesomeIcon icon={faStepBackward} className="text-white cursor-pointer" onClick={() => setSelectedImage(selectedImage == 2 ? 1 : 2)} />
      <img
        src={`/portfolio/${item.title}/${selectedImage}.png`}
        width={1000}
        height={1000}
        className="rounded-[30px]"
      />
      <FontAwesomeIcon icon={faStepForward} className="text-white cursor-pointer" onClick={() => setSelectedImage(selectedImage == 2 ? 1 : 2)}/>
    </div>
  }

  return (
    <div className="p-[20px] h-[800px] overflow-y-scroll my-[20px]">
      <div className="flex pb-[20px] border-b-[2px] border-white/10">
        <img
          src={`/portfolio/${item.title}/Logo.png`}
          width={100}
          height={100}
          className="rounded-[30px]"
        />
        <div className="px-[10px]">
          <p className="text-white text-[30px] m-0">{item.title}</p>
          <p className="text-white/50 text-[13px] m-0">{item.category}</p>
        </div>
      </div>
      <div className="flex text-white text-white/50 text-[15px] py-[20px] border-b-[2px] border-white/10">
        <div className="w-1/4 text-center">
          <p className="font-bold mb-[10px]">Company</p>
          <FontAwesomeIcon className="text-[40px]" icon={faBuilding} />
          <p className="text-[13px] mt-[10px]">{item.client}</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="font-bold mb-[10px]">Country</p>
          <FontAwesomeIcon className="text-[40px]" icon={faGlobe} />
          <p className="text-[13px] mt-[10px]">{item.country}</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="font-bold mb-[10px]">Language</p>
          <FontAwesomeIcon className="text-[40px]" icon={faLanguage} />
          <p className="text-[13px] mt-[10px]">{item.language}</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="font-bold mb-[10px]">Category</p>
          <FontAwesomeIcon className="text-[40px]" icon={faFolder} />
          <p className="text-[13px] mt-[10px]">{item.category}</p>
        </div>
      </div>
      <div className="border-b-[2px] border-white/10 text-white">
        <p className="my-[20px] text-[20px]">About this project</p>
        <p className="my-[20px] text-[12px] text-white/50">{item.start_date + '~' + item.end_date}</p>
        <p className="my-[20px] text-[15px]">{item.title + ': ' + item.category}</p>
      </div>
      <p className="text-white font-bold text-[30px] my-[20px]">Preview:</p>
      <div className="flex justify-around border-b-[2px] border-white/10">
        <img
          src={`/portfolio/${item.title}/1.png`}
          className="w-[500px] h-[300px] rounded-[50px] my-[40px] cursor-pointer"
          onClick={() => setSelectedImage(1)}
        />
        <img
          src={`/portfolio/${item.title}/2.png`}
          className="w-[500px] h-[300px] rounded-[50px] my-[40px] cursor-pointer"
          onClick={() => setSelectedImage(2)}
        />
      </div>
      <p className="text-white text-[18px] py-[20px] border-b-[2px] border-white/10">
        {item.project_description}
      </p>
      <p className="text-white text-[18px] py-[30px]">
        My Role
      </p>
      <div className="flex justify-center w-full text-[16px] text-white mb-[30px]">
        <div className="w-full text-justify text-white/80">
          Role
          {item.my_role}
        </div>
      </div>
    </div>
  );
}
