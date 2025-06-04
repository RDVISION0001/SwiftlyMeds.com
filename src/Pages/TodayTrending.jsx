import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTheme } from '../Auth/ThemeContext';

function TodayTrending() {
  const { styles } = useTheme();

  // Sample medical product data based on web search results
  const medicalProducts = [
    {
      id: 1,
      name: 'Pulse Oximeter',
      image: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1710162852_Omnigel_Mini_banner_webhhhh.jpg',
    },
    {
      id: 2,
      name: 'Blood Glucose Monitor',
      image: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1710162640_Ahaglow_Mini_banner_webhbh.jpg',
    },
    {
      id: 3,
      name: 'N95 Face Mask (10-Pack)',
      image: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1709289702_Hansaplast_mini_web.jpg',
    },
    {
      id: 4,
      name: 'Digital Thermometer',
      image: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1745075216_Main_Mini_web_(1).jpg',
    },
  ];

  return (
    <div className={`w-full px-0 py-4 ${styles.container} ${styles.text}`}>
      <h2 className={`text-2xl font-bold text-center mb-4 ${styles.text}`}>Today's Trending</h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="rounded-lg"
        centerMode={true}
        centerSlidePercentage={33.33} // Show ~3 cards on desktop
        emulateTouch={true}
      >
        {medicalProducts.map((product) => (
          <div key={product.id} className="p-2 h-full">
            <div className={`rounded-lg overflow-hidden flex flex-col h-full mx-2 ${styles.container}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x400?text=Image+Not+Available";
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TodayTrending;