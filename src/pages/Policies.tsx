export default function Policies() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-wider mb-3">Nice IPTV</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Policies &amp; Terms</h1>
          <p className="text-gray-400 leading-relaxed">
            Simple information about your privacy, use of our services, and refund requests.
          </p>
          <p className="text-gray-500 text-sm mt-4">Last updated: September 30, 2026</p>
        </header>

        <div className="space-y-14">
          <section id="privacy-policy" className="scroll-mt-28 border-b border-white/10 pb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Privacy Policy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                When you contact us or place an order, we may receive details such as your name,
                contact information, order information, and messages you choose to send.
              </p>
              <p>
                We use this information to respond to enquiries, activate and support subscriptions,
                manage orders, and meet applicable legal requirements. We do not sell your personal
                information. We share it only when needed to provide the service, comply with the law,
                or protect our rights and users.
              </p>
              <p>
                We keep information only for as long as it is reasonably needed for these purposes
                and take reasonable steps to protect it. No method of online storage or transmission
                can be guaranteed completely secure.
              </p>
              <p>
                For a privacy question or request, contact us at{' '}
                <a className="text-brand-300 hover:text-brand-200" href="mailto:support@niceiptv.com">
                  support@niceiptv.com
                </a>.
              </p>
            </div>
          </section>

          <section id="terms-of-service" className="scroll-mt-28 border-b border-white/10 pb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Terms of Service</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                By ordering or using a Nice IPTV service, you agree to use it lawfully and follow the
                terms that apply to your selected subscription or package.
              </p>
              <p>
                Keep your login details secure and do not exceed the number of simultaneous
                connections included in your plan. Reseller and restream customers are responsible
                for ensuring their own distribution and use comply with applicable laws and rights.
              </p>
              <p>
                Service availability may be affected by maintenance, internet providers, device
                compatibility, or other circumstances outside our control. We work to keep services
                available and provide support when issues arise, but uninterrupted access is not
                guaranteed.
              </p>
              <p>
                We may update these terms when our services or legal requirements change. Continued
                use after an update means you accept the revised terms. For questions, contact{' '}
                <a className="text-brand-300 hover:text-brand-200" href="mailto:support@niceiptv.com">
                  support@niceiptv.com
                </a>.
              </p>
            </div>
          </section>

          <section id="refund-policy" className="scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Refund Policy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you experience a persistent technical problem that prevents you from using your
                service and our support team cannot resolve it within the first 24 hours after
                activation, you may request a full refund.
              </p>
              <p>
                Contact us within that 24-hour period at{' '}
                <a className="text-brand-300 hover:text-brand-200" href="mailto:support@niceiptv.com">
                  support@niceiptv.com
                </a>{' '}
                or through WhatsApp. Include your order details and a description of the issue so our
                team can troubleshoot and review your request.
              </p>
              <p>
                This policy does not limit any consumer rights that apply under the laws of your
                location.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
