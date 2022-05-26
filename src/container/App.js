import React from "react";
import './css/App.css';
import Navbar from "../components/NavBar/Navbar";
import Rank from "../components/Rank/Rank";
import InputForm from "../components/InputForm/InputForm";
import ParticlesBG from "../components/ParticlesBG/Particle";
import FaceContainer from "../components/FaceContainer/FaceContainer";
import testImg from '../components/FaceContainer/example.png';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value)
    }
    onButtonClick = () => {
        console.log('cliked')
    }
    render(){
        return(
            <div className="AppContainer tc">
                <ParticlesBG />
                <Navbar />
                <Rank />
                <InputForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
                <FaceContainer imgSrc={testImg}/>
            </div>
            
        );
    }
}
export default App;