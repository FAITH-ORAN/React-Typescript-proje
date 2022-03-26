
import React from 'react';
import ModalForm from './ModalForm';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import CardItem from './CardItem';

// LocalStorage 
import useLocalStorage from 'react-localstorage-hook';
//styles//
import { Wrapper } from "../style/Card.style";
import { CollectionsOutlined } from '@mui/icons-material';

const Card= () => {
    const delHandler=()=>{
        console.log("delete")
    }
    const [localisation, setLocal] = useLocalStorage("localisation", "");
    const [adress, setAdress] = useLocalStorage("adress", "");
    const [urlImg, setImg] = useLocalStorage("urlImg", "");
    const [nbrPeople, setNbrPeople] = useLocalStorage("nbrPeople", "");
    const [nbrHotel, setNbrHotel] = useLocalStorage("nbrHotel", "");
    const [average, setAverage] = useLocalStorage("average", "");
    const [area, setArea] = useLocalStorage("area", "");
    return (
        <Wrapper>
           
                <div className="card">
                        <div className="header-card">
                            <img src="https://images.unsplash.com/photo-1611515905024-d6530366c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="copenhagen"/>
                        </div>
                        <div className="wrappe-content">
                
                            <div className="contente-card">
                                <h5>Copenhagen</h5>
                                    <p>29 avenue van voolve Kopenhage</p>
                            </div>
                            <div>
                                <Switch  defaultChecked size="small" color="success" />
                                <DeleteIcon className="delete" onClick={delHandler} />
                            </div>
                        </div>
                        <hr />
                        <div className="wrap">
                            <div>
                                <p>678000</p>
                                <p>Habitants</p>
                            </div>
                            <div>
                                <p>679</p>
                                <p>Hôtels</p>
                            </div>
                            <div>
                                <p>39800 €</p>
                                <p>Revenue Moy</p>
                            </div>
                            <div>
                                <p>{area}</p>
                                <p>km²</p>
                            </div>
                        </div>
                    </div>
            
        </Wrapper>
    )
}

export default Card;