export default function TermsPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
                <p className="text-gray-500 mb-8">Last updated: November 30, 2024</p>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                        Welcome to Adventra. By accessing our website and booking our services, you agree to be bound by these Terms and Conditions.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Booking & Payments</h3>
                    <p>
                        A deposit is required to secure your booking. The remaining balance is due 30 days prior to the trip start date.
                        We accept major credit cards and bank transfers.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. User Responsibilities</h3>
                    <p>
                        You are responsible for ensuring you meet the health and fitness requirements for your chosen adventure.
                        You must also possess valid travel documents (passport, visas) for the destination.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Liability</h3>
                    <p>
                        Adventra acts as an agent for third-party operators. We are not liable for acts, errors, omissions,
                        representations, warranties, breaches, or negligence of any such suppliers.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h3>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the property of Adventra
                        and protected by copyright laws.
                    </p>
                </div>
            </div>
        </div>
    );
}
