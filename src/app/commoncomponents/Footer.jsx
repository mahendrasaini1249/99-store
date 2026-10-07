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
        <footer className="bg-gray-950 text-white">
            {/* Newsletter Section */}
            <div className="max-w-[1300px] mx-auto border-b border-gray-800">
                <div className=" px-4 py-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between ">
                        <div className="max-w-lg">
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

                        <div className="w-full max-w-md">
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-11 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-gray-500"
                                />

                                <button
                                    type="button"
                                    className="flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
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
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-extrabold text-gray-950">
                                <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdCK3PQuteOR0kzVwdUxHXovSWujz_3AJf5DAD-5cEQ&s=10" alt="" />
                            </div>

                            <div>
                                <h2 className="text-xl font-extrabold leading-none tracking-tight">
                                    STORE
                                </h2>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-gray-500">
                                    Everything You Need
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                            Your everyday destination for quality products,
                            great prices and a simple shopping experience.
                        </p>

                        {/* Contact */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-gray-400"
                                />

                                <span className="text-sm leading-5 text-gray-400">
                                    Jaipur, Rajasthan, India
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
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

                            <div className="flex items-center gap-3">
                                <Mail
                                    size={17}
                                    className="shrink-0 text-gray-400"
                                />

                                <Link
                                    href="mailto:support@99store.com"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    support@99store.com
                                </Link>
                            </div>
                        </div>

                        {/* Social Icons */}
                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-2">
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
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Shop
                        </h3>

                        <ul className="space-y-3">
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
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Support
                        </h3>

                        <ul className="space-y-3">
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
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Company
                        </h3>

                        <ul className="space-y-3">
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

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
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