import React from 'react';
import { Logo, Busca, Signature, Cabecalho, Visitant, ArrowImage, CarText, MenuTable, MenuText, TextInfos, FirstDiv, SecondDiv, DivLogos, LogoImages, LogoImageCar, LogoImageUser} from '../HeaderStyles';
import Frame from '../../assets/images/HeaderImages/Frame.svg';
import Menu from '../../assets/images/HeaderImages/Menu.svg';
import InfosHeader from '../InfosContatHeader';
import Recharge from '../../assets/images/HeaderImages/Recharge.svg';
import UserLogo from '../../assets/images/HeaderImages/UserLogo.svg';
import CarLogo from '../../assets/images/HeaderImages/CarLogo.svg';
import Search from '../../assets/images/HeaderImages/Search.svg';
import ArrowLogo from '../../assets/images/HeaderImages/ArrowLogo.svg';

export default function Header () {

  return (
    <>
      <InfosHeader/>

      <Cabecalho>
        <FirstDiv>
          <Logo src={Frame}/>
          <Busca  placeholder="O que você procura?"/>

          <DivLogos>
            <LogoImages src={Recharge}/>
            <Signature>Minhas Assinaturas</Signature>

            <LogoImageUser src={UserLogo}/>
            <div>
              <Visitant>Olá, Visitante</Visitant>

              <div style={{display: 'flex'}}>
                <Visitant style={{marginTop: '-10px'}}>Entrar</Visitant>
                <ArrowImage style={{marginTop: '-8px'}} src={ArrowLogo}/>
              </div>
            </div>

            <LogoImageCar src={CarLogo}/>
            <CarText>Meu Carrinho</CarText>
          </DivLogos>

        </FirstDiv>

        <SecondDiv>
          <MenuTable src={Menu}/>
          <MenuText>Todas as categorias</MenuText>
          <TextInfos>Acessibilidade</TextInfos>
          <TextInfos>Aparelho de pressão</TextInfos>
          <TextInfos>Estetoscópio</TextInfos>
          <TextInfos>Aparelho médico</TextInfos>
          <TextInfos>Equipamento Hospitalar</TextInfos>
          <TextInfos>Móveis</TextInfos>
          <TextInfos>Modelos Anatômicos</TextInfos>
          <TextInfos>Uso pessoal</TextInfos>
        </SecondDiv>
      </Cabecalho>
    </>
  );
};