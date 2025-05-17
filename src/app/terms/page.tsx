import IntBanner from "@/components/IntBanner";

export default function Terms() {
  return (
    <div className=" min-h-screen">
      <IntBanner
        title={" Terms "}
        description={`"By using this website, you agree to comply with our terms and conditions. These include respecting intellectual property rights, maintaining confidentiality, and adhering to appropriate usage. We reserve the right to modify these terms at any time. Users must ensure compliance with all applicable laws while accessing the site."`}
      />
      <div className="text-gray-900 leading-relaxed space-y-8 max-w-6xl mx-auto px-6 py-12">
        <p>
          We prioritize your privacy and are committed to protecting your
          personal information. We collect data such as your name, email, and
          job application details to help match you with relevant career
          opportunities, improve user experience, and communicate important
          updates. Your data is stored securely using encryption and other
          safety measures to prevent unauthorized access. We do not share your
          information with third parties without your consent, except when
          required by law or to fulfill our services. You have the right to
          access, update, or delete your data at any time. For inquiries, feel
          free to contact us.
        </p>

        <section>
          <h2 className="font-semibold text-lg mb-2 text-primary">
            How We Use Your Information. Your personal data is used to:
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Connect you with job opportunities</li>
            <li>Improve user experience on the website</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send relevant job alerts and notifications</li>
          </ul>
          <p className="mt-4">
            Your data is stored securely using encryption and other safety
            measures to prevent unauthorized access. We do not share your
            information with third parties without your consent, except when
            required by law or to fulfill our services. You have the right to
            access, update, or delete your data at any time. For inquiries, feel
            free to contact us.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2 text-primary">
            How We Use Your Information. Your personal data is used to:
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Connect you with job opportunities</li>
            <li>Improve user experience on the website</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send relevant job alerts and notifications</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2 text-primary">
            Cookies and Tracking
          </h2>
          <p>
            We use cookies to improve website functionality and analyze user
            behavior. By using our website, you consent to the use of cookies.
          </p>
          <p className="mt-2">
            You have the right to access, update, or delete your personal
            information at any time. Please contact us if you wish to make any
            changes.
          </p>
          <p className="mt-2">
            Changes to This Privacy Policy We reserve the right to modify this
            policy. Any changes will be posted on this page, with an updated
            date. Contact Us For any questions regarding your privacy, please
            reach out to us through our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
