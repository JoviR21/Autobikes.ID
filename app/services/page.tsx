"use client"

import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

import Image from "next/image";


export default function Services() {

    return (
        <main>
            {/* Hero */}
            <section className="hero h-72 bg-primary">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-lg font-cousine">
                        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
                        <p className="text-1xl md:text-2xl py-2">
                            All services from <span className="text-third font-quicksand font-semibold">Autobikes.ID</span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Benefit */}
            <section className="benefit w-full h-full py-10 bg-secondary">
                <h1 className='text-xl md:text-3xl text-center md:text-start md:me-auto md:mx-16 font-cousine font-bold mb-5'><span className='text-third'>Benefits</span> of buying a motorcycle from <span className="font-quicksand text-third">Autobikes.ID</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 py-3 gap-5 place-items-center">
                    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-5">
                        <div className="card w-80 lg:w-72 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] hover:border-2 hover:border-third transition-all ease-in-out">
                            <div className="card-body">
                                <h2 className="card-title font-cousine font-bold"><MdOutlineVerifiedUser /> Trusted Motorcycle Importer</h2>
                                <p className="font-montserrat">With over 300 happy customers since 2012, we are the top choice for motorcycle imports.</p>
                            </div>
                        </div>
                        <div className="card w-80 lg:w-72 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] hover:border-2 hover:border-third transition-all ease-in-out">
                            <div className="card-body">
                                <h2 className="card-title font-cousine font-bold"><IoMdCheckmarkCircleOutline /> Complete Import Services</h2>
                                <p className="font-montserrat">We handle all paperwork and invoices for your CBU motorcycle import needs.</p>
                            </div>
                        </div>
                        <div className="card w-80 lg:w-72 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] hover:border-2 hover:border-third transition-all ease-in-out">
                            <div className="card-body">
                                <h2 className="card-title font-cousine font-bold"><FaHandshake /> Expert Motorcycle Care</h2>
                                <p className="font-montserrat">With over 65 specialized workshops, your motorcycle is in the hands of experts.</p>
                            </div>
                        </div>
                        <div className="card w-80 lg:w-72 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] hover:border-2 hover:border-third transition-all ease-in-out">
                            <div className="card-body">
                                <h2 className="card-title font-cousine font-bold"><Ri24HoursFill /> 24/7 Customer Support</h2>
                                <p className="font-montserrat">Our dedicated customer service team is available 24/7 to assist you with any questions or concerns.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image px-8 md:ps-0">
                        <Image
                            src="/MV-Agusta-F3.png"
                            width={495}
                            height={400}
                            alt="Mv Agusta F3"
                            className="w-full h-full border-2 border-white rounded-2xl"
                            loading="lazy" />
                    </div>
                </div>
            </section>
            {/* Benefit */}

            {/* Another Service */}
            <section className="another w-full h-full py-10 bg-primary">
                <h1 className='text-xl md:text-3xl text-center md:text-start md:me-auto md:mx-16 font-cousine font-bold mb-5'>Another<span className='text-third'> services</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto gap-5 lg:gap-20">
                    <div className="card bg-fourth w-80 h-full shadow-xl border-4 border-third">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-cousine font-semibold">Detailing Motorcycles</h2>
                            <h5 className="text-base font-montserrat font-medium">Turn your motorcycle into the center of attention on the road.</h5>
                            <div className="border-b-4 rounded border-third mb-4 mt-3"></div>
                            <ol className="list-service list-disc text-base font-montserrat font-medium ms-5 gap-5">
                                <li>Exterior Cleaning</li>
                                <li>Interior Cleaning</li>
                                <li>Additional Protection</li>
                            </ol>
                            <div className="card-actions mt-auto">
                                <h3 className="font-overpass font-extrabold text-third text-3xl text-start mt-7">1,200K</h3>
                                <button className="btn bg-primary justify-center border-2 border-white hover:border-third hover:opacity-85 font-overpass font-extrabold w-full btn-sm text-xl text-white">Chat Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-fourth w-80 h-full shadow-xl border-4 border-third">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-cousine font-semibold">Light Maintenance</h2>
                            <h5 className="text-base font-montserrat font-medium">Pamper your beloved motorcycle with regular servicing.</h5>
                            <div className="border-b-4 rounded border-third mb-4 mt-3"></div>
                            <ol className="list-service list-disc text-base font-montserrat font-medium ms-5 gap-5">
                                <li>Oil Check & Replacement</li>
                                <li>Electrical System Check</li>
                                <li>Towing Motorcycles</li>
                            </ol>
                            <div className="card-actions mt-auto">
                                <h3 className="font-overpass font-extrabold text-third text-3xl text-start mt-7">700K</h3>
                                <button className="btn bg-primary justify-center border-2 border-white hover:border-third hover:opacity-85 font-overpass font-extrabold w-full btn-sm text-xl text-white">Chat Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-fourth w-80 h-full shadow-xl border-4 border-third">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-cousine font-semibold">Towing Motorcycles</h2>
                            <h5 className="text-base font-montserrat font-medium">Don't panic when your motorcycle breaks down, we're here to help.</h5>
                            <div className="border-b-4 rounded border-third mb-4 mt-3"></div>
                            <ol className="list-service list-disc text-base font-montserrat font-medium ms-5 gap-5">
                                <li>Vehicle Transportation</li>
                                <li>Delivery to the Workshop</li>
                                <li>24 Hours Service</li>
                            </ol>
                            <div className="card-actions mt-auto">
                                <h3 className="font-overpass font-extrabold text-third text-3xl text-start mt-7">1,600K</h3>
                                <button className="btn bg-primary justify-center border-2 border-white hover:border-third hover:opacity-85 font-overpass font-extrabold w-full btn-sm text-xl text-white">Chat Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Another Service */}

            {/* Testimonials */}
            <section className="testimonials w-full h-full py-10 bg-primary">
                <h1 className='text-xl md:text-3xl text-center md:text-start md:me-auto md:mx-16 font-cousine font-bold mb-5'><span className='text-third'>What</span> people say about us...</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7">
                    <div className="card bg-base-100 w-64 md:w-80 lg:w-96 h-full shadow-xl">
                        <div className="card-body">
                            <div className="profile mx-auto">
                                <Image src="/Profile-Testi.png" width={65} height={65} alt="User" className="rounded-full mx-auto"/>
                                <h2 className="card-title font-overpass font-semibold capitalize text-center mt-2 hover:text-third cursor-pointer transition-all ease-linear">John Doe</h2>
                            </div>
                            <p className="text-justify mt-auto font-montserrat font-medium">"Thank you, Autobikes.ID for the excellent service. I am very satisfied with my new motorcycle."</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-64 md:w-80 lg:w-96 h-full shadow-xl">
                        <div className="card-body">
                            <div className="profile mx-auto">
                                <Image src="/Profile-Testi.png" width={65} height={65} alt="User" className="rounded-full mx-auto"/>
                                <h2 className="card-title font-overpass font-semibold capitalize text-center mt-2 hover:text-third cursor-pointer transition-all ease-linear">Jane Doe</h2>
                            </div>
                            <p className="text-justify mt-auto font-montserrat font-medium">"I am very lucky to choose Autobikes.ID as my motorcycle dealer. My motorcycle is always in prime condition after being serviced here."</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-64 md:w-80 lg:w-96 h-full shadow-xl">
                        <div className="card-body">
                            <div className="profile mx-auto">
                                <Image src="/Profile-Testi.png" width={65} height={65} alt="User" className="rounded-full mx-auto"/>
                                <h2 className="card-title font-overpass font-semibold capitalize text-center mt-2 hover:text-third cursor-pointer transition-all ease-linear">Joko Doe</h2>
                            </div>
                            <p className="text-justify mt-auto font-montserrat font-medium">"My motorcycle is as good as new after being serviced at Autobikes.ID. The technicians here are very professional and meticulous."</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials */}

            {/* Chat us */}
            <section className="foot w-full h-full py-10 bg-secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-10 justify-center ">
                    <div className="head">
                        <h2 className="text-3xl md:text-6xl max-w-none md:max-w-64 font-cousine font-semibold">Chat us, to ask about <span className="text-third">Services</span></h2>
                    </div>
                    <form className="chat grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Full Name" className="bg-secondary border-0 rounded-none border-b-4 border-third input w-full max-w-xs placeholder:font-cousine placeholder:font-bold" />
                        <input type="text" placeholder="Bike Type" className="bg-secondary border-0 rounded-none border-b-4 border-third input w-full max-w-xs placeholder:font-cousine placeholder:font-bold" />
                        <input type="text" placeholder="Address" className="bg-secondary border-0 rounded-none border-b-4 border-third input w-full max-w-xs placeholder:font-cousine placeholder:font-bold" />
                        <input type="text" placeholder="Service Type" className="bg-secondary border-0 rounded-none border-b-4 border-third input w-full max-w-xs placeholder:font-cousine placeholder:font-bold" />
                        <textarea placeholder="Message" className="bg-secondary border-0 rounded-none border-b-4 border-third input w-full h-14 max-w-xs placeholder:font-cousine placeholder:font-bold" />
                        <button className="btn btn-sm btn-ghost border-2 border-third w-fit mt-6">Send Message</button>
                    </form>
                </div>
            </section>
            {/* Chat us */}
        </main>
    )
}