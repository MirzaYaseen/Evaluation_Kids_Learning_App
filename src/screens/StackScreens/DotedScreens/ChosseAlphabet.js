import React, { FC } from "react";
import {} from '../../../components'
import { A } from "./FillAlphabet/CapitalFillAlphabet/A";

const ChooseImage = ({Alphabet})=>{

    switch(Alphabet){
        case 'A':
        return <A />
    }
    return(
        <A/>
    )
}