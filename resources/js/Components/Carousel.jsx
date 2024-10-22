export default function Carousel() {
    return (
        <div className="h-40 md:h-64 w-full rounded-xl overflow-hidden">
            <div className="carousel w-full h-full md:h-64">
                <div
                    id="slide1"
                    className="carousel-item relative w-full bg-green h-full"
                >
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full object-cover"
                    />
                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div> */}
                </div>
            </div>
        </div>
    );
}
