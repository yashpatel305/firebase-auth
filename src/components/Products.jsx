import React, { useState } from 'react'
import Product from "./Product"
import Data from "./data.json"

function Products() {
    const [items, setitems] = useState(Data.products)
    return (
        <div className="container row row-cols-1 row-cols-md-2 g-4">
            {
                items.map(x => (
                    <Product prod={x} key={x.id} />
                ))
            }
        </div>
    )
}

export default Products 