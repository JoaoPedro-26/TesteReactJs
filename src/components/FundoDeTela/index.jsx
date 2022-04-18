import React from "react";
import styled from "styled-components";
import FundoDeTela from "../../assets/images/icons/FundoDeTela.svg";
import Gray from "../../assets/images/icons/Gray.svg";
import SadGray from "../../assets/images/icons/SadGray.svg";
import RecGray from "../../assets/images/icons/RecGray.svg";
import ShareGray from "../../assets/images/icons/ShareGray.svg"

const Background = styled.img`
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    font-size: 80px;
    color: #f8f8f9;
    position: absolute;
    margin-left: 150px;
    margin-top: 10px;
`;

const SubTitle = styled.p`
    font-size: 40px;
    //color: #7E8D95;
    color: white;
    position: absolute;
    margin-top: 120px;
    margin-left: 140px;
`;

const Plus = styled.img`
    width: 75px;
    height: 75px;
    position: absolute;
    margin-top: 800px;
    margin-left: 130px;
`;

const TextPlus = styled.p`
    font-size: 30px;
    position: absolute;
    margin-top: 880px;
    margin-left: 120px;
    color: #4F4F4F;
`;

const Sad = styled.img`
    width: 75px;
    height: 75px;
    position: absolute;
    margin-top: 800px;
    margin-left: 300px;
`;

const TextSad = styled.p`
    font-size: 30px;
    position: absolute;
    margin-top: 880px;
    margin-left: 290px;
    color: #4F4F4F	;
`;

const Rec = styled.img`
    width: 75px;
    height: 75px;
    position: absolute;
    margin-top: 800px;
    margin-left: 460px;
`;

const TextRec = styled.p`
    font-size: 30px;
    position: absolute;
    margin-top: 880px;
    margin-left: 450px;
    color: #4F4F4F	;
`;

const Share = styled.img`
    width: 75px;
    height: 75px;
    position: absolute;
    margin-top: 800px;
    margin-left: 630px;
`;

const TextShare = styled.p`
    font-size: 30px;
    position: absolute;
    margin-top: 880px;
    margin-left: 605px;
    color: #4F4F4F	;
`;

export default () => {
    return (
        <>
            <Title>Penny DreadFul</Title>
            <SubTitle>80% INDICADO / CIENCIA FICCION / 2015 / EUA / 14</SubTitle>
            <Plus src={Gray}/>
            <TextPlus>Mi lista</TextPlus>
            <Sad src={SadGray}/>
            <TextSad>Evaluar</TextSad>
            <Rec src={RecGray}/>
            <TextRec>Grabar</TextRec>
            <Share src={ShareGray}/>
            <TextShare>Compartir</TextShare>
            <Background src={FundoDeTela}/>
        </>
    )
}