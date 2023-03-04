import React from 'react';
import './about.css';
import AboutImage from '../../img/about-img.jpg';

const About = () => {
    return (
        <div className="about-section" id="about">
            <h2>Tentang <span>Kami</span></h2>

            <div className="row-about">
                <div className="thumb-img">
                    <img src={AboutImage} alt="" />
                </div>

                <div className="content-about">
                    <h3>Kenapa Warkop<span>Sobat</span>?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum qui, blanditiis accusamus asperiores ullam!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus est reprehenderit veniam iste tempore quibusdam exercitationem soluta incidunt eius quam deleniti perferendis, tempora repellat aliquam mollitia recusandae quas aliquid. Velit accusantium fugit ducimus deserunt.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam.</p>
                </div>
            </div>
        </div>
    )
}

export default About;