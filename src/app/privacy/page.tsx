export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last updated: November 30, 2024</p>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                        At Adventra, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h3>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, book a trip,
                        or contact customer support. This may include your name, email, phone number, and payment information.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To process your bookings and payments.</li>
                        <li>To communicate with you about your trips and account.</li>
                        <li>To send you marketing communications (if you opt in).</li>
                        <li>To improve our services and website.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against
                        unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </div>
            </div>
        </div>
    );
}
