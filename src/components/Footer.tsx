import imgfooter from '../assets/images/footer.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="textfooter">
        {' '}
        <span>Con el patrocinio de</span>
      </div>
      <div className='img-footer'>
        <img className="imgFooter" src={imgfooter} alt="imagen para el footer" />
      </div>
    </footer>
  );
}
