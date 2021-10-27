import React from 'react';
import myimg from "../imageInSrc.jpg";
import "./style.css";
let x = 5;
function Login(){
    return (
        <div className="container">
        <div style={{border:"solid 1px black",maxWidth:"100vw"}} >
            <h1 className="title red">Nidhal Majdoub</h1>
            <br />
            <img src={myimg} width="200" height="200"/>
            <br />
            <img src="/imageInPublic.jpg" width="200" height="200" />
        </div>
        <video width="320" height="240" controls >
        <source src="myVideo.mp4" type="video/mp4" />
        </video>
        </div>

    );
}   
export default Login;