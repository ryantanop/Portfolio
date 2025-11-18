
interface AboutMeProps {
    show: boolean;
    setShow: (show: boolean) => void;
    setAboutMe: (show: boolean) => void;
}

export default function ContactDlg({ show, setShow, setAboutMe }: AboutMeProps) {
    if (show == false) return <></>

    return <div className="flex justify-center fixed w-screen h-screen">
        <div className="fixed w-screen h-screen opacity-30 bg-black z-0" />
        <div className="relative w-[500px] h-1/2 mt-[200px] bg-[rgb(31_31_31)] rounded-xl overflow-hidden z-1">
            <div className="absolute left-[15px] top-[15px] flex w-full">
                <div className="w-[13px] h-[13px] rounded-[12px] bg-red-700 mb-[15px] mr-[10px]" onClick={() => setShow(false)} />
                <div className="w-[13px] h-[13px] rounded-[12px] bg-white/30 mb-[15px] mr-[10px]" />
                <div className="w-[13px] h-[13px] rounded-[12px] bg-white/30 mb-[15px] mr-[10px]" />
            </div>
            <div className="flex justify-center w-full text-white text-[18px] mt-[8px]">
                Contact
            </div>
            <div className="mt-[30px] flex w-full justify-center text-white">
                <img src='/loi.png' className="w-[70px] h-[70px]" />
                <div className="ml-[30px]">
                    <p className="text-[20px]">Loi Nguyen</p>
                    <p className="text-[15px]">Senior Software Engineer</p>
                </div>
            </div>
            <div className="w-full px-[50px] mt-[120px]">
                <div className="px-[20px] flex w-full text-white py-[10px]">
                    <div className="w-1/3">
                        Phone:
                    </div>
                    <div className="w-2/3">
                        +1(929) 233 9817
                    </div>
                </div>
                <div className="w-full h-[1px] px-[10px]">
                    <div className="w-full h-full bg-white/50"></div>
                </div>
                <div className="px-[20px] flex w-full text-white py-[10px]">
                    <div className="w-1/3">
                        Email:
                    </div>
                    <div className="w-2/3">
                        loi.nguyen.eng11@gmail.com
                    </div>
                </div>
                <div className="w-full h-[1px] px-[10px]">
                    <div className="w-full h-full bg-white/50"></div>
                </div>
                <div className="px-[20px] flex w-full text-white py-[10px]">
                    <div className="w-1/3">
                        LinkedIn:
                    </div>
                    <div className="w-2/3">
                        https://linkedin.com/loinguyen
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-[20px]">
                <button className="text-white w-1/3 h-[40px] border border-white rounded-4xl cursor-pointer" onClick={() => { setShow(false), setAboutMe(true) }}>
                    About Me
                </button>
            </div>
        </div>
    </div>
}
