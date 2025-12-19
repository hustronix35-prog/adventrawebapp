"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQsPage() {
    const faqs = [
        {
            question: "How do I book a trip?",
            answer: "Booking is easy! Simply browse our destinations or trips, select your preferred dates, and click 'Book Now'. Follow the prompts to enter your details and payment information."
        },
        {
            question: "Is travel insurance required?",
            answer: "Yes, we require all travelers to have comprehensive travel insurance that covers medical emergencies, evacuation, and trip cancellation."
        },
        {
            question: "What is the physical difficulty level of the trips?",
            answer: "Our trips range from easy cultural tours to strenuous high-altitude treks. Each trip page has a difficulty rating and detailed description to help you choose the right adventure for your fitness level."
        },
        {
            question: "Can I travel solo?",
            answer: "Absolutely! Many of our travelers join solo. You can choose to be paired with a roommate of the same gender or pay a single supplement for your own room."
        },
        {
            question: "What happens if my trip is cancelled?",
            answer: "If we or our operators cancel a trip, you will receive a full refund or the option to transfer to another date/trip. See our Cancellation Policy for more details."
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a href="/contact" className="text-primary font-bold hover:underline">Contact our support team</a>
                </div>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <span className="font-bold text-lg text-gray-900">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="p-6 pt-0 bg-white text-gray-600 border-t border-gray-100">
                    {answer}
                </div>
            )}
        </div>
    );
}
