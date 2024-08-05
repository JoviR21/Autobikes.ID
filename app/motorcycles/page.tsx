export default function Motorcycles() {

    return (
        <main>
            {/* Hero */}
            <section className="hero bg-base-200 h-72">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-md">
                        <h1 className="text-4xl md:text-5xl font-bold">Motorcycles</h1>
                        <p className="text-2xl md:text-3xl py-2">
                            Get your dream <span className="text-third">motorcycles</span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Filter */}
            <section className="w-full h-full py-7">
                <ul className="text-center flex gap-14 justify-center">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Custom</a></li>
                    <li><a href="#">Trails</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Touring</a></li>
                    <li><a href="#">Naked</a></li>
                </ul>
            </section>
            {/* Filter */}
        </main>
    )
}