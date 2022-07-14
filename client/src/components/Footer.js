import React from 'react';
import './Footer.css';
import logo from '../images/full-logo.svg';


function Footer() {


    function scrollUp(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }


    return (
        <div className='Footer'>
            <div className='div-1'>
                <div className='description'>
                    <img src={logo} width="60px" className='logo-foot' />
                    <p className='logo-foot-text'>Mastering engineering in theory and practice...</p>
                </div>
                <div className='socials'>
                    <p>Follow us</p>
                    <div>
                        <a className='social-icons' title='Facebook' href='https://facebook.com/MaxOrganization/' target="_blank"><i class="lab la-facebook"></i></a>
                        <a className='social-icons' title='Twitter' href='https://twitter.com/MaxOrganization/' target="_blank"><i class="lab la-twitter"></i></a>
                        <a className='social-icons' title='Instagram' href='https://instagram.com/MaxOrganization/' target="_blank"><i class="lab la-instagram"></i></a>
                        <a className='social-icons' title='WhatsApp' href='https://wa.me/2348130686597' target="_blank"><i class="lab la-whatsapp"></i></a>
                        <a className='social-icons' title='E-mail' href='mailto:maxprivatetutorials@gmail.com' target="_blank"><i class="las la-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className='div-2'>
                <div className='developer'>
                    Developed by <a href='https://olowojaye.github.io/' target='_blank'>Olowojaye Rufus.</a>
                </div>
                <div className='copyright'>
                    <p>Max Engineering Tutorials</p>
                    <p><i class="las la-copyright"></i> 2022</p>
                </div>
            </div>
            <div className='page-up' onClick={scrollUp}>
                <i class="las la-angle-double-up"></i><span>Go back up</span>
            </div>
        </div>
    )
}

export default Footer;