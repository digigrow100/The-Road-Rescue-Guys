import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import FaqAccordion from '../../components/FaqAccordion';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import heroImage from '../../assets/images/amber_recovery_truck_on_a_wet_motorway.webp';

export const metadata: Metadata = {
  title: 'Contact Us | The Road Rescue Guys',
  description:
    'Contact The Road Rescue Guys by phone, WhatsApp or email for vehicle recovery, roadside assistance or towing. 24/7 dispatch centre active now across Greater Manchester and Yorkshire.',
};

const faqItems = [
  {
    question: 'Are you available 24/7?',
    answer:
      'Yes, our recovery operations control room and heavy flatbed units are manned 24 hours a day, 7 days a week, 365 days a year. Bank holidays and adverse weather events included.',
  },
  {
    question: 'Should I call or use WhatsApp?',
    answer:
      'If you are in a hazardous or fast-moving traffic situation (such as an active motorway lane or hard shoulder), call 07881 241835 immediately. If you are safe in a lay-by or carpark and want to quickly send your GPS pin and pictures of damage, WhatsApp is ideal.',
  },
  {
    question: 'What details should I send on WhatsApp?',
    answer:
      "Please share your Live Location pin (via WhatsApp attachment icon), vehicle make and registration plate, a quick snapshot of the vehicle's position, and note any steering, suspension, or key-related issues.",
  },
  {
    question: 'Can I contact you for a future towing requirement?',
    answer:
      'Absolutely. We regularly handle pre-booked garage transfers, classic and prestige car deliveries, auction collections, and commercial fleet relocations throughout England and Wales. Use our contact form or email for a transparent, fixed-price quote.',
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'Our priority rapid zone encompasses Greater Manchester and Yorkshire, and their connecting motorway spine (M60, M62, M1, A1(M)). We also offer nationwide transit to recover stranded vehicles back home or to specialized repair centers.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Top Dispatch Status Banner */}
      <section className="w-full bg-surface-container-high py-2.5 px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-on-surface">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-tertiary">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-ping"></span>
            </span>
            <span className="font-label-tech text-label-tech uppercase tracking-wider text-on-surface-variant font-bold">
              Regional Recovery Status:
            </span>
            <span className="font-label-tech text-label-tech text-tertiary font-bold">
              HIGH READINESS (PATROLS ON STANDBY)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-label-tech text-on-surface-variant">
            <span className="hidden sm:inline">M60 • M62 • M1 • A1(M) Corridor Coverage</span>
            <span className="text-outline-variant">•</span>
            <span className="font-semibold text-primary">Avg 25-35m roadside response</span>
          </div>
        </div>
      </section>

      {/* 1. HERO SECTION */}
      <section className="w-full bg-surface-container-lowest py-12 lg:py-20 px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-tech text-label-tech text-primary font-bold uppercase tracking-wider">
                CONTACT US
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface tracking-tight uppercase font-black mb-5 leading-tight">
              Need Roadside Help? <br />
              <span className="text-primary">Get in Touch</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              For vehicle recovery, roadside assistance or towing, contact The Road Rescue Guys by phone, WhatsApp or
              email. Our 24/7 dispatch centre is active right now.
            </p>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary rounded shadow-md transition-all text-center"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
                <span className="font-headline-sm text-headline-sm tracking-tight font-bold">Call 07881 241835</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-surface-container-high hover:bg-surface-variant text-on-surface rounded shadow-sm transition-all text-center"
                href="https://wa.me/447881241835"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="text-[22px] text-tertiary" />
                <span className="font-headline-sm text-headline-sm font-bold">WhatsApp Us</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
              <span>Average response time 25–35 mins across Greater Manchester & Yorkshire • Available 24/7</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container">
              <div className="relative w-full h-[420px]">
                <Image
                  alt="High-resolution photograph of a professional UK vehicle recovery flatbed truck with flashing amber LED beacon roof lightbar, loaded with a passenger vehicle safely secured on motorway hard shoulder at twilight, wet asphalt reflections, road safety cones in background, crisp industrial safety aesthetic."
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  src={heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">pin_drop</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-tech text-label-tech uppercase text-primary font-bold">
                      Immediate Central Dispatch
                    </span>
                    <span className="font-headline-sm text-body-md font-bold text-on-surface truncate">
                      Serving Greater Manchester & Yorkshire
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-2 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-ping"></span>
              <span className="font-label-tech text-label-tech uppercase">Live Operator Assigned</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMERGENCY CONTACT SECTION */}
      <section className="w-full bg-surface-container-lowest py-16 px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-label-tech text-label-tech text-primary font-bold uppercase tracking-wider block mb-2">
              CHOOSE YOUR DIRECT CHANNEL
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-black uppercase tracking-tight">
              Direct Response Channels
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Speak directly to an incident supervisor or ping breakdown telemetry instantly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <div className="relative bg-surface-container-lowest rounded-xl p-8 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-on-primary">
                    <span className="material-symbols-outlined text-[26px]">call</span>
                  </span>
                  <span className="px-2.5 py-1 bg-primary/10 text-primary font-label-tech text-label-tech rounded uppercase font-bold">
                    Fastest Response
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mb-1">
                  Call Directly
                </h3>
                <p className="font-headline-md text-headline-md text-primary font-black tracking-tight mb-4">
                  07881 241835
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Best for urgent roadside assistance. Speaks straight to a regional coordinator without automated
                  menus or hold queues.
                </p>
              </div>
              <a
                className="w-full py-4 px-6 bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-body-lg font-bold rounded text-center shadow transition-all flex items-center justify-center gap-2"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[20px]">e911_emergency</span>
                <span>Call Now (07881 241835)</span>
              </a>
            </div>
            <div className="relative bg-surface-container-lowest rounded-xl p-8 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-tertiary"></div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-tertiary-container text-on-tertiary">
                    <WhatsAppIcon className="text-[26px]" />
                  </span>
                  <span className="px-2.5 py-1 bg-tertiary/10 text-tertiary font-label-tech text-label-tech rounded uppercase font-bold">
                    Live GPS Sharing
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mb-1">
                  WhatsApp Us
                </h3>
                <p className="font-headline-md text-headline-md text-tertiary font-black tracking-tight mb-4">
                  07881 241835
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Send your live location pin, photos of the breakdown, and vehicle details directly to our central
                  duty manager for immediate routing.
                </p>
              </div>
              <a
                className="w-full py-4 px-6 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-headline-sm text-body-lg font-bold rounded text-center shadow transition-all flex items-center justify-center gap-2"
                href="https://wa.me/447881241835"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">location_searching</span>
                <span>Open WhatsApp</span>
              </a>
            </div>
            <div className="relative bg-surface-container-low rounded-xl p-8 shadow-md flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-outline"></div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-inverse-surface text-inverse-on-surface">
                    <span className="material-symbols-outlined text-[26px]">mark_email_unread</span>
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant font-label-tech text-label-tech rounded uppercase font-bold">
                    Standard Queries
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mb-1">
                  Email Enquiry
                </h3>
                <p className="font-headline-sm text-body-lg text-on-surface font-bold truncate mb-4">
                  theroadrescueguys@gmail.com
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  For general queries, pre-booked transit, fleet account setup, and invoicing queries. Typical
                  response within 2 business hours.
                </p>
              </div>
              <a
                className="w-full py-3.5 px-6 bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-headline-sm text-body-md font-bold rounded text-center shadow-sm transition-all flex items-center justify-center gap-2"
                href="mailto:theroadrescueguys@gmail.com"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & WHAT TO TELL US */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-10 rounded-xl shadow-lg">
              <div className="mb-8">
                <span className="font-label-tech text-label-tech text-primary font-bold uppercase tracking-wider block mb-1">
                  ONLINE INQUIRY DESK
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-md text-on-surface font-black uppercase tracking-tight">
                  Send Us a Message
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  For non-urgent recovery bookings, quotes, or planned vehicle transportation.
                </p>
              </div>
              <ContactForm />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">fact_check</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">
                    What Information Should I Have Ready?
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Having these 5 details on hand speeds up our live truck assignment and accurate driver ETA:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      num: '01',
                      title: 'Your Exact Location',
                      text: 'Postcode, landmark, or motorway driver junction marker number.',
                    },
                    {
                      num: '02',
                      title: 'Vehicle Make, Model & Colour',
                      text: 'Ensure registration plate is visible or noted.',
                    },
                    {
                      num: '03',
                      title: 'Incident Nature',
                      text: 'Flat tyre, non-starter, collision damage, or engine warning lights.',
                    },
                    {
                      num: '04',
                      title: 'Roll & Steer Mobility',
                      text: 'Whether vehicle is stuck in gear, missing wheels, or can roll freely.',
                    },
                    {
                      num: '05',
                      title: 'Destination Drop-off',
                      text: 'Home address, local garage, or approved repair compound.',
                    },
                  ].map((item) => (
                    <li key={item.num} className="flex items-start gap-3">
                      <span className="font-label-tech text-label-tech text-primary bg-primary/10 px-2 py-0.5 rounded font-bold mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <span className="font-headline-sm text-body-md font-bold text-on-surface block">
                          {item.title}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-lg">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">domain</span>
                  <span>Business Details</span>
                </h3>
                <div className="space-y-4 font-body-sm text-body-sm">
                  <div className="pb-3 bg-surface-container-high/40 p-3 rounded">
                    <span className="block font-headline-sm text-body-md font-bold text-on-surface">
                      The Road Rescue Guys Ltd
                    </span>
                    <span className="text-on-surface-variant">
                      Registered in England &amp; Wales • Recovery Operative Network
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">call</span>
                    <div>
                      <span className="block text-xs uppercase font-label-tech text-on-surface-variant">
                        Direct Hotline
                      </span>
                      <a
                        className="font-headline-sm text-body-md font-bold text-on-surface hover:text-primary transition-colors"
                        href="tel:07881241835"
                      >
                        07881 241835
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <WhatsAppIcon className="text-tertiary text-[20px] mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase font-label-tech text-on-surface-variant">
                        WhatsApp Incident Channel
                      </span>
                      <a
                        className="font-headline-sm text-body-md font-bold text-on-surface hover:text-tertiary transition-colors"
                        href="https://wa.me/447881241835"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        07881 241835
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">mail</span>
                    <div>
                      <span className="block text-xs uppercase font-label-tech text-on-surface-variant">
                        Operational Email
                      </span>
                      <a
                        className="font-body-md text-on-surface font-semibold hover:text-primary transition-colors"
                        href="mailto:theroadrescueguys@gmail.com"
                      >
                        theroadrescueguys@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">location_on</span>
                    <div>
                      <span className="block text-xs uppercase font-label-tech text-on-surface-variant">
                        Main Dispatch Compound
                      </span>
                      <span className="font-body-md text-on-surface font-semibold">
                        Greater Manchester &amp; Yorkshire, United Kingdom
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-tertiary-container/10 text-tertiary rounded font-label-tech text-label-tech font-bold">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      <span>Operating Hours: 24 Hours / 7 Days / 365 Days a Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT FAQ SECTION */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24 px-margin-mobile lg:px-margin">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label-tech text-label-tech text-primary font-bold uppercase tracking-wider block mb-1">
              COMMON QUESTIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-black uppercase tracking-tight">
              Contact Frequently Asked Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Clear answers to help you select the fastest route for roadside recovery assistance.
            </p>
          </div>
          <FaqAccordion items={faqItems} id="contact-faq" />
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="w-full bg-inverse-surface py-16 lg:py-24 px-margin-mobile lg:px-margin relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary-fixed mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed animate-ping"></span>
            <span className="font-label-tech text-label-tech uppercase font-bold tracking-wider">
              ON-CALL OPERATOR WAITING
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-white font-black uppercase tracking-tight mb-4 leading-tight">
            Stranded? Contact The Road Rescue Guys
          </h2>
          <p className="font-body-lg text-body-lg text-inverse-on-surface/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don&apos;t stay waiting in the cold. Contact our dispatch team now for rapid recovery or roadside
            support. Average arrival within 25–35 minutes across Greater Manchester &amp; Yorkshire.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-body-lg font-bold rounded shadow-lg transition-all"
              href="tel:07881241835"
            >
              <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
              <span>Call Now — 07881 241835</span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-headline-sm text-body-lg font-bold rounded shadow-none transition-all outline outline-1 outline-white/30"
              href="https://wa.me/447881241835"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="text-[22px] text-tertiary-fixed" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
