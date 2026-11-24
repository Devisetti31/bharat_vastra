import { Link, NavLink } from 'react-router-dom';

function Navbar({ cartCount }) {
    return (
        <nav className='navbar'>
            <Link to='/' className='logo'>
                BHARATVASTRA
            </Link>
            <div className='nav-links'>
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/collections'>Collections</NavLink>
                <NavLink to='/mens'>Mens</NavLink>
                <NavLink to='/womens'>Womens</NavLink>
                <NavLink to='/kids'>Kids</NavLink>
                <NavLink to='/offers'>Offers</NavLink>
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/cart'>🛍️</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;