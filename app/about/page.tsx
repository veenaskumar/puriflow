import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Droplet, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-sky-600" />
            <span className="text-xl font-bold">PuriFlow</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:underline"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-sky-600 underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:underline"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-sky-600 hover:bg-sky-700">
            Get a Quote
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About PuriFlow
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated to providing clean, pure water solutions since 2005.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Story
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  PuriFlow was founded in 2005 with a simple mission: to provide
                  South African homes and businesses with access to clean, pure
                  water through innovative and reliable purification systems.
                </p>
                <p className="text-gray-500">
                  What began as a small family business has grown into one of
                  South Africa's leading water purification companies, serving
                  thousands of satisfied customers across the country. Our
                  growth has been built on a foundation of quality products,
                  exceptional service, and a genuine commitment to improving
                  water quality for all.
                </p>
                <p className="text-gray-500">
                  Today, we continue to innovate and expand our range of
                  solutions, while maintaining the personal touch and attention
                  to detail that has been our hallmark since day one.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="PuriFlow founders"
                  width={550}
                  height={550}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Mission & Values
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Guided by a commitment to excellence and environmental
                  responsibility.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-sky-100 p-3">
                  <Droplet className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-center text-gray-500">
                  We are committed to providing the highest quality water
                  purification solutions, using only the best materials and
                  technologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-sky-100 p-3">
                  <Users className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Service</h3>
                <p className="text-center text-gray-500">
                  We believe in exceptional customer service, from initial
                  consultation to ongoing support and maintenance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-sky-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-center text-gray-500">
                  We are dedicated to environmental responsibility, creating
                  solutions that conserve water and reduce plastic waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Team
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Meet the dedicated professionals behind PuriFlow's success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="John Smith"
                  width={200}
                  height={200}
                  className="rounded-full object-cover h-40 w-40"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                  <p className="mt-2 text-gray-500">
                    With over 20 years of experience in water treatment, John
                    founded PuriFlow with a vision to make clean water
                    accessible to all.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sarah Johnson"
                  width={200}
                  height={200}
                  className="rounded-full object-cover h-40 w-40"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Technical Director</p>
                  <p className="mt-2 text-gray-500">
                    Sarah leads our technical team, bringing her expertise in
                    water engineering to develop innovative purification
                    solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Ndlovu"
                  width={200}
                  height={200}
                  className="rounded-full object-cover h-40 w-40"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Ndlovu</h3>
                  <p className="text-sm text-gray-500">Operations Manager</p>
                  <p className="mt-2 text-gray-500">
                    Michael ensures the smooth running of our operations, from
                    installation to maintenance and customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Achievements
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Recognized for excellence in water purification and customer
                  service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex items-start space-x-4 rounded-lg border p-6 shadow-sm">
                <Award className="h-12 w-12 text-sky-600" />
                <div>
                  <h3 className="text-xl font-bold">
                    Best Water Purification Company 2022
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Awarded by the South African Water Association for
                    excellence in product quality and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-sky-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">ISO 9001 Certification</h3>
                  <p className="mt-2 text-gray-500">
                    Certified for our commitment to quality management systems
                    and continuous improvement.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-sky-600"
                >
                  <path d="M12 22V8" />
                  <path d="m5 12 7-4 7 4" />
                  <path d="M5 16l7-4 7 4" />
                  <path d="M5 20l7-4 7 4" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">10,000+ Installations</h3>
                  <p className="mt-2 text-gray-500">
                    Successfully installed over 10,000 water purification
                    systems across South Africa.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-sky-600"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">
                    Environmental Impact Award 2023
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Recognized for our contribution to reducing plastic waste
                    through sustainable water solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-sky-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Join Our Team
                </h2>
                <p className="md:text-xl/relaxed">
                  We're always looking for talented individuals who share our
                  passion for clean water and exceptional service. Explore
                  career opportunities at PuriFlow.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-sky-600 hover:bg-gray-100">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="PuriFlow team"
                  width={500}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Droplet className="h-6 w-6 text-sky-600" />
                <span className="text-xl font-bold">PuriFlow</span>
              </Link>
              <p className="text-sm text-gray-500">
                Providing premium water purification solutions for homes and
                businesses across South Africa.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:underline">
                    Home Purifiers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Commercial Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Replacement Filters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Water Softeners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    News & Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Maintenance Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Warranty Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-gray-500">
                © 2024 PuriFlow. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
