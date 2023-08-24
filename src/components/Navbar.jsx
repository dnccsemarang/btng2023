import { styled } from 'styled-components';

const Navbar = () => {
	return (
		<Navbarstyle>
			<ul>
				<li>
					<a href="">About</a>
				</li>
				<li>
					<a href="">Benefit</a>
				</li>
				<li>
					<a href="">Jadwal</a>
				</li>
				<li>
					<a href="">Devisi</a>
				</li>
				<li>
					<a href="">Jadwal</a>
				</li>
			</ul>
		</Navbarstyle>
	);
};

const Navbarstyle = styled.nav`
	background: black;
`;

export default Navbar;
