const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-6 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl lg:text-4xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4 text-lg">
                    Welcome to SprintSpace! Your privacy is critically important to us. This
                    Privacy Policy outlines the types of information we collect, how we
                    use it, and the measures we take to protect your data.
                </p>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                    <p className="mb-2">
                        When you use SprintSpace, we may collect the following types of
                        information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Personal information such as your name, email address, and phone number.</li>
                        <li>Campaign details and any content you upload.</li>
                        <li>Payment and billing information for transactions.</li>
                        <li>Log data, including IP addresses and browser details.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <p className="mb-2">
                        We use the information collected for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>To provide, maintain, and improve our services.</li>
                        <li>To process transactions and send updates about your campaigns.</li>
                        <li>To communicate with you, including customer support.</li>
                        <li>To ensure compliance with our terms and conditions.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                    <p>
                        We take reasonable measures to protect your information from
                        unauthorized access, disclosure, or destruction. However, no method
                        of electronic transmission or storage is completely secure.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your personal
                        information. To exercise these rights, please contact us at
                        <a
                            href="mailto:support@SprintSpace.com"
                            className="text-teal-500 hover:text-teal-400"
                        >
                            {" "}
                            support@SprintSpace.com
                        </a>
                        .
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Changes to this Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes
                        will be posted on this page with an updated effective date.
                    </p>
                </section>
                <footer className="mt-8">
                    <p>
                        If you have any questions about this Privacy Policy, please contact
                        us at{" "}
                        <a
                            href="mailto:support@SprintSpace.com"
                            className="text-teal-500 hover:text-teal-400"
                        >
                            support@SprintSpace.com
                        </a>
                        .
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
