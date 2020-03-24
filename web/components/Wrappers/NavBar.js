import styled  from 'styled-components';

const Toolbar = styled.nav`
  color: ${props => props.theme.primaryMain};
  background: ${props => props.theme.backgroundDefault};
`;

const NavBar = () => (
    <Toolbar className="navbar">
    <a className="navbar-brand">Navbar</a>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </Toolbar>
);

export default NavBar;