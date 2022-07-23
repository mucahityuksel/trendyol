import React from 'react'
import "./style.scss";

function Footer() {
  return (
    <div className='footer-component'>
      <div className='footer-container-top'>
        <div className='footer-trendyol'>
          <p className='footer-title'>Trendyol</p>
          <ul className='footer-list'>
            <li className='footer-list-item'><p>Biz Kimiz</p></li>
            <li className='footer-list-item'><p>Kariyer</p></li>
            <li className='footer-list-item'><p>İletişim</p></li>
            <li className='footer-list-item'><p>Trendyol'da Satış Yap</p></li>
            <li className='footer-list-item'><p>Kurumsal Hediye Çeki</p></li>
          </ul>
        </div>
        <div className='footer-about'>
          <p className='footer-title'>About Us</p>
          <ul className='footer-list'>
            <li className='footer-list-item'><p>Who We Are</p></li>
            <li className='footer-list-item'><p>Careers</p></li>
            <li className='footer-list-item'><p>Contact Us</p></li>
          </ul>
        </div>
        <div className='footer-campaigns'>
          <p className='footer-title'>Kampanyalar</p>
          <ul className='footer-list'>
            <li className='footer-list-item'><p>Aktif Kampanyalar</p></li>
            <li className='footer-list-item'><p>Elite Üyelik</p></li>
            <li className='footer-list-item'><p>Hediye Fikirleri</p></li>
            <li className='footer-list-item'><p>Trendyol Fırsatları</p></li>
          </ul>
        </div>
        <div className='footer-help'>
          <p className='footer-title'>Yardım</p>
          <ul className='footer-list'>
            <li className='footer-list-item'><p>Sıkça Sorulan Sorular</p></li>
            <li className='footer-list-item'><p>Canlı Yardım</p></li>
            <li className='footer-list-item'><p>Nasıl İade Edebilirim</p></li>
            <li className='footer-list-item'><p>İşlem Rehberi</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
