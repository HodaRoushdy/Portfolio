'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import * as React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { FaDownload } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineEye, HiOutlineHome } from "react-icons/hi2";
import { IoPersonOutline, IoReorderThree, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import styles from './drawer.module.css';
type Anchor = 'left';
export default function drawer (){
    const [state, setState] = React.useState({left: false});
    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
    <Box className={styles.navbar} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
        <List>
            {[<Link href="#"><HiOutlineHome style={{color:'black'}}/></Link>,
                <Link href="/about"><IoPersonOutline style={{color:'black'}}/></Link>,
                <Link href="/skills"><IoSettingsOutline style={{color:'black'}}/></Link>,
                <Link href="/tips"><MdOutlineTipsAndUpdates style={{color:'black'}} /></Link>,
                <Link href="/myWork"><HiOutlineEye style={{color:'black'}}/></Link>,
                <Link href="contact"><BiMessageDetail style={{color:'black'}}/></Link>
            ].map((text, index) => (
            <ListItem key={index} disablePadding>
                <ListItemButton >
                    <ListItemText primary={text}/>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List className={styles.contactPart}>
        {[<a href="https://www.linkedin.com/in/huda-roushdy-87362a228/" ><AiFillLinkedin style={{color:'black'}} className='my-3'/></a>,
        <a href="https://github.com/HodaRoushdy"><FaGithub style={{color:'black'}} className='my-3'/></a>,
        <a href='./Huda-Roushdy.pdf' target="_blank" download="Huda-Roushdy"><FaDownload style={{color:'black'}} /></a>].map((text, index) => (
        <ListItem key={index} disablePadding>
            <ListItemButton>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
        ))}
        </List>
    </Box>
);
    return(
        <div>
        {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} className={styles.toggleBtn}><IoReorderThree className={styles.iconaya}/></Button>
            <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </React.Fragment>
        ))}
</div>
    )
}