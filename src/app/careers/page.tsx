export default function CareersPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-6">Join the Adventure</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    We're looking for passionate individuals to help us build the future of adventure travel.
                </p>

                <div className="bg-gray-50 rounded-2xl p-12 max-w-2xl mx-auto border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">No Open Positions</h2>
                    <p className="text-gray-500 mb-8">
                        We don't have any open roles right now, but we're always interested in meeting talented people.
                    </p>
                    <a href="mailto:careers@adventra.com" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                        Send us your resume
                    </a>
                </div>
            </div>
        </div>
    );
}
