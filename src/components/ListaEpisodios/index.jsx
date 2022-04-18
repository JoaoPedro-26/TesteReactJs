/* import React, { useEffect, useState } from "react";
import { Busca } from "../../Api";
import { TextoSinopse } from "../TextSinopse";

export default function SinopseSerie (props) {
    const [sinopse, setSinopse] = useState();

    useEffect(() => {
        Busca(props.Duration)
    })

    if(!sinopse) {
        return (
            <>
                <p>carregando {props.Duration}</p>
            </>
        );
    };

    return(
        <>
            <TextoSinopse>{sinopse.Cast}</TextoSinopse>
        </>
    )
} */