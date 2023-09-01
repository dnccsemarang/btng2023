import React from 'react';

function Benefit() {
    return (
        <section className="benefit">
            <div className="title-container">
                <div className="title-item">
                    <i className="nes-icon is-medium star"></i>
                    <i className="nes-icon is-medium star"></i>
                </div>
                <h1 className="title">benefit</h1>
                <div className="title-item">
                    <i className="nes-icon is-medium star"></i>
                    <i className="nes-icon is-medium star"></i>
                </div>
            </div>
            <div className="benefit-content">
                <div className="benefit-item">
                    <h1 className="benefit-title">
                        <i className="nes-icon is-medium like"></i>
                        <span>skill</span>
                    </h1>
                    <h2>Mendapatkan softskill dan hardskill</h2>
                </div>
                <div className="benefit-item">
                    <h1 className="benefit-title">
                        <i className="nes-icon is-medium like"></i>
                        <span>pengalaman</span>
                    </h1>
                    <h2>Mendapatkan pengalaman belajar bersama</h2>
                </div>
                <div className="benefit-item">
                    <h1 className="benefit-title">
                        <i className="nes-icon is-medium like"></i>
                        <span>relasi</span>
                    </h1>
                    <h2>Menambah relasi antar peserta dan mentor</h2>
                </div>
                <div className="benefit-item">
                    <h1 className="benefit-title">
                        <i className="nes-icon is-medium like"></i>
                        <span>sertifikat</span>
                    </h1>
                    <h2>Mendapatkan sertifikat hasil pelatihan</h2>
                </div>
            </div>
        </section>
    );
}

export default Benefit;