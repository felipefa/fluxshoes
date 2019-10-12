/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/chuteira-futsal-adidas-predator-19-3-in/06/COL-4165-006/COL-4165-006_zoom1.jpg"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Nome Tênis</strong>
              <span>R$199,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#ffd700" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#ffd700" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$298,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#DC143C" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,42</strong>
        </Total>
      </footer>
    </Container>
  );
}
