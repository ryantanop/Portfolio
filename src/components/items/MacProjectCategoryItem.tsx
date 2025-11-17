import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCategoryIconProps {
    iconDefinition: IconDefinition;
    title: string;
    onClick: () => void;
    selected: boolean;
}

export default function MacProjectCategoryItem({
    iconDefinition,
    title,
    onClick,
    selected,
}: ProjectCategoryIconProps) {
    return (
        <div
            className={`${selected ? "text-blue-500" : "text-white"} flex items-center w-32 h-8 my-2 cursor-pointer`}
            onClick={() => onClick()}
        >
            <FontAwesomeIcon icon={iconDefinition} size="2x" />
            <p className="w-full pl-[10px] text-[15px]">{title}</p>
        </div>
    );
}
