import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

import Meetings from './meetings';
import BusinessProperties from './bussinessProperties';

export default function MainPage() {
    const [value, setValue] = useState('meetings');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (<div className="main">
        <Box sx={{ width: '100%' }}>
            <BusinessProperties />
        </Box>
    <Box sx={{ width: '100%' }}>
        <TabContext value={value}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <TabList value={value} onChange={handleChange} aria-label="admin tabs">
                    <Tab label="Meetings" value={'meetings'} id={"meetings"} />
                    <Tab label="Services" value={'services'} id={"services"}/>
                </TabList>   
            </Box>
            <TabPanel value={value} index={0}>
                {value === 'meetings' && <Meetings /> }
            </TabPanel>
            <TabPanel value={value} index={1}>  
                {value === 'services' && <h1>Services</h1> } 
            </TabPanel> 
        </TabContext>
    </Box>

    </div>)
}