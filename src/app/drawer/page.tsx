'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { FaDownload } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineEye, HiOutlineHome } from "react-icons/hi2";
import { IoPersonOutline, IoReorderThree, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import Logo from '../../../assets/logo.svg'
import styles from './drawer.module.css';
type Anchor = 'left';

export default function AppDrawer (){
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
        <List className='d-flex flex-column align-items-center' >
            {[<Image key={0} src={Logo.src} alt={'logo'} width={'50'} height={'100'} />,
                <Link key={1} href="/"><HiOutlineHome style={{ color: 'black' ,width:'100%'}} /></Link>,
                <Link  key={2} href="/about"><IoPersonOutline style={{color:'black', width:'100%'}}/></Link>,
                <Link key={3} href="/skills"><IoSettingsOutline style={{color:'black',width:'100%'}}/></Link>,
                <Link key={4} href="/tips"><MdOutlineTipsAndUpdates style={{color:'black',width:'100%'}} /></Link>,
                <Link key={5} href="/myWork"><HiOutlineEye style={{color:'black',width:'100%'}}/></Link>,
                <Link key={6} href="/contact"><BiMessageDetail style={{color:'black',width:'100%'}}/></Link>
            ].map((text, index) => (
            <ListItem key={index} disablePadding>
                <ListItemButton >
                    <ListItemText primary={text}/>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
        {[<a key={0} href="https://www.linkedin.com/in/huda-roushdy-87362a228/" ><AiFillLinkedin style={{color:'black'}} className='my-3'/></a>,
        <a key={1} href="https://github.com/HodaRoushdy"><FaGithub style={{color:'black'}} className='my-3'/></a>,
        <a key={2} href='Huda CV.pdf' target="_blank" download="Huda-Roushdy"><FaDownload style={{color:'black'}} /></a>].map((text, index) => (
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