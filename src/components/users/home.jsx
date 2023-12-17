import { useState } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import DialogContentText from '@mui/material/DialogContentText';
import BussinessProperties from "../admin/bussinessProperties"
import ServicesStore from "../dataStores/services";

import NewMeeting from './newMeeting';
import SingleService from "./singleService";
import store from '../dataStores/bussiness';

export default function Home() {
    const [bussiness, setBussiness] = useState(store.bussiness);
    const [services, setServices] = useState(ServicesStore.services);
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const handleClickOpen = (service) => {
        console.log("handleClickOpen", service);
        setSelectedService(service);
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const dialog = () => (<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule a Meeting</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <NewMeeting selectedService={selectedService} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Schedule</Button>
        </DialogActions>
      </Dialog>);
    return (<div className="home">
        <img src={bussiness.logo} alt="logo" style={{height: '150px'}} />
        <h1>{bussiness.name}</h1>
        <h2>{bussiness.description}</h2> 
                <h5>Address: {bussiness.address}</h5>
                <h5>Phone: {bussiness.phone}</h5>
                <h5>Owner: {bussiness.owner}</h5>
        {open && dialog()}
        <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={6} >
            
            {services.map((service) =><Grid container item xs={2} >
                <SingleService meeting={service} key={service.id} openDialog={handleClickOpen} />
            </Grid>
            )}
        </Grid>
    </Box>
    </div>)
}