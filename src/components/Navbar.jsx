import { styled } from 'styled-components';
import logo from '../assets/LOGO.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const showNavbar = () => {
		setIsNavOpen(!isNavOpen);
	};
	return (
		<NavbarContainer>
			<LogoWrapper>
				<NavLink href="">
					<Image src={logo} alt="" />
				</NavLink>
			</LogoWrapper>
			<NavToggle onClick={showNavbar}>{isNavOpen ? <FaTimes /> : <FaBars />}</NavToggle>
			<NavList isOpen={isNavOpen}>
				<li>
					<NavLink href="">ABOUT</NavLink>
				</li>
				<li>
					<NavLink href="">BENEFIT</NavLink>
				</li>
				<li>
					<NavLink href="">JADWAL</NavLink>
				</li>
				<li>
					<NavLink href="">DIVISI</NavLink>
				</li>
				<li>
					<NavLink href="">DAFTAR</NavLink>
				</li>
			</NavList>
		</NavbarContainer>
	);
};

const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavToggle = styled.button`
	background-color: transparent;
	border: none;
	font-size: 1.5rem;
	color: white;
	cursor: pointer;

	@media (min-width: 650px) {
		display: none;
	}
`;

const LogoWrapper = styled.div``;
const Image = styled.img`
	width: 10rem;
	margin-right: 22px;

	/* @media only screen and (min-width: 600px) {
		width: 10rem;
	} */
	@media only screen and (min-width: 1024px) {
		width: 15rem;
	}
`;
const NavList = styled.ul`
	display: flex;
	gap: 20px;
	position: relative;

	@media only screen and (max-width: 650px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100%;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #009dff;
		overflow-x: hidden;
		transition: transform 0.5s;
		transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
		padding: 50px;
	}
`;

const NavLink = styled.a`
	color: #fff;
	font-family: var(--font-family2);
	&:hover {
		color: #fdf534;
		text-decoration: none !important;
	}

	font-size: 1.3rem;
	display: block;
	@media only screen and (min-width: 1024px) {
		font-size: 2rem;
	}
	@media only screen and (min-width: 650px) {
		text-shadow: 0px 1px 0px #000;
		filter: drop-shadow(1px 2px #000);
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
	}
`;

export default Navbar;
