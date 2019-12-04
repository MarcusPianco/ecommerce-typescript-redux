import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                    alt="Pc gamer"
                />
                <strong>Pc muito Massa</strong>
                <span>R$: 100.000</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                    alt="Pc gamer"
                />
                <strong>Pc muito Massa</strong>
                <span>R$: 100.000</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                    alt="Pc gamer"
                />
                <strong>Pc muito Massa</strong>
                <span>R$: 100.000</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                    alt="Pc gamer"
                />
                <strong>Pc muito Massa</strong>
                <span>R$: 100.000</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                    alt="Pc gamer"
                />
                <strong>Pc muito Massa</strong>
                <span>R$: 100.000</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41upM3HLafL.jpg"
                    alt="Pc gamer"
                />
                <strong>Pc muito Massa</strong>
                <span>R$: 100.000</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
