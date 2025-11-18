
interface AboutMeProps {
    show: boolean;
    setShow: (show: boolean) => void;
    setShowProjects: (show: boolean) => void;
    setShowContactDlg: (show: boolean) => void;
}

export default function AboutMe({ show, setShow, setShowProjects, setShowContactDlg }: AboutMeProps) {
    if (!show) return <></>
    return <div className="flex justify-center fixed w-screen h-screen">
        <div className="fixed w-screen h-screen opacity-30 bg-black z-0" />
        <div className="relative w-[500px] h-1/2 mt-[200px] bg-[rgb(31_31_31)] rounded-xl overflow-hidden z-1">
            <div className="flex justify-center w-full text-white text-[18px] mt-[8px]">
                About Me
            </div>
            <div className="absolute left-[15px] top-[15px] flex w-full">
                <div className="flex justify-center items-center font-bold text-[10px] w-[13px] h-[13px] rounded-[12px] bg-red-700 mb-[15px] mr-[10px] HoverShowTarget" onClick={() => setShow(false)}>
                    <p className="HoverShow text-black/60">X</p>
                </div>
                <div className="w-[13px] h-[13px] rounded-[12px] bg-white/30 mb-[15px] mr-[10px]" />
                <div className="w-[13px] h-[13px] rounded-[12px] bg-white/30 mb-[15px] mr-[10px]" />
            </div>
            <div className="mt-[20px] flex w-full justify-center">
                <img src='/loi.png' className="w-[100px] h-[100px]" />
            </div>
            <div className="w-full text-center text-[30px] text-white my-[10px]">Loi Nguyen</div>
            <div className="w-full text-center text-[20px] text-white my-[10px]">Senior Software Engineer Technical Lead</div>
            <div className="px-[20px] flex w-full text-white py-[10px]">
                <div className="w-1/3">
                    Experience
                </div>
                <div className="w-2/3">
                    10+ years
                </div>
            </div>
            <div className="px-[20px] flex w-full text-white">
                <div className="w-1/3">
                    Skills
                </div>
                <div className="w-2/3">
                    Javascript, Typescript, C#, Ruby, Go
                </div>
            </div>
            <div className="px-[20px] flex w-full text-white">
                <div className="w-1/3">
                </div>
                <div className="w-2/3">
                    Node.js, Ruby on Rails, ASP.NET
                </div>
            </div>
            <div className="px-[20px] flex w-full text-white">
                <div className="w-1/3">
                </div>
                <div className="w-2/3">
                    React.js, Angular.js
                </div>
            </div>
            <div className="px-[20px] flex w-full text-white">
                <div className="w-1/3">
                </div>
                <div className="w-2/3">
                    PostgreSQL, MySQL, MongoDB
                </div>
            </div>
            <div className="w-full flex justify-center mt-[20px]">
                <button className="text-white w-1/3 h-[40px] border border-white rounded-4xl mr-[20px] cursor-pointer" onClick={() => { setShow(false), setShowProjects(true) }}>
                    My Projects
                </button>
                <button className="text-white w-1/3 h-[40px] border border-white rounded-4xl cursor-pointer" onClick={() => { setShow(false), setShowContactDlg(true) }}>
                    Contact
                </button>
            </div>
        </div>
    </div>
}
