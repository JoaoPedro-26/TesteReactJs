import styled from "styled-components";
import EmaiLogo from '../../assets/images/CadastrarImages/EmailLogo.svg';
import UserLogo from '../../assets/images/CadastrarImages/UserLogo.svg';
import SeparateLogo from '../../assets/images/CadastrarImages/SeparateLogo.svg';

export const DivCadastrar = styled.div`
    width: 1280px;
    height: 245px;
    background-color: #687DAA;
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 28px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 40px;
`;

export const SubTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
`;

export const DivInput = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const InputUser = styled.input`
    width: 304px;
    height: 44px;
    background-color: #FFFFFF !important;
    border-radius: 20px;
    margin-right: 8px;
    font-weight: 500;
    font-size: 13px;
    font-family: 'Red Hat Display';
    color: #868686;
    opacity: 0.8;
    padding-left: 50px;
    background: url(${UserLogo}) no-repeat;
    background-position: 17px;
`;

export const InputEmail = styled.input`
    width: 304px;
    height: 44px;
    background-color: #FFFFFF !important;
    border-radius: 20px;
    margin-right: 8px;
    font-weight: 500;
    font-size: 13px;
    font-family: 'Red Hat Display';
    color: #868686;
    opacity: 0.8;
    padding-left: 50px;
    background: url(${EmaiLogo}) no-repeat;
    background-position: 17px;
`;

export const ButtonCadastrar = styled.button`
    width: 264px;
    height: 44px;
    background: #BBD147;
    border-radius: 22px;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 700;
    cursor: pointer;
`