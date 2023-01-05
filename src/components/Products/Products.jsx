import React, {ref} from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function Products() {
  const [animationParent] = useAutoAnimate()
  const [menuProducts, SetMenuProducts] = React.useState(ProductsData)

  function filter(type) {
    return SetMenuProducts(ProductsData.filter((product) => {
      return product.type === type
    }))
  }

  return (
    <div className={css.container}>
      <img src={Plane} alt="Plane image" />
      <h1>Our Feature Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => SetMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Condition</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>

        <div className={css.list} ref={animationParent}>
          {
            menuProducts.map((product, index) => (
              <div className={css.product} key={product.img + product.name}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}$</span>
                  <div>Show Now</div>
                </div>

                <img className='img-p' src={product.img} alt={product.name} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products