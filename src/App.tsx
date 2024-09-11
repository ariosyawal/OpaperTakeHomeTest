// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//     const [count, setCount] = useState(0)

//     return (
//         <>
//             <div>
//                 <a href="https://vitejs.dev" target="_blank">
//                     <img src={viteLogo} className="logo" alt="Vite logo"/>
//                 </a>
//                 <a href="https://react.dev" target="_blank">
//                     <img src={reactLogo} className="logo react" alt="React logo"/>
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//             <div className="card">
//                 <button onClick={() => setCount((count) => count + 1)}>
//                     count is {count}
//                 </button>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </>
//     )
// }

// export default App



// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <header className="category-header">
//         Category Name
//       </header>
//       <div className="product-list">
//         <ProductCard />
//         <ProductCard />
//         {/* Tambahkan ProductCard lain jika diperlukan */}
//       </div>
//     </div>
//   );
// };

// const ProductCard: React.FC = () => {
//   return (
//     <div className="product-card">
//       <div className="product-info">
//         <h2>Product Name</h2>
//         <p>Product Price</p>
//         <p>Product Description</p>
//       </div>
//       <div className="product-image">
//         <p>Product Image</p>
//       </div>
//     </div>
//   );
// };

import React, {useEffect, useState} from 'react';
import './App.css';

interface Item{
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    fetch('http://localhost:5173/api/items') // Ganti dengan URL API kamu
      .then((response) => response.json())
      .then((data) => setItems(data)) // Simpan data di state
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Memisahkan item berdasarkan kategori
  const toys = items.filter(item => item.category === 'Toys');
  const home = items.filter(item => item.category === 'Home');
  const electronics = items.filter(item => item.category === 'Electronics');

  return (
    <div className="App">

      {/* Section untuk kategori Toys */}
      <section className="product-section">
        <header className="App-header">
          Toys
        </header>
        <div className="product-container">
          {toys.map((item) => (
            <div key={item.id} className="product-box">
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '15px' }} />
              <p>Price: ${item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section untuk kategori Home Items */}
      <section className="product-section">
        <header className="App-header">
          Home Items
        </header>
        <div className="product-container">
          {home.map((item) => (
            <div key={item.id} className="product-box">
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '15px' }} />
              <p>Price: ${item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section untuk kategori Electronics */}
      <section className="product-section">
        <header className="App-header">
          Electronics
        </header>
        <div className="product-container">
          {electronics.map((item) => (
            <div key={item.id} className="product-box">
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '15px' }} />
              <p>Price: ${item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}


export default App;

