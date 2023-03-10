function Tile({number}){

    return(
        <div className=" bg-white h-[20rem] w-[11rem] ml-3 mr-3 rounded-lg  grid place-content-center z-10">
            <div className="bg-black h-1 w-[11rem] backdrop-blur-xl absolute z-50 place-self-center"></div>
            <div className="z-10 font-bold text-[230px] drop-shadow-2xl">{number}</div>
        </div>
    )
}

export default Tile;