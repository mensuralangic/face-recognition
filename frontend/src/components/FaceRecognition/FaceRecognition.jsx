import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div>
            <div className='absolute mt2 tc'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;
