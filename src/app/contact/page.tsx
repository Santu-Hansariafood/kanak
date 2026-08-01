import React from 'react';
import {
  Clock3,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const contactOptions = [
  {
    icon: Phone,
    title: 'Call us directly',
    value: '+91 81222 53546',
    href: 'tel:+918122253546',
    note: 'Speak with our team for retail orders or wholesale enquiries.',
  },
  {
    icon: Mail,
    title: 'Email us',
    value: 'sales@kanakretail.com',
    href: 'mailto:sales@kanakretail.com',
    note: 'Perfect for bulk requests, product questions, and custom orders.',
  },
  {
    icon: MapPin,
    title: 'Visit our store',
    value: 'Chennai, Tamil Nadu',
    href: 'https://maps.google.com/?q=Kanak+Retail+Chennai',
    note: 'We are happy to assist customers looking for quality pantry essentials.',
  },
];

const featureCards = [
  {
    icon: Leaf,
    title: 'Pure & trusted ingredients',
    description: 'From premium spices to everyday pulses, every product is sourced with care.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & wholesale support',
    description: 'We cater to homes, stores, and businesses looking for consistent supply.',
  },
  {
    icon: PackageCheck,
    title: 'Fast assistance',
    description: 'Our team responds quickly to pricing, stock, and delivery questions.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(124,192,67,0.16),_transparent_40%),linear-gradient(135deg,_#fffdf7_0%,_#f8fff3_45%,_#ffffff_100%)] text-gray-800">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:px-8 md:py-20 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" />
              Contact Kanak Retail
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Reach our team for{' '}
              <span className="text-emerald-600">quality groceries and trusted service</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whether you are shopping for your home pantry or planning a larger retail order, we are here to help with friendly support and dependable service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918122253546"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                <Phone className="h-5 w-5" />
                Call now
              </a>
              <a
                href="mailto:sales@kanakretail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                <Mail className="h-5 w-5" />
                Email us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(16,24,40,0.25)] sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Need help with an order?</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Share your details and we will get back to you with the best options for your needs.
            </p>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none ring-0 transition focus:border-emerald-500"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500"
                  placeholder="Phone number"
                  type="tel"
                />
              </div>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500"
                placeholder="Email address"
                type="email"
              />
              <textarea
                className="min-h-28 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500"
                placeholder="Tell us what you are looking for"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {contactOptions.map(({ icon: Icon, title, value, href, note }) => (
            <a
              key={title}
              href={href}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 font-medium text-gray-800">{value}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{note}</p>
            </a>
          ))}
        </div>

        <div className="grid gap-6 rounded-[2rem] border border-emerald-100 bg-emerald-950 p-6 text-white md:grid-cols-[0.95fr_1.05fr] md:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Why customers choose us</p>
            <h2 className="mt-3 text-3xl font-semibold">A dependable retail partner for everyday essentials</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-emerald-100/90">
              We combine quality, easy communication, and reliable support so your retail shopping experience feels simple and trustworthy.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-800 bg-emerald-900/60 px-4 py-3">
              <Clock3 className="h-5 w-5 text-emerald-300" />
              <span>Support available for product questions, pricing, and order assistance.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-emerald-800 bg-white/10 p-4 backdrop-blur-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-100/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}