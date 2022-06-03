import React, { useState } from 'react';
import {
    CarouselControl,
    Carousel as CarouselProvider,
    CarouselItem,
    CarouselCaption,
} from 'reactstrap';

function Carousel({items}) {

    // ______________________    USE STATES
    const [activeIndex, setActiveIndex] = useState(0)
    const [animate, setAnimate] = useState(false)

    // functions below to go back to the previous or next slide image when the buttons are clicked
    // setting the activeIndex state according to the actual position 

    const itemLength = items.length - 1

    function previousButton(){
        if (animate) return;
        const prevIndex = activeIndex === 0 ? itemLength : activeIndex - 1
        setActiveIndex(prevIndex)
    }

    function nextButton(){
        if (animate) return;
        const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    // mapping on the items array from the parent's component (here the Bikes page)
    // creating the carousel component with the items array infos (img src / key / altText / caption)
    // setting the animate state to move from a slide to another
    const carouselItemData = items.map((item) => {
        return (
          <CarouselItem
            key={item.key}
            onExited={() => setAnimate(false)}
            onExiting={() => setAnimate(true)}
          >
            <img src={item.src} alt={item.altText} className="carousel_img" />
            <CarouselCaption captionText={item.caption} className='carousel_caption'/>
          </CarouselItem>
        );
    })

    return (
        <CarouselProvider
            activeIndex={activeIndex}
            previous={previousButton}
            next={nextButton}
            className='carousel-fade'
        >
            {carouselItemData}

            <CarouselControl 
                directionText="Previous"
                direction='prev' 
                onClickHandler={previousButton}
            />
            <CarouselControl 
                directionText="Next"
                direction='next' 
                onClickHandler={nextButton}
            />
        </CarouselProvider>
    );
}

export default Carousel;