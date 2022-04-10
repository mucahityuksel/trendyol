import React from 'react'
import "./style.scss"
import { Checkbox, Nav } from "rsuite"
import { ImFacebook2, ImGoogle2 } from "react-icons/im";

enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

function LoginForm() {
    const [active, setActive] = React.useState('home');



    const [gender, setGender] = React.useState(Gender.MALE);
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
                            <input type="email"></input>
                        </div>
                        <div className='password-bar'>
                            <label>Şifre</label>
                            <input type="password"></input>
                        </div>
                        <div className='forgot-password'>
                            <span>Şifremi Unuttum</span>
                        </div>
                        <button className='login-button'>GİRİŞ YAP</button>
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
                    : <div className='login-form'>
                        <div className='email-bar'>
                            <label>E posta</label>
                            <input type="email"></input>
                        </div>
                        <div className='password-bar'>
                            <label>Şifre</label>
                            <input type="password"></input>
                        </div>
                        <div className="password-info">
                            <span>Şifreniz en az 7 karakter olmalı, harf ve rakam içermelidir.</span>
                        </div>
                        <div className="gender-label">Cinsiyet (Opsiyonel)</div>
                        <div className='gender-button'>
                            <button className={gender === Gender.FEMALE ? 'women-button-active' : "women-button"} onClick={() => { setGender(Gender.FEMALE) }}>Kadın</button>
                            <button className={gender === Gender.MALE ? 'men-button-active' : "men-button"} onClick={() => { setGender(Gender.MALE) }}>Erkek</button>
                        </div>
                        <button className='login-button'>ÜYE OL</button>
                        <div className='condition'>Üye Ol’a basarak<b>Üyelik Koşulları</b>nı kabul ediyorum.</div>
                        <div className='data-save'>
                            <Checkbox className='check'></Checkbox>
                            <span>Kampanyalardan haberdar olabilmem için kişisel verilerimin<br></br> işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul <br></br>ediyorum.</span>
                        </div>
                        <div className='data-save'>
                            <Checkbox  className='check'></Checkbox>
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