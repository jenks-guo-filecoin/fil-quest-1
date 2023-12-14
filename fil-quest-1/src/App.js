import logo from './img/filecoin-logo.png';
import web3storagelogo from './img/web3storage-logo.png';
import web3storagegif from './img/web3storage.gif';
import 'rpgui/rpgui.css';
import 'rpgui/rpgui.js';
import CustomWebcam from "./CustomWebcam";
import FileUploader from "./FileUploader";
import Success from "./Success";
import Sending from "./Sending";
import { useState } from 'react';



function App() {

  const [cids, setCids] = useState([]);
  const [ipfsError, setIpfsError] = useState(false);
  const [sending, setSendingState] = useState(false);

  return (
    <div className="App">
      <div className="rpgui-content rpg-cursor-default" style={{overflowY: 'scroll'}}>
        <div id="main" className="rpgui-center">
          <div className='inner rpgui-container framed' style={{ width:'50vh', position: 'absolute',left: "30%", right:"10%"}}>
            <br />

            <div style={{fontSize:"200%"}}>
              <h1>Filecoin & IPFS</h1>
            </div>

            <h2>Small Quest</h2>
            
            <img src={logo} alt="Filecoin Logo" style={{display: "inline-block", height: 100, float: 'inherit'}}/>

            <hr className="golden"/>
            <br />

            <p>
              <img src={web3storagelogo} alt="Web3.Storage Logo" style={{display: "inline-block",  width:"70%", height: "70%"}}/>
              <br/>
              <br/>
              Web3.Storage is a IPFS pinning services and backs up the data on Filecoin. It best of web2 and web3 to provide infra you can rely on to scale with your application. More than 200k users have already stored 200m+ object on Web3.storage. 
              <br/>
              <br/>
              <img src={web3storagegif} alt="W3s Animation" style={{display: "inline-block", float: 'inherit', width:"70%", height: "70%"}}/>
            </p>

            <hr className="clear:both"/>

            <div className="rpgui-icon sword"></div>
            <br />
            <br />

            <div>
              <div className="rpgui-container framed" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                <h1>The Quest</h1>
                <p>
                  Take a photo, select a photo or upload any file form your device.
                <br />
                <br />
                  Click "upload" to uploadit to IPFS.
                <br />
                <br />
                  You will get an Content ID (CID) link which is a content addressed link (hash digest of the file). Show us your CID. 
                </p>
              </div>
            </div>


            <br />
            <br />
            <hr className="clear:both"/>
            <br />

            <div id="uploadfile">
              <div className="rpgui-container framed-golden-2" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                <h1>File Uploader</h1>
                {/* <FileUploader setCids={setCids} setIpfsError={setIpfsError} setSendingState={setSendingState} /> */}
                { (cids.length === 0) && (sending === false) ? <FileUploader setCids={setCids} setIpfsError={setIpfsError} setSendingState={setSendingState} /> :null }
                { cids.length !== 0 ? <Success cids={cids} setCids={setCids} setSendingState={setSendingState} /> : null }
                { sending ? <Sending setSendingState={setSendingState}/> : null }
                <br />
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className="rpgui-center">
              <h1 style={{fontSize: '150%'}}>That's it, for now!</h1>
              <p> Check out the 
                <a href="https://linktr.ee/filecoinquest"> Filecoin Quests </a>
                for more information about IPFS & Filecoin Dev Quests.
              </p>

              <a href="#main">- Back to Top -</a>
              <br />
              <br />

              <a href="https://linktr.ee/filecoinquest">- Back to Filecoin Quests -</a>
            </div>

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
