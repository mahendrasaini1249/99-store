import Link from "next/link";
import {
    Search,
    ShoppingCart,
    UserRound,
    Menu,
    X,
    Heart,
    MapPin,
    ChevronDown,
} from "lucide-react";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Shop",
        href: "/pages/shop",
    },
    {
        name: "Categoryies",
        href: "/pages/categoryies",
    },
    {
        name: "About",
        href: "/pages/about",
    },
    {
        name: "Contact",
        href: "/pages/contact",
    },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            {/* Top Bar */}
            <div className="hidden bg-black text-white sm:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>Free delivery on orders above ₹499</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/track-order"
                            className="transition hover:text-gray-300"
                        >
                            Track Order
                        </Link>

                        <span className="h-3 w-px bg-gray-600" />

                        <Link
                            href="/contact"
                            className="transition hover:text-gray-300"
                        >
                            Need Help?
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="shrink-0"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
                                    <img className="h-[60px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdCK3PQuteOR0kzVwdUxHXovSWujz_3AJf5DAD-5cEQ&s=10" alt="" />
                                </div>

                                <div className="hidden sm:block">
                                    <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900">
                                        <span className="text-[#FD9702]">99 /</span>  STORE
                                    </h1>

                                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500">
                                        Everything You Need
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Search */}
                        <div className="hidden max-w-xl flex-1 md:block">
                            <div className="relative">
                                <Search
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="h-11 w-full rounded-full border bg-gray-50 pl-11 pr-5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
                                />
                            </div>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden items-center gap-1 md:flex">
                            <Link
                                href="/wishlist"
                                className="group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
                            >
                                <Heart
                                    size={20}
                                    className="text-gray-700 transition group-hover:text-[#FD9702]"
                                />
                            </Link>

                            <Link
                                href="/account"
                                className="group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
                            >
                                <UserRound
                                    size={20}
                                    className="text-gray-700 group-hover:text-[#FD9702]"
                                />
                            </Link>

                            <Link
                                href="/cart"
                                className="group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
                            >
                                <ShoppingCart
                                    size={20}
                                    className="text-gray-700 group-hover:text-[#FD9702]"
                                />

                                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] font-bold text-white">
                                    2
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-1 md:hidden">
                            <Link
                                href="/search"
                                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
                            >
                                <Search size={20} />
                            </Link>

                            <Link
                                href="/cart"
                                className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
                            >
                                <ShoppingCart size={20} />

                                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] font-bold text-white">
                                    2
                                </span>
                            </Link>

                            {/* CSS-only mobile menu */}
                            <details className="relative">
                                <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full hover:bg-gray-100 [&::-webkit-details-marker]:hidden">
                                    <Menu size={21} />
                                </summary>

                                <div className="absolute right-0 top-12 w-64 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl">
                                    <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                                        <span className="text-sm font-semibold text-gray-900">
                                            Menu
                                        </span>

                                        <ChevronDown
                                            size={17}
                                            className="text-gray-400"
                                        />
                                    </div>

                                    <nav className="space-y-1">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="mt-3 border-t border-gray-100 pt-3">
                                        <Link
                                            href="/wishlist"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                        >
                                            <Heart size={17} />
                                            Wishlist
                                        </Link>

                                        <Link
                                            href="/account"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                        >
                                            <UserRound size={17} />
                                            My Account
                                        </Link>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="pb-3 md:hidden">
                        <div className="relative">
                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Search products..."
                                className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden border-b border-gray-100 md:block">
                <div className="mx-auto flex h-12 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-gray-600 transition hover:text-black"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}