import Search from '@mui/icons-material/Search';
import React from 'react'
import styled from'styled-components'
//import Badge from '@mui/icons-material/Core';
//import ShoppingCartOutlined from"@material-ui/icons";
//import MenuItem  from '@mui/material/icons';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const Container = styled.div`
            height:60px;
`;
const Wrapper = styled.div`
      padding:10px 20px;
      display:flex;
      align-items:center;
      justify-content:space-between;
`;
const Left =styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Language=styled.span`
    font-size:14px;
    cursor:pointer;

`;


const SearchContainer = styled.div`
    border:0.5px solid lightgray; 
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;


const Input = styled.input`
    border:none;

`;
const Center =styled.div`
    flex:1;
    text-align:center;
`;
const Logo =styled.h1`
    font-weight:bold;
`;

const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color:black;
    font-size:20px;
`;


const MenuItems = styled.div`
    font-size:13px;
    cursor:pointer;
    margin-left:25px;
`;



function Navbar() {
  return (
  <Container>
  <Wrapper>
      <Left>
          <Language>EN</Language>
          <SearchContainer>
              <Input />
              <Search style={{color:"grey",fontSize:16}}/>
          </SearchContainer>
      </Left>
      <Center>
          <Logo><h3>E-Games</h3></Logo>
      </Center>
      <Right>
          <MenuItems>
               register
          </MenuItems>
          <MenuItems>
            connexion
          </MenuItems>
          <MenuItems>
            Nouveauté
         
          </MenuItems>
          <MenuItems>les classiques</MenuItems>
          
            <MenuItems>
            E-news
          </MenuItems>
          <MenuItems>
          <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                        <ShoppingCartCheckoutOutlinedIcon />
                </Badge> 
          </MenuItems>
      </Right>
  </Wrapper>
  </Container>

  );
};

export default Navbar;