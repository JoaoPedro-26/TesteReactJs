import React from "react";
import { Title, SubTitle, Container, ImageCadeiraMedica, InfosMarca, InfosCadeira, RealPrice, DiscountPrice, Percentage, Add, DivContainer, DivInfos, DivPrice, DivBotonLogo, BotonLogo, DivBotao, BotaoImage } from '../MidleContainerStyles';
import CadeiraDeRodas from '../../assets/images/MidleImages/CadeiraDeRodas.svg';
import BotonsLogo from '../../assets/images/MainPropaganda/BotonsLogo.svg';
import LeftLogo from '../../assets/images/MainPropaganda/LeftLogo.svg';
import RightLogo from '../../assets/images/MainPropaganda/RightLogo.svg';

export default function ContainerMidle () {
    return(
        <>
            <Title>Mais vendidos</Title>
            <SubTitle>Ver tudo</SubTitle>

            <DivBotao>
                <BotaoImage src={LeftLogo}/>
                <BotaoImage style={{marginLeft: '1180px'}} src={RightLogo}/>
            </DivBotao>

            <DivContainer>
                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                        <InfosMarca>Marca do Produto</InfosMarca>
                        <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>
                        <RealPrice>R$ 899,99</RealPrice>

                        <DivPrice>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </DivPrice>
                    </DivInfos>

                    <Add>Adicionar</Add>
                </Container>

                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                        <InfosMarca>Marca do Produto</InfosMarca>
                        <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>
                        <RealPrice>R$ 899,99</RealPrice>

                        <DivPrice>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </DivPrice>
                    </DivInfos>

                    <Add>Adicionar</Add>
                </Container>

                <Container>
                    <ImageCadeiraMedica src={CadeiraDeRodas}/>

                    <DivInfos>
                        <InfosMarca>Marca do Produto</InfosMarca>
                        <InfosCadeira>Cadeira de Rodas em Aço - Ortopedia Jaguaribe - 100900 - Pneu Maciço</InfosCadeira>

                        <div>
                        <RealPrice>R$ 899,99</RealPrice>

                        <DivPrice>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </DivPrice>
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

                        <DivPrice>
                            <DiscountPrice>R$ 558,60</DiscountPrice>
                            <Percentage>10% 0FF</Percentage>
                        </DivPrice>
                    </DivInfos>

                    <Add>Adicionar</Add>
                </Container>
            </DivContainer>

            <DivBotonLogo>
                <BotonLogo src={BotonsLogo}/>
            </DivBotonLogo>
        </>
    )
}