const NavMenu = ({handleOverOn, handleOverOut}) => {
    
    return (
        <div className="container-nav-menu relative custom:w-[20%] bg-gray-200">
            <ul className="hidden nav-menu-list h-full custom:flex flex-col justify-between">
                <li>
                    <a href="http://localhost:3000/">Mobile Phones</a>
                </li>
                <li><a href="http://localhost:3000/">Tablets</a></li>
                <li><a href="http://localhost:3000/">Laptops</a></li>
                <li><a href="http://localhost:3000/">Cameras</a></li>
                <li><a href="http://localhost:3000/">TVs</a></li>
                <li><a href="http://localhost:3000/">Drones</a></li>
                <li><a href="http://localhost:3000/">Laptops</a></li>
                <li><a href="http://localhost:3000/">Cameras</a></li>
                <li onMouseEnter={handleOverOn} onMouseLeave={handleOverOut} data-color='blue'>
                    <a href="http://localhost:3000/">TVs</a>
                </li>
                <li onMouseEnter={handleOverOn} onMouseLeave={handleOverOut} data-color='black' onClick={(e) => console.log(e.target.getAttribute('data-text'))}>
                    <a href="http://localhost:3000/">TVs</a>
                </li>
            </ul>
        </div>
    );
}
 
export default NavMenu;
