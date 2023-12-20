import {useState} from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

export const FileUploader = ({setCids, setIpfsError, setSendingState}) => {
    const [files, setFile] = useState(null);
    
    const onSubmit = async (event) => {
      event.preventDefault();

      const client = new Web3Storage({ token: process.env.REACT_APP_WEB3STORAGE_API_TOKEN });

      try {
          setSendingState(true);
          let progress = 0;
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
          <p>First, take photo or select photo; </p>
          <input id="file" type="file"
                onChange={onInputChange}
                className="form-control"
                multiple
                style={{
                  display:'none'
                }}/>
          
          <label htmlFor="file" className="rpgui-button golden">
           {(files === null) ? <p>📸 Take/select 📸</p> : <p>📸 Redo 📸</p> }
          </label>
          
          <br />
          <br />

          <div style={{
            position:'relative',
            display: 'flex', 
            justifyContent: 'center', 
          }}>
            {(files === null) ? "" : <div><ul className="rpgui-dropdown-imp" style={{maxWidth: "300px"}}>📁 <p>{files[0].name}</p></ul><p>Then, send to IPFS...</p><button className="rpgui-button" type="submit"><p>🗂️ Upload 🗂️</p></button></div>}
          </div>
          
        </form>
      </div>
    );
};

export default FileUploader;