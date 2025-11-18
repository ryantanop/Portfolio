
interface AppleMenuDlgProps {
    show: boolean;
    setShow: (show: boolean) => void;
    setShowAboutMe: (show: boolean) => void;
    setShowContactDlg: (show: boolean) => void;
    setShowProjectDlg: (show: boolean) => void;
}

export default function AppleMenuDlg({ show, setShow, setShowAboutMe, setShowContactDlg, setShowProjectDlg }: AppleMenuDlgProps) {
    if (!show) return <></>;

    return <div className="fixed left-0 top-0 w-screen h-screen bg-black/20 z-0" onClick={e => {e.target==e.currentTarget?setShow(false):null}}>
        <div className="fixed left-[5px] top-[25px] w-[180px] h-[130px] rounded-2xl bg-[rgb(0_22_46)]/30 backdrop-blur-xs border border-white/50 text-white p-[12px]">
            <div className="z-10">
                <p className="hover:bg-[rgb(100_122_146)]/50 rounded-md px-[3px] cursor-pointer" onClick={() => { setShow(false), setShowAboutMe(true) }}>
                    About Me
                </p>
                <p className="hover:bg-[rgb(100_122_146)]/50 rounded-md px-[3px] cursor-pointer mb-[3px]" onClick={() => { setShow(false), setShowContactDlg(true) }}>
                    Contact
                </p>
                <div className="border-b-[2px] border-b-white/50" />
                <p className="hover:bg-[rgb(100_122_146)]/50 rounded-md px-[3px] cursor-pointer my-[3px]" onClick={() => { setShow(false), setShowProjectDlg(true) }}>
                    Projects
                </p>
                <div className="border-b-[2px] border-b-white/50" />
                <p className="mt-[3px] hover:bg-[rgb(100_122_146)]/50 cursor-pointer rounded-md" onClick={() => { setShow(false) }}>
                    BuyMeACoffee
                </p>
            </div>
        </div>
    </div>
}
