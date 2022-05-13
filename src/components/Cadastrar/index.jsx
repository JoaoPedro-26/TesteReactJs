import React from "react";
import { DivCadastrar, Title, SubTitle, Input, ButtonCadastrar, DivInput } from '../CadastrarStyles';

export default function Cadastrar () {
    return(
        <>
            <DivCadastrar>
                <Title>ASSINE NOSSA NEWSLETTER</Title>
                <SubTitle>Fique por dentro de todas as novidades, lançamentos e promoções da <a style={{fontWeight: 'bold'}}>Center Medical</a></SubTitle>
                
                <DivInput>
                    <Input placeholder="Digite seu nome"/>
                    <Input placeholder="Digite seu e-mail"/>
                    <ButtonCadastrar>CADASTRAR</ButtonCadastrar>
                </DivInput>
            </DivCadastrar>
        </>
    )
}