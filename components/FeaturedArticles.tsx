import styled from "styled-components";
import { CiCircleChevRight } from "react-icons/ci";

import Image from "next/image"

export default function FeaturedArticle() {

    const HeadAtc = styled.h2`
        cursor: pointer;
        transition:  all 0.3s;
        &:hover {
            color: #F05454;
        }
    `   
    const ButtonAtc = styled.button`
        transition: all 0.3s;
        &:hover {
            transform: translateX(8px);
            color: #F05454;
        }
    `

    return (
        <section className="featured-articles w-full h-full py-10">
            <div className="head flex content-center mx-3 md:mx-0 mb-2">
                <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>Featured</span> Articles</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 gap-5 place-items-center">
                <div className="card image-full bg-transparent w-72 md:w-96 shadow-xl">
                    <figure>
                        <Image
                            src="/Featured-Articles.png"
                            width={360}
                            height={280}
                            alt="Featured Articles" 
                            className="w-full h-full"
                            loading="lazy"/>
                    </figure>
                    <div className="card-body mt-auto">
                        <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                        <div className="card-actions justify-start">
                            <ButtonAtc className="text-5xl"><CiCircleChevRight /></ButtonAtc>
                        </div>
                    </div>
                </div>
                <div className="card image-full w-72 md:w-96 shadow-xl">
                    <figure>
                        <Image
                            src="/Featured-Articles.png"
                            width={360}
                            height={280}
                            alt="Featured Articles" 
                            className="w-full h-full"
                            loading="lazy"/>
                    </figure>
                    <div className="card-body mt-auto">
                        <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                        <div className="card-actions justify-start">
                            <ButtonAtc className="text-5xl"><CiCircleChevRight /></ButtonAtc>
                        </div>
                    </div>
                </div>
                <div className="card image-full w-72 md:w-96 shadow-xl">
                    <figure>
                        <Image
                            src="/Featured-Articles.png"
                            width={360}
                            height={280}
                            alt="Featured Articles" 
                            className="w-full h-full"
                            loading="lazy"/>
                    </figure>
                    <div className="card-body mt-auto">
                        <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                        <div className="card-actions justify-start">
                            <ButtonAtc className="text-5xl"><CiCircleChevRight /></ButtonAtc>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}