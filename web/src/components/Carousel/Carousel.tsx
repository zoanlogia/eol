import Carousel from 'react-bootstrap/Carousel';

const CarouselDefault = () => {
  return (
    <Carousel controls={false} fade interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../../assets/img/slide1.jpg"
          alt="slide1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../../assets/img/slide2.jpg"
          alt="slide2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../../assets/img/slide3.jpg"
          alt="slide3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../../assets/img/slide4.jpg"
          alt="slide4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../../assets/img/slide5.jpg"
          alt="slide5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../../assets/img/slide6.jpg"
          alt="slide6"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselDefault;
