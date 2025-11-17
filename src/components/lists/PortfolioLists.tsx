import PortfolioItem from "../items/PortfolioItem";
import { Projects } from "../../static_data/Projects";
import PortfolioListSider from "./PortfolioListSider";

interface PortfolioListsProps {
  selectedCategory: number;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}

export default function PortfolioLists({
  selectedCategory,
  setSelectedCategory,
  setSelectedItem,
}: PortfolioListsProps) {
  const captions = ["", "My Projects", "Popular", "Mobile", "Web"];
  const showProjects =
    selectedCategory == 1
      ? Projects
      : selectedCategory == 2
        ? Projects.filter((val, index) => val.popular)
        : selectedCategory == 3
          ? Projects.filter((val, index) => val.mobile)
          : Projects.filter((val, index) => val.web);

  return (
    <div className="flex">
      <PortfolioListSider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <div className="flex justify-between flex-wrap w-11/12 text-white h-[740px] overflow-y-scroll pr-[30px] mt-[25px]">
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
    </div>
  );
}
