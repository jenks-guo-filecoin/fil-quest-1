import QRCode from "react-qr-code";

export const Success = ({cids, setCids, setSendingState}) => {     
    setSendingState(false);

    const onGoBack = () => {
        setCids([]);
    } 

    return (
        <div>
            <div>
                <h1 
                >Photo have been sent to Web3.Storage & IPFS successfully.</h1>

                {cids.map(function(path, index) {
                        return <div><p style={{ wordBreak:'break-all' }}><a href={"https://" + path + ".ipfs.w3s.link" } >https://{path}.ipfs.w3s.link</a></p>                            
                        <QRCode size={256} style={{ height: "auto", maxWidth: "180", width: "100%" }} value={"https://CID.ipfs.w3s.link".replace("CID",path)} viewBox={`0 0 256 256`} bgColor='#C6813E' fgColor='#4A4D4E'/></div>
                    })}
                    <br/>
                    <h1 
                >Click the link above to retrieve the photo via IPFS W3S gateway.</h1>
                <button className="rpgui-button golden" type="submit">
                    <p>Go Back ⏎</p>
                </button>
            </div>
        </div>
    )
}

export default Success;