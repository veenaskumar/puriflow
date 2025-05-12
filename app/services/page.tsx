import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Droplet,
  Settings,
  PenToolIcon as Tool,
  WrenchIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
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
              className="text-sm font-medium text-sky-600 underline underline-offset-4"
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
                  Our Services
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive water solutions for homes and businesses.
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
                  Professional Installation
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Our team of certified technicians ensures that your water
                  purification system is installed correctly and efficiently,
                  with minimal disruption to your home or business.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Expert installation by certified technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>
                      Neat, professional work with attention to detail
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>
                      Thorough testing and demonstration of your new system
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Clean-up after installation is complete</span>
                  </div>
                </div>
                <Button className="bg-sky-600 hover:bg-sky-700">
                  Schedule Installation
                </Button>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Professional installation"
                  width={500}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Maintenance service"
                  width={500}
                  height={400}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Regular Maintenance
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Keep your water purification system performing at its best
                  with our professional maintenance services. We offer flexible
                  maintenance plans to suit your needs and budget.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>
                      Regular filter replacements at recommended intervals
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>System inspection and cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Performance testing and optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Priority scheduling for maintenance visits</span>
                  </div>
                </div>
                <Button className="bg-sky-600 hover:bg-sky-700">
                  View Maintenance Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Water Quality Testing
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Our comprehensive water testing services identify contaminants
                  and water quality issues, helping you choose the right
                  purification solution for your specific needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Detailed analysis of your water composition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Testing for common contaminants and impurities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Clear, easy-to-understand test results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600" />
                    <span>Expert recommendations based on test findings</span>
                  </div>
                </div>
                <Button className="bg-sky-600 hover:bg-sky-700">
                  Schedule Water Testing
                </Button>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Water quality testing"
                  width={500}
                  height={400}
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
                  Additional Services
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Beyond installation and maintenance, we offer a range of
                  specialized services to meet all your water needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <div className="rounded-full bg-sky-100 p-3 mb-4">
                    <Tool className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>Repairs & Troubleshooting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Fast, reliable repair services for all water purification
                    systems, even if you didn't purchase from us.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">
                        Prompt response to service calls
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">Experienced technicians</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">Quality replacement parts</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="text-sky-600">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-col items-center">
                  <div className="rounded-full bg-sky-100 p-3 mb-4">
                    <Settings className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>System Upgrades</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Enhance your existing water purification system with the
                    latest technology and features.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">Performance improvements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">New feature integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">Capacity expansion</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="text-sky-600">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-col items-center">
                  <div className="rounded-full bg-sky-100 p-3 mb-4">
                    <WrenchIcon className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>Consultation Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Expert advice on water quality issues and the best solutions
                    for your specific situation.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">
                        Personalized recommendations
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">Cost-benefit analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600" />
                      <span className="text-sm">Long-term planning</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="text-sky-600">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-sky-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Service Plans
                </h2>
                <p className="md:text-xl/relaxed">
                  Our flexible service plans ensure your water purification
                  system continues to perform at its best. Choose the plan that
                  suits your needs and budget.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Regular maintenance visits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Priority service for repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Discounted replacement parts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Annual water quality testing</span>
                  </div>
                </div>
                <Button className="bg-white text-sky-600 hover:bg-gray-100">
                  View Service Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Service plans"
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
