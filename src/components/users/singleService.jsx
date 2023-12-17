

import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import NewMeeting from './newMeeting';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions, Typography } from '@mui/material';

export default function SingleMeeting({meeting, openDialog}) {
    const { id, name, price, duration, description } = meeting;
    
    return (<Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={name}
        />
        <CardContent>
            <Typography>Name: {name}</Typography>
            <Typography>Description: {description}</Typography>
            <Typography>Duration: {duration} minutes</Typography>
            <Typography>Price: {price}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => openDialog(meeting)}>Schedule</Button>
        </CardActions>
        </Card>);

}
