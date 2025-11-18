interface PortfolioData {
  title: string;
  category: string;
}

interface PortfolioItemInterface {
  onClick: () => void;
  data: PortfolioData;
}

export default function PortfolioItem({
  onClick,
  data,
}: PortfolioItemInterface) {
  return (
    <div className="w-11/23 cursor-pointer mb-[100px]" onClick={() => onClick()}>
      <div className="flex py-[20px]">
        <img
          src={`/portfolio/${data.title}/Logo.png`}
          className="w-[50px] h-[50px] rounded-[15px]"
        />
        <div>
          <p className="text-white text-[20px] px-[20px]">
            {data.title}
          </p>
          <p className="text-[15px] px-[20px] text-white/50 font-thin">
            {data.category}
          </p>
        </div>
      </div>
      <img
        src={`/portfolio/${data.title}/1.png`}
        className="w-full h-[270px] rounded-[20px]"
      />
    </div>
  );
}
