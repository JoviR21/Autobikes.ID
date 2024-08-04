import { CiCircleChevRight } from "react-icons/ci";
import { BsArrowUpRightCircle } from "react-icons/bs";
import styled from 'styled-components';

import Image from 'next/image';

export default function Category() {

    const ButtonCtg = styled.button`
        transition: all 0.3s;
        &:hover {
            transform: translateX(-5px);
        }
    `

    return (
        <section>
            <div className="category w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'>Explore By <span className='text-third'>Models</span></h1>
                    <a href="#" className="text-sm md:text-base md:text-end font-cousine font-bold ms-auto md:me-5 flex">Explore all<BsArrowUpRightCircle className="ms-2" /></a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-3 gap-5 place-items-center">
                    <div className="card image-full w-40 sm:w-52 shadow-xl">
                        <figure>
                            <Image
                                src="/Adventure.png"
                                width={170}
                                height={210}
                                alt="Adventure Category"
                                className='w-full h-full'
                                loading='lazy'
                            />
                        </figure>
                        <div className="card-body mt-auto">
                            <h2 className="card-title">Adventure</h2>
                            <div className="card-actions justify-start">
                                <ButtonCtg className="text-3xl"><CiCircleChevRight /></ButtonCtg>
                            </div>
                        </div>
                    </div>
                    <div className="card image-full w-40 sm:w-52 shadow-xl">
                        <figure>
                            <Image
                                src="/Custom.png"
                                width={170}
                                height={210}
                                alt="Custom Category"
                                className='w-full h-full'
                                loading='lazy'
                            />
                        </figure>
                        <div className="card-body mt-auto">
                            <h2 className="card-title">Custom</h2>
                            <div className="card-actions justify-start">
                                <ButtonCtg className="text-3xl"><CiCircleChevRight /></ButtonCtg>
                            </div>
                        </div>
                    </div>
                    <div className="card image-full w-40 sm:w-52 shadow-xl">
                        <figure>
                            <Image
                                src="/Trails.png"
                                width={170}
                                height={210}
                                alt="Trails Category"
                                className='w-full h-full'
                                loading='lazy'
                            />
                        </figure>
                        <div className="card-body mt-auto">
                            <h2 className="card-title">Trails</h2>
                            <div className="card-actions justify-start">
                                <ButtonCtg className="text-3xl"><CiCircleChevRight /></ButtonCtg>
                            </div>
                        </div>
                    </div>
                    <div className="card image-full w-40 sm:w-52 shadow-xl">
                        <figure>
                            <Image
                                src="/Sport.png"
                                width={170}
                                height={210}
                                alt="Sport Category"
                                className='w-full h-full'
                                loading='lazy'
                            />
                        </figure>
                        <div className="card-body mt-auto">
                            <h2 className="card-title">Sport</h2>
                            <div className="card-actions justify-start">
                                <ButtonCtg className="text-3xl"><CiCircleChevRight /></ButtonCtg>
                            </div>
                        </div>
                    </div>
                    <div className="card image-full w-40 sm:w-52 shadow-xl">
                        <figure>
                            <Image
                                src="/Touring.png"
                                width={170}
                                height={210}
                                alt="Touring Category"
                                className='w-full h-full'
                                loading='lazy'
                            />
                        </figure>
                        <div className="card-body mt-auto">
                            <h2 className="card-title">Touring</h2>
                            <div className="card-actions justify-start">
                                <ButtonCtg className="text-3xl"><CiCircleChevRight /></ButtonCtg>
                            </div>
                        </div>
                    </div>
                    <div className="card image-full w-40 sm:w-52 shadow-xl">
                        <figure>
                            <Image
                                src="/Naked.png"
                                width={170}
                                height={210}
                                alt="Naked Category"
                                className='w-full h-full'
                                loading='lazy'
                            />
                        </figure>
                        <div className="card-body mt-auto">
                            <h2 className="card-title">Naked</h2>
                            <div className="card-actions justify-start">
                                <ButtonCtg className="text-3xl"><CiCircleChevRight /></ButtonCtg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}