import { useState } from 'react';
import Prev from '../assets/prev-arrow.svg';
import Next from '../assets/next-arrow.svg';
import '../styles/Carousel.scss';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const image = images[currentIndex];

    return (
        <div className="carousel">
            {images.length > 1 ? (<div className='carousel-button-prev'>
                <img src={Prev} alt="Previous" onClick={() => currentIndex - 1 < 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1)} />
            </div>) : null}
            <img src={image} alt={`Image n° ${currentIndex + 1}`} className='carousel-image' />
            {images.length > 1 ? (<div className='carousel-button-next'>
                <img src={Next} alt="Next" onClick={() => currentIndex + 1 < images.length ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)} />
            </div>) : null}
            {images.length > 1 ? (<div className='images-index'><p>{currentIndex + 1}/{images.length}</p></div>) : null}
        </div>
    );
}

export default Carousel