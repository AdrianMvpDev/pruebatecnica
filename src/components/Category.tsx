import vegetarian from '../assets/images/ic_vegetarian.svg'
import principal from '../assets/images/ic_main.svg'
import tortas from '../assets/images/ic_cake.svg'
import rapida from '../assets/images/ic_fast-food.svg'
import menu from '../assets/images/ic_kids.svg'
import sopa from '../assets/images/ic_soup.svg'


export default function Category() {
  return (
    <div className="category">
        <div className="category-card">
            <img src={vegetarian} alt="imagen de un vegetal" />
            <span>Vegetarianos</span>
        </div>
        <div className="category-card">
            <img src={principal} alt="imagen de un vegetal" />
            <span>Principales</span>
        </div>
        <div className="category-card">
            <img src={tortas} alt="imagen de un vegetal" />
            <span>Tortas</span>
        </div>
        <div className="category-card">
            <img src={rapida} alt="imagen de un vegetal" />
            <span>Rápida</span>
        </div>
        <div className="category-card">
            <img src={menu} alt="imagen de un vegetal" />
            <span>Menú Niños</span>
        </div>
        <div className="category-card">
            <img src={sopa} alt="imagen de un vegetal" />
            <span>Sopas</span>
        </div>
    </div>
  )
}
