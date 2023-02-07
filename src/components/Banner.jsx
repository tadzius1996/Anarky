import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>
                <div>
                    <img
                        loading="lazy"
                        src="https://a-static.besthdwallpaper.com/cara-delevingne-ysl-shoot-wallpaper-2048x1152-107697_49.jpg"
                        alt="banner1"
                    />

                    <h1 className="absolute top-3 lg:top-16 right-44 hidden md:block font-thin cursor-pointer text-white text-6xl text-left leading-normal">DISCOVER <br/> YOUR <br/> STYLE </h1>
                   
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://www.wallpaperflare.com/static/376/261/73/h-and-m-hennes-and-mauritz-public-company-swedish-company-wallpaper.jpg"
                        alt="banner2"
                    />

                    <h1 className="absolute top-1/2 md:top-1/4 lg:top-1/3 left-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-black bg-white p-3 text-6xl font-thin underline">EXPLORE</h1>
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://wallpaperaccess.com/full/2921436.jpg"
                        alt="banner3"
                    />

<h1 className="absolute top-16 right-44 font-thin hidden cursor-pointer md:visible text-black text-6xl text-left leading-normal">OWN <br/> YOUR <br/> STYLE </h1>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;