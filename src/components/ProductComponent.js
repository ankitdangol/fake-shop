import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (<div className='four wide column mt-10' key={id}>
            <Link to={`/product/${id}`}>
                <div className='ui link cards'>
                    <div className='mx-5 border h-96 w-full flex flex-col justify-end gap-5'>
                        <div className='image flex justify-center'>
                            <img src={image} alt={title} style={{
                                width: '175px',
                                height: '175px',
                                objectFit: 'scale-down'
                            }} />
                        </div>
                        <div className='content h-2/6 flex flex-col'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>${price}</div>
                            <div className='meta text-gray-400 mt-auto mb-8 ml-auto mr-4'># {category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        )
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent;
