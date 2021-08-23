import "./loading.css";

const Loading = () => {
    return ( <div className="big-container">
        <div className="container">
        <span style={{"--i":"1"}}></span>
        <span style={{"--i":"2"}}></span>
        <span style={{"--i":"3"}}></span>
        <span style={{"--i":"4"}}></span>
        <span style={{"--i":"5"}}></span>
        <span style={{"--i":"6"}}></span>
    </div>
    <h2>loading <span>.</span><span>.</span><span>.</span></h2>
    </div>
     );
}
 
export default Loading;
