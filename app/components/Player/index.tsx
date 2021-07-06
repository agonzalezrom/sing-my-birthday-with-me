import ReactAudioPlayer from "react-audio-player";
import {minutesToMilliseconds as mtm} from "../../functions/minutesToMilliseconds";
import {useEffect, useState} from "react";
import {Container} from "./style";
import {song} from "../../config"

const timeouts: Array<any> = []

const timestamps = [
    "00:08",
    "00:12",
    "00:16",
    "00:20",
]

export const Player = () => {

    const [currentLine, setCurrentLine] = useState(0)


    const handleCurrentLine = () => {
        setCurrentLine(currentLine+1)
    }

    // useEffect(()=>{
    //     for (let i = 0; i < timestamps.length; i++) {
    //         (function(index) {
    //             console.log(mtm(timestamps[index])/1000)
    //             let timeout = setTimeout(handleCurrentLine, mtm(timestamps[index]));
    //             timeouts.push(timeout)
    //         })(i);
    //     }
    //     return () => {
    //         clearTimeout(timeouts[currentLine-1])
    //     }
    // },[])

    // for (let i = 0; i < timestamps.length; i++) {
    //     (function(index) {
    //         console.log(mtm(timestamps[index])/1000)
    //         setTimeout(handleCurrentLine, mtm(timestamps[index]));
    //     })(i);
    // }

    // timestamps.forEach((time)=>{
    //     setTimeout(handleCurrentLine, mtm(time))
    // })

    // for(let i=0; i<timestamps.length; i++)
    // {
    //     setTimeout(handleCurrentLine, mtm(timestamps[i]))
    // }
    useEffect(() => {
        setTimeout(handleCurrentLine, mtm(timestamps[0]))
    }, []);

    // useEffect(() => {
    //     setTimeout(handleCurrentLine, mtm(timestamps[currentLine]))
    // }, [currentLine]);

    // useEffect(()=>{
    //     return () => {
    //         clearTimeout(timeouts[currentLine-1])
    //     }
    // },[currentLine])

    return (
        <Container>
            <div className="container full-height">
                <div className="d-flex flex-center full-height">
                    <h1>{song[currentLine]}</h1>
                </div>
            </div>
            {/*<ReactAudioPlayer src="/audio/song.mp3" autoPlay/>*/}
        </Container>
    )
}