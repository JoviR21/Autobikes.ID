import Image from "next/image"

export default function FeaturedArticle() {
    
    return (
        <section className="featured-articles w-full h-full py-10">
            <div className="head flex content-center mx-3 md:mx-0 mb-2">
                <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>Featured</span> Articles</h1>
            </div>
        </section>
    )
}