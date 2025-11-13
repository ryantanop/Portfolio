
interface PortfolioItemInterface {
    onClick: () => void
}

export default function PortfolioItem({onClick}: PortfolioItemInterface) {
    return <div className="w-1/2 cursor-pointer" onClick={() => onClick()}>
        <div className="flex">
            <img src='Projects.png' width={100} height={100} />
            Flutter Conf Latam Official App
        </div>
        <img src='Projects.png' className="w-full h-[300px]"/>
    </div>
}