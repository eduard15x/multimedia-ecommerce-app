import { useState } from "react";
// Components
import BannerMenu from "./mainMenu/bannerMenu.component";
import NavMenu from "./mainMenu/navMenu.component";
import NavMenuDetails from "./mainMenu/navMenuDetails.component";

const MainMenu = () => {
    const [onHoverLink, setOnHoverLink] = useState(false)

    const handleOverOn = () => {
        setOnHoverLink(true);
    };

    const handleOverOut = () => {
        setOnHoverLink(false);
    };

    return (
        <div className="container-main-menu w-full h-[450px] bg-slate-400 flex">
            <NavMenu handleOverOn={handleOverOn} handleOverOut={handleOverOut} status={onHoverLink} />
            <NavMenuDetails status={onHoverLink} />
            <BannerMenu />
        </div>
    );
}
 
export default MainMenu;
