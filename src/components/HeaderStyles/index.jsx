import styled from "styled-components";
import Search from '../../assets/images/HeaderImages/Search.svg';

export const Cabecalho = styled.div`
    width: 1280px;
    height: 162px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const SecondDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
`;

export const DivLogos = styled.div`
    display: flex;
`;

export const LogoImages = styled.img`
    width: 40px;
    height: 40px;
`;

export const LogoImageUser = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 30px;
`;

export const LogoImageCar = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 30px;
`;

export const Logo = styled.img`
    width: 247px;
    height: 52px;
`;

export const Busca = styled.input`
    width: 472px;
    height: 40px;
    border-radius: 20px;
    background: #F4F5F5;
    //background-image: url(${Search});
`;

export const SearchImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const Circle = styled.img`
    width: 40px;
    height: 40px;
`;

export const Reloading = styled.img`
    width: 24px;
    height: 24px;
`;

export const Signature = styled.p`
    font-size: 13px;
    font-family: 'Red Hat Display';
    color: #C4C4C4;
    width: 66px;
    margin-left: 10px;
    margin-top: 4px;
`;

export const Usuario = styled.img`
    width: 24px;
    height: 24px;
`;

export const Visitant = styled.p`
    font-size: 13px;
    color: #3A3A3A;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 10px;
    margin-top: 4px;
`;

export const ArrowImage = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 5px;
`;

export const MarketCar = styled.img`
    width: 24px;
    height: 24px;
`;

export const CarText = styled.p`
    font-size: 13px;
    font-family: 'Red Hat Display';
    color: #3A3A3A;
    width: 50px;
    margin-left: 10px;
    margin-top: 4px;
`;

export const MenuTable = styled.img`
    width: 24px;
    height: 24px;
`;

export const MenuText = styled.p`
    font-size: 13px;
    color: #BBD147;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TextInfos = styled.a`
    font-size: 13px;
    font-family: 'Red Hat Display';
    color: #3A3A3A;
    font-weight: 400;
`;