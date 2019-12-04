import React, { useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useAsyncEffect } from 'use-async-effect';
import { connect, DispatchProp } from 'react-redux';
import ReturnType from 'typescript';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { IProduct } from '../../types';

import { RootState } from '../../store/modules/rootReducer';

const mapStateToProps = (state: RootState) => ({
    cart: state.cart.products,
});

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps & DispatchProp;
function Home(props: Props) {
    const [products, setProducts] = useState<IProduct[]>([]);

    useAsyncEffect(async () => {
        const response = await api.get('products');

        const productsData = response.data.map((product: IProduct) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        setProducts(productsData);
    }, []);

    function handleAddProduct(product: IProduct) {
        props.dispatch({
            type: 'ADD_TO_CART',
            payload: product,
        });
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button
                        type="button"
                        onClick={() => handleAddProduct(product)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />
                        </div>
                        <span>Adicionar ao Carrinho</span>
                    </button>
                </li>
            ))}
            )
        </ProductList>
    );
}

export default connect(mapStateToProps)(Home);
