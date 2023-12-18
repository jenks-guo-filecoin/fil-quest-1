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
      <div
        className="rpgui-content rpg-cursor-default" 
        style={{
          overflowY: 'scroll', 
          backgroundColor: 'rgb(77,74,78)',
          lineHeight: '1.5em',
        }}>
        <div 
          id="main" 
          className="rpgui-center" 
          style={{
            position:'relative',
            display: 'flex', 
            justifyContent: 'center', 
            height: 'auto'
          }}>
          <div
            className='inner rpgui-container framed' 
            style={{ 
              width:'100%', 
              maxWidth:'700px', 
              height:'auto', 
              position: 'absolute'
            }}>
            <br />

            <div
              style={{
                fontSize:"200%"
              }}>
              <h1>Filecoin & IPFS</h1>
            </div>
            
            <img 
              src={logo} 
              alt="Filecoin Logo" 
              style={{
                display: "inline-block", 
                height: 100, 
                float: 'inherit'
              }}/>

            <h2>Small Quest</h2>

            <hr className="golden"/>
            <br />

            <p>
              <img
                src={web3storagelogo} 
                alt="Web3.Storage Logo" 
                style={{
                  display: 'inline-block',  
                  width:'90%', 
                  height: 'auto'
                }}/>
              <br/>
              <br/>
              Web3.Storage is a IPFS pinning services and backs up the data on Filecoin. It best of web2 and web3 to provide infra you can rely on to scale with your application. More than 200k users have already stored 200m+ object on Web3.storage. 
              <br/>
              <br/>
              <img src={web3storagegif}
                alt="W3s Animation"
                style={{
                  display: "inline-block", 
                  float: 'inherit', 
                  width:'90%', 
                  height: 'auto'
                }}/>
            </p>

            <hr className="clear:both"/>

            <div className="rpgui-icon sword"></div>
            <br />
            <br />

            <div>
              <div
                className="rpgui-container framed" 
                style={{
                  position: 'relative', 
                  width: '90%', 
                  display: 'inline-block'
                }}>
                <h1>The Quest</h1>
                <p>
                  Take a photo or select a photo form your device.
                <br />
                <br />
                  Click "upload" to upload it to Web3.Storage's IPFS cluster and Filecoin backup service.
                <br />
                <br />
                  You will get an Content ID (CID) link which is a content addressed link (hash digest of the file). 
                </p>
              </div>
            </div>


            <br />
            <br />
            <hr className="clear:both"/>
            <br />

            <div id="uploadfile">
              <div 
                className="rpgui-container framed-golden-2" 
                style={{
                  position: 'relative', 
                  width: '90%', 
                  display: 'inline-block'
                }}>

                <div className="rpgui-icon sword"></div>
                <br />
                <br />
                
                {/* <h1>File Uploader</h1> */}
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
              <h1 
                style={{
                  fontSize: '150%'
                }}>
                  That's it!
                </h1>

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
