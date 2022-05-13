import React from "react";
import { ImageInfos, Infos, SaudeText, ContainerUpBackGround, TitleArticle, RandomText, TextClient, ContainerDiv, ContainerInfos, Foto, ContainerUp, RandomTextTeste, ContainerClient, Name, ImageAspas, InfoEmpresa } from '../LowContainerStyles'
import FirstImage from '../../assets/images/LowImages/FirstImage.svg';
import SecondImage from '../../assets/images/LowImages/SecondImage.svg';
import ThirdImage from '../../assets/images/LowImages/ThirdImage.svg';
import PeopleImage from '../../assets/images/LowImages/PeopleImage.svg';
import AspasImage from '../../assets/images/LowImages/AspasImage.svg';

export default function InfosClientes () {
    return (
        <div>
            <ContainerUp>
                <ContainerUpBackGround>
                    <ImageInfos src={FirstImage}/>
                    <Infos>
                        <SaudeText>#Saúde</SaudeText>
                        <TitleArticle>Título para o artigo</TitleArticle>
                        <RandomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus, fringilla eleifend sed. Venenatis sed ac congue odio. Orci elit euismod sit viverra mollis sit magna sagittis. Malesuada cras suscipit sed pulvinar dolor vestibulum in...</RandomText>
                    </Infos>
                </ContainerUpBackGround>

                <ContainerUpBackGround>
                    <ImageInfos src={SecondImage}/>
                    <Infos>
                        <SaudeText>#Saúde</SaudeText>
                        <TitleArticle>Título para o artigo</TitleArticle>
                        <RandomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus, fringilla eleifend sed. Venenatis sed ac congue odio. Orci elit euismod sit viverra mollis sit magna sagittis. Malesuada cras suscipit sed pulvinar dolor vestibulum in...</RandomText>
                    </Infos>
                </ContainerUpBackGround>

                <ContainerUpBackGround>
                    <ImageInfos src={ThirdImage}/>
                    <Infos>
                        <SaudeText>#Saúde</SaudeText>
                        <TitleArticle>Título para o artigo</TitleArticle>
                        <RandomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus, fringilla eleifend sed. Venenatis sed ac congue odio. Orci elit euismod sit viverra mollis sit magna sagittis. Malesuada cras suscipit sed pulvinar dolor vestibulum in...</RandomText>
                    </Infos>
                </ContainerUpBackGround>
            </ContainerUp>

            <TextClient>O que nossos clientes dizem</TextClient>

            <ContainerInfos>
                <ContainerDiv>
                    <ContainerClient>
                        <Foto src={PeopleImage}/>
                        <div>
                            <Name>Luana Alves</Name>
                            <InfoEmpresa>CEO Banco Safra</InfoEmpresa>
                        </div>
                        <ImageAspas src={AspasImage}/>
                    </ContainerClient>
                    <RandomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus mauris morbi ac, posuere senectus diam a. Tristique mattis eros, id quisque purus facilisis lectus feugiat. Iaculis est egestas amet, nunc eget.</RandomText>
                </ContainerDiv>

                <ContainerDiv>
                    <ContainerClient>
                        <Foto src={PeopleImage}/>
                        <div>
                            <Name>Luana Alves</Name>
                            <InfoEmpresa>CEO Banco Safra</InfoEmpresa>
                        </div>
                        <ImageAspas src={AspasImage}/>
                    </ContainerClient>
                    <RandomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus mauris morbi ac, posuere senectus diam a. Tristique mattis eros, id quisque purus facilisis lectus feugiat. Iaculis est egestas amet, nunc eget.</RandomText>
                </ContainerDiv>

                <ContainerDiv>
                    <ContainerClient>
                        <Foto src={PeopleImage}/>
                        <div>
                            <Name>Luana Alves</Name>
                            <InfoEmpresa>CEO Banco Safra</InfoEmpresa>
                        </div>
                        <ImageAspas src={AspasImage}/>
                    </ContainerClient>
                    <RandomText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus mauris morbi ac, posuere senectus diam a. Tristique mattis eros, id quisque purus facilisis lectus feugiat. Iaculis est egestas amet, nunc eget.</RandomText>
                </ContainerDiv>
            </ContainerInfos>

            <TextClient>Sobre a Center Medical</TextClient>
            <div>
            <RandomTextTeste>Texto de SEO dolor sit amet, consectetur adipiscing elit. Tellus mauris morbi ac, posuere senectus diam a. Tristique mattis eros, id quisque purus facilisis lectus feugiat. Iaculis est egestas amet, nunc eget. Tristique mattis eros, id quisque purus facilisis lectus feugiat. Iaculis est egestas amet, nunc eget.</RandomTextTeste>
            </div>
        </div>
    )
}