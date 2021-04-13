import React, {Component, Fragment} from "react";
import ReactAudioPlayer from 'react-audio-player';
import "../assets/style/LandingScreen.css";

export default class LandingScreen extends Component {
 
    lyrics = [
        "♫♫♫",
        "Estás son... las mañanitas♪",
        "Que cantaba el rey David",
        "Hoy por ser día de tu santo♪",
        "Te las cantamos aquí♪♪",
        "Despierta mi bien despierta",
        "Mira qué ya amaneció...",
        "Ya los pajaritos cantan, la luna ya se metió",
        "♫♫♫",
        "Que linda esta la mañana en que vengo a saludarte",
        "Venimos todos con gusto  y placer al felicitarte♪",
        "El día en que tu naciste, nacieron todas las flores",
        "Y en la pila del bautismo, cantarón los ruiseñores",
        "Ya viene amaneciando...",
        "Ya la luz del día nos dio",
        "Levantate de mañana, mira que ya amaneció.",
        "Felíz cumple Lu 🎂"
    ];

    constructor(props){
        super(props);
        this.state = {
            start: false,
            index: 0,
        };
    }

    start_animation = () => {
        this.setState({
            start: true
        });
    };

    select_paragraph = () => {
        this.setState(prevState => { 
            return {index: prevState.index + 1}
        });
    };

    componentDidMount() {
        setTimeout(() => this.select_paragraph(), 9840);
        setTimeout(() => this.select_paragraph(), 13590);
        setTimeout(() => this.select_paragraph(), 17220);
        setTimeout(() => this.select_paragraph(), 20520);
        setTimeout(() => this.select_paragraph(), 24120);
        setTimeout(() => this.select_paragraph(), 28300);
        setTimeout(() => this.select_paragraph(), 35890);
        setTimeout(() => this.select_paragraph(), 43060);
        setTimeout(() => this.select_paragraph(), 46430);
        setTimeout(() => this.select_paragraph(), 54560);

        setTimeout(() => this.select_paragraph(), 63762);
        setTimeout(() => this.select_paragraph(), 75097);
        setTimeout(() => this.select_paragraph(), 82139);
        setTimeout(() => this.select_paragraph(), 85139);
        setTimeout(() => this.select_paragraph(), 91139);
        setTimeout(() => this.select_paragraph(), 95139);
    }

    render() {


        if(!this.state.start) {
            return (<Fragment>
            <div className="container full-height">
                <div className="d-flex flex-center full-height">
                    <button onClick={() => this.start_animation()} className="btn btn-primary">:V</button>
                </div>
            </div>
            </Fragment>);
        }

        return (<Fragment>
            <div className="container full-height">
                <div className="d-flex flex-center full-height">
                    <h1>{this.lyrics[this.state.index]}</h1>
                </div>
            </div>
            <ReactAudioPlayer src="https://axstuff.com/lasmananitas.mp3" autoPlay/>
        </Fragment>);
    }
}