import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Areas We Cover', href: '/#areas-we-cover' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Vehicle Recovery', href: '/services#vehicle-recovery' },
  { label: 'Roadside Assistance', href: '/services#roadside-assistance' },
  { label: 'Towing', href: '/services#towing' },
  { label: 'Accident Recovery', href: '/services#vehicle-recovery' },
  { label: 'Motorway Assistance', href: '/services#roadside-assistance' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[22px]">emergency</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-white block leading-none font-bold">
                  THE ROAD RESCUE GUYS
                </span>
                <span className="font-label-tech text-label-tech text-primary-fixed uppercase tracking-wider">
                  UK BREAKDOWN &amp; RECOVERY
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-inverse-on-surface/80">
              Rapid-response vehicle recovery and roadside breakdown assistance across Birmingham and UK motorways.
              ISO accredited operators on 24-hour priority standby.
            </p>
            <div className="flex items-center gap-2 text-label-tech font-label-tech bg-inverse-surface/80 p-2 rounded border border-outline/30">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
              <span className="text-tertiary-fixed">Live Dispatch Active</span>
              <span className="text-outline-variant">•</span>
              <span className="text-inverse-on-surface/70">25 Min Avg ETA</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-headline-sm text-white font-bold tracking-tight">Quick Links</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-inverse-on-surface/80 hover:text-white transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-headline-sm text-white font-bold tracking-tight">Services</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              {serviceLinks.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <Link className="text-inverse-on-surface/80 hover:text-white transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-headline-sm text-white font-bold tracking-tight">
              Emergency Contact
            </h3>
            <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-inverse-on-surface/80">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">phone_in_talk</span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-inverse-on-surface/60">24/7 Phone</span>
                  <a className="text-white font-bold hover:text-primary-fixed" href="tel:07700900123">
                    07700 900123
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] mt-0.5">chat</span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-inverse-on-surface/60">
                    WhatsApp Support
                  </span>
                  <a
                    className="text-white hover:text-tertiary-fixed"
                    href="https://wa.me/447700900123"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    07700 900123
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-outline-variant text-[18px] mt-0.5">mail</span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-inverse-on-surface/60">Email</span>
                  <a className="text-white hover:underline" href="mailto:help@theroadrescueguys.co.uk">
                    help@theroadrescueguys.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-outline-variant text-[18px] mt-0.5">pin_drop</span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-inverse-on-surface/60">
                    Depot Address
                  </span>
                  <span className="text-white">25 Kingsway, Birmingham, B4 7SL</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-outline/20 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-inverse-on-surface/60">
          <p>© {new Date().getFullYear()} The Road Rescue Guys Ltd. Registered in England &amp; Wales. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Safety &amp; Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
