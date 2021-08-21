import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import {Helmet} from "react-helmet";

/*
* 전체적인 Error 체크 기능 추가 필요
*/

//const KAKAO_SDK = "https://developers.kakao.com/sdk/js/kakao.js"

/*
* Kakao API를 부르기 위해 KaKao 관련 호출된 것들이 전부 필요한지 테스트 필요
* 필요 없는 경우 합칠 필요가 있음
*/
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

    
    // useEffect(() =>{
    //   try{
    //     Kakao.init("#")
    //   }catch(error){
          //   }
    // })

    // 아이디 구해서 테스트 필요
    const shareFacebook = () => {
      const sendUrl = "localhost:3000/result"; // 전달할 URL
      window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
  
    }

    const shareKakao = () => {}
    // const shareKakao = () => {
    //   // 카카오링크 버튼 생성
    //   Kakao.Link.createDefaultButton({
    //     container: '#shareKakao', // 카카오공유버튼ID
    //     objectType: 'feed',
    //     content: {
    //       title: "나의 음식 찾기",
    //       description: "당신의 음식 찾기 결과", // 보여질 설명
    //       imageUrl: "#", // 콘텐츠 URL
    //       link: {
    //          mobileWebUrl: "#",
    //          webUrl: "#"
    //       }
    //     }
        
    //   });
    // }


    // 아이디 구해서 테스트 필요
    const shareTwitter = () => {
      const sendText = "Test";
      const sendUrl = "localhost:3000/result"
      window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    }
    
    

    return(
        <div>
            <div id="shareFacebook"  className={classes.linkIcon} onClick={shareFacebook} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-facebook.png'})`}}></div>
            <div id="shareKakao" className={classes.linkIcon} onClick={shareKakao} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-kakao.png'})`}}></div>
            <div id="shareTwitter" className={classes.linkIcon} onClick={shareTwitter} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/icon-twitter.png'})`}}></div>
        </div>
    )
}

export default SNS;

function componentDidMount() {
  throw new Error("Function not implemented.");
}
