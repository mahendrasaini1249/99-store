import Link from "next/link";

import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
} from "lucide-react";

const shopLinks = [
    {
        name: "All Products",
        href: "#",
    },
    {
        name: "Categories",
        href: "/pages/categories",
    },
    {
        name: "New Arrivals",
        href: "#",
    },
    {
        name: "Best Sellers",
        href: "#",
    },
    {
        name: "Offers",
        href: "#",
    },
];

const supportLinks = [
    {
        name: "Contact Us",
        href: "/pages/contact",
    },
    {
        name: "Track Order",
        href: "/track-order",
    },
    {
        name: "FAQs",
        href: "/faq",
    },
    {
        name: "Shipping Policy",
        href: "/shipping-policy",
    },
    {
        name: "Returns & Refunds",
        href: "/returns-refunds",
    },
];

const companyLinks = [
    {
        name: "About Us",
        href: "/about",
    },
    {
        name: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        name: "Terms & Conditions",
        href: "/terms",
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-gray-950 text-white">

            {/* Newsletter Section */}
            <div className="w-full border-b border-gray-800">
                <div className="mx-auto w-full max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                        <div className="w-full lg:max-w-lg">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                Stay Updated
                            </p>

                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Get the latest deals & offers
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                Subscribe to our newsletter and never miss
                                exclusive deals and new arrivals.
                            </p>
                        </div>

                        <div className="w-full lg:max-w-md">
                            <div className="flex flex-col gap-2 sm:flex-row">

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-11 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-gray-500"
                                />

                                <button
                                    type="button"
                                    className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                                >
                                    Subscribe
                                    <ArrowUpRight size={16} />
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Main Footer */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-[1300px] px-6 py-10 sm:px-6 sm:py-12 lg:px-8">

                    <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-2 sm:gap-10 sm:text-left lg:grid-cols-5 lg:gap-8">

                        {/* Brand */}
                        <div className="col-span-2 flex w-full flex-col items-center sm:col-span-2 sm:items-start lg:col-span-2">

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                                    <img
                                        className="h-full w-full rounded-full object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdCK3PQuteOR0kzVwdUxHXovSWujz_3AJf5DAD-5cEQ&s=10"
                                        alt="99 Store"
                                    />
                                </div>

                                <div className="text-left">
                                    <h2 className="text-xl font-extrabold leading-none tracking-tight">
                                        STORE
                                    </h2>

                                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-gray-500">
                                        Everything You Need
                                    </p>
                                </div>
                            </Link>

                            <p className="mt-5 w-full max-w-sm text-sm leading-6 text-gray-400">
                                Your everyday destination for quality products,
                                great prices and a simple shopping experience.
                            </p>

                            {/* Contact */}
                            <div className="mt-6 w-full space-y-3">

                                <div className="flex items-start justify-center gap-3 sm:justify-start">
                                    <MapPin
                                        size={17}
                                        className="mt-0.5 shrink-0 text-gray-400"
                                    />

                                    <span className="text-sm leading-5 text-gray-400">
                                        Jaipur, Rajasthan, India
                                    </span>
                                </div>

                                <div className="flex items-center justify-center gap-3 sm:justify-start">
                                    <Phone
                                        size={17}
                                        className="shrink-0 text-gray-400"
                                    />

                                    <Link
                                        href="tel:+919999999999"
                                        className="text-sm text-gray-400 transition hover:text-white"
                                    >
                                        +91 99999 99999
                                    </Link>
                                </div>

                                <div className="flex items-center justify-center gap-3 sm:justify-start">
                                    <Mail
                                        size={17}
                                        className="shrink-0 text-gray-400"
                                    />

                                    <Link
                                        href="mailto:support@99store.com"
                                        className="break-all text-sm text-gray-400 transition hover:text-white"
                                    >
                                        support@99store.com
                                    </Link>
                                </div>

                            </div>

                            {/* Social Icons */}
                            <div className="mt-6 flex items-center justify-center gap-2 sm:justify-start">

                                <Link
                                    href="#"
                                    aria-label="Facebook"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-sm font-bold text-gray-400 transition hover:border-gray-600 hover:bg-gray-900 hover:text-white"
                                >
                                    f
                                </Link>

                                <Link
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-sm font-bold text-gray-400 transition hover:border-gray-600 hover:bg-gray-900 hover:text-white"
                                >
                                    ◎
                                </Link>

                                <Link
                                    href="#"
                                    aria-label="Twitter"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-sm font-bold text-gray-400 transition hover:border-gray-600 hover:bg-gray-900 hover:text-white"
                                >
                                    𝕏
                                </Link>

                                <Link
                                    href="#"
                                    aria-label="YouTube"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-sm font-bold text-gray-400 transition hover:border-gray-600 hover:bg-gray-900 hover:text-white"
                                >
                                    ▶
                                </Link>

                            </div>

                        </div>

                        {/* Shop */}
                        <div className="w-full">

                            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                Shop
                            </h3>

                            <ul className="w-full space-y-3">
                                {shopLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 transition hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Support */}
                        <div className="w-full">

                            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                Support
                            </h3>

                            <ul className="w-full space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 transition hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Company */}
                        <div className="col-span-2 w-full sm:col-span-1">

                            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                Company
                            </h3>

                            <ul className="w-full space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 transition hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full border-t border-gray-800">

                <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

                    <p className="text-xs text-gray-500">
                        © 2026 99 Store. All rights reserved.
                    </p>

                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">

                        <Link
                            href="/privacy-policy"
                            className="transition hover:text-white"
                        >
                            Privacy
                        </Link>

                        <span className="h-3 w-px bg-gray-800" />

                        <Link
                            href="/terms"
                            className="transition hover:text-white"
                        >
                            Terms
                        </Link>

                        <span className="h-3 w-px bg-gray-800" />

                        <Link
                            href="/shipping-policy"
                            className="transition hover:text-white"
                        >
                            Shipping
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}