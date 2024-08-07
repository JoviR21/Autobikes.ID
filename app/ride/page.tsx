"use client"

import styled from "styled-components"
import Image from "next/image"

export default function TestRide() {

    return (
        <main>
            {/* Hero */}
            <section className="hero h-72 bg-primary">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-lg font-cousine">
                        <h1 className="text-4xl md:text-5xl font-bold">Test Ride</h1>
                        <p className="text-2xl md:text-3xl py-2">
                            <span className="text-third">Let us know</span> if you'd like to schedule a <span className="text-third">Test Ride</span>...
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Form */}
            <section className="foot w-full h-full py-10 bg-secondary">
                <div className="grid grid-cols-3 mx-10 justify-center gap-7">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl text-white font-cousine font-semibold">First Name</span>
                        </div>
                        <input type="text" placeholder="Enter first name" className="input input-bordered w-full max-w-xs border-2 border-third hover:border-white transition-all " />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl text-white font-cousine font-semibold">Last Name</span>
                        </div>
                        <input type="text" placeholder="Enter last name" className="input input-bordered w-full max-w-xs border-2 border-third hover:border-white transition-all " />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl text-white font-cousine font-semibold">Phone</span>
                        </div>
                        <input type="text" placeholder="Enter number phone" className="input input-bordered w-full max-w-xs border-2 border-third hover:border-white transition-all " />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl text-white font-cousine font-semibold">Email</span>
                        </div>
                        <input type="text" placeholder="Enter email" className="input input-bordered w-full max-w-xs border-2 border-third hover:border-white transition-all " />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl text-white font-cousine font-semibold">Model & Type</span>
                        </div>
                        <input type="text" placeholder="Model & type bikes you want test" className="input input-bordered w-full max-w-xs border-2 border-third hover:border-white transition-all " />
                    </label>
                </div>
            </section>
            {/* Form */}
        </main>
    )
}