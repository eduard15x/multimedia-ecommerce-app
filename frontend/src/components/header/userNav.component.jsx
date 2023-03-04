// Icons
import { BiUser } from 'react-icons/bi';
import { BiHeart } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';


const UserNav = () => {
    return (
        <div className='user-nav-container flex
                        w-[50%] justify-end pr-5
                        lg:w-[30%] lg:order-3 lg:pr-0 lg:justify-evenly'>
            <div className='flex lg:pr-5 lg:pl-0 pl-7 items-center text-xl cursor-pointer'>
                <BiUser />
                <span className='hidden lg:block pl-1'>Account</span>
            </div>
            <div className='flex lg:pr-5 lg:pl-0 pl-7 items-center text-xl cursor-pointer'>
                <BiHeart />
                <span className='hidden lg:block pl-1'>Favorite</span>
            </div>
            <div className='flex lg:pr-5 lg:pl-0 pl-7 items-center text-xl cursor-pointer'>
                <BiCart />
                <span className='hidden lg:block pl-1'>Cart</span>
            </div>
        </div>
    );
}
 
export default UserNav;
