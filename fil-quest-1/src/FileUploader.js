import {useState} from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

export const FileUploader = ({setCids, setIpfsError, setSendingState}) => {
    const [files, setFile] = useState(null);
    
    const onSubmit = async (event) => {
      event.preventDefault();

      const client = new Web3Storage({ token: process.env.REACT_APP_WEB3STORAGE_API_TOKEN });

      try {
          setSendingState(true);
          const rootCid = await client.put(files);
          console.log("Successfully sent to IPFS");
          console.log("https://" + rootCid + ".ipfs.w3s.link");
          setCids([rootCid]);
      } catch {
          setIpfsError(true);
          console.log("Failed to send to IPFS");
          setSendingState(false);
      }
    };

    const onInputChange = (event)  => {
      setFile(event.target.files);
    };
    
    return (
      <div>
        <form method="post" action="#" id="#"  onSubmit={onSubmit}>
          <p>First, take photo or select photo</p>
          <label for="file-upload" class="rpgui-button golden">
            <p> Let's Go 📸 </p>
            <input id="file-upload" type="file"
                  onChange={onInputChange}
                  className="form-control"
                  multiple
                  style={{
                    display:'none'
                  }}/>
          </label>
          <br></br>
          <p>Then send to IPFS</p>
          <button className="rpgui-button" type="submit">
              <p>Upload 🗂️ </p>
          </button>
        </form>
      </div>
    );
};

export default FileUploader;