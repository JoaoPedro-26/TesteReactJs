import React from "react";
import { DivNews, News, Sales, Title, DivBotao, BotaoImage, Logos, DivBotonLogo, BotonLogo, SubTitle, ViewAll, DivBotaoSecundary, BotaoImageSecundary, Container, ImageCadeiraMedica, InfosMarca, InfosCadeira, RealPrice, DiscountPrice, Percentage, Add, ContainerPartners, InfosContainer, DivInfos, Partners } from "../NovidadesClientesStyles";
import Novidades from '../../assets/images/Clients/Novidades.svg';
import Vendas from '../../assets/images/Clients/Vendas.svg';
import Aacd from '../../assets/images/Clients/Aacd.svg';
import Apae from '../../assets/images/Clients/Apae.svg';
import Safra from '../../assets/images/Clients/Safra.svg';
import Assosiacao from '../../assets/images/Clients/AssosiacaoSC.svg';
import Caedu from '../../assets/images/Clients/Caedu.svg';
import Carrefour from '../../assets/images/Clients/Carrefour.svg';
import CadeiraDeRodas from '../../assets/images/MidleImages/CadeiraDeRodas.svg';
import Mikatas from '../../assets/images/MidleImages/Mikatas.svg';
import Techline from '../../assets/images/MidleImages/Techline.svg';
import Supermedy from '../../assets/images/MidleImages/Supermedy.svg';
import Ecafix from '../../assets/images/MidleImages/Ecafix.svg';
import Cristofoli from '../../assets/images/MidleImages/Cristofoli.svg';
import Welmy from '../../assets/images/MidleImages/Welmy.svg';
import LeftLogo from '../../assets/images/MainPropaganda/LeftLogo.svg';
import RightLogo from '../../assets/images/MainPropaganda/RightLogo.svg';
import BotonsLogo from '../../assets/images/MainPropaganda/BotonsLogo.svg';

export default function Clientes () {
    return(
        <>
            <DivNews>
                <News src={Novidades}/>
                <Sales src={Vendas}/>
            </DivNews>

            <Title>Quem conhece aprova</Title>

            <DivBotao>
                <BotaoImage src={LeftLogo}/>
                <BotaoImage style={{marginLeft: '1180px'}} src={RightLogo}/>
            </DivBotao>

            <ContainerPartners>
                <Logos src={Aacd}/>
                <Logos src={Apae}/>
                <Logos src={Safra}/>
                <Logos src={Assosiacao}/>
                <Logos src={Caedu}/>
                <Logos src={Carrefour}/>
            </ContainerPartners>

            <DivBotonLogo>
                <BotonLogo src={BotonsLogo}/>
            </DivBotonLogo>

            <SubTitle>Novidades</SubTitle>
            <ViewAll>Ver tudo</ViewAll>

            <InfosContainer>
                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                        <InfosMarca>Marca do Produto</InfosMarca>
                            <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>
                            <RealPrice>R$ 899,99</RealPrice>

                            <div style={{display: 'flex'}}>
                                <DiscountPrice>R$ 558,60</DiscountPrice>
                                <Percentage>10% 0FF</Percentage>
                            </div>
                    </DivInfos>

                        <Add>Adicionar</Add>
                </Container>

                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                    <InfosMarca>Marca do Produto</InfosMarca>
                        <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>
                        <RealPrice>R$ 899,99</RealPrice>

                        <div style={{display: 'flex'}}>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </div>
                    </DivInfos>

                        <Add>Adicionar</Add>
                </Container>

                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                    <InfosMarca>Marca do Produto</InfosMarca>
                        <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>
                        <RealPrice>R$ 899,99</RealPrice>

                        <div style={{display: 'flex'}}>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </div>
                    </DivInfos>

                        <Add>Adicionar</Add>
                </Container>

                <DivBotaoSecundary>
                    <BotaoImageSecundary src={LeftLogo}/>
                    <BotaoImageSecundary style={{marginLeft: '1180px'}} src={RightLogo}/>
                </DivBotaoSecundary>

                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                    <InfosMarca>Marca do Produto</InfosMarca>
                        <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>
                        <RealPrice>R$ 899,99</RealPrice>

                        <div style={{display: 'flex'}}>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </div>
                    </DivInfos>

                        <Add>Adicionar</Add>
                </Container>
            </InfosContainer>

            <SubTitle>As melhores marcas</SubTitle>

            <Partners>
                <Logos src={Mikatas}/>
                <Logos src={Techline}/>
                <Logos src={Supermedy}/>
                <Logos src={Ecafix}/>
                <Logos src={Cristofoli}/>
                <Logos src={Welmy}/>
            </Partners>

            <DivBotonLogo>
                <BotonLogo src={BotonsLogo}/>
            </DivBotonLogo>
        </>
    )
};