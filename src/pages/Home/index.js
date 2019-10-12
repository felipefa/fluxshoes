import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Nome Tênis</strong>
        <span>R$199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Nome Tênis</strong>
        <span>R$199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Nome Tênis</strong>
        <span>R$199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Nome Tênis</strong>
        <span>R$199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Nome Tênis</strong>
        <span>R$199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Nome Tênis</strong>
        <span>R$199,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
