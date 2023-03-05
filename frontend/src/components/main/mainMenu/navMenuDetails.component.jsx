const NavMenuDetails = ({status}) => {
    return (
        <div className="container-nav-menu-details">
            {status ? 'This is me' : ''}
        </div>
    );
}
 
export default NavMenuDetails;
