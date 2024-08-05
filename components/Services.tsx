import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import styled from "styled-components";

export default function Services() {

    const ServiceSection = styled.section`
        background-color: #34373E;
        color: #fff;
    `

    return (
            <ServiceSection className="service w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>Why</span> Choose Us?</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><MdOutlineVerifiedUser /> Trusted Motorcycle Importer</h2>
                            <p className="font-montserrat">With over 300 happy customers since 2012, we are the top choice for motorcycle imports.</p>
                        </div>
                    </div>
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><IoMdCheckmarkCircleOutline /> Complete Import Services</h2>
                            <p className="font-montserrat">We handle all paperwork and invoices for your CBU motorcycle import needs.</p>
                        </div>
                    </div>
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><FaHandshake /> Expert Motorcycle Care</h2>
                            <p className="font-montserrat">With over 65 specialized workshops, your motorcycle is in the hands of experts.</p>
                        </div>
                    </div>
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><Ri24HoursFill /> 24/7 Customer Support</h2>
                            <p className="font-montserrat">Our dedicated customer service team is available 24/7 to assist you with any questions or concerns.</p>
                        </div>
                    </div>
                </div>
            </ServiceSection>
    )
}