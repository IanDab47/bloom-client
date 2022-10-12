function Carousel({ isWide }) {
    return (
        <div id="carouselExampleCaptions" className={`carousel slide relative w-full max-w-[75rem] drop-shadow-lg ${isWide ? 'float-right' : ''}`} data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-2">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
                ></button>
            </div>

            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="https://i.imgur.com/Nd7b6v8.png"
                        // className="block w-full h-96 object-cover align-middle"
                        className="aspect-video block w-full object-cover align-middle"
                        alt="..."
                    />
                    <div className="carousel-caption font-bloom-sans font-light text-xl w-full hidden md:block absolute text-center left-0 bottom-0 bg-gradient-to-t from-neutral-800/[.7] pt-8 pb-8">
                        <h5 className="font-normal text-2xl">Decorated Events</h5>
                        <p>Learn how to spark joy with Curated Experiences</p>
                    </div>
                </div>

                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.imgur.com/PGdtGHh.png"
                        // className="block w-full h-96 object-cover align-middle"
                        className="aspect-video block w-full object-cover align-middle"
                        alt="..."
                    />
                    <div className="carousel-caption font-bloom-sans font-light text-xl w-full hidden md:block absolute text-center left-0 bottom-0 bg-gradient-to-t from-neutral-800/[.7] pt-8 pb-8">
                        <h5 className="font-normal text-2xl">Learn how to Start a Clothing Brand</h5>
                        <p>10 years of Streetwear Brand Experience</p>
                    </div>
                </div>

                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.imgur.com/ICK45WM.png"
                        // className="block w-full h-96 object-cover align-middle"
                        className="aspect-video block w-full object-cover align-middle"
                        alt="..."
                    />
                    <div className="carousel-caption font-bloom-sans font-light text-xl w-full hidden md:block absolute text-center left-0 bottom-0 bg-gradient-to-t from-neutral-800/[.7] pt-8 pb-8">
                        <h5 className="font-normal text-2xl">Learn how to be an AirBNB Host</h5>
                        <p>Lead with passion and authenticity, then then business aspect will follow.</p>
                    </div>
                </div>

                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.imgur.com/TrKJPFd.png"
                        // className="block w-full h-96 object-cover align-middle"
                        className="aspect-video block w-full object-cover align-middle"
                        alt="..."
                    />
                    <div className="carousel-caption font-bloom-sans font-light text-xl w-full hidden md:block absolute text-center left-0 bottom-0 bg-gradient-to-t from-neutral-800/[.7] pt-8 pb-8">
                        <h5 className="font-normal text-2xl">Scuba Diving Intro</h5>
                        <p>Learn what it takes to get certified as a diver</p>
                    </div>
                </div>

                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.imgur.com/Qnp6Y0v.png"
                        // className="block w-full h-96 object-cover align-middle"
                        className="aspect-video block w-full object-cover align-middle"
                        alt="..."
                    />
                    <div className="carousel-caption font-bloom-sans font-light text-xl w-full hidden md:block absolute text-center left-0 bottom-0 bg-gradient-to-t from-neutral-800/[.7] pt-8 pb-8">
                        <h5 className="font-normal text-2xl">Learn to Become a Hair Stylist</h5>
                        <p>Learn the basics of the Hair Styling Business.</p>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
