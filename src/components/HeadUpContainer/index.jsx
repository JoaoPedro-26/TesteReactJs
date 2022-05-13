 import React from "react";
 import { HeadImg, DivBotao, BotaoImage, HeadDiv, MainText, IconesMain, SubText, DivTeste, DivInfos, ImageAparelhoMedico, ContainerImages, TextImages, ButtonHelp, DivButtonHelp } from '../HeadUpContainerStyles';
 import MainAnuncio from '../../assets/images/MainPropaganda/MainAnuncio.svg';
 import IconeTruck from '../../assets/images/MainPropaganda/IconeTruck.svg';
 import IconeReload from '../../assets/images/MainPropaganda/IconeReload.svg';
 import IconeCodigoBarra from '../../assets/images/MainPropaganda/IconeCodigoBarra.svg';
 import IconeCard from '../../assets/images/MainPropaganda/IconeCard.svg';
 import AparelhoMedico from '../../assets/images/MainPropaganda/AparelhoMedico.svg';
 import Pediatria from '../../assets/images/MainPropaganda/Pediatria.svg';
 import CadeiraRodas from '../../assets/images/MainPropaganda/CadeiraRodas.svg';
 import Estudante from '../../assets/images/MainPropaganda/Estudante.svg';
 import Moveis from '../../assets/images/MainPropaganda/Moveis.svg';
 import Inaladores from '../../assets/images/MainPropaganda/Inaladores.svg';
 import LeftLogo from '../../assets/images/MainPropaganda/LeftLogo.svg';
 import RightLogo from '../../assets/images/MainPropaganda/RightLogo.svg';

export default function UpContainer () {

    return(
        <>
            <div>
                <DivBotao>
                    <BotaoImage src={LeftLogo}/>
                    <BotaoImage style={{marginLeft: '1168px'}} src={RightLogo}/>
                </DivBotao>
                <HeadImg src={MainAnuncio}/>
                
            </div>
        
            <HeadDiv>
                <DivTeste>
                    <IconesMain src={IconeTruck}/>
                    <DivInfos>
                        <MainText>Frete Grátis em todo Brasil</MainText>
                        <SubText>Compras acima de R$ 999,99</SubText>
                    </DivInfos>
                </DivTeste>

                <DivTeste>
                    <IconesMain src={IconeReload}/>
                    <DivInfos>
                        <MainText>Assinaturas 5% OFF</MainText>
                        <SubText>Como funciona</SubText>
                    </DivInfos>
                </DivTeste>
                
                <DivTeste>
                    <IconesMain src={IconeCodigoBarra}/>
                    <DivInfos>
                        <MainText>10% de Desconto</MainText>
                        <SubText>Em pedidos via boleto</SubText>
                    </DivInfos>
                </DivTeste>
                
                <DivTeste>
                    <IconesMain src={IconeCard}/>
                    <DivInfos>
                        <MainText>6x sem juros</MainText>
                        <SubText>No cartão de crédito</SubText>
                    </DivInfos>
                </DivTeste>
            </HeadDiv>

            <ContainerImages>
                <div>
                    <ImageAparelhoMedico src={AparelhoMedico}/>
                    <TextImages>Medicina Ocupacional</TextImages>
                </div>

                <div>
                    <ImageAparelhoMedico src={Pediatria}/>
                    <TextImages>Pediatria</TextImages>
                </div>

                <div>
                    <ImageAparelhoMedico src={CadeiraRodas}/>
                    <TextImages>Cadeiras de rodas</TextImages>
                </div>

                <div>
                    <ImageAparelhoMedico src={Estudante}/>
                    <TextImages>Estudantes</TextImages>
                </div>

                <div>
                    <ImageAparelhoMedico src={Moveis}/>
                    <TextImages>Móveis hospitalares</TextImages>
                </div>

                <div>
                    <ImageAparelhoMedico src={Inaladores}/>
                    <TextImages>Inaladores</TextImages>
                </div>

                
            </ContainerImages>

                

            <DivButtonHelp>
                <ButtonHelp>Posso ajudar ?</ButtonHelp>
            </DivButtonHelp>

        </>
    )
}