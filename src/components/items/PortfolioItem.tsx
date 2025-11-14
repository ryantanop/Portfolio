interface PortfolioData {
  title: string;
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
    <div className="w-1/2 cursor-pointer" onClick={() => onClick()}>
      <div className="flex p-[20px]">
        <img
          src={`/portfolio/${data.title}/Logo.png`}
          width={100}
          height={100}
          className="rounded-[30px]"
        />
        <p className="text-white font-bold text-[50px] px-[20px]">
          {data.title}
        </p>
      </div>
      <img
        src={`/portfolio/${data.title}/First.png`}
        className="w-full h-[300px] rounded-[50px] p-[20px]"
      />
    </div>
  );
}
