import React from "react";
import { HeaderInfos, PhoneLogo, Contact, Number} from '../ContactHeader';
import Phone from '../../assets/images/HeaderImages/Phone.svg';

export default function InfosHeader() {
    return (
        <HeaderInfos>
            <PhoneLogo src={Phone}/>
            <Contact>FALE CONOSCO</Contact>
            <Number>(11) 2424 7213</Number>
        </HeaderInfos>
    );
}