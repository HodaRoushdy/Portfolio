// 'use client'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Image from 'next/image';
// import Link from 'next/link';
// import * as React from 'react';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { BiMessageDetail } from 'react-icons/bi';
// import { FaDownload } from "react-icons/fa";
// import { FaGithub } from 'react-icons/fa6';
// import { HiOutlineEye, HiOutlineHome } from "react-icons/hi2";
// import { IoPersonOutline, IoReorderThree, IoSettingsOutline } from 'react-icons/io5';
// import { MdOutlineTipsAndUpdates } from 'react-icons/md';
// import Logo from '../../../assets/logo.svg'
// import styles from './drawer.module.css';
// type Anchor = 'left';

// export default function AppDrawer (){
//     const [state, setState] = React.useState({left: false});
//     const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//     if (
//         event.type === 'keydown' &&
//         ((event as React.KeyboardEvent).key === 'Tab' ||
//         (event as React.KeyboardEvent).key === 'Shift')
//     ) {
//         return;
//     }

//     setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor: Anchor) => (
//     <Box className={styles.navbar} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
//         <List className='d-flex flex-column align-items-center' >
//             {[<Image key={0} src={Logo.src} alt={'logo'} width={'50'} height={'100'} />,
//                 <Link key={1} href="/"><HiOutlineHome style={{ color: 'black' ,width:'100%'}} /></Link>,
//                 <Link  key={2} href="/about"><IoPersonOutline style={{color:'black', width:'100%'}}/></Link>,
//                 <Link key={3} href="/skills"><IoSettingsOutline style={{color:'black',width:'100%'}}/></Link>,
//                 <Link key={4} href="/tips"><MdOutlineTipsAndUpdates style={{color:'black',width:'100%'}} /></Link>,
//                 <Link key={5} href="/myWork"><HiOutlineEye style={{color:'black',width:'100%'}}/></Link>,
//                 <Link key={6} href="/contact"><BiMessageDetail style={{color:'black',width:'100%'}}/></Link>
//             ].map((text, index) => (
//             <ListItem key={index} disablePadding>
//                 <ListItemButton >
//                     <ListItemText primary={text}/>
//                 </ListItemButton>
//             </ListItem>
//             ))}
//         </List>
//         <Divider />
//         <List>
//         {[<a key={0} href="https://www.linkedin.com/in/huda-roushdy-87362a228/" ><AiFillLinkedin style={{color:'black'}} className='my-3'/></a>,
//         <a key={1} href="https://github.com/HodaRoushdy"><FaGithub style={{color:'black'}} className='my-3'/></a>,
//         <a key={2} href='Huda CV.pdf' target="_blank" download="Huda-Roushdy"><FaDownload style={{color:'black'}} /></a>].map((text, index) => (
//         <ListItem key={index} disablePadding>
//             <ListItemButton>
//                 <ListItemText primary={text} />
//             </ListItemButton>
//         </ListItem>
//         ))}
//         </List>
//     </Box>
// );
//     return(
//         <div>
//         {(['left'] as const).map((anchor) => (
//         <React.Fragment key={anchor}>
//             <Button onClick={toggleDrawer(anchor, true)} className={styles.toggleBtn}><IoReorderThree className={styles.iconaya}/></Button>
//             <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             >
//                 {list(anchor)}
//             </Drawer>
//         </React.Fragment>
//         ))}
// </div>
//     )
// }
'use client'
// export default function ResponsiveDrawer(props: Props) {
//   const { window } = props
//   const [mobileOpen, setMobileOpen] = React.useState(false)
//   const [isClosing, setIsClosing] = React.useState(false)

//   const handleDrawerClose = () => {
//     setIsClosing(true)
//     setMobileOpen(false)
//   }

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false)
//   }

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen)
//     }
//   }

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   )

//   // Remove this const when copying and pasting into your project.
//   const container =
//     window !== undefined ? () => window().document.body : undefined

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onTransitionEnd={handleDrawerTransitionEnd}
//           onClose={handleDrawerClose}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//           dolor purus non enim praesent elementum facilisis leo vel. Risus at
//           ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
//           quisque non tellus. Convallis convallis tellus id interdum velit
//           laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
//           adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//           integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//           eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//           quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//           vivamus at augue. At augue eget arcu dictum varius duis at consectetur
//           lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
//           faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//           ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//           elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
//           sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
//           mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
//           risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
//           purus viverra accumsan in. In hendrerit gravida rutrum quisque non
//           tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
//           morbi tristique senectus et. Adipiscing elit duis tristique
//           sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

import { ListItemIcon } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import React from 'react'
import { HiOutlineHome } from 'react-icons/hi2'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'

export default function ResponsiveDrawer() {
  const drawerWidth = 240
  const styles = {
    gradient: {
      backgroundImage: 'linear-gradient(to bottom, #4f46e5,#5c54e3, #98a1fa)',
    },
    iconSize: {
      fontSize: '30px',
    },
    listItemButtonStyle: {
      '&:hover': {
        backgroundColor: 'white!important',
        color: '#818cf8!important',
      },
      '&:hover .MuiListItemIcon-root': {
        color: '#818cf8!important',
      },
      '&.Mui-selected': {
        backgroundColor: 'white!important',
        color: '#818cf8!important',
      },
      '& .MuiListItemIcon-root': {
        color: 'white!important',
      },
      '&.Mui-selected .MuiListItemIcon-root': {
        color: '#818cf8!important',
      },
      paddingBlock: '16px',
    },
  }

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div className="h-full" style={styles.gradient}>
      <Toolbar>
        <Image
          key={0}
          src={Logo.src}
          alt={'logo'}
          width={'50'}
          height={'100'}
        />
      </Toolbar>
      <List className="d-flex flex-column align-items-center">
          <Link key={1} to="/">
            <ListItemButton sx={styles.listItemButtonStyle}>
              <ListItemIcon>
                <HiOutlineHome style={{ color: 'black', width: '100%' }} />
              </ListItemIcon>
              {/* <ListItemText style={styles.iconSize} primary={} /> */}
            </ListItemButton>
          </Link>,
          {/* //   <Link  to="/">
          //     <HiOutlineHome style={{ color: 'black', width: '100%' }} />
          //   </Link>,
          //   <Link key={2} to="/about">
          //     <IoPersonOutline style={{ color: 'black', width: '100%' }} />
          //   </Link>,
          //   <Link key={3} to="/skills">
          //     <IoSettingsOutline style={{ color: 'black', width: '100%' }} />
          //   </Link>,
          //   <Link key={4} to="/tips">
          //     <MdOutlineTipsAndUpdates
          //       style={{ color: 'black', width: '100%' }}
          //     />
          //   </Link>,
          //   <Link key={5} to="/myWork">
          //     <HiOutlineEye style={{ color: 'black', width: '100%' }} />
          //   </Link>,
          //   <Link key={6} to="/contact">
          //     <BiMessageDetail style={{ color: 'black', width: '100%' }} />
          //   </Link>,
         */}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }} className="bg-gray-100 rounded-md">
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      ></AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          PaperProps={{
            sx: {
              backgroundColor:
                'linear-gradient(to bottom,#4f46e5,##5c54e3, #98a1fa)',
              color: 'white',
              '::selection': {
                backgroundColor: 'white',
              },
              ':hover': { backgroundColor: 'white' },
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          PaperProps={{
            sx: {
              backgroundColor:
                'linear-gradient(to bottom, #4f46e5,##5c54e3, #98a1fa)',
              color: 'white',
              '::selection': {
                backgroundColor: 'white',
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
