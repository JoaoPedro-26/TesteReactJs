import React from "react";
import { DivRodape, DivRodapeUpPart, ImgContatos, TextContatos, NumberContatos, About, AboutRedesSociais, AboutSearch, AboutInfos, AboutSecurity, ContainerRedesSociais, LogoRedesSociais, LogosCards, PaymentsText, ImageEncrypt, ImageLoja, DivisionFooter, DivCopyright, CopyrightText, Platform, ImageVtex, DivContatos } from '../FooterStyles';
import LogoPhone from '../../assets/images/FooterImages/LogoPhone.svg';
import LogoWhatsApp from '../../assets/images/FooterImages/LogoWhatsApp.svg';
import LogoEmail from '../../assets/images/FooterImages/LogoEmail.svg';
import LogoFacebook from '../../assets/images/FooterImages/LogoFacebook.svg';
import LogoInstagram from '../../assets/images/FooterImages/LogoInstagram.svg';
import LogoTwitter from '../../assets/images/FooterImages/LogoTwitter.svg';
import LogoYoutube from '../../assets/images/FooterImages/LogoYoutube.svg';
import TodosLogos from '../../assets/images/FooterImages/TodosLogos.svg';
import LogoEncrypt from '../../assets/images/FooterImages/LogoEncrypt.svg';
import LogoLoja from '../../assets/images/FooterImages/LogoLoja.svg';
import LogoVtex from '../../assets/images/FooterImages/LogoVtex.svg';


export default function RodaPe() {
    return(
        <div>
            <DivRodapeUpPart>
                <DivRodape>
                    <DivContatos>
                        <ImgContatos src={LogoPhone}/>
                        <div>
                            <TextContatos>SAC e televendas</TextContatos>
                            <NumberContatos>(11) 2424 7213</NumberContatos>
                        </div>
                    </DivContatos>

                    <DivContatos>
                        <ImgContatos src={LogoWhatsApp}/>
                        <div>
                            <TextContatos>NOSSO WHATSAPP</TextContatos>
                            <NumberContatos>(11) 9 7699 6558</NumberContatos>
                        </div>
                    </DivContatos>

                    <DivContatos>
                        <ImgContatos src={LogoEmail}/>
                        <div>
                            <TextContatos>E-mail</TextContatos>
                            <NumberContatos>sac@centermedical.com.br</NumberContatos>
                        </div>
                    </DivContatos>  
                </DivRodape>

                <div>
                    <About>SOBRE</About>
                    <AboutInfos>Empresa</AboutInfos>
                    <AboutInfos>Polit??ca de Privacidade</AboutInfos>
                    <AboutInfos>D??vidas Frequentes</AboutInfos>
                    <AboutInfos>?? Seguro Comprar</AboutInfos>

                    <AboutRedesSociais>REDES SOCIAIS</AboutRedesSociais>
                    <ContainerRedesSociais>
                        <LogoRedesSociais src={LogoFacebook}/>
                        <LogoRedesSociais src={LogoInstagram}/>
                        <LogoRedesSociais src={LogoTwitter}/>
                        <LogoRedesSociais src={LogoYoutube}/>
                    </ContainerRedesSociais>
                </div>

                <div>
                    <About>ATENDIMENTO</About>
                    <AboutInfos>Central de Atendimento</AboutInfos>
                    <AboutInfos>Trocas e Devolu????es</AboutInfos>
                    <AboutInfos>Pol??tica de Entrega</AboutInfos>

                    <AboutSearch>MAIS BUSCADOS</AboutSearch>
                    <AboutInfos>Estetosc??pio</AboutInfos>
                    <AboutInfos> Oximetro dedo</AboutInfos>
                    <AboutInfos>Esfigmonan??metro</AboutInfos>
                    <AboutInfos>Equipamentos m??dico</AboutInfos>
                </div>

                <div>
                    <PaymentsText>FORMAS DE PAGAMENTO</PaymentsText>
                    <LogosCards src={TodosLogos}/>

                    <AboutSecurity>SEGURAN??A</AboutSecurity>
                    <ImageEncrypt src={LogoEncrypt}/>
                    <ImageLoja src={LogoLoja}/>
                </div>
                    
            </DivRodapeUpPart>

            <DivisionFooter/>

            <DivCopyright>
                <CopyrightText>Copyright ?? 2014 CenterMedical - TODOS OS DIREITOS RESERVADOS - ?? proibida a reprodu????o, total ou parcial, do conte??do sem pr??via autoriza????o da CENTERMEDICAL.</CopyrightText>
                <div>
                    <Platform>Plataforma</Platform>
                    <ImageVtex src={LogoVtex}/>
                </div>
            </DivCopyright>
        </div>
    )
}