import React from "react";
import '@styles/global.css';
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: 'SpeakUp',
  description: 'Talk, learn, growth'
}

const RootLayout = ({children}) => {
  return (
      <html lang="en">
      <body>
      <main className="app">
        <Nav/>
        {children}
        <Footer/>
      </main>
      </body>
      </html>
  )
}

export default RootLayout;