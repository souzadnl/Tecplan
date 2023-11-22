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

}
`

const StyledFormMenu = styled.form`
input {
    border: none;
    width: 80%;
    outline: none;
    border-radius: 50px;
    border: 1.5px solid #B2B2B2;
    padding: 4px 0px 7px 30px;
    margin: 0 20px;
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
    position: relative;
    margin-left: -60px;
    margin-right: 40px;
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
        <nav class="px-4 py-2 navbar fixed-top p-1 d-flex shadow-3xl border-b border-gray-300 bg-white">
            <BarraNavegacao class="container-fluid">
                <Link to="/">
                    <picture>
                    <source media="(min-width: 1025px)"  width="109.87px" srcset="/images/logo.webp"></source>
                    <source media="(max-width: 1024px)"  width="36px" srcset="/images/logoMobile.webp"></source>
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

                <Link to="/Carrinho">
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

            <div class="container-fluid">
                <div class="offcanvas offcanvas-end ml-5 p-2" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                    <img src="./images/logo.svg" width="109.87px" alt="Logo tecplan"></img>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                        <div class="navbar-item">
                        <StyledFormMenu>
                                <div class="d-flex justify-content-center p-auto mt-4">
                                    <input type="search" name="pesquisa" placeholder="O que procura?" id="barraPesquisa"></input>
                                    <button id="iconeBarraPesquisa">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="#b7b7b7" class="bi bi-search p-auto" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </button>
                                </div>
                        </StyledFormMenu>
                        </div>


                    <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-2xl">
                    <li>
                        <StyledNavLink to="/" activeClassName="active">
                            <div class="d-flex my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house my-auto mx-3" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                            </svg>
                            HOME
                            </div>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink to="/Produtos" activeClassName="active">
                            <div class="d-flex my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag my-auto mx-3" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                            PRODUTOS
                            </div>
                        </StyledNavLink>
                    </li>
                    
                    <li>
                        <StyledNavLink to="/Quemsomos">
                            <div class="d-flex my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book my-auto mx-3" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                            </svg>
                            QUEM⠀SOMOS?
                            </div>
                        </StyledNavLink>
                    </li>
                    
                    <li>
                        <StyledNavLink to="/Contato">
                        <div class="d-flex my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound my-auto mx-3" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        CONTATO
                        </div>  
                        </StyledNavLink>
                    </li>
                    
                    <li>
                        <StyledNavLink to="/Carrinho"> 
                        <div class="d-flex my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2 d-flex my-auto mx-3" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        CARRINHO
                        </div>
                        </StyledNavLink>
                    </li>

                    </ul>
                    </div>
                </div>
            </div>
        </nav>
        
      );
}

export default Navbar