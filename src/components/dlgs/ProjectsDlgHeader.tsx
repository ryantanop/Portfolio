interface ProjectsDlgHeaderProps {
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  setShow: (show: boolean) => void;
  setSelectedImage:React.Dispatch<React.SetStateAction<string>>;
  selectedImage: string;
}

export default function ProjectsDlgHeader({
  selectedItem,
  setSelectedItem,
  setShow,
  setSelectedImage,
  selectedImage
}: ProjectsDlgHeaderProps) {
  return (
    <div className="flex w-full h-[30px]">
      <div className="w-1/2">
        {selectedItem != -1 ? (
          <div
            className="flex justify-center items-center text-white font-xl w-[40px] h-[30px] rounded-bl-lg cursor-pointer"
            onClick={() => selectedImage == '-1'?setSelectedItem(-1):setSelectedImage('-1')}
          >
            <img src="/Back.png" alt="Back" width={20} height={20} />
          </div>
        ) : null}
      </div>
      <div className="flex justify-end w-1/2">
        <div
          className="flex justify-center items-center text-white font-xl w-[50px] h-[30px] hover:bg-red-500 rounded-bl-lg cursor-pointer"
          onClick={() => {setShow(false), setSelectedImage('-1'), setSelectedItem(-1)}}
        >
          X
        </div>
      </div>
    </div>
  );
}
