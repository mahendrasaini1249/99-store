import React from 'react'

export default function page() {
    return (
        <main className="min-h-screen bg-gray-50">

            <section className="mx-auto max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">

                <div className="rounded-xl border border-gray-200 bg-white p-6 text-center sm:p-10">

                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        My Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Manage your account, orders and preferences.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

                        <button
                            type="button"
                            className="rounded-lg bg-[#FD9702] px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#FD9702] hover:text-[#FD9702]"
                        >
                            Create Account
                        </button>

                    </div>

                </div>

            </section>

        </main>
    )
}
