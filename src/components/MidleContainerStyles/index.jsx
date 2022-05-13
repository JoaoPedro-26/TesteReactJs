import styled from "styled-components";

export const Title = styled.p`
    font-size: 28px;
    color: #3A3A3A;
    font-family: 'Red Hat Display';
    text-align: center;
`;

export const SubTitle = styled.p`
    font-size: 14px;
    color: #BBD147;
    font-family: 'Red Hat Display';
    text-decoration-line: underline;
    text-align: center;
`;

export const BotaoImage = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    
`;

export const DivBotao = styled.div`
    position: absolute;
    margin-top: 130px;
`;

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
`;

export const DivInfos = styled.div`
    text-align: start;
    margin-left: 16px;
`;

export const DivPrice = styled.div`
    display: flex;
`;

export const Container = styled.div`
    width: 254px;
    height: 436px;
    border: 0.2px solid #EDEDED;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover{
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const ImageCadeiraMedica = styled.img`
    width: 193px;
    height: 193px;
`;

export const InfosMarca = styled.p`
    font-size: 12px;
    color: #3A3A3A;
    opacity: 0.7;
    font-weight: 400;
`;

export const InfosCadeira = styled.p`
    font-size: 14px;
    color: #3A3A3A;
    font-family: 'Red Hat Display';
    width: 205px;
`;

export const RealPrice = styled.p`
    font-size: 12px;
    color: #3A3A3A;
    opacity: 0.7;
    text-decoration-line: line-through;
    font-family: 'Red Hat Display';
`;

export const DiscountPrice = styled.p`
    font-size: 19px;
    color: #BBD147;
    font-family: 'Red Hat Display'; 
    margin-top: 7px;
`;

export const Percentage = styled.p`
    color: #FFFFFF;
    font-size: 10px;
    font-family: 'Red Hat Display';
    background: #DBD423;
    border-radius: 2px;
    width: 46px;
    height: 16px;
    text-align: center;
    margin-left: 14px;
`;

export const Add = styled.button`
    width: 222px;
    height: 44px;
    background: #BBD147;
    border-radius: 22px;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
`;

export const DivBotonLogo = styled.div`
    text-align: center;
    margin-top: 32px;
`;

export const BotonLogo = styled.img`
    width: 46px;
    height: 18px;
`;