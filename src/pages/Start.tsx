import * as React from "react";
import { Link } from "react-router-dom";

function StartPage(){
     return (
     <div>
            <Link to="/qna/1"><button> 시작하기</button></Link>
        </div>
     )
    
}

export default StartPage;