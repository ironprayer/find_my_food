import * as React from "react";

interface Start{
    nextPage():void;
}

class StartPage{
    nextPage(){

    }
    
    render(){
        <div>
            <button onClick={this.nextPage}>시작하기</button>
        </div>
    }
}