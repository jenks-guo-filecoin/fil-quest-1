export const Success = ({cids, setCids, setSendingState}) => {     
    setSendingState(false);

    const onGoBack = () => {
        setCids([]);
    } 

    return (
        <div>
            <div>
                <h1>Photo have been sent to Web3.Storage & IPFS successfully</h1>

                {cids.map(function(path, index) {
                        return <p><a href={"https://" + path + ".ipfs.w3s.link" } >https://{path}.ipfs.w3s.link</a></p>
                    })}

                <button className="rpgui-button golden" type="submit">
                    <p>Go Back ⏎</p>
                </button>
            </div>
        </div>
    )
}

export default Success;