import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faSearch, faFilter, faUsers } from '@fortawesome/free-solid-svg-icons'
import { TertiaryBtn, TertiaryIconBtn } from './styles/Button';
import { Navbar, Brand } from './styles/NavBar';
import { FlexDiv } from './styles/Common';
import Link from 'next/link'

class NavBar extends Component {
render() {
return (
<Navbar>
  <Brand>Coin-App</Brand>
  <FlexDiv>
    
  <Link href="/">
    <TertiaryBtn>
      <FontAwesomeIcon icon={faStore} /> MarketPlace
    </TertiaryBtn>
    </Link>
    <Link href="/about">
    <TertiaryIconBtn>
      <FontAwesomeIcon icon={faUsers} />
    </TertiaryIconBtn>
    </Link>
  </FlexDiv>
</Navbar>
);
}
}

export default NavBar;