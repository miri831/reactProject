import { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";// Or "mobx-react".       
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import {useForm} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


import MeetingsStore from '../dataStores/meetings';
import ServicesStore from '../dataStores/services';

const NewMeeting = observer(({selectedService})=> {
    const [service, setSelectedService] = useState(selectedService);
    console.log(service);
    const {register, handleSubmit, watch} = useForm({
        defaultValues: {
            serviceName: service?.name,
            serviceDescription: service?.description,
            servicePrice: service?.price,
            clientName: '',
            clientPhone: '',
            clientEmail: '',
            dateTime: new Date()
        }
    });
    const servicesList = ServicesStore.services;
    
    
    const [dateVal, setDateVal] = useState(new Date());
    
    
    const onSubmit = async (data) => { 
        data.dateTime = dayjs(dateVal).format('YYYY-MM-DD HH:mm:ss');
        await MeetingsStore.addMeeting(data);
    };
    function handleSelect(serviceId) {
        console.log(serviceId);
        const selected = servicesList.find(x => x.id === serviceId);
        console.log("selected serv",selected);
        setSelectedService(selected);
        console.log("serv", service);
    }
    
    return (<Container maxWidth="sm">
    <Stack spacing={1}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <p>
    <Select 
        {...register('id')} 
        label="Service Name" variant="outlined" 
        value={service?.id} 
        onChange={(e)=> handleSelect(e.target.value)}>
        {servicesList.map(s => <MenuItem value={s.id}>{s.name}</MenuItem>)}
    </Select>
    </p>
    <p>
    <TextField disabled {...register('serviceDescription')}>Service Description : {service?.serviceDescription}</TextField>
    </p>
    <p>
    <TextField disabled {...register('servicePrice')}>Service Price: {service?.servicePrice}</TextField>
    </p>
    <p>
    <TextField {...register('clientName')} label="Client Name" variant="outlined" />

    </p>
    <p>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
            onChange={setDateVal}
            label="Date Time"
            value={dayjs(dateVal)}
            referenceDate={dayjs(dateVal)}
        />
    </LocalizationProvider>
        </p>
    <p><TextField {...register('clientPhone')} label="Client Phone" variant="outlined" /></p>
<p><TextField {...register('clientEmail')} label="Client Email" variant="outlined" /></p>
<Button type='submit'>Save</Button>
</form>
</Stack>

</Container>);
});

export default NewMeeting;