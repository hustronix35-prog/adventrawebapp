export default function PressPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Press & Media</h1>
                <p className="text-xl text-gray-600 mb-12">
                    Latest news, updates, and media resources from Adventra.
                </p>

                <div className="space-y-8">
                    <div className="border-b border-gray-100 pb-8">
                        <span className="text-sm text-gray-400">November 20, 2024</span>
                        <h3 className="text-2xl font-bold mt-2 mb-3">Adventra Launches New Community Features</h3>
                        <p className="text-gray-600 mb-4">
                            We are excited to announce the launch of Adventra Circles, a new way for travelers to connect...
                        </p>
                        <a href="#" className="text-primary font-medium hover:underline">Read Release</a>
                    </div>

                    <div className="border-b border-gray-100 pb-8">
                        <span className="text-sm text-gray-400">October 15, 2024</span>
                        <h3 className="text-2xl font-bold mt-2 mb-3">Adventra Raises Seed Funding to Revolutionize Adventure Travel</h3>
                        <p className="text-gray-600 mb-4">
                            Leading venture capital firms back Adventra's mission to make adventure travel accessible to everyone...
                        </p>
                        <a href="#" className="text-primary font-medium hover:underline">Read Release</a>
                    </div>
                </div>

                <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4">Media Inquiries</h3>
                    <p className="text-gray-600 mb-4">
                        For press kits, interviews, or other media inquiries, please contact our press team.
                    </p>
                    <a href="mailto:press@adventra.com" className="text-primary font-bold">press@adventra.com</a>
                </div>
            </div>
        </div>
    );
}
