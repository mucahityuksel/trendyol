import React from 'react'
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
        </div>
    )
}

export default LoginPage
