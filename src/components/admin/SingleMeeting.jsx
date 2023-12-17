
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export default function SingleMeeting(props) {
    const { serviceName, servicePrice, dateTime, clientName, clientPhone, clientEmail } = props;

    return (<Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={`${serviceName}/${clientName}`}
          subheader={dayjs(dateTime).format("DD/MM/YYYY HH:mm")}
        />
        <CardContent>
            <p>{serviceName}</p>
            <p>{clientName}</p>
            <p>{clientPhone}</p>
            <p>{clientEmail}</p>
            <p>{dayjs(dateTime).format("DD/MM/YYYY HH:mm")}</p>
        </CardContent>
        </Card>);
}