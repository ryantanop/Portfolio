interface ProjectsDlgHeaderProps {
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  setShow: (show: boolean) => void;
}

export default function ProjectsDlgHeader({
  selectedItem,
  setSelectedItem,
  setShow,
}: ProjectsDlgHeaderProps) {
  return (
    <div className="flex w-full h-[30px]">
      <div className="w-1/2">
        {selectedItem != -1 ? (
          <div
            className="flex justify-center items-center text-white font-xl w-[40px] h-[30px] rounded-bl-lg cursor-pointer"
            onClick={() => setSelectedItem(-1)}
          >
            <img src="/Back.png" alt="Back" width={20} height={20} />
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
  );
}
