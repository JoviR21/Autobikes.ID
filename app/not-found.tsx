export default function error() {
    return (
        <main>
            {/* Error */}
            <div className="h-screen text-center my-auto">
                <h3 className="text-4xl md:text-5xl font-cousine font-semibold">Page <span className="text-third">not found</span></h3>
                <h1 className="text-7xl md:text-8xl font-cousine font-bold">404</h1>
                <p className="text-3xl md:text-5xl font-overpass font-semibold">You will be automatically returned to the homepage in <span className="text-third">5s</span></p>
            </div>
            {/* Error */}
        </main>
    )
}