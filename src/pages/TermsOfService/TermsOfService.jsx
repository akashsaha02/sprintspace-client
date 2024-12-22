import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4 text-lg">
          Welcome to SprintSpace! By accessing or using our platform, you agree to
          abide by the following Terms of Service. Please read them carefully.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By using SprintSpace, you agree to comply with and be legally bound by
            these Terms of Service, as well as our Privacy Policy. If you do not
            agree to any of these terms, you must not use our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have the consent of a parent or
            guardian to use our services. By using SprintSpace, you represent and
            warrant that you meet this requirement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>You agree not to use the platform for unlawful purposes or activities.</li>
            <li>
              You must provide accurate, complete, and updated information when
              creating campaigns or using our services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Campaign Guidelines</h2>
          <p>
            All campaigns must comply with our guidelines, including but not
            limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Not engaging in fraudulent or misleading practices.</li>
            <li>Ensuring the accuracy of all campaign details and updates.</li>
            <li>Using funds solely for the stated campaign purpose.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            SprintSpace is not liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from your use of the
            platform. All transactions are at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any
            time if you violate these Terms of Service or engage in activities
            harmful to the platform or other users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p>
            SprintSpace may update these Terms of Service from time to time. Any
            changes will be posted on this page with an updated effective date.
            Continued use of the platform constitutes acceptance of the updated
            terms.
          </p>
        </section>

        <footer className="mt-8">
          <p>
            If you have any questions about these Terms of Service, please
            contact us at{" "}
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

export default TermsOfService;
