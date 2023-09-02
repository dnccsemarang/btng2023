import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';


function About() {
    const [typeEffect] = useTypewriter({
        words: ["BTNG (Basic Training Next Generation) adalah acara DNCC sebagai gerbang awal bagi mahasiswa yang ingin menjadi anggota di UKM DNCC. Acara ini bertujuan untuk memberikan pelatihan kepada calon anggota baru agar memiliki pengetahuan yang unggul dalam divisi yang dipilih."],
        loop: 1,
        typeSpeed: 50,
    })
    return (
        <section className="about">
            <h1 className="title with-arrows" data-aos="zoom-in"  data-aos-offset="250" data-aos-duration="320">About BTNG</h1>
            <div className="nes-balloon balloon" data-aos="fade-in">
                <p style={{ textAlign: 'justify' }}>
                    {typeEffect}
                </p>
                <div className="bubble-buttom"></div>
            </div>
            <div className="item-about">
                <i alt="Pink Flower" className="flower-left" data-aos="zoom-in"></i>
                <i alt="Character About" className="character-center" data-aos="zoom-in"></i>
                <i alt="Pink Flower" className="flower-right" data-aos="zoom-in"></i>
            </div>
        </section>
    );
}

export default About;