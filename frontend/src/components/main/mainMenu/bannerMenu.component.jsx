import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const BannerMenu = () => {
    return (
        <Carousel className="banner-menu w-[85%]" showArrows={true} showStatus={false} infiniteLoop={true} showThumbs={false} 
        autoPlay={true} stopOnHover={false} interval={3000} transitionTime={500} swipeable={true} emulateTouch={true}>
            <div className="w-full h-[450px]">
                <img className="w-full" alt="test" src="https://images.unsplash.com/photo-1506423029067-1b8b62b68717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80" />
            </div>
            <div className="h-[450px]">
                <img className="w-[200px]" alt="test" src="https://images.unsplash.com/photo-1505495142263-9357db572571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="w-full h-[450px]">
                <img className="w-[200px]" alt="test" src="https://images.unsplash.com/photo-1505247917671-78b7075b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
        </Carousel>
    );
}
 
export default BannerMenu;
