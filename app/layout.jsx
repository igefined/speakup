import React from "react";
import '@styles/global.css';
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
    title: 'SpeakUp',
    description: 'Talk, learn, growth'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body>
        <Provider>
            <main className="app">
                <Nav/>
                {children}
                <Footer/>
            </main>
        </Provider>
        </body>
        </html>
    )
}

export default RootLayout;