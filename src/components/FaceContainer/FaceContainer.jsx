import React, { useEffect, useRef } from "react";
import * as faceapi from 'face-api.js';
import './css/FaceContainer.css';

const FaceContainer = ({imgSrc}) => {
    const imgRef = useRef();
    const canvasRef = useRef();

    const handleImage = async () => {
        const detections = await faceapi.detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks().withFaceExpressions();

        canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
        faceapi.matchDimensions(canvasRef.current,{
            width : 400,
            height: 400
        })
        const resized = faceapi.resizeResults(detections, {
            width : 400,
            height: 400
        })
        //DESENHAR UM QUADRADO NA CARA/ROSTO
        faceapi.draw.drawDetections(canvasRef.current, resized);
        //MAPEAR PONTOS NA CARA/ROSTO
        // faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
        //MOSTRAR EXPRESSAO FACIAL(feliz, triste, zangado...)
        faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }
    useEffect(() => {
        const loadedModels = () => {
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                faceapi.nets.faceExpressionNet.loadFromUri('/models'),
            ])
            .then(handleImage)
            .catch((error) =>console.log('Erro na Promise: '+error));
        }
        imgRef && loadedModels();
    },[]);

    return(
        <div className="facecontainer">
            <canvas ref={canvasRef} width="400px" height="400px"></canvas>
            <img crossOrigin="anonymous" ref={imgRef} src={imgSrc} alt="Link ou imagem quebrados :-\"/>
        </div>
    );
}
export default FaceContainer;