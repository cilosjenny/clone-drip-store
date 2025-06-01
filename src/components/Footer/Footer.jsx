import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Useful } from '../Useful/Useful';
import './Footer.css';


export const Footer = () => {
  return (
    <footer id='footer'>
      <div className="box-footer">
        <Logo id='login'
          width={"15.813rem"}
          // margin={"4.5rem 0 21.125rem 6.5rem"}
          color={'#ffffff'} />

        <p id='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div id='imagens-footer'>
          <img className='facebook' src="../../../public/Facebook.svg" />
          <img className='instagram' src="../../../public/Instagram.svg" />
          <img className='twitter' src="../../../public/Twitter.svg" />
        </div>

        <p id='info-footer'> Informação</p>

        <div className='info-footer-children'>
          <ul>
            <li>Sobre Drip Store</li>
            <br />
            <li>Segurança</li>
            <br />
            <li>Wishlist</li>
            <br />
            <li>Blog</li>
            <br />
            <li>Trabalhe conosco</li>
            <br />
            <li>Meus pedidos</li>
          </ul>
        </div>

        <p id='categorias-footer'>Categorias</p>
        
        {/* <Nav
          position={'absolute'}
          width={'53.063rem'}
          height={'11.875rem'}
          top={'7.625rem'}
        >
          <li>
            <Useful
              value={'Camisetas'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Calças'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Bonés'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Headphones'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Tênis'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
        </Nav> */}

      </div>
    </footer>
  );
}