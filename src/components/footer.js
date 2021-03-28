import React from 'react'

const Footer = () => {
    return <footer>
        <div className = "footer-form">
            <h3>Feel free to send us a picture</h3>
            <p>If your picture gets approve, it will appear in our gallery</p>
            <input type = "file" />
            <h3>OR</h3>
            <h6>Image URL</h6>
            <input type = "text"/>
            <h6>Description</h6>
            <textarea rows = "4"></textarea>
            <input class = "form-submit" type = "submit"/>
        </div>
        <div className = "footer-contact">
            <h6>Contact</h6>
            <li>+359 938572037</li>
            <li>+359 947620175</li>
            <li>support@tgallery.com</li>
        </div>
    </footer>
}

export default Footer;