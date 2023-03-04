import Logo from "./header/logo.component";
import Nav from "./header/nav.component";
import SearchBar from "./header/searchBar.component";
import UserNav from "./header/userNav.component";

const Header = () => {
    return (
        <div className="header-container bg-blue-500 bg-sky-500 fixed z-10 top-0 left-0 w-[100%] text-white flex flex-wrap lg:py-2
                        lg:px-[5%] 2xl:px-[10%] 3xl:px-[10%]"
        >
            <Logo className=""/>
            <UserNav className=""/>
            <SearchBar className=""/>
            <Nav className/>
        </div>
    );
}
 
export default Header;
