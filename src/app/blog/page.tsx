import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const BLOG_POSTS = [
    {
        id: 'trailblazers-escape',
        title: 'Trailblazers’ Escape: Huthri Betta & Kaurava Konda Expedition',
        excerpt: 'If you’re craving a weekend escape into Karnataka’s hills and legends, Adventra’s curated treks to Huthri Betta and Kaurava Kunda offered me with distinctly different but equally enchanting experiences.',
        author: 'Hariram V',
        date: 'Sep 20, 2024',
        readTime: '2 min read',
        image: '/images/blog/trailblazers.jpg',
        category: 'Trekking',
        slug: 'trailblazers-escape-huthri-betta-kaurava-konda-expedition'
    },
    {
        id: 'valley-of-wonders',
        title: 'A minimalist trip to the Valley of Wonders!',
        excerpt: 'August 2017. I am sitting in front of a cave, with one of the loveliest places on the planet before me - the Valley of Flowers in Uttarakhand. As I sat there admiring the wonderful view...',
        author: 'Swapnesh Banerjee',
        date: 'Sep 10, 2024',
        readTime: '6 min read',
        image: '/images/blog/valley.jpg',
        category: 'Travelogue',
        slug: 'a-minimalist-trip-to-the-valley-of-wonders'
    },
    {
        id: 'bandipur-safari',
        title: 'Mother and Cubs: A Rare Family Moment at Bandipur Safari',
        excerpt: 'Late June, while driving back from Kerala to Bangalore, we decided to take a break at the Bandipur Tiger Reserve. Yet, just ten minutes into our drive, we were unbelievably lucky.',
        author: 'Rekha M Menon',
        date: 'Aug 12, 2024',
        readTime: '2 min read',
        image: '/images/blog/bandipur.jpg',
        category: 'Wildlife',
        slug: 'mother-and-cubs-a-rare-family-moment-at-bandipur-safari'
    },
    {
        id: 'skydiving',
        title: 'Skydiving - A Dive Into the Blue',
        excerpt: 'Some experiences are hard to put into words—but let me try. I went skydiving in Melbourne, Australia, specifically at St. Kilda, and I did it for one simple reason: the thrill.',
        author: 'Sneha Khanwelkar',
        date: 'Jul 27, 2024',
        readTime: '2 min read',
        image: '/images/blog/skydiving.jpg',
        category: 'Adventure',
        slug: 'skydiving-a-dive-into-the-blue'
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-neutral-50 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <h1 className="text-4xl font-bold text-neutral-900 mb-4">Travelogues</h1>
                    <p className="text-lg text-neutral-600">
                        Stories from the community, tips for your next adventure, and updates from the Adventra team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <Link href={`https://www.adventra.tech/post/${post.slug}`} target="_blank" className="block relative h-64 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-600">
                                    {post.category}
                                </div>
                            </Link>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    <Link href={`https://www.adventra.tech/post/${post.slug}`} target="_blank">
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                                            <User className="w-4 h-4 text-neutral-500" />
                                        </div>
                                        <span className="text-sm font-medium text-neutral-900">{post.author}</span>
                                    </div>

                                    <Link
                                        href={`https://www.adventra.tech/post/${post.slug}`}
                                        target="_blank"
                                        className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
