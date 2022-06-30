import { useRef } from "react";
import './css/InputForm.css'

const UploadButton = ({onFileUpload}) => {
    const file = useRef(); 
    return(
        <div className="upload-btn-container">
            <input type="file" id="file" accept="images/*" ref={file}  onChange={() => {
                let reader = new FileReader();
                reader.readAsDataURL(file.current.files[0]);
                reader.onload = () => {
                    onFileUpload(reader.result);
                }
            }} />
        </div>
    )
}
export default UploadButton