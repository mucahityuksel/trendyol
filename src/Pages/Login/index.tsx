import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import LoginForm from '../../Components/LoginForm'
import "./style.scss"

function LoginPage() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
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
