'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold" htmlFor="fullName">
            Full Name *
          </label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            id="fullName"
            name="fullName"
            placeholder="e.g. David Walker"
            required
            type="text"
          />
        </div>
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold" htmlFor="phoneNumber">
            Phone Number *
          </label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="07881 241835"
            required
            type="tel"
          />
        </div>
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold" htmlFor="emailAddress">
          Email Address *
        </label>
        <input
          className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
          id="emailAddress"
          name="emailAddress"
          placeholder="name@example.co.uk"
          required
          type="email"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold" htmlFor="vehicleModel">
            Vehicle Make / Model
          </label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            id="vehicleModel"
            name="vehicleModel"
            placeholder="e.g. Ford Transit or BMW 3 Series"
            type="text"
          />
        </div>
        <div>
          <label
            className="block font-label-md text-label-md text-on-surface mb-2 font-semibold"
            htmlFor="locationPostcode"
          >
            Current Location / Postcode
          </label>
          <input
            className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            id="locationPostcode"
            name="locationPostcode"
            placeholder="e.g. Birmingham B4 7SL or M6 J6"
            type="text"
          />
        </div>
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold" htmlFor="serviceType">
          Service Needed
        </label>
        <div className="relative">
          <select
            className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner appearance-none cursor-pointer"
            id="serviceType"
            name="serviceType"
            defaultValue="Vehicle Recovery"
          >
            <option value="Vehicle Recovery">Emergency Vehicle Recovery</option>
            <option value="Roadside Assistance">Roadside Breakdown Assistance</option>
            <option value="Towing">Scheduled Towing / Transport</option>
            <option value="Not Sure">Not Sure / Diagnostic Consultation</option>
          </select>
          <span className="material-symbols-outlined absolute right-4 top-3.5 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>
      </div>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold" htmlFor="messageDetails">
          Message / Breakdown Details
        </label>
        <textarea
          className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
          id="messageDetails"
          name="messageDetails"
          placeholder="Briefly describe what happened, current vehicle safety, and where you need transport to..."
          rows={4}
        />
      </div>
      <button
        className="w-full py-4 px-8 bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-body-lg font-bold rounded shadow-md transition-all flex items-center justify-center gap-2"
        type="submit"
      >
        <span className="material-symbols-outlined text-[20px]">send</span>
        <span>Send Enquiry</span>
      </button>
      {submitted && (
        <div className="p-4 rounded bg-tertiary-container/10 text-tertiary font-body-sm text-body-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span>Thank you. Your request has been logged. An operator will review your details promptly.</span>
        </div>
      )}
      <div className="p-4 bg-error-container/60 rounded flex items-start gap-3 mt-4">
        <span className="material-symbols-outlined text-error text-[22px] flex-shrink-0 mt-0.5">warning</span>
        <p className="font-body-sm text-body-sm text-on-error-container font-semibold">
          In an active roadside emergency, please call{' '}
          <a className="underline font-bold" href="tel:07881241835">
            07881 241835
          </a>{' '}
          immediately instead of submitting a form.
        </p>
      </div>
    </form>
  );
}
