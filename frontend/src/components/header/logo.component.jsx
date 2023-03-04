import SiteLogo from '../../assets/ecommerce-logo.png'; 

const Logo = () => {
    return (
        <div className="logo col-span-4 pl-12 lg:pl-0 lg:col-span-6 lg:order-1 w-[50%] lg:w-[10%] flex lg:text-center justify-center items-center">
            <img src={SiteLogo} alt="Logo" className='w-8 rounded-full'/>
            <p className="css-3d-text text-lg lg:text-2xl pl-2">LOGO</p>
        </div>
    );
}
 
export default Logo;
