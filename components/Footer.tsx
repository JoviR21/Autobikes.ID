export default function Footer() {

    return (
        <footer>
            <div className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title text-third">Motorcycles</h6>
                    <a className="link link-hover">Adventure</a>
                    <a className="link link-hover">Custom</a>
                    <a className="link link-hover">Trails</a>
                    <a className="link link-hover">Sport</a>
                    <a className="link link-hover">Touring</a>
                    <a className="link link-hover">Naked</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-third">Apparels</h6>
                    <a className="link link-hover">Helmets</a>
                    <a className="link link-hover">Gloves</a>
                    <a className="link link-hover">Jackets</a>
                    <a className="link link-hover">Shoes</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-third">Services</h6>
                    <a className="link link-hover">Trusted</a>
                    <a className="link link-hover">Complete paper</a>
                    <a className="link link-hover">Partners</a>
                    <a className="link link-hover">Customer services</a>
                    <a className="link link-hover">Testimonials</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-third">Other's</h6>
                    <a className="link link-hover">Test drives</a>
                    <a className="link link-hover">Articles</a>
                    <a className="link link-hover">About us</a>
                </nav>
                <nav>
                    <h1 className="footer-title text-3xl max-w-64 text-left md:text-right">find your <span className="text-third">dream motorcycle</span> here!</h1>
                </nav>
            </div>
            <div className="border-b-2 w-full"></div>
            <div className="footer bg-base-200 text-base-content p-10">
                <nav className="flex ms-auto">
                    <h6 className="footer-title font-quicksand font-semibold">All Right Reserved - <span>&copy;</span> 2024 Autobikes.ID</h6>
                </nav>
            </div>
        </footer>
    )
}