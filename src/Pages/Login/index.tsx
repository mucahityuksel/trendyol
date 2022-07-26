import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import LoginForm from '../../Components/LoginForm'
import "./style.scss"

function LoginPage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Header />
            <LoginForm />
            <Footer/>
        </div>
    )
}

export default LoginPage
