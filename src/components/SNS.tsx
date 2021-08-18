import { makeStyles } from "@material-ui/styles";
import React from "react";

type prop = {
    
}

const useStyles = makeStyles({
    root:{
    },
    linkIcon:{
        position:"relative",
        display:"inline-block",
        width:"50px",
        fontSize:"14px",
        marginRight:"10px",
        marginTop:"10px",
        paddingTop:"50px",
        backgroundRepeat: "no-repeat"
    }
})

function SNS(prop:prop):JSX.Element{
    const classes = useStyles();

    return(
        <div>
            <a className={classes.linkIcon} style={{fontSize:"14px", backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-facebook.png'})`}}></a>
            <a className={classes.linkIcon} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-kakao.png'})`}}></a>
            <a className={classes.linkIcon} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-twitter.png'})`}}></a>
        </div>
    )
}

export default SNS;