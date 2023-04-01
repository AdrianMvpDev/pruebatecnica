import { useEffect, useState } from 'react';
import banner from '../assets/images/bcq.png';
import Cards from './Cards';
import Category from './Category';

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth > 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // inicializar el estado con el valor actual del ancho de la ventana
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="main">
      <div className="banner">
        <img className="banner__image" src={banner} alt="Banner Imagen principal" />
        <h3 className="banner__title">Recetas<span>para todos</span></h3>
      </div>
      <div className="main__content">
        {!isMobile && <Category />}
        <Cards />
      </div>
    </main>
  );
}