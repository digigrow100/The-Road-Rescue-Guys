import type { Metadata } from 'next';
import Image from 'next/image';
import heroImage from '../../assets/images/wide_angle_roadside_motorway_scene_at_dusk_overcas.webp';
import whoWeAreImage from '../../assets/images/roadside_diagnostics_on_a_rainy_street.webp';
import vehicleRecoveryImage from '../../assets/images/rainy_motorway_breakdown_recovery.webp';
import roadsideAssistanceImage from '../../assets/images/a_realistic_documentary_style_roadside_assistance.webp';
import towingImage from '../../assets/images/yellow_recovery_truck_at_a_roundabout.webp';

export const metadata: Metadata = {
  title: 'About Us | The Road Rescue Guys',
  description:
    'Learn about The Road Rescue Guys — a Birmingham-based UK vehicle recovery and roadside assistance operator focused on transparent pricing and dependable help.',
};

export default function AboutUsPage() {
  return (
    <>
      {/* SECTION 1: HERO (Split Screen) */}
      <section className="w-full bg-surface-container-lowest py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start bg-primary-fixed text-primary px-3 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-tech text-label-tech uppercase tracking-widest font-bold">
                  ABOUT THE ROAD RESCUE GUYS
                </span>
              </div>
              <h1 className="font-display-hero text-headline-lg lg:text-display-hero uppercase tracking-tight text-on-surface font-extrabold">
                Roadside Support You Can Rely On
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                The Road Rescue Guys provide professional vehicle recovery, roadside assistance and towing for
                drivers who need dependable help on the road.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  className="inline-flex items-center justify-center gap-3 px-space-lg py-4 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow-md transition-all"
                  href="tel:07881241835"
                >
                  <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
                  <span>Call Now (07881 241835)</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-3 px-space-lg py-4 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded shadow-sm transition-all"
                  href="https://wa.me/447881241835"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>WhatsApp Us</span>
                </a>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-on-surface-variant font-label-tech text-label-tech">
                <span className="inline-flex items-center gap-1.5 text-on-surface font-bold">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span> 24/7 UK
                  Dispatch
                </span>
                <span className="text-outline-variant">•</span>
                <span className="inline-flex items-center gap-1.5 text-on-surface font-bold">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">shield</span> PAS 43
                  Compliant Practice
                </span>
                <span className="text-outline-variant">•</span>
                <span className="inline-flex items-center gap-1.5 text-on-surface font-bold">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">price_check</span> Upfront
                  Transparent Pricing
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-high aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  alt="Modern UK flatbed recovery vehicle with amber beacons on motorway shoulder"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  src={heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-inverse-surface/95 backdrop-blur-md text-inverse-on-surface p-3 sm:px-4 sm:py-3 rounded shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-label-tech text-[10px] uppercase text-inverse-on-surface/70 tracking-wider">
                      Midlands Depot Base
                    </span>
                    <span className="font-headline-sm text-body-sm font-bold text-white">
                      25 Kingsway, Birmingham B4 7SL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="w-full bg-surface-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-surface-container-high">
                <div className="relative w-full h-[380px] sm:h-[460px]">
                  <Image
                    alt="A dedicated British roadside technician in high visibility neon yellow and orange overalls inspecting a vehicle engine with professional diagnostic equipment on a residential UK road with brick terraced houses in background, overcast daylight, authentic automotive recovery."
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    src={whoWeAreImage}
                  />
                </div>
                <div className="absolute top-4 left-4 bg-inverse-surface text-inverse-on-surface px-3 py-1.5 rounded font-label-tech text-label-tech flex items-center gap-2 shadow">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                  <span>PATROL SQUAD ACTIVE</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start bg-primary-fixed text-primary px-3 py-1 rounded font-label-tech text-label-tech font-bold uppercase tracking-wider">
                OUR MISSION &amp; PROMISE
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface font-extrabold">
                Helping Drivers When the Unexpected Happens
              </h2>
              <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
                <p>
                  Breakdowns and vehicle problems can happen without warning, whether on a bustling motorway like the
                  M6 or a quiet suburban street. At The Road Rescue Guys, our entire focus is making the recovery
                  process straightforward, transparent, and dependable.
                </p>
                <p>
                  We remove the stress and confusion by speaking directly with you, providing upfront pricing before
                  our wheels turn, and deploying experienced operators with modern flatbeds and diagnostic gear.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface font-medium">
                    Direct controller communication (no automated phone trees)
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface font-medium">
                    Fully equipped commercial slide-bed transporters &amp; diagnostic vans
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-surface-container-lowest p-3.5 rounded shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface font-medium">
                    Safe passenger transport in clean multi-passenger cabs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
            <span className="bg-primary-fixed text-primary px-3 py-1 rounded font-label-tech text-label-tech uppercase font-bold tracking-wider">
              SPECIALISED CAPABILITIES
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface font-extrabold">
              Core Roadside &amp; Transport Solutions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From rapid emergency winching on high-speed motorways to scheduled inter-city workshop transit, our
              heavy-duty fleet is primed for all passenger and light commercial needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                alt: 'A commercial yellow and red tilt-slide recovery truck loading a silver hatchback on a UK motorway emergency breakdown lane, clear motorway overhead directional gantries in background, sharp documentary style automotive photo.',
                src: vehicleRecoveryImage,
                badge: 'Emergency Recovery',
                title: 'Vehicle Recovery',
                text: 'Professional recovery when a vehicle cannot safely continue its journey. Complete non-runner handling, delicate accident extraction, and EV-safe transport.',
                tag: 'Tilt-Slide Beds • High-Capacity Winch',
              },
              {
                alt: 'An automotive technician using an orange heavy duty portable jump starter booster pack and diagnostic tablet under the open bonnet of a modern car on an English suburban street, daytime, ultra crisp clarity.',
                src: roadsideAssistanceImage,
                badge: 'On-Scene Repair',
                title: 'Roadside Assistance',
                text: 'Practical roadside support when drivers experience unexpected vehicle problems: 12V/24V battery jump starts, safe wheel changes, misfuelling drainage, and key lockout support.',
                tag: 'Mobile Diagnostics • Rapid Jumpstart',
              },
              {
                alt: 'A heavy duty yellow recovery truck safely towing a sedan through an urban UK junction with roundabouts and road signage under clear skies, professional logistics transportation.',
                src: towingImage,
                badge: 'Garage & Transit',
                title: 'Towing',
                text: 'Safe vehicle transportation when a car needs to be moved to a preferred garage, dealership, or home address across the Midlands or nationwide.',
                tag: 'Underlift Spec • Long-Distance Transit',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-56 relative bg-surface-container-high overflow-hidden">
                  <Image
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    src={service.src}
                  />
                  <div className="absolute top-3 left-3 bg-inverse-surface/90 text-inverse-on-surface px-2.5 py-1 rounded font-label-tech text-label-tech font-bold uppercase">
                    {service.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-sm text-on-surface-variant flex-1">{service.text}</p>
                  <div className="pt-3">
                    <span className="font-label-tech text-label-tech text-primary font-bold inline-flex items-center gap-1">
                      {service.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-2">
            <a
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-label-lg text-label-lg rounded shadow-sm transition-all"
              href="/services"
            >
              <span>View Our Services</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH (Timeline Process) */}
      <section className="w-full bg-surface-container py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
            <span className="bg-primary-fixed text-primary px-3 py-1 rounded font-label-tech text-label-tech uppercase font-bold tracking-wider">
              RECOVERY PROTOCOL
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface font-extrabold">
              Professional Help From First Call to Recovery
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We operate a structured, safety-first workflow designed to quickly stabilize emergency situations and
              eliminate guesswork.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                num: '01',
                icon: 'phone_in_talk',
                title: 'Contact Us',
                text: 'Tell us what has happened and where you are. Share your live pin or motorway marker post via phone or direct WhatsApp.',
              },
              {
                num: '02',
                icon: 'checklist',
                title: 'We Assess',
                text: 'We use the information you provide to allocate the right vehicle—flatbed, spec-lift, or diagnostic patrol with transparent pricing upfront.',
              },
              {
                num: '03',
                icon: 'local_shipping',
                title: 'Help Comes to You',
                text: 'Our recovery crew is dispatched directly to your location with live controller updates and real-time ETA tracking.',
              },
              {
                num: '04',
                icon: 'task_alt',
                title: 'Safe Next Steps',
                text: 'Depending on the situation, we get you moving roadside or arrange safe transport to your chosen garage or home address.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="font-label-tech text-[32px] font-black text-primary leading-none">{step.num}</span>
                  <span className="material-symbols-outlined text-outline-variant text-[28px]">{step.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">{step.title}</h3>
                <p className="font-body-md text-body-sm text-on-surface-variant">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
            <span className="bg-primary-fixed text-primary px-3 py-1 rounded font-label-tech text-label-tech uppercase font-bold tracking-wider">
              WHY STRANDED DRIVERS CHOOSE US
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface font-extrabold">
              Engineered for Safety, Speed &amp; Transparency
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tested, trusted practices backed by experienced operators who know UK motorways, junctions, and complex
              recoveries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'acute',
                bg: 'bg-primary text-on-primary',
                title: '24/7 Availability',
                text: 'Operating round the clock, every day of the year across Birmingham, the West Midlands corridor, and national UK motorways.',
              },
              {
                icon: 'minor_crash',
                bg: 'bg-inverse-surface text-inverse-on-surface',
                title: 'Professional Vehicle Handling',
                text: 'Low-approach tilt beds and soft-strap harness tie-downs protect sensitive vehicle bodywork, suspension, and premium alloy wheels.',
              },
              {
                icon: 'headset_mic',
                bg: 'bg-primary text-on-primary',
                title: 'Clear Communication',
                text: 'Direct phone communication with our active Birmingham control desk and real-time status notifications until our vehicle arrives.',
              },
              {
                icon: 'electric_car',
                bg: 'bg-inverse-surface text-inverse-on-surface',
                title: 'Reliable Roadside Support',
                text: 'Fully certified and equipped to safely handle electric vehicles (EVs), automatics, low-clearance sports cars, and commercial vans.',
              },
              {
                icon: 'share_location',
                bg: 'bg-tertiary text-on-tertiary',
                title: 'Convenient Call & WhatsApp',
                text: 'Instant contact options with one-tap calling and live GPS location pin sharing for accurate locating in hazardous areas.',
              },
              {
                icon: 'hub',
                bg: 'bg-inverse-surface text-inverse-on-surface',
                title: 'End-to-End Solutions',
                text: 'Complete end-to-end capability from rapid on-scene jumpstarts and tyre fitting to multi-mile onward vehicle transport.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg}`}>
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">{item.title}</h3>
                <p className="font-body-md text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL HIGH-CONTRAST CTA BANNER */}
      <section className="w-full bg-primary text-on-primary py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-on-primary/10 text-on-primary px-3 py-1 rounded font-label-tech text-label-tech uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
            CONTROLLER ON DUTY • IMMEDIATE DISPATCH
          </div>
          <h2 className="font-display-hero text-headline-lg lg:text-display-hero uppercase tracking-tight text-white font-black">
            Need Help on the Road?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary max-w-2xl">
            Contact The Road Rescue Guys for vehicle recovery, roadside assistance or towing. Our local Birmingham
            dispatch desk is active right now.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              className="inline-flex items-center justify-center gap-3 px-space-xl py-4 bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-lg text-label-lg rounded shadow-lg transition-all font-bold"
              href="tel:07881241835"
            >
              <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
              <span>Call 07881 241835</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 px-space-xl py-4 bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-label-lg text-label-lg rounded shadow transition-all font-bold"
              href="https://wa.me/447881241835"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>WhatsApp Us</span>
            </a>
          </div>
          <div className="text-on-primary/80 font-label-tech text-label-tech flex items-center gap-2 pt-2">
            <span className="material-symbols-outlined text-[16px]">pin_drop</span>
            <span>Central Hub: 25 Kingsway, Birmingham, B4 7SL • Nationwide Coverage</span>
          </div>
        </div>
      </section>
    </>
  );
}
