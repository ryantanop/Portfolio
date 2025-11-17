import {
  faStar,
  faFire,
  faMobile,
  faEarth
} from "@fortawesome/free-solid-svg-icons";
import ProjectCategoryIcon from "../icons/ProjectCategoryIcon";

interface PortfolioListSiderProps {
    selectedCategory: number,
    setSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}

export default function PortfolioListSider({selectedCategory, setSelectedCategory}: PortfolioListSiderProps) {
    return <div className="w-1/12 text-white text-xs text-[9px] mt-[10px]">
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
          iconDefinition={faEarth}
          title="Web"
          onClick={() => setSelectedCategory(4)}
          selected={selectedCategory == 4}
        />
      </div>
}
