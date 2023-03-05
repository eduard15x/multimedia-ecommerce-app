import { useState } from "react";
// Components
import BannerMenu from "./mainMenu/bannerMenu.component";
import NavMenu from "./mainMenu/navMenu.component";
import NavMenuDetails from "./mainMenu/navMenuDetails.component";

const MainMenu = () => {
    const [onHoverLink, setOnHoverLink] = useState(false);
    const [onHoverColor, setOnHoverColor] = useState('');
    const groupParentCSS = 'groupCSS';

    const handleOverOn = (e) => {
        setOnHoverLink(true);
        setOnHoverColor(e.target.getAttribute('data-color'));
    };

    const handleOverOut = () => {
        setOnHoverLink(false);
    };

    return (
        <div className={`container-main-menu w-full relative h-[350px] custom:h-[450px] bg-slate-400 flex ${groupParentCSS}`}>
            <NavMenu handleOverOn={handleOverOn} handleOverOut={handleOverOut} status={onHoverLink} groupCSS={groupParentCSS} onHoverColor={onHoverColor} />
            <NavMenuDetails status={onHoverLink} onHoverColor={onHoverColor} groupCSS={groupParentCSS} />
            <BannerMenu />
        </div>
    );
}
 
export default MainMenu;
