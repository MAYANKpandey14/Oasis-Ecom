'use client'
import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-[85px]">
      <section className="">
        <div className="grid justify-between gap-2 max-w-screen-xl px-9 py-15 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-9 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Best Fashion Collection
            </h1>
            <p className="max-w-5xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
              lacus meleifend menean diverra loremous.
            </p>

            <div>
              <Link
                href="https://manishmalhotra.in/collection/fl-bridal-couture-2023-24"
                target="_blank"
              >
                <button
                  type="button"
                  class="mt-1.5 inline-block font-bold bg-black px-6 py-3 text-md tracking-wide text-white rounded-md"
                >
                  Explore Shop Collection
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
               className="rounded-lg ml-2"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero Image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
