import Link from "next/link";

export default function Footer() {

    return (
        <footer className="content-center">
            <div className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title text-third">Motorcycles</h6>
                    <Link href="/motorcycles" className="link link-hover">Adventure</Link>
                    <Link href="/motorcycles" className="link link-hover">Custom</Link>
                    <Link href="/motorcycles" className="link link-hover">Trails</Link>
                    <Link href="/motorcycles" className="link link-hover">Sport</Link>
                    <Link href="/motorcycles" className="link link-hover">Touring</Link>
                    <Link href="/motorcycles" className="link link-hover">Naked</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-third">Services</h6>
                    <Link href="/services" className="link link-hover">Trusted</Link>
                    <Link href="/services" className="link link-hover">Complete paper</Link>
                    <Link href="/services" className="link link-hover">Partners</Link>
                    <Link href="/services" className="link link-hover">Customer services</Link>
                    <Link href="/services" className="link link-hover">Testimonials</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-third">About</h6>
                    <Link href="/about" className="link link-hover">History</Link>
                    <Link href="/about" className="link link-hover">Company Culture</Link>
                    <Link href="/about" className="link link-hover">FAQ</Link>
                    <Link href="/about" className="link link-hover">Locations</Link>
                    <Link href="/about" className="link link-hover">Contact us</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-third">Others</h6>
                    <Link href="/ride" className="link link-hover">Test ride</Link>
                    <Link href="/articles" className="link link-hover">Articles</Link>
                </nav>
                <nav>
                    <h3 className="footer-title text-3xl max-w-64 text-left md:text-right md:ms-auto">find your <span className="text-third">dream motorcycle</span> here!</h3>
                </nav>
            </div>
            <div className="border-b-2 w-full"></div>
            <div className="footer bg-base-200 text-base-content p-10">
                <nav className="flex">
                    <h6 className="footer-title font-quicksand font-semibold">All Right Reserved - <span>&copy;</span> 2024 Autobikes.ID</h6>
                </nav>
            </div>
        </footer>
    )
}