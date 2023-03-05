const NavMenu = ({handleOverOn, handleOverOut}) => {
    return (
        <div className="container-nav-menu w-[15%] bg-gray-200">
            <ul className="nav-menu-list h-full flex flex-col justify-between">
                <li onMouse>
                    <a href="http://localhost:3000/">Mobile Phones</a>
                </li>
                <li><a href="http://localhost:3000/">Tablets</a></li>
                <li><a href="http://localhost:3000/">Laptops</a></li>
                <li><a href="http://localhost:3000/">Cameras</a></li>
                <li><a href="http://localhost:3000/">TVs</a></li>
                <li><a href="http://localhost:3000/">Drones</a></li>
                <li><a href="http://localhost:3000/">Laptops</a></li>
                <li><a href="http://localhost:3000/">Cameras</a></li>
                <li><a href="http://localhost:3000/">TVs</a></li>
                <li onMouseEnter={handleOverOn} onMouseLeave={handleOverOut}><a href="http://localhost:3000/">TVs</a></li>
            </ul>
        </div>
    );
}
 
export default NavMenu;
