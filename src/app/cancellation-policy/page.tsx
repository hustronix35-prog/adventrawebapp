export default function CancellationPolicyPage() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Cancellation Policy</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
                    <p className="lead font-medium text-gray-900">
                        We understand that plans can change. Our cancellation policy is designed to be fair to both travelers and our local operators.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Standard Cancellation Terms</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 font-bold text-gray-900">Time Before Departure</th>
                                    <th className="py-4 font-bold text-gray-900">Refund Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4">60+ days</td>
                                    <td className="py-4 text-green-600 font-medium">100% Refund (minus deposit)</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4">30-59 days</td>
                                    <td className="py-4 text-yellow-600 font-medium">50% Refund</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4">15-29 days</td>
                                    <td className="py-4 text-orange-600 font-medium">25% Refund</td>
                                </tr>
                                <tr>
                                    <td className="py-4">0-14 days</td>
                                    <td className="py-4 text-red-600 font-medium">No Refund</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Force Majeure</h3>
                    <p>
                        In the event of cancellations due to force majeure (e.g., natural disasters, political instability),
                        we will work with our operators to offer a full credit for future travel or a refund where possible.
                    </p>
                </div>
            </div>
        </div>
    );
}
