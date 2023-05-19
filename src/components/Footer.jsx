import React from 'react';
import './Footer.css'
import { Block } from '@mui/icons-material';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footerImg'>
                <img height={'45px'} src={process.env.PUBLIC_URL + "logo.png"} /><br/>
            </div>
            <div className='footerText'>
                ©Tatvassoft.com  All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;