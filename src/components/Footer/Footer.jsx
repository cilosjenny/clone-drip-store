import { Logo } from '../Logo/Logo';
import './Footer.css';


export const Footer = () => {
  return (
    <footer id='footer'>
      <div className="box-footer"> 
        <div className='box-footer-children'>
          <Logo id='login'
          width={"15.813rem"}
          // margin={"4.5rem 0 21.125rem 6.5rem"}
          color={'#f5f5f5'}/>
          <p id='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          
        </div>

      </div>
    </footer>
  );
}