import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-alpine-black">
        <Navigation />
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-24 md:py-32 text-foreground">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-12">Last updated: March 2026</p>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using BrainBrite's services, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            BrainBrite provides digital marketing services including social media advertising, website design, AI automation, and CRM solutions for businesses.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">SMS Messaging Program</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              BrainBrite provides SMS notifications including appointment confirmations, appointment reminders, missed call follow-ups, review requests, and promotional offers related to home services to customers who have opted in to receive text messages.
            </p>
            <p>
              You can cancel the SMS service at any time. Just text STOP to the phone number from which you received messages. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
            </p>
            <p>
              If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at brainbritellc@gmail.com.
            </p>
            <p>
              Carriers are not liable for delayed or undelivered messages.
            </p>
            <p>
              As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </p>
            <p>
              If you have any questions regarding privacy, please read our privacy policy at{" "}
              <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                https://brainbrite.io/privacy-policy
              </a>.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Payment Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            Payment for services is due as agreed upon in your service agreement. All sales are final unless otherwise specified in writing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            BrainBrite is not liable for indirect, incidental, or consequential damages arising from use of our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold mb-3">Contact</h2>
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

export default TermsOfService;
