"use client"

import Image from "next/image";

export default function OurTeams() {

    return (
        <main>
            {/* Hero */}
            <section className="hero h-72 bg-primary">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-lg font-cousine">
                        <h1 className="text-3xl md:text-4xl font-bold">Meet Our Team</h1>
                        <p className="text-1xl md:text-2xl py-2">
                            <span className="text-third font-semibold">This is</span> our teams who works at <span className="text-third font-quicksand font-semibold">Autobikes.ID</span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Teams */}
            <section className="teams w-full h-full py-10 px-5 bg-secondary">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto gap-7">
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
                        <figure>
                            <Image
                                src="/Profiles-Teams.png"
                                width={160}
                                height={220}
                                alt="Profile Teams" 
                                className="w-full h-full"
                            />
                        </figure>
                        <div className="card-body max-w-xs">
                            <h2 className="card-title font-cousine text-2xl">Matt David</h2>
                            <h2 className="card-title font-cousine text-3xl">CEO</h2>
                            <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
                            <div className="card-actions justify-start">
                                <p>mattdav@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
                        <figure>
                            <Image
                                src="/Profiles-Teams.png"
                                width={160}
                                height={220}
                                alt="Profile Teams" 
                                className="w-full h-full"
                            />
                        </figure>
                        <div className="card-body max-w-xs">
                            <h2 className="card-title font-cousine text-2xl">Matt David</h2>
                            <h2 className="card-title font-cousine text-3xl">CO-Founder</h2>
                            <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
                            <div className="card-actions justify-start">
                                <p>mattdav@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
                        <figure>
                            <Image
                                src="/Profiles-Teams.png"
                                width={160}
                                height={220}
                                alt="Profile Teams" 
                                className="w-full h-full"
                            />
                        </figure>
                        <div className="card-body max-w-xs">
                            <h2 className="card-title font-cousine text-2xl">Matt David</h2>
                            <h2 className="card-title font-cousine text-3xl">Head Mechanic</h2>
                            <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
                            <div className="card-actions justify-start">
                                <p>mattdav@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
                        <figure>
                            <Image
                                src="/Profiles-Teams.png"
                                width={160}
                                height={220}
                                alt="Profile Teams" 
                                className="w-full h-full"
                            />
                        </figure>
                        <div className="card-body max-w-xs">
                            <h2 className="card-title font-cousine text-2xl">Matt David</h2>
                            <h2 className="card-title font-cousine text-3xl">Head Marketing</h2>
                            <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
                            <div className="card-actions justify-start">
                                <p>mattdav@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
                        <figure>
                            <Image
                                src="/Profiles-Teams.png"
                                width={160}
                                height={220}
                                alt="Profile Teams" 
                                className="w-full h-full"
                            />
                        </figure>
                        <div className="card-body max-w-xs">
                            <h2 className="card-title font-cousine text-2xl">Matt David</h2>
                            <h2 className="card-title font-cousine text-3xl">Manager</h2>
                            <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
                            <div className="card-actions justify-start">
                                <p>mattdav@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
                        <figure>
                            <Image
                                src="/Profiles-Teams.png"
                                width={160}
                                height={220}
                                alt="Profile Teams" 
                                className="w-full h-full"
                            />
                        </figure>
                        <div className="card-body max-w-xs">
                            <h2 className="card-title font-cousine text-2xl">Matt David</h2>
                            <h2 className="card-title font-cousine text-3xl">Secretary</h2>
                            <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
                            <div className="card-actions justify-start">
                                <p>mattdav@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Teams */}
        </main>
    )
}