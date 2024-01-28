'use client'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { FaDownload } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { HiOutlineHome } from 'react-icons/hi2'
import { IoPersonOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'
import Logo from '../../../assets/logo.svg'

import { AppBar, CssBaseline, IconButton, Toolbar } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'

const drawerWidth = 70

interface Props {
  window?: () => Window
}

export default function ResponsiveDrawer(props: Props) {
  const styles = {
    drawer: {
      backgroundColor: '#625750',
      border: '1px solid  #ada397',
    },
    iconeBtn: {
      backgroundColor: '#625750',
    },
  }
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isClosing, setIsClosing] = React.useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  const drawer = (
    <div className="vh-100" style={styles.drawer}>
      <Toolbar className="d-flex justify-content-center">
        <Image src={Logo.src} alt={'logo'} width={'50'} height={'100'} />
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding className="py-2">
          <ListItemButton className="d-flex justify-content-center">
            <Link href="/">
              <HiOutlineHome style={{ color: 'black', width: '100%' }} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="py-2">
          <ListItemButton className="d-flex justify-content-center">
            <Link href="/about">
              <IoPersonOutline style={{ color: 'black', width: '100%' }} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="py-2">
          <ListItemButton className="d-flex justify-content-center">
            <Link href="/skills">
              <IoSettingsOutline style={{ color: 'black', width: '100%' }} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="py-2">
          <ListItemButton className="d-flex justify-content-center">
            <Link href="/tips">
              <MdOutlineTipsAndUpdates
                style={{ color: 'black', width: '100%' }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="py-2">
          <ListItemButton className="d-flex justify-content-center">
            <Link href="/myWork">
              <BuildOutlinedIcon
                style={{ color: 'black', width: '100%', fontSize: 'large' }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="py-2">
          <ListItemButton className="d-flex justify-content-center">
            <Link href="/contact">
              <BiMessageDetail style={{ color: 'black', width: '100%' }} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="d-flex justify-content-center">
            <Link href="https://www.linkedin.com/in/huda-roushdy-87362a228/">
              <AiFillLinkedin style={{ color: 'black' }} className="my-3" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="d-flex justify-content-center">
            <Link href="https://github.com/HodaRoushdy">
              <FaGithub style={{ color: 'black' }} className="my-3" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="d-flex justify-content-center">
            <Link
              href="Huda-Roushdy-Resume.pdf"
              target="_blank"
              download="Huda-Roushdy"
            >
              <FaDownload style={{ color: 'black' }} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={styles.iconeBtn}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
      </Box>
    </Box>
  )
}
