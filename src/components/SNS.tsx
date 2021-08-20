import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import {Helmet} from "react-helmet";

const KAKAO_SDK = "https://developers.kakao.com/sdk/js/kakao.js"

declare global{
  interface Window{
    Kakao:any;
  }
}

const { Kakao } = window;

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

function SNS():JSX.Element{
    const classes = useStyles();

    useEffect(() =>{
      try{
        Kakao.init("#")
      }catch(error){
        
      }
    })

    
    const shareKakao = () => {
      // 카카오링크 버튼 생성
      Kakao.Link.createDefaultButton({
        container: '#shareKakao', // 카카오공유버튼ID
        objectType: 'feed',
        content: {
          title: "나의 음식 찾기",
          description: "당신의 음식 찾기 결과", // 보여질 설명
          imageUrl: "#", // 콘텐츠 URL
          link: {
             mobileWebUrl: "#",
             webUrl: "#"
          }
        }
        
      });
    }
    
    

    return(
        <div>

            <div id="shareKakao" className={classes.linkIcon} onClick={shareKakao} style={{fontSize:"14px", backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-facebook.png'})`}}></div>
            <a className={classes.linkIcon} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-kakao.png'})`}}></a>
            <a className={classes.linkIcon} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-twitter.png'})`}}></a>
        </div>
    )
}

export default SNS;

function componentDidMount() {
  throw new Error("Function not implemented.");
}
