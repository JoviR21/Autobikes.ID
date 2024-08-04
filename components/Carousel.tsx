import styled from 'styled-components';

import Image from 'next/image';

export default function Carousel() {

    const ButtonSlider = styled.button`
    padding: 0px 18px;
    border: 2px solid #fff;
    border-radius: 6px;
    backdrop-filter: blur(10px);
    `

    return (
        <section>
            <div className="carousel w-full h-full">
                <div id="item1" className="carousel-item w-full relative">
                    <Image
                        src="/Carousel-1.png"
                        width={2880}
                        height={1100}
                        alt="Carousel-1"
                        className="w-full"
                        loading="lazy"
                    />
                    <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                        <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                            <span className="text-third">Indonesia</span> Motorcycles
                            Dealers
                        </h3>
                        <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                            Get your dream bike in <br />
                            <span className="text-third font-quicksand font-bold">
                                Autobikes.ID
                            </span>
                        </h2>
                        <ButtonSlider className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
                            See more
                        </ButtonSlider>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <Image
                        src="/Carousel-2.png"
                        width={2880}
                        height={1100}
                        alt="Carousel-2"
                        className="w-full h-full"
                        loading="lazy"
                    />
                    <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                        <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                            <span className="text-third">Indonesia</span> Motorcycles
                            Dealers
                        </h3>
                        <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                            Get your dream bike in <br />
                            <span className="text-third font-quicksand font-bold">
                                Autobikes.ID
                            </span>
                        </h2>
                        <ButtonSlider className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
                            See more
                        </ButtonSlider>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <Image
                        src="/Carousel-3.png"
                        width={2880}
                        height={1100}
                        alt="Carousel-3"
                        className="w-full h-full"
                        loading="lazy"
                    />
                    <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                        <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                            <span className="text-third">Indonesia</span> Motorcycles
                            Dealers
                        </h3>
                        <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                            Get your dream bike in <br />
                            <span className="text-third font-quicksand font-bold">
                                Autobikes.ID
                            </span>
                        </h2>
                        <ButtonSlider className="sm:w-fit btn-xs sm:btn-sm md:btn-md btn btn-outline">
                            See more
                        </ButtonSlider>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-[-1.8rem] sm:mt-[-2.5rem] flex items-start gap-2">
                <a href="#item1" className="btn btn-xs">
                    1
                </a>
                <a href="#item2" className="btn btn-xs">
                    2
                </a>
                <a href="#item3" className="btn btn-xs">
                    3
                </a>
            </div>
        </section>
    )
}