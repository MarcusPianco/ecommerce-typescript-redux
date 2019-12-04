import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
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
                        <th>Produto</th>
                        <th>QTDE</th>
                        <th>Subtotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                                alt="PC gamer"
                            />
                        </td>
                        <td>
                            <strong>PC muito foda</strong>
                            <span> R$:12.000</span>
                        </td>

                        <td>
                            <div>
                                {' '}
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7159c2"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7159c2"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$:12.000</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>Total</span>
                    <strong>R$:12.000</strong>
                </Total>
            </footer>
        </Container>
    );
}
