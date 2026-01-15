const Step5Agreement = ({ onNext }) => (
  <div className="space-y-6">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-xl font-bold italic">Service Agreement</h2>
      <p className="text-sm text-gray-500 mt-1">
        Please carefully review the contract terms below to proceed with your trainer account setup.
      </p>
    </div>

    {/* Agreement Box */}
    <div className="  text-sm text-gray-700 space-y-4">
      <p className="text-xs text-gray-500">Last updated: October 26, 2023</p>

      <p>
        Welcome to <strong>MYTRAINERR</strong>. These terms and conditions outline the rules and
        regulations for the use of MYTRAINERR's services.
      </p>

      <p>
        By accessing this app we assume you accept these terms and conditions. Do not continue
        to use MYTRAINERR if you do not agree to take all of the terms and conditions stated on
        this page.
      </p>

      <div>
        <h3 className="font-bold text-black mb-1">1. Scope of Service</h3>
        <p>
          MYTRAINERR provides an online platform that connects individuals seeking fitness
          training ("Clients") with personal trainers ("Trainers"). The services include
          facilitating the booking, payment, and management of training sessions.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-black mb-1">2. User Accounts & Responsibilities</h3>
        <p>
          To access our services, you must register for an account. You agree to provide accurate,
          current, and complete information during the registration process and to keep it updated.
          You are responsible for safeguarding your password and all activities under your account.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-black mb-1">3. Booking and Payment</h3>
        <p>
          Clients can book sessions with Trainers through the app. Payments are processed via a
          third-party provider. Cancellation and refund policies are determined by each trainer.
          MYTRAINERR is not responsible for disputes between Clients and Trainers.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-black mb-1">4. Liability & Disclaimers</h3>
        <p>
          MYTRAINERR is a platform provider and is not liable for the quality of training, advice,
          or injuries that may occur during a session. Users engage with trainers at their own risk.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-black mb-1">5. Termination</h3>
        <p>
          We may terminate or suspend your account immediately, without prior notice, if you breach
          these Terms. Upon termination, your right to use the Service will cease.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-black mb-1">6. Contact Information</h3>
        <p>
          Note: You won't be able to accept bookings or receive payouts until this agreement is signed.
        </p>
      </div>
    </div>

    {/* Info Text */}
    <p className="text-xs text-gray-500 text-center">
      By continuing you agree to our platform rules and professional conduct guidelines.
      This helps keep our community safe and trusted.
    </p>

    {/* Actions */}
    <button
      onClick={onNext}
      className="w-full bg-teal-700 text-white py-3 rounded-full font-medium"
    >
      Continue
    </button>

    <button
      onClick={onNext}
      className="w-full text-sm text-gray-500"
    >
      skip
    </button>
  </div>
);

export default Step5Agreement;
