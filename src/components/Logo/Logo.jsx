import logo from '../../favicon.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;