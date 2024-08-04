"use client"

import Carousel from '@/components/Carousel';
import Category from '@/components/Category';
import FeaturedArticle from '@/components/FeaturedArticles';
import FeaturedProduct from '@/components/FeaturedProduct';
import Services from '@/components/Services';

export default function Home() {

    return (
        <main>
            <Carousel />
            <Category />
            <Services />
            <FeaturedProduct />
            <FeaturedArticle />
        </main>
    )
}
