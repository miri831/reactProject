import { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";// Or "mobx-react".
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


import Store from '../dataStores/meetings';
import SingleMeeting from './SingleMeeting';

const Meetings = observer(()=> {
    const [isFetching, setIsFetching] = useState(Store.isFetching);

    const [meetings, setMeetings] = useState(Store.getMeetings);


    return (<Container maxWidth="sm">
            <h1>Meetings {Store.data?.length}</h1>
            <Stack spacing={2}>

                {meetings.slice()?.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)).map((meeting) => {
                    return (<SingleMeeting {...meeting} key={meeting.id} />);
                })}
            </Stack>

        </Container>);
});

export default Meetings;