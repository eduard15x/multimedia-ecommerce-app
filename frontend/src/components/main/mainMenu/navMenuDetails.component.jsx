const NavMenuDetails = ({status, onHoverColor}) => {
    return (
        <div className={`hidden custom:block container-nav-menu-details ${status ? 'opacity-100 z-10' : 'opacity-0 z-0'} hover:opacity-100 hover:z-10 duration-300 absolute top-0 
        left-[20%] h-[450px] bg-[${onHoverColor}] w-[80%]`}>
            This is me
            <p className="w-[200px] h-[200px] bg-slate-50">color</p>
        </div>
    );
}
 
export default NavMenuDetails;
