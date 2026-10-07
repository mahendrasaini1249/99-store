"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
    return (
        <section className="mx-auto max-w-[1300px] px-4 pt-5 sm:px-6 lg:px-8">
            <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm"
            >
                {/* Home */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-1 text-gray-500 transition hover:text-[#FD9702]"
                >
                    <Home size={15} />

                    <span>Home</span>
                </Link>

                {/* Other Items */}
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <div
                            key={`${item.label}-${index}`}
                            className="flex shrink-0 items-center gap-1"
                        >
                            <ChevronRight
                                size={15}
                                className="text-gray-400"
                            />

                            {isLast ? (
                                <span className="font-medium text-gray-900">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-500 transition hover:text-[#FD9702]"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </nav>
        </section>
    );
};

export default Breadcrumb;