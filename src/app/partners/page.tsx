export default function PartnersPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-6">Partner with Adventra</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join our network of world-class tour operators, guides, and travel brands.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <div className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-4">For Tour Operators</h3>
                        <p className="text-gray-500 mb-6">List your unique adventures on our platform and reach a global audience of travelers.</p>
                        <button className="text-primary font-semibold">Learn More &rarr;</button>
                    </div>
                    <div className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-4">For Content Creators</h3>
                        <p className="text-gray-500 mb-6">Share your stories and earn through our affiliate and ambassador programs.</p>
                        <button className="text-primary font-semibold">Learn More &rarr;</button>
                    </div>
                    <div className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-4">For Gear Brands</h3>
                        <p className="text-gray-500 mb-6">Connect with active travelers who need the best equipment for their journeys.</p>
                        <button className="text-primary font-semibold">Learn More &rarr;</button>
                    </div>
                </div>

                <div className="bg-primary text-white rounded-3xl p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to grow with us?</h2>
                    <p className="mb-8 text-white/90">Get in touch with our partnerships team today.</p>
                    <a href="mailto:partners@adventra.com" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Contact Partnerships
                    </a>
                </div>
            </div>
        </div>
    );
}
