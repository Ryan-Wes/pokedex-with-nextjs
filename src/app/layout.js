"use client"

import './globals.css';
import StyledComponentsRegistry from '../../lib/registry'
import { ThemeProvider } from "styled-components"
import { Poppins } from 'next/font/google';
import { theme } from './theme'
import Header from './components/Header/page';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}) {
  return (
    <html>
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <Header/>
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}