import React from "react";
import './css/App.css';
import Navbar from "../components/NavBar/Navbar";
import InputForm from "../components/InputForm/InputForm";
import ParticlesBG from "../components/ParticlesBG/Particle";
import FaceContainer from "../components/FaceContainer/FaceContainer";
import UploadButton from "../components/InputForm/UploadButton";

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
    onFileUpload = (event) => {
        this.setState({input : event})
    }
   
    render(){
       if(this.state.input === ''){
        return(
            <div className="AppContainer tc">
                <ParticlesBG />
                <Navbar />
                <InputForm onInputChange={this.onInputChange}/>
                <UploadButton onFileUpload={this.onFileUpload}/>
            </div>
        );
       }else{
            return(
                <div className="AppContainer tc">
                    <ParticlesBG />
                    <Navbar />
                    <InputForm onInputChange={this.onInputChange}/>
                    <UploadButton onFileUpload={this.onFileUpload}/>
                    <FaceContainer imgSrc={this.state.input}/>
                </div>
            );
       }

    }
}
export default App;