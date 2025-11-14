import {
  faStar,
  faFire,
  faMobile,
  faWebAwesome,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCategoryIcon from "../icons/ProjectCategoryIcon";
import PortfolioItem from "../items/PortfolioItem";
import { Projects } from "../../static_data/Projects";

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
