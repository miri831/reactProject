import { useState } from 'react';
import { observer } from "mobx-react-lite";// Or "mobx-react".
import {useForm} from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import store from '../dataStores/bussiness';
import { Button } from '@mui/material';
import { UserContext } from '../../App';

const BussinessProperties = observer(()=> {
    const [bussiness, setBussiness] = useState(store.bussiness);
    const [editMode, setEditMode] = useState(false);
    const {register, handleSubmit} = useForm({defaultValues: bussiness});

    function save(data) {
        store.updateBussiness(data);
        setBussiness(data);
        setEditMode(false);
    }

    return (<Container maxWidth="sm" >
            {UserContext.isAdmin && editMode?
            <Stack spacing={1}>
                <form onSubmit={handleSubmit(save)}>
                <p><TextField {...register('name')} label="Bussiness Name" variant="outlined" /></p>
                <p><TextField {...register('address')} label="Bussiness Address" variant="outlined" /></p>
                <p><TextField {...register('phone')}  label="Bussiness Phone" variant="outlined" /></p>
                <p><TextField {...register('owner')} label="Bussiness Owner" variant="outlined" /></p>
                <p><TextField {...register('logo')} label="Bussiness Logo" variant="outlined" /></p>
                <p><TextField {...register('description')} label="Bussiness Description" variant="outlined" /></p>
                <Button type='submit'>Save</Button>
                </form>
            </Stack> :
            <Stack spacing={2}>
                <h5>Name: {bussiness.name}</h5>
                <h5>Address: {bussiness.address}</h5>
                <h5>Phone: {bussiness.phone}</h5>
                <h5>Owner: {bussiness.owner}</h5>
                <h5>Logo: </h5>
                <img src={bussiness.logo} alt="logo" style={{height: '150px'}} />
                <h5>Description: {bussiness.description}</h5> 
                {UserContext.isAdmin && <Button onClick={() => setEditMode(true)}>Edit</Button>}
            </Stack> }  

        </Container>);
});  
export default BussinessProperties;