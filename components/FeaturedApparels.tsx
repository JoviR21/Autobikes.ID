import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";

import Image from "next/image";

export default function FeaturedApparels() {

    return (
        <div className="featured-apparels w-full h-full py-10 bg-secondary">
            <div className="head flex content-center items-center mx-3 md:mx-0 mb-2">
                <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'>Apparels <span className='text-third'>Shop</span></h1>
                <a href="#" className="text-sm md:text-base md:text-end font-cousine font-bold ms-auto md:me-5 flex">All apparels<BsArrowUpRightCircle className="ms-2" /></a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
                <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                    <figure>
                        <Image
                            src="/Helmet1.png"
                            width={270}
                            height={170}
                            alt="LS-2 Valiant" 
                            className='w-full h-full'
                            loading='lazy'/>
                    </figure>
                    <div className="card-body">
                        <div className="card-title flex">
                            <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                            <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                        </div>
                        <div className="mb-auto font-montserrat font-medium">
                            <p>KPA, a proprietary polymer alloy,
                            Approximately 1620 grams</p>
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
                <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                    <figure>
                        <Image
                            src="/Helmet2.png"
                            width={270}
                            height={170}
                            alt="Shark" 
                            className='w-full h-full'
                            loading='lazy'/>
                    </figure>
                    <div className="card-body">
                        <div className="card-title flex">
                            <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Shark</h2>
                            <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                        </div>
                        <div className="mb-auto font-montserrat font-medium">
                            <p>Injected thermoplastic resin, Approximately 1650 grams</p>
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
                <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                    <figure>
                        <Image
                            src="/Helmet1.png"
                            width={270}
                            height={170}
                            alt="LS-2 Valiant" 
                            className='w-full h-full'
                            loading='lazy'/>
                    </figure>
                    <div className="card-body">
                        <div className="card-title flex">
                            <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                            <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                        </div>
                        <div className="mb-auto font-montserrat font-medium">
                            <p>KPA, a proprietary polymer alloy,
                            Approximately 1620 grams</p>
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
                <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                    <figure>
                        <Image
                            src="/Helmet2.png"
                            width={270}
                            height={170}
                            alt="LS-2 Valiant" 
                            className='w-full h-full'
                            loading='lazy'/>
                    </figure>
                    <div className="card-body">
                        <div className="card-title flex">
                            <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                            <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                        </div>
                        <div className="mb-auto font-montserrat font-medium">
                            <p>Injected thermoplastic resin, Approximately 1650 grams</p>
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}