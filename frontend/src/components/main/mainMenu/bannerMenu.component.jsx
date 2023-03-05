import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const BannerMenu = () => {
    return (
        <Carousel className="banner-menu w-full custom:w-[80%]" showArrows={true} showStatus={false} infiniteLoop={true} showThumbs={false} 
        autoPlay={false} stopOnHover={false} interval={3000} transitionTime={500} swipeable={true} emulateTouch={true}>
            <div className="banner-image-carousel h-[350px] custom:h-[450px]">
                <img className="w-full h-[350px] custom:h-[450px]" alt="test" src="https://assets.visme.co/templates/banners/thumbnails/i_Save-the-Creature-Facebook-Cover_full.jpg" />
            </div>
            <div className="banner-image-carousel h-[350px] custom:h-[450px]">
                <img className="w-full h-[350px] custom:h-[450px]" alt="test" src="https://assets.visme.co/templates/banners/thumbnails/i_Music-Conservatory-Facebook-Cover_full.jpg" />
            </div>
            <div className="banner-image-carousel h-[350px] custom:h-[450px]">
                <img className="w-full h-[350px] custom:h-[450px]" alt="test" src="https://assets.visme.co/templates/banners/94/c7/42/d0/1ea12e6ea2ec611aeb29d008716449ea.jpg" />
            </div>
        </Carousel>
    );
}
 
export default BannerMenu;
