import React from 'react';
import {ICard} from "../interface/interface";
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

//styles//
import { Wrapper } from "../style/CardItem.style";

// interface props

interface Props{
    localisation:ICard;
    completeCard(CardNameToDelete:string):void;
}

const CardItem=({localisation,completeCard}:Props)=>{
    const delHandler=()=>{
        console.log("delete")
    }
   
    return (
        <Wrapper>
              
            <Box className="card">
                <Box className="header-card">
                    <img src={localisation.urlImg} alt="ville"/>
                </Box>
                <Box className="wrappe-content">
        
                    <Box className="contente-card">
                        <h5>{localisation.localisation}</h5>
                            <p>{localisation.adress}</p>
                    </Box>
                    <Box className="switchDelete">
                        <Switch  defaultChecked size="small" color="success" />
                        <DeleteIcon className="delete" onClick={()=>completeCard(localisation.localisation)} />
                    </Box>
                </Box>
                <hr />
                <Box className="wrap">
                    <Box>
                        <p>{localisation.nbrPeople}</p>
                        <p>Habitants</p>
                    </Box>
                    <Box>
                        <p>{localisation.nbrHotel}</p>
                        <p>Hôtels</p>
                    </Box>
                    <Box>
                        <p>{localisation.average} €</p>
                        <p>Revenue Moy</p>
                    </Box>
                    <Box>
                        <p>{localisation.area}</p>
                        <p>km²</p>
                    </Box>
                </Box>
            </Box>  
                               
        </Wrapper>
)}

export default CardItem;