import React from "react";
import './css/App.css';
import Navbar from "../components/NavBar/Navbar";
import Rank from "../components/Rank/Rank";
import InputForm from "../components/InputForm/InputForm";
import ParticlesBG from "../components/ParticlesBG/Particle";
import FaceContainer from "../components/FaceContainer/FaceContainer";

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    onInputChange = (event) => {
        this.setState({input : event.target.value})
    }
   
    render(){
       if(this.state.input === ''){
        return(
            <div className="AppContainer tc">
                <ParticlesBG />
                <Navbar />
                <Rank />
                <InputForm onInputChange={this.onInputChange}/>
            </div>
        );
       }else{
            return(
                <div className="AppContainer tc">
                    <ParticlesBG />
                    <Navbar />
                    <Rank />
                    <InputForm onInputChange={this.onInputChange}/>
                    <FaceContainer imgSrc={this.state.input}/>
                </div>
            );
       }

    }
}
export default App;