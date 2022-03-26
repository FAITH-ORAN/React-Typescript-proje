import React  from 'react';
import { useState, useEffect  } from "react";
import {ICard} from "../interface/interface";
import CardItem from "../component/CardItem";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogContent from "@mui/material/DialogContent";
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


// LocalStorage 
import useLocalStorage from 'react-localstorage-hook';
//styles//
import {Wrapper} from "../style/Modal.style";



const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
  backgroundColor: theme.palette.common.white,
  color: 'rgba(0, 0, 0, 0.87)',
  boxShadow: theme.shadows[1],
  fontSize: 11,
  },
}));



const style = {
position: 'absolute' as 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 400,
bgcolor: 'background.paper',
borderRadius: '5px',
boxShadow: 24,
padding:'20px',
};


export default function ModalForm() {
   
    // useState & useLocalStorage
    const [localisation, setLocal] = useLocalStorage("localisation", "");
    const [adress, setAdress] = useLocalStorage("adress", "");
    const [urlImg, setImg] = useLocalStorage("urlImg","");
    const [nbrPeople, setNbrPeople] = useLocalStorage("nbrPeople", "");
    const [nbrHotel, setNbrHotel] = useLocalStorage("nbrHotel", "");
    const [average, setAverage] = useLocalStorage("average", "");
    const [area, setArea] =useLocalStorage("area", "");
    const [todos,setTodos] = useState<ICard[]>([]);


     //a function added to button submit
    const addCard = () => {
      const newCard={localisation: localisation,adress:adress,urlImg:urlImg,nbrPeople:nbrPeople,nbrHotel:nbrHotel,average:average,area:area}
      setTodos([...todos,newCard])
      handleClose();
      console.log(todos);
    }

    //function to delete card
    const completeCard=(CardNameToDelete:string)=>{
      setTodos(todos.filter((localisation)=>{
        return localisation.localisation != CardNameToDelete
      }))
    }

    // storing data 

    useEffect(() => {
    // storing input localisation
      localStorage.setItem("localisation", JSON.stringify(localisation));
    }, [localisation]);

    useEffect(() => {
    // storing input adresse
      localStorage.setItem("adress", JSON.stringify(adress));
    }, [adress]);

    useEffect(() => {
    // storing input urlImage
      localStorage.setItem("urlImg", JSON.stringify(urlImg));
    }, [urlImg]);

    useEffect(() => {
    // storing input nbrPeople
      localStorage.setItem("nbrPeople", JSON.stringify(nbrPeople));
    }, [nbrPeople]);

    useEffect(() => {
    // storing input nbrHotel
      localStorage.setItem("nbrHotel", JSON.stringify(nbrHotel));
    }, [nbrHotel]);

    useEffect(() => {
    // storing input average
      localStorage.setItem("average", JSON.stringify(average));
    }, [average]);

    useEffect(() => {
    // storing input area
      localStorage.setItem("area", JSON.stringify(area));
    }, [area]);



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // console.log to verify all my input values
    // console.log(localisation)
    // console.log(adress)
    // console.log(urlImg)
    // console.log(nbrPeople)
    // console.log(nbrHotel)
    // console.log(average)
    // console.log(area)

    return (
      <Wrapper>
        <Box className="header-btn">
          <Box>
            <h6>Destinations</h6>
          </Box>
          <Box>
            <LightTooltip  placement="top-start" title="Ajouter une distination" >
              <Button className="btnAdd" size="small" variant="contained" color="success" onClick={handleOpen} >
              + Ajouter
              </Button>   
            </LightTooltip>
          </Box>
        </Box>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" fontWeight= "bold"   fontSize= '1rem' variant="h6" component="h6">
              Ajouter une nouvelle distination
            </Typography>
            <DialogContent>
              <Grid >
                <TextField fullWidth  size="small" margin="normal"  label="Nom de la destination" id="fullWidth" required   onChange={(e) => setLocal(e.target.value)}    />
              </Grid>
              <Grid  >
                <TextField fullWidth  size="small" margin="normal" label="Adresse" id="fullWidth"  onChange={(e) => setAdress(e.target.value)}  required focused />
              </Grid>
              <Grid >
                  <TextField fullWidth  size="small" margin="normal" label="Lien de l'image" id="fullWidth"    onChange={(e) => setImg(e.target.value)} required />
              </Grid>
          
              <Grid container spacing={2}>
                  <Grid item xs={3}>
                      <TextField inputProps={{style: {fontSize: 11}}} InputLabelProps={{style: {fontSize: 11}}} id="outlined-basic"   onChange={(e) => setNbrPeople(e.target.value)}  margin="normal" size="small" label="NB Habitants" variant="outlined" required />
                  </Grid>
                  <Grid item xs={3}>
                      <TextField inputProps={{style: {fontSize: 11}}} InputLabelProps={{style: {fontSize: 11}}}  id="outlined-basic"   onChange={(e) => setNbrHotel(e.target.value)} margin="normal" size="small" label="NB Hôtels" variant="outlined" required />
                  </Grid>
                  <Grid item xs={3}>
                      <TextField inputProps={{style: {fontSize: 11}}} InputLabelProps={{style: {fontSize: 11}}}  id="outlined-basic" margin="normal"   onChange={(e) => setAverage(e.target.value)} size="small" label="Revenue Moy" variant="outlined" required />
                  </Grid>
                  <Grid item xs={3}>
                      <TextField inputProps={{style: {fontSize: 11}}} InputLabelProps={{style: {fontSize: 11}}}  id="outlined-basic" margin="normal"  onChange={(e) => setArea(e.target.value)} size="small" label="Superficie" variant="outlined" required />
                  </Grid>
              </Grid>
              <Grid>
                  <Switch  defaultChecked size="small" color="success" />
              </Grid>
            </DialogContent>

            <DialogActions>
                <Button size="small"  onClick={handleClose}>Cancel</Button>
                <Button size="small" color="success" form="myform" onClick={addCard}  type="submit">Confirm</Button>
            </DialogActions>

          </Box>
        </Modal>  
                  
          <Grid container  rowSpacing={{md:1}} columnSpacing={ {md:1}}>
                {todos.map((localisation:ICard,key:number)=>{
                  return <CardItem key={key} localisation={localisation} completeCard={completeCard}  />
                }
                )}
          </Grid> 
          
      </Wrapper>
)}
