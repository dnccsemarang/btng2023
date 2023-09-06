import React from 'react';

function Hero() {
	return (
		<section className="hero" id="top">
			<div className="hero-content">
				<div className="cloud-wrapper-right">
					<i alt="Cloud & energy" className="cloud-energy-right" data-aos="fade-up"></i>
				</div>
				<h1 className="hero-title" data-aos="zoom-out ease-in-out">
					BTNG 2023
				</h1>
				<div className="cloud-wrapper-left">
					<i alt="Cloud & energy" className="cloud-energy-left" data-aos="fade-down"></i>
				</div>
				<h3 className="hero-subtitle" data-aos="zoom-in">
					Time to level up!
				</h3>
				<div className="pixel-corners--wrapper" data-aos="zoom-in">
					<a href="#about">
						<div className="pixel-corners">
							<h1 className="text-button">start</h1>
						</div>
					</a>
				</div>
				<div className="item-hero-bot">
					<i alt="Rumput" className="rumput-left" data-aos="fade-up"></i>
					<i alt="Diamond" className="diamond" data-aos="fade-in"></i>
					<i alt="Rumput" className="rumput-right" data-aos="fade-up"></i>
				</div>
			</div>
		</section>
	);
}

export default Hero;
