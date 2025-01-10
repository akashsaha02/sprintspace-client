import SectionTitle from "../shared/SectionTitle";

const NewsletterFAQ = () => {

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100 text-white dark:from-purple-950 dark:via-purple-800 dark:to-purple-700">
            <div className="max-w-[1920px] mx-auto">
                {/* Newsletter Section */}
                <div className="text-center">
                    <SectionTitle
                        title="Stay Updated"
                        subtitle="Join our community of runners!"
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
                    <h2 className="text-4xl font-extrabold text-center text-black dark:text-white mb-6 font-faj">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg mb-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-white">
                                What is SprintSpace?
                            </div>
                            <div className="collapse-content text-gray-600 dark:text-gray-300">
                                <p>
                                    SprintSpace is a platform designed to inspire and connect runners, promote fitness, and organize exciting marathons for all levels.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg mb-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-white">
                                How can I register for a marathon?
                            </div>
                            <div className="collapse-content text-gray-600 dark:text-gray-300">
                                <p>
                                    You can register by visiting our 'All Marathons' page and selecting the marathon you want to participate in. Follow the instructions to complete your registration.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-white">
                                What should I bring on race day?
                            </div>
                            <div className="collapse-content text-gray-600 dark:text-gray-300">
                                <p>
                                    Ensure you bring your race bib, a valid ID, comfortable running gear, and hydration essentials. Check the event guide for specific requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterFAQ;
