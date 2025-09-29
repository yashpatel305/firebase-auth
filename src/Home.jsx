import { useState } from 'react'
import './App.css'
import GlassNavbar from './components/GlassNavbar'
import Hero from './components/Hero'
import MagicBento from './components/MagicBento'
import Data from './components/data.json'
import Footer from './components/Footer'

function Home() {
  const [search, setSearch] = useState("");

  // Filter products by title, brand, or category
  const filteredProducts = Data.products.filter(prod => {
    const q = search.toLowerCase();
    return (
      prod.title.toLowerCase().includes(q) ||
      prod.brand?.toLowerCase().includes(q) ||
      prod.category?.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <GlassNavbar search={search} setSearch={setSearch} />
      <Hero />
      <div id="products">
        <h2 className="products-title">Products</h2>
        <MagicBento 
          products={filteredProducts}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
      <Footer />
    </>
  )
}

export default Home
