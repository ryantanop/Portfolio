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
}

interface PortfolioItemDetailsProps {
  item: PortfolioItemData;
}

export default function PortfolioItemDetails({
  item,
}: PortfolioItemDetailsProps) {
  return (
    <div className="p-[40px] h-[800px] overflow-y-scroll">
      <div className="flex pb-[20px] border-b-[5px] border-b-gray-200">
        <img
          src={`/portfolio/${item.title}/Logo.png`}
          width={100}
          height={100}
          className="rounded-[30px]"
        />
        <div className="px-[40px]">
          <p className="text-white font-bold text-[30px]">{item.title}</p>
          <p className="text-white font-bold text-[20px]">{item.category}</p>
        </div>
      </div>
      <div className="flex text-white text-[30px] py-[20px] border-b-[5px] border-b-gray-200">
        <div className="w-1/3 text-center">Company: {item.client}</div>
        <div className="w-1/3 text-center">Country: {item.country}</div>
        <div className="w-1/3 text-center">Language: {item.language}</div>
      </div>
      <p className="text-white font-bold text-[30px]">Preview:</p>
      <div className="flex justify-around border-b-[5px] border-b-gray-200">
        <img
          src={`/portfolio/${item.title}/First.png`}
          className="w-[500px] h-[300px] rounded-[50px] my-[40px]"
        />
        <img
          src={`/portfolio/${item.title}/2.png`}
          className="w-[500px] h-[300px] rounded-[50px] my-[40px]"
        />
      </div>
      <p className="text-white font-bold text-[20px] py-[20px] border-b-[5px] border-b-gray-200">
        {item.project_description}
      </p>
      <p className="text-white font-bold text-[20px] py-[30px]">
        My Contribution
      </p>
      <div className="flex justify-center w-full text-[20px] text-white">
        <div className="w-2/3 text-justify">
          Role
          {item.my_role}
        </div>
      </div>
    </div>
  );
}
