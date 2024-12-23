import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";

const NewsletterFAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What is SprintSpace?",
            answer: "SprintSpace is a platform dedicated to empowering businesses, fostering innovation, and creating sustainable solutions.",
            isOpen: false,
        },
        {
            question: "How can I subscribe to the newsletter?",
            answer: "You can subscribe by entering your email in the form below and clicking the 'Subscribe' button.",
            isOpen: false,
        },
        {
            question: "How does the FAQ section work?",
            answer: "Click on any question to reveal the answer.",
            isOpen: false,
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => (i === index ? { ...faq, isOpen: !faq.isOpen } : faq))
        );
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100 text-white dark:from-purple-950 dark:via-purple-800 dark:to-purple-700">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Section */}
                <div className="text-center">
                    <SectionTitle
                        title="Stay Connected"
                        subtitle="Join our vibrant community by subscribing to our newsletter. Get the latest updates, exclusive content, and more directly in your inbox."
                    />
                    <div className="mt-10">
                        <form className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full sm:flex-1 px-6 py-3 text-gray-800 bg-white dark:bg-gray-900 rounded-lg focus:ring-4 focus:ring-white focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 text-lg font-semibold bg-purple-900 dark:bg-purple-400 hover:bg-purple-800 dark:hover:bg-purple-500 rounded-lg shadow-lg dark:text-black transition-transform transform focus:ring-4 focus:ring-purple-300 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12 md:mt-24">
                    <h2 className="text-4xl font-extrabold text-center text-black dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-10 space-y-6 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white focus:outline-none"
                                >
                                    {faq.question}
                                    <span className="text-purple-500">
                                        {faq.isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                {faq.isOpen && (
                                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterFAQ;
