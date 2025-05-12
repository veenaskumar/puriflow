import Link from "next/link";
import Image from "next/image";
import { Droplet, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
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
            <Link href="/about" className="text-sm font-medium hover:underline">
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
              className="text-sm font-medium text-sky-600 underline underline-offset-4"
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
                  Contact Us
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help with all your water purification needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-gray-500">
                    Have questions about our products or services? Need a quote
                    for your home or business? Our friendly team is ready to
                    assist you.
                  </p>
                </div>

                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full bg-sky-100 p-3">
                        <Phone className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-500 mt-1">+27 12 345 6789</p>
                        <p className="text-gray-500">
                          Monday - Friday: 8am - 5pm
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full bg-sky-100 p-3">
                        <Mail className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-500 mt-1">
                          info@puriflow.co.za
                        </p>
                        <p className="text-gray-500">sales@puriflow.co.za</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full bg-sky-100 p-3">
                        <MapPin className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p className="text-gray-500 mt-1">123 Water Way</p>
                        <p className="text-gray-500">Pretoria, South Africa</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="#"
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                    >
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
                    <Link
                      href="#"
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                    >
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
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                    >
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

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Location
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Visit our showroom to see our water purification systems in
                  action.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="rounded-lg overflow-hidden border shadow-sm h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Map location"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Find answers to common questions about our products and
                  services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  How long does installation take?
                </h3>
                <p className="mt-2 text-gray-500">
                  Installation typically takes 2-3 hours for residential systems
                  and 1-2 days for commercial systems, depending on complexity.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">Do you offer warranties?</h3>
                <p className="mt-2 text-gray-500">
                  Yes, all our products come with a minimum 2-year warranty, and
                  extended warranty options are available.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  How often should filters be replaced?
                </h3>
                <p className="mt-2 text-gray-500">
                  Filter replacement schedules vary by product and usage, but
                  typically range from 6-12 months. Our maintenance service can
                  handle this for you.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Do you service all areas in South Africa?
                </h3>
                <p className="mt-2 text-gray-500">
                  We provide installation and service in all major cities and
                  surrounding areas. Contact us to confirm service availability
                  in your location.
                </p>
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
