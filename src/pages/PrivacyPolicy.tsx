import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-alpine-black">
        <Navigation />
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-24 md:py-32 text-foreground">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-12">Last updated: March 2026</p>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect information you provide when filling out forms on our website, including your name, email address, phone number, and business information. We also collect usage data through standard analytics.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use your information to respond to inquiries, provide our services, send appointment confirmations, send service-related updates, and send marketing communications to those who have opted in.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">SMS / Text Message Communications</h2>
          <p className="text-muted-foreground leading-relaxed">
            BrainBrite provides SMS notifications including appointment confirmations, appointment reminders, missed call follow-ups, review requests, and promotional offers to customers who have opted in to receive text messages. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Opt-Out</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may opt out of SMS communications at any time by replying STOP to any text message you receive from us. You may opt out of email communications by clicking the unsubscribe link in any email.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement industry-standard security measures to protect your personal information. We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            BrainBrite<br />
            11821 Altura St, Commerce City, Colorado 80603<br />
            Email: brainbritellc@gmail.com<br />
            Phone: (720) 452-9304
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
