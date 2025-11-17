import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCategoryIconProps {
  iconDefinition: IconDefinition;
  title: string;
  onClick: () => void;
  selected: boolean;
}

export default function ProjectCategoryIcon({
  iconDefinition,
  title,
  onClick,
  selected,
}: ProjectCategoryIconProps) {
  return (
    <div
      className={`${selected ? "text-blue-500" : ""} w-18 h-15 my-2 cursor-pointer`}
      onClick={() => onClick()}
    >
      <div className="flex justify-center w-full">
        <FontAwesomeIcon icon={iconDefinition} size="2x" />
      </div>
      <p className="w-full text-center mt-[10px]">{title}</p>
    </div>
  );
}
