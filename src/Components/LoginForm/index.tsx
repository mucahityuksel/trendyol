import React, { useEffect, useRef, useState } from 'react'
import "./style.scss"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
    createUserWithEmailAndPassword,
    initializeAuth,
    browserLocalPersistence,
    indexedDBLocalPersistence,
    browserSessionPersistence,
    browserPopupRedirectResolver,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { Checkbox, Nav } from "rsuite"
import { ImFacebook2, ImGoogle2 } from "react-icons/im";
import { app } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { saveUser } from '../../redux/action/product';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../Pages/Login/type';
import axios from 'axios';


enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}


function LoginForm() {
    const [active, setActive] = React.useState('home');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [gender, setGender] = React.useState(Gender.MALE);

    const dispatch = useDispatch();
    const newdata = useSelector((state: any) => state)
    const user = useRef<User>({
        email: "",
        id: "",
        isLogin: false,
        basket: [],
        favorites: [],
        order: []
    })

    useEffect(() => {
        console.log(newdata)
    }, [])

    const auth = initializeAuth(app, {
        persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence],
        popupRedirectResolver: browserPopupRedirectResolver,
    });


    const CustomNav = ({ active, onSelect, ...props }: any) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} justified>
                <Nav.Item eventKey="home" className={active === "home" ? "home-active" : "home"}>
                    Giriş Yap
                </Nav.Item>
                <Nav.Item eventKey="news" className={active === "news" ? "news-active" : "news"}>Üye Ol</Nav.Item>

            </Nav>
        );
    }

    const sendUser = (user: User) => {
        axios.post("http://localhost:3001/user/add", user)
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
    }

    return (
        <div className='login-form-component'>
            <h1 className='login-title'>Merhaba,</h1>
            <h3 className='login-subtitle'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
            <CustomNav appearance="tabs" active={active} onSelect={setActive} className="login-tabs" />
            {
                active === "home" ?
                    <div className='login-form'>
                        <div className='email-bar'>
                            <label>E posta</label>
                            <input type="email"
                                onChange={(e: any) => {
                                    setEmail1(e.target.value)
                                }}
                            ></input>
                        </div>
                        <div className='password-bar'>
                            <label>Şifre</label>
                            <input type="password"
                                onChange={(e: any) => {
                                    setPassword1(e.target.value)
                                }}
                            ></input>
                        </div>
                        <div className='forgot-password'>
                            <span>Şifremi Unuttum</span>
                        </div>
                        <button className='login-button' onClick={() => {
                            signInWithEmailAndPassword(auth, email1, password1)
                                .then((res) => {
                                    localStorage.setItem("user", email1)
                                    console.log(res)

                                    history.push("/")
                                })
                                .catch((err) => alert(err))
                        }}>GİRİŞ YAP</button>
                        <div className='social-login'>
                            <div className='facebook'>
                                <div className='login-logo'><ImFacebook2 size={"2em"} color="#4267B2"></ImFacebook2></div>
                                <div className='login-with'>
                                    <span className='logo-title'>Facebook</span>
                                    <span className='logo-subtitle'>ile giriş yap</span>
                                </div>
                            </div>
                            <div className='facebook'>
                                <div className='login-logo'><ImGoogle2 size={"2em"} color='rgb(241, 66, 54)'></ImGoogle2></div>
                                <div className='login-with'>
                                    <span className='logo-title'>Google</span>
                                    <span className='logo-subtitle'>ile giriş yap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className='login-form'>
                        <div className='email-bar'>
                            <label>E posta</label>
                            <input type="email"
                                onChange={(e: any) => {
                                    setEmail(e.target.value)
                                }}
                            ></input>
                        </div>
                        <div className='password-bar'>
                            <label>Şifre</label>
                            <input type="password"
                                onChange={(e: any) => {
                                    setPassword(e.target.value)
                                }}
                            ></input>
                        </div>
                        <div className="password-info">
                            <span>Şifreniz en az 7 karakter olmalı, harf ve rakam içermelidir.</span>
                        </div>
                        <div className="gender-label">Cinsiyet (Opsiyonel)</div>
                        <div className='gender-button'>
                            <button className={gender === Gender.FEMALE ? 'women-button-active' : "women-button"} onClick={() => { setGender(Gender.FEMALE) }}>Kadın</button>
                            <button className={gender === Gender.MALE ? 'men-button-active' : "men-button"} onClick={() => { setGender(Gender.MALE) }}>Erkek</button>
                        </div>
                        <button className='login-button' onClick={() => {
                            createUserWithEmailAndPassword(auth, email, password)
                                .then((res) => {
                                    localStorage.setItem("user", email)
                                    user.current.email = email
                                    user.current.isLogin = false
                                    user.current.id = res.user.uid;

                                    sendUser(user.current)

                                    history.push("/")
                                })
                                .catch((err) => alert(err))

                        }}>ÜYE OL</button>
                        <div className='condition'>Üye Ol’a basarak<b>Üyelik Koşulları</b>nı kabul ediyorum.</div>
                        <div className='data-save'>
                            <Checkbox className='check'></Checkbox>
                            <span>Kampanyalardan haberdar olabilmem için kişisel verilerimin<br></br> işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul <br></br>ediyorum.</span>
                        </div>
                        <div className='data-save'>
                            <Checkbox className='check'></Checkbox>
                            <span>Kişisel verilerimin işlenmesine yönelik <b>aydınlatma metnini</b> <br></br> okudum ve anladım.</span>
                        </div>
                        <div className='social-login'>
                            <div className='facebook'>
                                <div className='login-logo'><ImFacebook2 size={"2em"} color="#4267B2"></ImFacebook2></div>
                                <div className='login-with'>
                                    <span className='logo-title'>Facebook</span>
                                    <span className='logo-subtitle'>ile giriş yap</span>
                                </div>
                            </div>
                            <div className='facebook'>
                                <div className='login-logo'><ImGoogle2 size={"2em"} color='rgb(241, 66, 54)'></ImGoogle2></div>
                                <div className='login-with'>
                                    <span className='logo-title'>Facebook</span>
                                    <span className='logo-subtitle'>ile giriş yap</span>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default LoginForm
