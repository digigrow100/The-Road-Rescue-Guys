import type { Metadata } from 'next';
import Image from 'next/image';
import FaqAccordion from '../../components/FaqAccordion';
import heroImage from '../../assets/images/a_realistic_high_resolution_roadside_motorway_sce.webp';
import vehicleRecoveryImage from '../../assets/images/a_wide_cinematic_high_resolution_roadside_motorw.webp';
import roadsideAssistanceImage from '../../assets/images/a_realistic_high_resolution_sharp_daytime_outdoo.webp';
import towingImage from '../../assets/images/rainy_motorway_tow_truck_recovery.webp';

export const metadata: Metadata = {
  title: 'Services | The Road Rescue Guys',
  description:
    'Vehicle recovery, roadside assistance and towing services from The Road Rescue Guys — 24/7 dispatch across Birmingham and the UK motorway network.',
};

const faqItems = [
  {
    question: 'What information should I provide when I call?',
    answer:
      'Please share your current location (a road name, junction number, or live WhatsApp/What3Words pin), vehicle registration, make and model, and a brief description of what caused the vehicle to stop or immobilise.',
  },
  {
    question: 'What types of vehicles can you recover?',
    answer:
      'We handle standard passenger cars, estate models, SUVs, 4x4s, light commercial vans (LWB & MWB), performance sports cars requiring low-angle tilt beds, and electric / hybrid vehicles requiring full zero-drag flatbed carriage.',
  },
  {
    question: 'Can you tow my vehicle to a garage?',
    answer:
      'Yes, we transport your vehicle directly to whichever destination you specify — whether that is your preferred local independent garage, a franchised dealership, a secure storage yard, or your home driveway.',
  },
  {
    question: 'What happens if my vehicle cannot be fixed at the roadside?',
    answer:
      'If our roadside patrol mechanic cannot safely rectify the fault on the spot (such as terminal alternator, clutch, or gearbox failures), we immediately escalate the incident to dispatch an accompanying flatbed recovery transporter to load your car smoothly.',
  },
  {
    question: 'Can I contact you through WhatsApp?',
    answer:
      'Absolutely. You can click the WhatsApp button across our site to transmit your live GPS location pin and pictures of damage or tight access obstacles directly to our 24/7 dispatch operators.',
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'We provide immediate local dispatch throughout Birmingham, Solihull, Sutton Coldfield, Dudley, Walsall, and the entire West Midlands motorway network (M6, M5, M42, M40, A38), alongside long-distance nationwide vehicle repatriation across England & Wales.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="w-full bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-10 pb-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded text-primary font-label-tech text-label-tech uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                OUR SERVICES
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-on-surface mb-6">
                Vehicle Recovery &amp; Roadside Services
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                Whether your vehicle has broken down, needs roadside help or must be transported, The Road Rescue
                Guys are ready to assist across Birmingham and nationwide corridors.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-label-lg rounded shadow-md transition-all"
                  href="tel:07881241835"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Call Now (07881 241835)
                </a>
                <a
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-label-lg rounded transition-all"
                  href="https://wa.me/447881241835"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-tertiary text-[20px]">chat</span>
                  WhatsApp Us
                </a>
              </div>
              <div className="w-full pt-6 border-t-0 bg-surface-container-low p-4 rounded-xl flex flex-wrap items-center gap-y-3 gap-x-6 text-on-surface-variant font-label-tech text-label-tech">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">access_time</span>
                  24/7 Rapid Response
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">directions_car</span>
                  All Vehicle Types
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  Clear Upfront Pricing
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-2xl overflow-hidden bg-surface-container shadow-xl aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  alt="A commercial recovery slide-bed flatbed truck operating on a UK motorway hard shoulder, loading a silver hatchback with hydraulic ramp tilted downward. Overhead motorway gantry visible in the overcast day, professional breakdown technician in high-vis orange and yellow PPE managing the winch cable."
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  src={heroImage}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-inverse-surface/90 backdrop-blur-md p-3.5 rounded-xl flex items-center justify-between text-inverse-on-surface">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 text-on-primary">
                      <span className="material-symbols-outlined text-[18px]">warehouse</span>
                    </div>
                    <div className="truncate">
                      <span className="block font-label-tech text-[10px] text-inverse-on-surface/70 uppercase tracking-widest leading-none">
                        Central Operating Hub
                      </span>
                      <span className="font-label-md text-label-md text-inverse-on-surface font-semibold truncate">
                        Dispatched from Birmingham B4 7SL
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 font-label-tech text-[11px] text-tertiary-fixed bg-tertiary/20 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES INTRODUCTION BANNER */}
      <section className="w-full bg-surface-container py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin text-center">
          <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary font-bold block mb-3">
            Triage &amp; Deployment
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight mb-5">
            Roadside Help for Different Situations
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Different breakdown situations require different solutions, so customers can choose the service that
            best matches what has happened. From on-the-spot roadside diagnostics to heavy flatbed recovery, our
            specialised fleet is equipped to handle your vehicle safely.
          </p>
        </div>
      </section>

      {/* 3. SERVICE 01 — VEHICLE RECOVERY */}
      <section id="vehicle-recovery" className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-surface-container">
                <Image
                  alt="Yellow and blue heavy-duty tilt-tray recovery truck parked on UK motorway shoulder with safe hydraulic recovery ramp extended, loading a stranded modern car. A qualified male recovery specialist in hi-vis orange waterproofs controls remote winch, British motorway background with distant vehicles."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  src={vehicleRecoveryImage}
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-tech text-label-tech px-3 py-1 rounded shadow">
                  FLATBED DISPATCH
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded font-label-tech text-label-tech uppercase tracking-wider text-primary font-semibold mb-4">
                SERVICE 01 // HEAVY &amp; ACCIDENT RECOVERY
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-5">
                Vehicle Recovery
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                If your vehicle cannot safely continue its journey, our vehicle recovery service can help move it
                from the roadside to an appropriate destination. Designed specifically for non-runners, collision
                aftermath, and electric vehicle transport without mechanical drag.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 w-full mb-8">
                {[
                  'Vehicle breakdowns & electrical failures',
                  'Non-running vehicles & locked transmissions',
                  'Vehicles requiring long-distance transportation',
                  'Motorway and dual-carriageway recovery',
                  'Transport to garage, bodyshop, or home address',
                  'Low-angle tilt beds for sports & prestige cars',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">{point}</span>
                  </div>
                ))}
              </div>
              <a
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow transition-all"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[20px]">car_repair</span>
                Book Vehicle Recovery (07881 241835)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE 02 — ROADSIDE ASSISTANCE */}
      <section id="roadside-assistance" className="w-full bg-surface-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded font-label-tech text-label-tech uppercase tracking-wider text-primary font-semibold mb-4">
                SERVICE 02 // ON-SCENE ASSISTANCE
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-5">
                Roadside Assistance
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                When something goes wrong during your journey, roadside assistance can help you understand the
                problem and determine the safest next step. Our fully equipped mobile response units carry
                commercial-grade equipment to diagnose and resolve manageable issues on-site.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 w-full mb-8">
                {[
                  '12V & 24V emergency battery jump starts',
                  'Wheel & punctured tyre changes on roadside',
                  'Emergency fuel delivery & misfuelling draining',
                  'Non-destructive vehicle lockout entry',
                  'OBD-II computer fault code reading',
                  'Safe motorway fending & high-vis perimeter',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">{point}</span>
                  </div>
                ))}
              </div>
              <a
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow transition-all"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[20px]">build</span>
                Request Roadside Unit
              </a>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-surface-container-high">
                <Image
                  alt="British roadside assistance mechanic in hi-vis uniform diagnosing an open engine bay of a modern dark blue car parked by a residential UK street curb. The technician holds a diagnostic tablet with digital readouts connected to a heavy-duty portable battery jump booster pack under natural British daylight."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  src={roadsideAssistanceImage}
                />
                <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary font-label-tech text-label-tech px-3 py-1 rounded shadow">
                  RAPID PATROL VAN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE 03 — TOWING */}
      <section id="towing" className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-surface-container">
                <Image
                  alt="High-spec bright yellow and red livery UK wheel-lift tow truck driving through a British city residential avenue towing a saloon passenger vehicle via safe under-lift grid wheel clamps. Clear 30 MPH road markings, overcast sky, professional municipal transit."
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  src={towingImage}
                />
                <div className="absolute top-4 left-4 bg-inverse-surface text-inverse-on-surface font-label-tech text-label-tech px-3 py-1 rounded shadow">
                  SPEC-LIFT TIGHT ACCESS
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded font-label-tech text-label-tech uppercase tracking-wider text-primary font-semibold mb-4">
                SERVICE 03 // SAFE VEHICLE TRANSIT
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-5">
                Towing Services
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                When your vehicle needs to be moved safely, our towing service provides a practical way to transport
                it to a suitable destination. Utilizing dedicated spec-lift wheel-grid equipment and rapid-deployment
                rigs, we navigate tight suburban streets and multi-storeys with ease.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 w-full mb-8">
                {[
                  'Breakdown & immobilised vehicle towing',
                  'Planned or urgent towing requirements',
                  'Dealership & garage transfer transit',
                  'Low-clearance access (multi-storey car parks)',
                  'Safe soft-wheel harness tie downs',
                  'Local Birmingham & nationwide transport',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">{point}</span>
                  </div>
                ))}
              </div>
              <a
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow transition-all"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[20px]">rv_hookup</span>
                Arrange Towing Transit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="w-full bg-surface-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary font-bold block mb-3">
              Straightforward Process
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight mb-4">
              Getting Help Is Simple
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Follow four direct steps to get emergency assistance dispatched immediately to your exact live
              coordinate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                num: '01',
                icon: 'call',
                title: 'Call or WhatsApp',
                text: 'Speak directly with our Birmingham controllers. No automated robots or endless call menus.',
                footIcon: null,
                footText: 'Instant Pickup',
                footColor: 'text-tertiary font-bold',
              },
              {
                num: '02',
                icon: 'pin_drop',
                title: 'Location & Vehicle',
                text: 'Share your live pin, vehicle model, and breakdown issue. We locate you via What3Words or GPS.',
                footIcon: 'my_location',
                footText: 'Pin Shared',
                footColor: 'text-on-surface-variant font-medium',
              },
              {
                num: '03',
                icon: 'local_shipping',
                title: 'We Dispatch Help',
                text: 'The closest flatbed, tow truck, or patrol van is assigned with an accurate live arrival ETA.',
                footIcon: 'timer',
                footText: 'Avg 25 Mins ETA',
                footColor: 'text-primary font-bold',
              },
              {
                num: '04',
                icon: 'task_alt',
                title: 'Assisted or Recovered',
                text: 'You are safely back on the road or safely transported to your selected garage or home address.',
                footIcon: 'done_all',
                footText: 'Safe Completion',
                footColor: 'text-tertiary font-bold',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline-lg text-headline-lg text-primary font-black">{step.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-3">{step.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{step.text}</p>
                </div>
                <div className={`mt-6 pt-4 font-label-tech text-label-tech flex items-center gap-1.5 ${step.footColor}`}>
                  {step.footIcon ? (
                    <span className="material-symbols-outlined text-[14px]">{step.footIcon}</span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  )}
                  {step.footText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NOT SURE WHICH SERVICE YOU NEED? */}
      <section className="w-full bg-primary text-on-primary py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-on-primary/10 flex items-center justify-center text-on-primary mb-6">
            <span className="material-symbols-outlined text-[32px]">support_agent</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-on-primary mb-4">
            Not Sure What Type of Help You Need?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mb-10 leading-relaxed">
            Tell us what has happened and our experienced dispatch coordinators will quickly determine the
            appropriate next step and equipment required.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-on-primary text-primary hover:bg-surface-container font-headline-sm text-label-lg rounded shadow-lg transition-all"
              href="tel:07881241835"
            >
              <span className="material-symbols-outlined text-[20px]">phone_forwarded</span>
              Call 07881 241835
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-container hover:bg-secondary-container text-on-primary font-headline-sm text-label-lg rounded transition-all"
              href="https://wa.me/447881241835"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              WhatsApp Us with Your Location
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center mb-14">
            <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary font-bold block mb-3">
              Got Questions?
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqItems} id="services-faq" />
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="w-full bg-inverse-surface text-inverse-on-surface py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-inverse-surface/80 text-tertiary-fixed font-label-tech text-label-tech mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
            DISPATCH OPEN NOW
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-white tracking-tight mb-4">
            Need Vehicle Recovery or Roadside Help?
          </h2>
          <p className="font-body-lg text-body-lg text-inverse-on-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Available 24 hours a day, 7 days a week. Direct connection to our Birmingham control room.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-label-lg rounded shadow-lg transition-all"
              href="tel:07881241835"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              Call Now — 07881 241835
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface-container-high/20 hover:bg-surface-container-high/30 text-white font-headline-sm text-label-lg rounded transition-all"
              href="https://wa.me/447881241835"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
