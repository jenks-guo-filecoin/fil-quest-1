import Webcam from "react-webcam";
import { useCallback,useRef,useState } from "react"; // import useRef


const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  const upload = () => {
    setImgSrc(null);
  };


  return (
    <div className="container">
        {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
        ) : (
            <Webcam height={'90%'} width={'90%'} ref={webcamRef} />
        )}
      
        <div className="btn-container">
            <button class="rpgui-button" onClick={capture}><p>Take 📸 Photo</p></button>
        </div>

        <div className="btn-container">
            <button class="rpgui-button" onClick={retake}><p>Retake 😵‍💫 Photo </p></button>
        </div>

        <div className="btn-container">
            <button class="rpgui-button" onClick={upload}><p>Upload 🚀 Photo </p></button>
        </div>

    </div>
  );
};

export default CustomWebcam;