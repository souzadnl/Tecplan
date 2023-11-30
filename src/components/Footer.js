import { Link, NavLink } from "react-router-dom";
import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <footer>
            <div class="m-0 d-flex justify-evenly flex-wrap p-3 pt-5 pb-5 bg-[#1B8600]">
                <div class="max-sm:w-1/3">
                    <ul class="pl-3">
                    <span class="text-white font-bold text-[18px]">Categorias</span>
                        <li><a class="text-white no-underline" href="/">Plantadeira</a></li>
                        <li><a class="text-white no-underline" href="/">Colheitadeira</a></li>
                        <li><a class="text-white no-underline" href="/">Trator</a></li>
                        <li><a class="text-white no-underline" href="/">Insumos</a></li>
                    </ul>
                </div>

                <div class="max-sm:w-1/3">
                    <ul class="pl-5">
                    <span class="text-white font-bold text-[18px]">Sobre Nós</span>
                        <li><a class="text-white no-underline" href="/">Fale Conosco</a></li>
                        <li><a class="text-white no-underline" href="/">Trabalhe Conosco</a></li>
                        <li><a class="text-white no-underline" href="/">Ajuda</a></li>
                    </ul>
                </div>

                <div class="max-sm:w-1/3 ">
                    <ul class="pl-5">
                    <span class="text-white font-bold text-[18px]">Contato</span>
                        <li><a class="text-white no-underline" href="/">Whatsapp</a></li>
                        <li><a class="text-white no-underline" href="/">Instagram</a></li>
                        <li><a class="text-white no-underline" href="/">Facebook</a></li>
                    </ul>
                </div>

                <div class="max-sm:m-5">
                <span class="text-white font-bold text-[18px]">Onde nos encontrar?</span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9817862287177!2d-47.07069582460124!3d-22.91404263813059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8c794884427%3A0x15a2759628f243d1!2sEscola%20e%20Faculdade%20de%20Tecnologia%20Senai%20%22Roberto%20Mange%22!5e0!3m2!1spt-BR!2sbr!4v1699321718501!5m2!1spt-BR!2sbr" width="320" height="170" class="rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="bg-black text-center text-white m-0">
                <span>Todos os direitos reservados @ 2023</span>
            </div>
        </footer>
      );
}

export default Footer