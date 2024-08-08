"use client"

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
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 px-16">
                    <label className="first-name form-control w-full">
                        <span className="label-text text-xl text-white mb-2 ms-5 font-cousine font-semibold placeholder:font-montserrat">First Name</span>
                        <input type="text" placeholder="Type your first name" className="input input-bordered w-full border-0 rounded-sm border-b-4 border-third hover:border-white transition-all ease-in-out" required />
                    </label>
                    <label className="last-name form-control w-full">
                        <span className="label-text text-xl text-white mb-2 ms-5 font-cousine font-semibold placeholder:font-montserrat">Last Name</span>
                        <input type="text" placeholder="Type your last name" className="input input-bordered w-full border-0 rounded-sm border-b-4 border-third hover:border-white transition-all ease-in-out" required />
                    </label>
                    <label className="email form-control w-full">
                        <span className="label-text text-xl text-white mb-2 ms-5 font-cousine font-semibold placeholder:font-montserrat">Email</span>
                        <input type="email" placeholder="Type your email" className="input input-bordered w-full border-0 rounded-sm border-b-4 border-third hover:border-white transition-all ease-in-out" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
                    </label>
                    <label className="phone form-control w-full">
                        <span className="label-text text-xl text-white mb-2 ms-5 font-cousine font-semibold placeholder:font-montserrat">No. Phone</span>
                        <input type="number" placeholder="Type your phone number" className="input input-bordered w-full border-0 rounded-sm border-b-4 border-third hover:border-white transition-all ease-in-out" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </label>
                    <label className="City form-control w-full">
                        <span className="label-text text-xl text-white mb-2 ms-5 font-cousine font-semibold placeholder:font-montserrat">City</span>
                        <textarea placeholder="Type your city" className="input input-bordered w-full h-20 border-0 rounded-sm border-b-4 border-third hover:border-white transition-all ease-in-out placeholder:pt-2" />
                    </label>
                    <label className="message form-control w-full">
                        <span className="label-text text-xl text-white mb-2 ms-5 font-cousine font-semibold placeholder:font-montserrat">Message</span>
                        <textarea placeholder="Type message (optional)" className="input input-bordered w-full h-20 border-0 rounded-sm border-b-4 border-third hover:border-white transition-all ease-in-out placeholder:pt-2" />
                    </label>
                    <label className="submit form-control md:w-fit w-full">
                        <input type="submit" className="btn btn-xl border-2 border-third rounded px-20 py-0 hover:translate-x-1 transition-all delay-100 ease-in" placeholder="Send Request" />
                    </label>
                </div>
            </section>
            {/* Form */}
        </main>
    )
}