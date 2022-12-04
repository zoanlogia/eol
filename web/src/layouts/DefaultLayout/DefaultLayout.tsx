import CarouselDefault from "src/components/Carousel/Carousel"
import CardDefault from "src/components/Card/Card"

const DefaultLayout = () => {
  return <>
    <main id="default">
      <div className="position-fixed">
      <CarouselDefault />
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 vh-100 ms-auto ms-auto d-flex align-items-center justify-content-center me-3">
        <div className="w-100">
        <CardDefault />
        </div>
      </div>
    </main>
  </>
}

export default DefaultLayout
