import { Link, NavLink } from "react-router-dom";
import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const DivLinks = styled.div`
display: flex;
margin-top: auto;
margin-bottom: auto;
margin-left: 50px;
list-style: none;
width: 30vw;
justify-content: space-evenly;
gap: 14px;

@media (max-width: 1024px) {
    display: none;
  }
`

const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: #B2B2B2;
font-size: 14px;

&.active {
    color: #29CF00;
}
`

const BarraNavegacao = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const StyledForm = styled.form`

input {
    border: none;
    width: 35vw;
    outline: none;
    border-radius: 50px;
    border: 1.5px solid #B2B2B2;
    padding: 4px 0px 7px 30px;
    margin: 0;
}

input::placeholder {
    font-size: 14px;
    color: #B2B2B2;
}

input:focus {
    background: white;
    border: none;
    border: 1.5px solid #29CF00;
}

button {
    margin-left: -40px;
}


@media (max-width: 1024px) {
    input {
        width: 42vw;
        padding: 4px 0px 7px 10px;
    }

    svg {
        color: red;
    }
}
`

const StyledDivForm = styled.div`

`

const StyledDivIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    svg {
        color: #B2B2B2;
    }

    span {
        color: red;
        position: absolute;
        background: #29CF00;
        padding: 0 5px;
        border-radius: 50px;
        font-size: 10px;
        font-weight: bold;
        color: white;
        margin-top: -30px;
        margin-left: 20px;
    }
`

function Navbar() {
    return (
        <nav class="px-4 py-2 navbar fixed-top p-1 d-flex shadow-3xl border-b border-gray-300">
            <BarraNavegacao class="container-fluid">
                <Link to="/">
                    <picture>
                    <source media="(min-width: 1025px)"  width="124px" srcset="./images/logo.svg"></source>
                    <source media="(max-width: 1024px)"  width="36px" srcset="./images/logoMobile.svg"></source>
                    <img src="" alt="Descrição da Imagem"></img>
                    </picture>
                </Link>

                <DivLinks id="linksNavbar">
                        <li><StyledNavLink to="/" activeClassName="active">HOME</StyledNavLink></li>
                        <li><StyledNavLink to="/Produtos" activeClassName="active">PRODUTOS</StyledNavLink></li>
                        <li><StyledNavLink to="/Quemsomos">QUEM⠀SOMOS?</StyledNavLink></li>
                        <li><StyledNavLink to="/Contato">CONTATO</StyledNavLink></li>
                </DivLinks>
            
            </BarraNavegacao>

            <StyledDivForm class="navbar-item d-flex">
                <StyledForm>
                        <div class="d-flex justify-content-center p-auto">
                            <input type="search" name="pesquisa" placeholder="O que procura?" id="barraPesquisa"></input>
                            <button id="iconeBarraPesquisa">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="#b7b7b7" class="bi bi-search p-auto" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                </StyledForm>
            </StyledDivForm>

            <StyledDivIcons>

                <Link to="/carrinho">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <span>0</span>
                </Link>

                <button id="menuHamburguer" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                

            </StyledDivIcons>

        </nav>

        
      );
}

export default Navbar