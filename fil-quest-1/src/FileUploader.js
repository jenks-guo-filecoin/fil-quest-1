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
          <input type="file"
                  onChange={onInputChange}
                  className="form-control"
                  multiple/>

          <button className="rpgui-button" type="submit">
              <p>Upload Files 🗂️ </p>
          </button>
        </form>
      </div>
    );
};

export default FileUploader;