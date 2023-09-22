import loadingGif from './img/loading.gif';

export const Sending  = ({setCids}) => {     

    const onStop = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <h1>Uploading to IPFS via Web3.Storage...</h1>
            <img src={loadingGif} alt="loading logo" style={{display: "inline-block", height: 60, width: '80%', float: 'inherit'}}/>
        </div>
)
}

export default Sending;