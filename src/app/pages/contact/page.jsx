
"use client";

import React from 'react'
import {
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1300px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-500 sm:text-base">
              Have a question or need help? Our team is here to
              help you with your order and queries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-[1300px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Contact Information */}
          <div className="rounded-xl bg-[#FD9702] p-6 text-white sm:p-8">

            <div>
              <h2 className="text-2xl font-bold">
                Get In Touch
              </h2>

              <p className="mt-2 text-sm leading-6 text-orange-50">
                We would love to hear from you. Send us a
                message and our team will get back to you as
                soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-8 space-y-5">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-orange-50">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-orange-50">
                    support@99store.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-5 text-orange-50">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm text-orange-50">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Message */}
            <div className="mt-8 rounded-lg bg-white/10 p-4">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} />

                <span className="text-sm font-semibold">
                  Need quick help?
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-orange-50">
                Send us your query using the form and our
                support team will contact you shortly.
              </p>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-8">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Send Us a Message
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Fill out the form below and we will get back
                to you.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

              </div>

              {/* Order ID */}
              <div>
                <label
                  htmlFor="orderId"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Order ID
                  <span className="ml-1 text-xs font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="orderId"
                  type="text"
                  placeholder="Enter your order ID"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FD9702] py-3 text-sm font-semibold text-white transition hover:bg-orange-600 sm:w-auto sm:px-8"
              >
                <Send size={17} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  )
}
