import Tile from './Tile.js'
import {useEffect, useState} from "react";

function Clock({minutes, seconds}){
    let audio = new Audio()
    const [numbers, setNumbers] = useState("0000");
    useEffect(() => {
        let str = "";
        str = minutes.toString();
        if(minutes < 10){
            str = "0" + minutes.toString();
        }
        if(seconds < 10){
            str = str + "0" + seconds.toString();
        }
        else{
            str = str + seconds.toString();
        }
        setNumbers(str);
    }, [minutes, seconds])
    return (
        <div className="flex place-self-center">
            <Tile number={numbers[0]}></Tile>
            <Tile number={numbers[1]}></Tile>
            <div className="grid rows-2 place-content-center w-14">
                <div className="rounded-full border-2 border-white h-6 w-6 mb-5"></div>
                <div className="rounded-full border-2 border-white h-6 w-6 mt-5"></div>
            </div>

            <Tile number={numbers[2]}></Tile>
            <Tile number={numbers[3]}></Tile>
        </div>
    )
}

export default Clock;