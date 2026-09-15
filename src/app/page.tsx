import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';
import WhatsAppIcon from '../components/WhatsAppIcon';
import GoogleIcon from '../components/GoogleIcon';
import heroImage from '../assets/images/a_realistic_urban_street_scene_in_daylight_wide_a.webp';
import vehicleRecoveryCardImage from '../assets/images/amber_recovery_truck_on_a_wet_motorway.webp';
import roadsideAssistanceCardImage from '../assets/images/roadside_battery_assistance_in_a_suburban_street.webp';
import towingCardImage from '../assets/images/rainy_uk_roundabout_recovery_tow_truck.webp';
import aboutSectionImage from '../assets/images/roadside_assistance_in_the_rain.webp';
import finalCtaImage from '../assets/images/rainy_motorway_recovery_scene.webp';

const faqItems = [
  {
    question: 'Are you available 24/7?',
    answer:
      'Yes, our control room and mobile roadside units operate 24 hours a day, 365 days a year across all supported UK regions, including overnight bank holidays and severe weather periods.',
  },
  {
    question: 'What vehicles can you recover?',
    answer:
      'We recover all standard passenger motorcars, performance and lowered sports cars, full electric and hybrid vehicles (using dolly sets to prevent drive-motor damage), 4x4 SUVs, and light commercial vans up to 3.5 tonnes GVW.',
  },
  {
    question: 'How quickly can you reach me?',
    answer:
      'Our nationwide average arrival window is between 25 and 45 minutes depending on your distance from motorway hubs, traffic volume, and live weather conditions. When you call, we will provide a realistic, tracked ETA.',
  },
  {
    question: 'Can you tow my vehicle to a garage?',
    answer:
      'Yes. We can deliver your vehicle to any designated independent garage, dealership franchise, fleet headquarters, or private residential driveway across England and Wales.',
  },
  {
    question: 'What information do you need when I call?',
    answer:
      'Please have your vehicle make, model, registration number, approximate location (or motorway junction marker / WhatsApp live pin), and a brief description of the breakdown issue (e.g. non-rolling, puncture, smoke, dead battery).',
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'We provide comprehensive recovery throughout Greater Manchester and Yorkshire, and their connecting motorway corridors (M60, M62, M1, A1(M)).',
  },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-primary shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span className="font-label-tech text-label-tech uppercase tracking-widest font-bold">
                  24/7 Vehicle Recovery
                </span>
              </div>
              <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-tight">
                Fast <span className="text-primary">Vehicle Recovery</span>{' '}
                <span className="font-body-lg text-headline-sm lg:text-headline-md font-normal text-on-surface-variant align-middle">
                  and
                </span>{' '}
                <span className="text-tertiary">Roadside Assistance</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                The Road Rescue Guys provide professional vehicle recovery, roadside assistance and towing when you
                need help on the road. Quick local dispatch with transparent fixed rates across the UK.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full sm:w-auto pt-space-xs">
                <a
                  className="h-14 px-8 bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs shadow-md transition-all"
                  href="tel:07881241835"
                >
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  <span>Call Now</span>
                </a>
                <a
                  className="h-14 px-8 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs transition-colors"
                  href="https://wa.me/447881241835"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="text-[20px] text-tertiary" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
              <div className="pt-space-sm flex flex-wrap items-center gap-y-2 gap-x-4 font-label-tech text-label-tech text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>24/7
                  Assistance
                </span>
                <span className="text-surface-variant">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">speed</span>Fast Response
                </span>
                <span className="text-surface-variant">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">local_shipping</span>
                  Professional Recovery
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl bg-surface-container">
                <Image
                  alt="UK flatbed recovery truck winching vehicle safely on motorway shoulder"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  src={heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-inverse-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 text-inverse-on-surface font-label-tech text-label-tech">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
                  <span>DEPOT DISPATCH: GREATER MANCHESTER</span>
                </div>
              </div>
              <div className="hidden sm:flex sm:absolute sm:-bottom-6 sm:left-6 sm:right-6 bg-surface-container-lowest p-space-md rounded-xl shadow-xl items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">support_agent</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-headline-sm text-headline-sm text-on-surface truncate">Need Help Now?</p>
                    <p className="font-label-tech text-label-tech text-on-surface-variant uppercase truncate">
                      Available 24/7 UK Wide
                    </p>
                  </div>
                </div>
                <a
                  className="px-4 py-2.5 bg-primary text-on-primary font-headline-sm text-[16px] rounded-lg hover:bg-secondary transition-colors whitespace-nowrap"
                  href="tel:07881241835"
                >
                  07881 241835
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest font-bold">
              Our Services
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Roadside Support You Can Rely On</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Rapid intervention and specialized transport machinery ready across every key UK arterial route.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1">
              <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                <Image
                  alt="Slide-bed flatbed vehicle recovery"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  src={vehicleRecoveryCardImage}
                />
                <span className="absolute top-3 right-3 bg-primary text-on-primary font-label-tech text-[11px] px-2.5 py-1 rounded">
                  PRIORITY RECOVERY
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Vehicle Recovery</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Full slide-bed recovery designed for complete non-runners, collision aftermath, EV machinery, and
                    low-clearance performance vehicles safely anchored.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between">
                  <Link
                    className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1"
                    href="/services#vehicle-recovery"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <span className="font-label-tech text-[11px] text-on-surface-variant">Flatbed Tilt</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1">
              <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                <Image
                  alt="Roadside diagnostic assistance"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  src={roadsideAssistanceCardImage}
                />
                <span className="absolute top-3 right-3 bg-tertiary text-on-tertiary font-label-tech text-[11px] px-2.5 py-1 rounded">
                  RAPID RESOLUTION
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Roadside Assistance</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    On-the-spot roadside diagnostics, high-amp 12V/24V battery jump-starts, safe spare wheel
                    substitutions, emergency fuel drops, and key lockout support.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between">
                  <Link
                    className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1"
                    href="/services#roadside-assistance"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <span className="font-label-tech text-[11px] text-on-surface-variant">On-Site Triage</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1">
              <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                <Image
                  alt="Professional spec-lift towing service"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  src={towingCardImage}
                />
                <span className="absolute top-3 right-3 bg-inverse-surface text-inverse-on-surface font-label-tech text-[11px] px-2.5 py-1 rounded">
                  LONG DISTANCE
                </span>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Towing Services</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Dedicated spec-lift tow units offering reliable local and nationwide long-haul transit to
                    certified garages, body repair workshops, or personal driveways.
                  </p>
                </div>
                <div className="pt-space-sm flex items-center justify-between">
                  <Link
                    className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1"
                    href="/services#towing"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <span className="font-label-tech text-[11px] text-on-surface-variant">Spec-Lift Tow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EMERGENCY CTA BANNER */}
      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs text-center lg:text-left max-w-2xl">
              <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary-fixed">
                Immediate Dispatch Available
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary">Stranded on the Road?</h2>
              <p className="font-body-lg text-body-lg text-on-primary/90">
                Get in touch with The Road Rescue Guys for professional roadside assistance, recovery or towing.
                Speak directly with a local dispatcher.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm flex-shrink-0 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto h-14 px-8 bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs shadow-md transition-colors"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                <span>Call 07881 241835</span>
              </a>
              <a
                className="w-full sm:w-auto h-14 px-8 bg-secondary hover:bg-on-secondary-container text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs transition-colors"
                href="https://wa.me/447881241835"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="text-[20px]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest font-bold">
              Why Choose Us
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Roadside Help Without the Hassle</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineering precision and transparent logistics designed to remove stress from roadside emergencies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
            {[
              {
                icon: 'alarm_on',
                title: '24/7 Availability',
                text: 'Our dispatch hubs and roadside units operate round the clock, every bank holiday, day or night across the UK network.',
              },
              {
                icon: 'bolt',
                title: 'Fast Response',
                text: 'Direct dispatch routing from strategically positioned depots guarantees typical response windows within 25–40 minutes.',
              },
              {
                icon: 'verified_user',
                title: 'Professional Service',
                text: 'All drivers are fully certified under PAS 43 standards, equipped with modern equipment and safety gear.',
              },
              {
                icon: 'forum',
                title: 'Clear Communication',
                text: 'Direct contact with your allocated recovery technician with live WhatsApp location sharing and realistic arrival times.',
              },
              {
                icon: 'health_and_safety',
                title: 'Reliable Recovery',
                text: 'High-capacity slide beds capable of managing prestige vehicles, light commercials, non-rolling machinery, and AWD crossovers.',
              },
              {
                icon: 'rv_hookup',
                title: 'Safe Towing',
                text: 'Soft-strap harness tie-downs and pneumatic wheel-lifts that eliminate bodywork strain and suspension damage during transit.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">{feature.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{feature.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
            <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest font-bold">
              Simple Dispatch
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Getting Help Is Simple</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Three clear steps from your initial phone call to vehicle safety.
            </p>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative">
              <div className="flex items-center justify-between">
                <span className="font-label-tech text-display-hero text-surface-container font-black leading-none">
                  01
                </span>
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">phone_enabled</span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Call or WhatsApp</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Reach our control desk on <strong>07881 241835</strong> or drop your live GPS pin on WhatsApp. State
                your vehicle model and the immediate symptom.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative">
              <div className="flex items-center justify-between">
                <span className="font-label-tech text-display-hero text-surface-container font-black leading-none">
                  02
                </span>
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">near_me</span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">We Come to You</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                The nearest equipped flatbed or recovery unit is dispatched immediately. Receive an active SMS
                tracking link with your driver&apos;s exact ETA.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative">
              <div className="flex items-center justify-between">
                <span className="font-label-tech text-display-hero text-surface-container font-black leading-none">
                  03
                </span>
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">We Get You Moving</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Our operative either fixes the issue roadside or securely loads your vehicle for transit to your
                nominated repair shop or home address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT THE ROAD RESCUE GUYS */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-surface-container">
                <Image
                  alt="Road Rescue technician inspecting car at roadside"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  src={aboutSectionImage}
                />
              </div>
              <div className="mt-4 p-space-md bg-surface-container-low rounded-lg flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[32px] text-tertiary flex-shrink-0">verified</span>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">Fully Certified Fleet &amp; Personnel</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    PAS 43 compliant safety procedures for high-speed motorway recoveries.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest font-bold">
                  About The Road Rescue Guys
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Professional Help When Your Journey Doesn&apos;t Go to Plan
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Serving <strong>Greater Manchester and Yorkshire</strong>, The Road Rescue Guys operate a
                modern recovery logistics network built on honesty, rapid arrival, and mechanical expertise. We
                believe stranded drivers should never be held hostage by expensive recurring subscriptions or opaque
                call-out tariffs.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Whether you need a quick tyre change, a jump-start on a cold morning, or a full flatbed rescue from
                the motorway shoulder, our crews are trained to handle every vehicle class with care and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-space-md py-space-xs">
                <div className="p-space-sm bg-surface-container-low rounded-lg">
                  <span className="font-headline-lg text-headline-lg text-primary block">25 min</span>
                  <span className="font-label-tech text-label-tech text-on-surface-variant uppercase">
                    Average Dispatch Time
                  </span>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-lg">
                  <span className="font-headline-lg text-headline-lg text-on-surface block">100%</span>
                  <span className="font-label-tech text-label-tech text-on-surface-variant uppercase">
                    Fixed Price Quotes
                  </span>
                </div>
              </div>
              <div className="pt-space-xs">
                <Link
                  className="inline-flex items-center gap-space-xs px-6 py-3 bg-inverse-surface hover:bg-on-surface-variant text-inverse-on-surface font-label-lg text-label-lg rounded-lg transition-colors"
                  href="/about-us"
                >
                  <span>More About Us</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: AREAS WE COVER */}
      <section id="areas-we-cover" className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest font-bold">
                  Coverage Network
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Vehicle Recovery Across Greater Manchester &amp; Yorkshire
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our mobile flatbeds patrol prime transport corridors and metropolitan centres every hour of the
                  day, so help is always close by wherever you break down.
                </p>
              </div>
              <ul className="flex flex-col gap-space-sm">
                {[
                  { name: 'Greater Manchester', detail: 'M60 Ring • 15-20 min ETA' },
                  { name: 'Yorkshire', detail: 'West & South Yorkshire • M1 / M621' },
                  { name: 'Motorway Network', detail: 'M60, M62, M1, A1(M) patrolled 24/7' },
                ].map((area) => (
                  <li
                    key={area.name}
                    className="flex items-start gap-3 p-space-sm bg-surface-container-lowest rounded-lg shadow-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface">{area.name}</p>
                      <p className="font-body-sm text-[13px] text-on-surface-variant">{area.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-space-xs">
                <a
                  className="inline-flex px-8 py-3.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm items-center gap-space-xs transition-colors"
                  href="tel:07881241835"
                >
                  <span className="material-symbols-outlined text-[20px]">map</span>
                  <span>View All Areas We Cover</span>
                </a>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[420px] rounded-xl overflow-hidden shadow-lg border border-surface-container-high">
              <iframe
                src="https://www.google.com/maps?q=Greater+Manchester+and+Yorkshire,+United+Kingdom&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of our coverage area across Greater Manchester and Yorkshire"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CUSTOMER TESTIMONIALS */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-sm">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Trusted When It Matters</h2>
            <div className="inline-flex items-center gap-3 bg-surface-container-lowest px-5 py-3 rounded-xl shadow-sm">
              <GoogleIcon className="text-[28px]" />
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-none">4.9</span>
                  <span className="text-amber-400 text-[15px] tracking-tight leading-none">★★★★★</span>
                </div>
                <span className="font-body-sm text-[12px] text-on-surface-variant">Based on Google reviews</span>
              </div>
            </div>
            <span className="font-label-tech text-label-tech text-on-surface-variant uppercase tracking-widest">
              (DEMO CUSTOMER SCENARIOS)
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {[
              {
                initial: 'D',
                avatarBg: 'bg-primary text-on-primary',
                name: 'David M.',
                meta: 'Local Guide · 14 reviews',
                time: '2 weeks ago',
                text: 'Stranded on the hard shoulder with complete electrical cut-out at 8 PM. Called the dispatch desk, gave our marker post, and the slide-bed arrived within 25 minutes. Towed safely straight to our local garage.',
              },
              {
                initial: 'S',
                avatarBg: 'bg-tertiary text-on-tertiary',
                name: 'Sarah K.',
                meta: 'Local Guide · 6 reviews',
                time: '1 month ago',
                text: 'Punctured tyre with a stripped locking wheel nut in a tight multi-storey car park. Technician brought specialist removal tools and had the spare fitted without any wheel rim scratching. Absolute lifesaver.',
              },
              {
                initial: 'M',
                avatarBg: 'bg-secondary text-on-secondary',
                name: 'Marcus L.',
                meta: '3 reviews',
                time: '3 months ago',
                text: 'Delivery van fully loaded with goods lost hydraulic clutch pressure on the M1 slip road. Heavy duty winch recovery handled the payload weight safely and transported directly to our fleet depot.',
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
              >
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-headline-sm text-headline-sm flex-shrink-0 ${review.avatarBg}`}
                    >
                      {review.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="font-label-lg text-label-lg text-on-surface truncate">{review.name}</p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant truncate">{review.meta}</p>
                    </div>
                  </div>
                  <GoogleIcon className="text-[18px] flex-shrink-0" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-[14px] tracking-tight">★★★★★</span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">{review.time}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
        <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs">
            <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest font-bold">
              Questions &amp; Answers
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Everything you need to know about our recovery and towing protocols.
            </p>
          </div>
          <FaqAccordion items={faqItems} id="home-faq" />
        </div>
      </section>

      {/* SECTION 11: FINAL CONTACT CTA */}
      <section className="relative w-full bg-inverse-surface text-inverse-on-surface overflow-hidden py-space-xl lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Flatbed recovery truck with amber warning strobe lights on UK motorway shoulder"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 filter grayscale contrast-125"
            src={finalCtaImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/90 to-inverse-surface/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary text-on-primary font-label-tech text-label-tech uppercase tracking-widest font-bold">
              Dispatch Standby
            </div>
            <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface tracking-tight">
              Need Roadside Help Right Now?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
              Speak straight to an experienced recovery operator. No call holding, no lengthy phone menus. Just
              immediate assistance dispatched to your exact coordinates.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full sm:w-auto pt-space-xs">
              <a
                className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs shadow-lg transition-colors"
                href="tel:07881241835"
              >
                <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
                <span>Direct Call: 07881 241835</span>
              </a>
              <a
                className="w-full sm:w-auto h-14 px-8 bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-space-xs transition-colors shadow-md"
                href="https://wa.me/447881241835"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="text-[22px] text-tertiary" />
                <span>WhatsApp Us</span>
              </a>
            </div>
            <div className="pt-space-md flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-label-tech text-[12px] text-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed">pin_drop</span>
                Greater Manchester &amp; Yorkshire
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed">mail</span>
                theroadrescueguys@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
