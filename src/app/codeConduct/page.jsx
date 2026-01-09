'use client'
import React from 'react'

const Page = () => {
  return (
    <div className="px-3">
      <div className=" ">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Code of Conduct
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8">
          Last updated: October 26, 2023
        </p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">MYTRAINERR</span>. These terms and conditions outline the rules and regulations
          for the use of MYTRAINERRs services. By accessing this app we assume you accept these terms and conditions.
          Do not continue to use MYTRAINERR if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Scope of Service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MYTRAINERR provides an online platform that connects individuals seeking fitness training Clients with personal
            trainers Trainers. The services include facilitating the booking, payment, and management of training sessions.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. User Accounts & Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To access our services, you must register for an account. You agree to provide accurate, current, and complete
            information during the registration process and to update such information to keep it accurate, current, and
            complete. You are responsible for safeguarding your password and for any activities or actions under your account.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Booking and Payment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Clients can book sessions with Trainers through the app. All payments are processed through our third-party payment
            provider. Cancellation and refund policies are determined by each trainer and will be clearly stated at the time of
            booking. MYTRAINERR is not responsible for any disputes between Clients and Trainers regarding payments or services.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Liability & Disclaimers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MYTRAINERR is a platform provider and is not liable for the quality of training, advice, or any injuries that may occur
            during a session. Users engage with trainers at their own risk. We do not conduct background checks on all Trainers and
            encourage Clients to perform their own due diligence.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Termination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately
            cease.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions about these Terms, please contact us at{' '}
            <a
              href="mailto:legal@mytrainerr.app"
              className="text-teal-600 hover:underline font-medium"
            >
              legal@mytrainerr.app
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  )
}

export default Page
