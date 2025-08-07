import React, { useEffect, useState } from 'react'
import { supabase } from "../supabaseClient"

interface Product {
  id: number
  name: string
  category: string
  price?: number
  description?: string
  icon?: string
}

const OurProducts: React.FC = () => {
  const [productsByCategory, setProductsByCategory] = useState<Record<string, Product[]>>({})

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')

      if (error) {
        console.error('Error fetching products:', error)
      } else {
        // Group by category
        const grouped: Record<string, Product[]> = {}
        data.forEach((product: Product) => {
          if (!grouped[product.category]) {
            grouped[product.category] = []
          }
          grouped[product.category].push(product)
        })
        setProductsByCategory(grouped)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="our-products">
      <section className="products-hero">
        <h1>Nos Produits Bio</h1>
        <p>Découvrez notre large gamme de produits biologiques certifiés</p>
        <div className="products-hero-image">
          <div className="placeholder-image large">
            🛒🥬🌾🍯🌱
            <p>Du terroir à votre table</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Catégories de Produits</h2>
        <div className="categories-grid">
          {Object.entries(productsByCategory).map(([categoryName, products], index) => (
            <div key={index} className="category-card">
              <h3>{categoryName}</h3>
              <ul className="product-list">
                {products.map((product) => (
                  <li key={product.id}>
                    {product.icon && <span>{product.icon} </span>}
                    {product.name} {product.price && `- ${product.price} MAD`}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurProducts
