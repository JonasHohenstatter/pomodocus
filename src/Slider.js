function Slider({state, handleSlide}){
    return(
        <button onClick={handleSlide} className="rounded-full border-2 border-gray-800 w-[3rem] h-[1.25rem] m-4">
            <div className="flex">
                <div className={"rounded-full h-2 w-2 bg-gray-800 transition-all ease-in-out delay-800 mr-1 " + (state ? "ml-auto" : "ml-1")}></div>
            </div>
        </button>
    )
}

export default Slider;