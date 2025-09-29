import React from 'react'
import Star from './star'

function Product({ prod }) {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={prod.thumbnail} className="img-fluid rounded-start" alt={prod.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.title}</h5>
                        <p className="card-text">{prod.description}</p>
                        <p className="card-text"><small className="text-muted">Category: {prod.category}</small></p>
                        <p className="card-text"><small className="text-muted">Brand: {prod.brand}</small></p>
                        <p className="card-text">Price: ${prod.price}</p>
                        
                        <p className="card-text">Stock: {prod.stock}</p>
                        <div className="d-flex align-items-center">
                            <Star stars={prod.rating} />
                            <span className="ms-2">({prod.rating})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
