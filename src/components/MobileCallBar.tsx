import WhatsAppIcon from './WhatsAppIcon';

export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-t border-surface-container-high shadow-[0_-4px_16px_rgba(23,28,34,0.12)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-3">
        <a
          className="flex items-center justify-center gap-2 py-3.5 px-3 bg-primary text-on-primary font-label-lg text-label-lg rounded shadow text-center"
          href="tel:07881241835"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span>Call Now</span>
        </a>
        <a
          className="flex items-center justify-center gap-2 py-3.5 px-3 bg-tertiary-container text-on-tertiary font-label-lg text-label-lg rounded shadow text-center"
          href="https://wa.me/447881241835"
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon className="text-[20px]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
