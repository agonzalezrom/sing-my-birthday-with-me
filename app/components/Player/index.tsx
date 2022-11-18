import ReactAudioPlayer from "react-audio-player";
import {minutesToMilliseconds as mtm} from "../../functions/minutesToMilliseconds";
import {useEffect, useState} from "react";
import {Container} from "./style";
import {song} from "../../config"

const timestamps = [
    "00:08",
    "00:12",
    "00:16",
    "00:20",
]

export const Player = ({name, age}) => {

    const [currentLine, setCurrentLine] = useState(0)

    useEffect(()=>{
        function updateState() {
            setCurrentLine(currentLine + 1)
        }
        let timer = setTimeout(updateState, mtm(timestamps, currentLine))
        return () => {
            clearTimeout(timer)
        }
    },[currentLine])

    return (
        <Container>
            <div className="container full-height">
                <div className="d-flex flex-center full-height">
                    <h1>{song[currentLine]}</h1>
                </div>
            </div>
            <ReactAudioPlayer src="/audio/song.mp3" autoPlay/>
        </Container>
    )
}