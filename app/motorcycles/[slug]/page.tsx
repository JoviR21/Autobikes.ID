import Image from "next/image";

export default function MotorcycleSlug() {

    return (
        <main className="bg-secondary">
            {/* Banner */}
            <section className="banner carousel w-full h-40 lg:h-96 px-5 lg:px-36 mt-10 border-none">
                <div id="item1" className="carousel-item w-full relative">
                    <Image
                        src="/Details-Product.png"
                        width={1200}
                        height={470}
                        alt="Supermoto vs Trail Bikes: A comparative Guides"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Banner */}

            {/* Desc */}
            <div className="paragraph w-full h-full pt-10 px-5 bg-secondary">
            <div className="hero-content text-justify me-0 md:me-auto mx-auto">
                    <div className="font-montserrat font-medium">
                        <p className="text-base mb-8">
                        The Honda CBR650R is a middleweight sportbike designed to provide a balanced riding experience. With its 649cc inline-four engine, it delivers a smooth power delivery and responsive acceleration, making it suitable for both everyday commuting and spirited rides.
                        </p>
                    </div>
                </div>
            </div>
            {/* Desc */}

            {/* Spec */}
            <section className="faq w-full h-full pb-10">
                <div className="faq-body px-5">
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Engine</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <ol className="list-disc">
                                <li>Type: 649cc liquid-cooled inline four-cylinder four-stroke</li>
                                <li>Bore and Stroke: 67.0mm x 46.0mm</li>
                                <li>Compression Ratio: 11.6:1</li>
                                <li>Induction: PGM-FI with 32mm throttle bodies</li>
                                <li>Transmission: 6-speed</li>
                                <li>Maximum Power: Approximately 85-90 hp (depending on year and emission regulations)</li>
                                <li>Maximum Torque: Approximately 60-65 Nm</li>
                            </ol>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Chassis & Suspension</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <ol className="list-disc">
                                <li>Frame: Diamond type, steel</li>
                                <li>Front Suspension: Telescopic fork, spring preload and damping adjustable</li>
                                <li>Rear Suspension: Pro-link with monoshock, spring preload adjustable</li>
                                <li>Front Brake: Dual disc, ABS</li>
                                <li>Rear Brake: Single disc, ABS</li>
                                <li>Front Tire: Radial, size varies depending on model and year</li>
                                <li>Rear Tire: Radial, size varies depending on model and year</li>
                            </ol>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Dimension & Weight</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <ol className="list-disc">
                                <li>Length: Approximately 2080 mm</li>
                                <li>Width: Approximately 780 mm</li>
                                <li>Height: Approximately 1150 mm</li>
                                <li>Wheelbase: Approximately 1410 mm</li>
                                <li>Seat Height: Approximately 810 mm</li>
                                <li>Kerb Weight: Approximately 200 kg</li>
                            </ol>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Capacity</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <ol className="list-disc">
                                <li>Fuel Tank: Approximately 15 liters</li>
                            </ol>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Electrical</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <ol className="list-disc">
                                <li>Instrument Panel: Digital LCD, displays speed, rpm, fuel, trip meter, and more.</li>
                                <li>Lighting: Full LED.</li>
                                <li>Additional Features: Some models may come with features like Honda Selectable Torque Control (HSTC), assist/slipper clutch, and TFT instrument panel.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {/* Spec */}
        </main>
    )
}