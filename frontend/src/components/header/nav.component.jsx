import { useState } from 'react';
// Icons
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = () => {
    const [navView, setNavView] = useState(false)
    console.log(navView);

    const handleClick = () => {
        navView ? setNavView(false) : setNavView(true);
    }

    return (
        <div className="nav-container order-4 w-full absolute top-0 bg-black text-white lg:relative">
            {/* Mobile Navigation */}
            <ul className={`w-full ${!navView ? 'hidden' : 'flex'} flex-col items-center md:hidden py-6`}>
                <li className='py-1'>Products</li>
                <li className='py-1'>Promotions</li>
                <li className='py-1'>Contact</li>
                <li className='py-1'>News</li>
                <li className='py-1'>Newsletter</li>
            </ul>
            <RxHamburgerMenu onClick={ handleClick }
                className={`fixed top-2 left-2 z-20 text-xl lg:hidden ${navView ? 'hidden' : 'block'}`}
            />
            <AiOutlineClose onClick={ handleClick } 
                className={`fixed top-2 left-2 z-20 text-xl lg:hidden ${!navView ? 'hidden' : 'block'}`}
            />

            {/* Large Screens Navigation */}
            <ul className='hidden w-full lg:flex justify-center bg-yellow-500'>
                <li className='px-12 cursor-pointer'>Products</li>
                <li className='px-12 cursor-pointer'>Promotions</li>
                <li className='px-12 cursor-pointer'>Contact</li>
                <li className='px-12 cursor-pointer'>News</li>
                <li className='px-12 cursor-pointer'>Newsletter</li>
            </ul>
        </div>
    );
}
 
export default Nav;
