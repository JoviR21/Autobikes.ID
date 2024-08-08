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
                        className="w-full object-cover"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-20 justify-items-center gap-7 border-b-2 pb-20">
                    <div className="desc max-w-lg sm:max-w-7xl pt-7 text-center lg:text-start">
                        <div className="head text-2xl font-cousine font-bold">What is <span className="text-third">Autobikes.ID</span>?</div>
                        <div className="full-desc text-base font-montserrat font-medium">
                            <strong className="text-third">Autobikes.ID</strong> is a motorcycle dealer specializing in both imported (CBU) and locally assembled (CKD) two-wheeled vehicles. In addition to selling motorcycles, we assist with all necessary paperwork and documentation. Through our official importers, motorcycles shipped from overseas are guaranteed secure delivery.
                        </div>
                        <div className="border-b-2 my-4 lg:mb-20"></div>
                        <div className="head text-2xl font-cousine font-bold"><span className="text-third">Autobikes.ID</span> History..</div>
                        <div className="full-desc text-base font-montserrat font-medium">
                            Since its establishment in 2021, <strong className="text-third">Autobikes.ID</strong> has built a reputation as a motorcycle dealer that always prioritizes quality. We believe that customer satisfaction is our greatest asset. Therefore, we continuously strive to provide the best products and services, from motorcycle selection to after-sales care.
                        </div>
                        <div className="border-b-2 my-4 lg:mb-20"></div>
                        <div className="head text-2xl font-cousine font-bold">Company Culture of <span className="text-third">Autobikes.ID</span>.</div>
                        <div className="full-desc text-base font-montserrat font-medium">
                            <strong className="text-third">Autobikes.id's</strong> company culture is built on the foundation of teamwork, innovation, and dedication to our customers. We create a positive, inclusive, and fun work environment where every individual feels valued and has the opportunity to contribute.
                        </div>
                    </div>
                    <div className="photo w-full h-full object-cover">
                        <Image
                            src="/About-Desc.png"
                            width={450}
                            height={450}
                            alt="About Description"
                            className="w-full h-full object-center"
                        />
                    </div>
                </div>
            </section>
            {/* About us */}

            {/* FAQ */}
            <section className="faq w-full h-full py-10 bg-primary">
                <div className="max-w-lg font-cousine me-0 text-center md:text-start md:me-auto md:mx-20 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold"><span className="text-third">Frequently Asked </span>Question</h1>
                </div>
                <div className="faq-body px-5">
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-medium border-b-4 border-third rounded-none hover:border-white">Is it safe to buy a motorcycle from overseas?</div>
                        <div className="collapse-content pt-3">
                            <p>Absolutely! We are partnered with authorized dealers overseas, ensuring the safety and legitimacy of your purchase.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-medium border-b-4 border-third rounded-none hover:border-white">What do CBU and CKD mean?</div>
                        <div className="collapse-content pt-3">
                            <ol className="list-decimal">
                                <li>CBU: Completely Built Up (fully assembled motorcycle imported from the manufacturer's country).</li>
                                <li>CKD: Completely Knock Down (motorcycle parts imported and assembled locally).</li>
                            </ol>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-medium border-b-4 border-third rounded-none hover:border-white">Can you help me with the necessary paperwork?</div>
                        <div className="collapse-content pt-3">
                            <p>Yes, we can assist you with all the required documentation to make your motorcycle roadworthy.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-medium border-b-4 border-third rounded-none hover:border-white">Where is the Autobikes.ID office located?</div>
                        <div className="collapse-content pt-3">
                            <p>Our office is located in a warehouse in Tanjung Priok, North Jakarta. This is primarily because we focus on online sales and are closer to the port where imported motorcycles arrive.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-medium border-b-4 border-third rounded-none hover:border-white">Where can I ask further questions?</div>
                        <div className="collapse-content pt-3">
                            <p>You can fill out the form below or send us an email.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ */}

            {/* Location */}
            <section className="location w-full h-full pt-10">
                <div className="max-w-lg font-cousine me-0 text-center md:text-start md:me-auto md:mx-20 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold">Our <span className="text-third">Location</span></h1>
                </div>
                <iframe width="1440" height="400" className="w-full" id="gmap_canvas" src="https://maps.google.com/maps?width=1440&amp;height=440&amp;hl=en&amp;q=Jl.%20Laksamana%20R.%20E%20%20Jakarta+(Autobikes.ID)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </section>
            {/* Location */}

            {/* Our Team */}
            <section className="team w-full h-full py-10 bg-secondary">
                
            </section>
            {/* Our Team */}
        </main>
    )
}