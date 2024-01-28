import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import React from 'react';
import AppDrawer from './drawer/page';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})

{
  return (
<html lang="en">
  <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@1,200&display=swap" rel="stylesheet"></link>
  </head>
    <body className={inter.className}>
      <AppDrawer/>
      {children}
      <script async src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
      <script async src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
      <script async src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script> 
      </body>
    </html>
  )
}

