import React from 'react';
import './kontak.css';
import { FiUser } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';


const Kontak = () => {
  return (
    <section className="contact-section" id="kontak">
        <h2>Kontak <span>Kami</span></h2>

        <div className="row-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8273079430833!2d106.76267271397099!3d-6.28641746328015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15aa537f34f%3A0xfc460c6ac2ba4dde!2sWarung%20Kopi%20Sobat!5e0!3m2!1sid!2sid!4v1674018631816!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>

            <form>
                <div className="input-group">
                    <FiUser className='icon-input' />
                    <input type="text" placeholder="Nama" />
                </div>
                <div className="input-group">
                    <FiMail className='icon-input' />
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input-group">
                    <FiPhone className='icon-input' />
                    <input type="text" placeholder="Nomor Handphone" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Kontak;