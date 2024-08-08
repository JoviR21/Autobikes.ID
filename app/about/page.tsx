"use client"

import Image from "next/image";

export default function About() {

    return (
        <main>
            {/* Hero */}
            <section className="carousel w-full h-72">
                <div id="item1" className="carousel-item w-full relative">
                    <Image
                        src="/Hero-About.png"
                        width={2880}
                        height={1100}
                        alt="Carousel-1"
                        className="w-full"
                        loading="lazy"
                    />
                    <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                        <div className="max-w-lg font-cousine border-4 border-third p-5 backdrop-blur rounded">
                            <h1 className="mb-5 text-3xl font-bold">About <span className="text-third font-bold">Autobikes.ID</span></h1>
                            <p className="mb-5">
                            More than just a motorcycle dealer. We are the bridge that connects you to your dream bike from all over the world. As a direct importer, we ensure you get a motorcycle with original specifications and competitive prices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* About us */}
            <section className="about w-full h-full py-10 bg-primary">
                <div className="grid grid-cols-1 sm:grid-cols-2 mx-20 justify-items-center">
                    <div className="desc max-w-md text-justify">
                        <div className="head text-3xl font-cousine font-bold">What is <span className="text-third">Autobikes.ID</span>?</div>
                        <div className="full-desc text-xl font-montserrat font-medium">
                            Autobikes.ID is a motorcycle dealer specializing in both imported (CBU) and locally assembled (CKD) two-wheeled vehicles. In addition to selling motorcycles, we assist with all necessary paperwork and documentation. Through our official importers, motorcycles shipped from overseas are guaranteed secure delivery.
                        </div>
                    </div>
                    <div className="photo w-full h-full">
                        <Image 
                            src="/About-Desc.png"
                            width={450}
                            height={450}
                            alt="About Description"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            {/* About us */}
        </main>
    )
}