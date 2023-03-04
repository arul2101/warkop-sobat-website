import React from 'react';
import './menu.css'
import dataMenu from './dataMenu';

const Menu = () => {
    const element = dataMenu.map(item => {
        return (
            <div className="card" key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.nama}</h3>
                <p>{item.price}</p>
                <button type="button">Pesan Sekarang</button>
            </div>
        )
    })
    return (
        <div className="menu-section" id="menu">
            <h2>Menu <span>Kami</span></h2>

            <div className="row-card">
                {element}
            </div>
        </div>
    )
}

export default Menu;