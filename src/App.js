import logo from './logo.svg';
import './App.css';
import Clock from "./Clock.js"
import Slider from "./Slider.js"
import {useEffect, useState} from "react";
function App() {
    const [showButtons, setShowButtons] = useState(true);
    const [state, setState] = useState("Focus");
    const [amount, setAmount] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false)
    const handleSlide = () => {
        setShowButtons(!showButtons);
    }

    const toggle = () => {
        setRunning(running => !running);
    }

    const nextState = () => {
        if(state === "Pause"){
            setState("Focus");
            setSeconds(0);
            setMinutes(25)
        }
        else{
            setState("Pause");
            setSeconds(0);
            setMinutes(5)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("...")
            if(running){
                if(seconds === 0){
                    if(seconds === 0 && minutes === 0){

                        nextState()

                        return () => clearInterval(interval);
                    }
                    setSeconds(seconds => 59)
                    setMinutes(minutes => minutes - 1)
                }
                else{
                    setSeconds(seconds => seconds - 1);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, minutes, running]);

    return (
        <div className="App bg-black bg-cover min-h-screen w-screen grid">
            <div className="grid grid-rows-2">
                <div className="flex justify-end grow-0">
                    <div className="absolute justify-self-end">
                        <Slider state={showButtons} handleSlide={handleSlide}></Slider>
                    </div>
                </div>
                <div className="flex justify-center h-full">
                    {showButtons &&
                        <div className="bg-black w-[60rem] rounded-[20px] h-[5rem] flex justify-center items-center absolute">
                            <button onClick={toggle} className="w-[10rem] h-[4rem] bg-gray-800 rounded-[15px] text-white text-2xl font-bold drop-shadow-2xl">
                                {running ? "Stop" : "Start"}
                            </button>
                            <div className="grow-0 text-gray-300 text-4xl font-bold m-[6rem]">{ state }</div>
                            <button onClick={nextState} className="w-[10rem] h-[4rem] bg-gray-800 rounded-[15px] text-white text-2xl font-bold drop-shadow-2xl">
                                Skip
                            </button>
                        </div>
                    }
                </div>
            </div>
            <Clock minutes={minutes} seconds={seconds}></Clock>

            <div></div>
        </div>
    );
}

export default App;
