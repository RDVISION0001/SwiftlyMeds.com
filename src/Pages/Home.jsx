import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TodayTrending from '../Pages/TodayTrending';
import Products from './Products';

function Home() {
  const images = [
    'https://www.netmeds.com/images/cms/aw_rbslider/slides/1743514063_Web_Home-Banner.jpg',
    'https://www.netmeds.com/images/cms/aw_rbslider/slides/1746624933_Web_Home-Banner.jpg',
    'https://www.netmeds.com/images/cms/aw_rbslider/slides/1748706372_Web_Home-Banner.jpg',
  ];

  return (
    <>
      <div className=" bg-gray-100 w-full">
        <div className="w-full px-4 py-2"> {/* Removed container, set px-0 */}
          <Carousel
            showArrows={true}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="rounded-lg shadow-lg"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-96"
                  onError={() => console.log(`Failed to load image: ${image}`)}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <TodayTrending />
      </div>
      <div className='w-full px-42 py-2 item-center'>
        <Products />
      </div >
    </>
  );
}

export default Home;