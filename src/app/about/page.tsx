import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">About Adventra</h1>

                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="lead text-xl mb-8 text-center">
                            We are on a mission to help people discover the world's most extraordinary adventures.
                        </p>

                        <div className="my-12 relative h-96 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Adventra Team"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                        <p className="mb-6">
                            Founded in 2024, Adventra began with a simple idea: that adventure travel should be accessible,
                            safe, and transformative. We wanted to create a platform where travelers could find unique
                            experiences that go beyond the typical tourist trails.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Authenticity:</strong> We curate experiences that connect you with real cultures and nature.</li>
                            <li><strong>Sustainability:</strong> We prioritize eco-friendly travel and responsible tourism.</li>
                            <li><strong>Community:</strong> We believe in building a community of like-minded explorers.</li>
                            <li><strong>Safety:</strong> Your safety is our top priority in every adventure we offer.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
