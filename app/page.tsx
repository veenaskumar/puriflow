import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Droplet,
  Phone,
  ShieldCheck,
  ThumbsUp,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col min-w-full ">
      {/* Top Bar */}
      <div className="min-w-full bg-sky-600 text-white py-2 ">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 ">
          <div className="flex space-x-4 text-sm ">
            <Link href="#" className="hover:underline flex items-center">
              <span className="hidden sm:inline">Water</span> Quality
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="#" className="hover:underline flex items-center">
              <span className="hidden sm:inline">Health</span> Benefits
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="#" className="hover:underline">
              Stay Connected
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-sky-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-sky-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-sky-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full bg-sky-600 opacity-20 blur-md"></div>
              <div className="relative flex h-full w-full items-center justify-center">
                <Droplet className="h-8 w-8 text-sky-600" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-sky-800">
                PuriFlow
              </span>
              <p className="text-xs text-gray-500 -mt-1">
                PURE WATER SOLUTIONS
              </p>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-sky-800 hover:text-sky-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium text-gray-600">Call Us</span>
              <span className="text-sky-800 font-bold">+27 73 358 0460</span>
            </div>
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
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[50rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"></div>
          </div>
          <div className="container mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 md:py-24 px-4 md:px-6 justify-center items-center min-h-[50em]">
            <div className="space-y-6 max-w-xl">
              <Badge className="bg-sky-600 hover:bg-sky-700 px-3 py-1 text-sm">
                Premium Water Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Purity <span className="text-sky-400">Redefined</span>
              </h1>
              <p className="text-lg text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the difference with PuriFlow — premium,
                electrolyte-enhanced water designed for optimal hydration and
                wellness. Our advanced purification systems ensure every drop
                supports a healthier, more vibrant lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 hover:text-white text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F769833%2Fpexels-photo-769833.jpeg%3Fcs%3Dsrgb%26dl%3Dman-people-summer-769833.jpg%26fm%3Djpg&f=1&nofb=1&ipt=c1b7b550b5d1aa356fde84629de747c756cdad8aeb829416423b07eb3069d741?height=40&width=40&text=${i}`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">
                    Trusted by 10,000+ customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  The PuriFlow Advantage
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Our water purification systems offer unmatched quality and
                  performance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-sky-200">
                <div className="absolute top-0 right-0 h-20 w-20 bg-sky-50 rounded-bl-full opacity-70"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Filtration</h3>
                  <p className="mt-2 text-gray-500">
                    Multi-stage filtration removes 99.9% of contaminants for the
                    purest water possible.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Removes bacteria & viruses
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Eliminates heavy metals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Reduces chlorine & chemicals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-sky-200">
                <div className="absolute top-0 right-0 h-20 w-20 bg-sky-50 rounded-bl-full opacity-70"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Eco-Friendly</h3>
                  <p className="mt-2 text-gray-500">
                    Sustainable solutions that reduce plastic waste and conserve
                    water resources.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Reduces plastic bottle waste
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Energy-efficient operation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Minimal water wastage</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-sky-200">
                <div className="absolute top-0 right-0 h-20 w-20 bg-sky-50 rounded-bl-full opacity-70"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Support</h3>
                  <p className="mt-2 text-gray-500">
                    Professional installation and maintenance from our team of
                    certified technicians.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Professional installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Regular maintenance service
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">24/7 customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50" id="products">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Our Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Water Purification Solutions
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Discover our range of premium water purification systems for
                  every need.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-sky-600">Popular</Badge>
                </div>
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchoicebestforyou.com%2Fwp-content%2Fuploads%2F2020%2F06%2FBest-water-purifier-for-home-in-india-1-9.jpg&f=1&nofb=1&ipt=6d2f120b102e72341c3f3dcc39139e2aaa2d85204e7e54fc69e9a1686dc619ba?height=350&width=350&text=Home+Purifier"
                    alt="Home Water Purifier"
                    width={350}
                    height={350}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Home Water Purifiers</h3>
                  <div className="flex items-center mt-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      (128 reviews)
                    </span>
                  </div>
                  <p className="text-gray-500 mt-2">
                    Compact and efficient purification systems for residential
                    use.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-sky-800">
                      From R2,499
                    </span>
                    <Button
                      variant="outline"
                      className="text-sky-600 border-sky-600"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchoicebestforyou.com%2Fwp-content%2Fuploads%2F2020%2F06%2FBest-water-purifier-for-home-in-india-1-9.jpg&f=1&nofb=1&ipt=6d2f120b102e72341c3f3dcc39139e2aaa2d85204e7e54fc69e9a1686dc619ba?height=350&width=350&text=Commercial+System"
                    alt="Commercial Water System"
                    width={350}
                    height={350}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Commercial Systems</h3>
                  <div className="flex items-center mt-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      (86 reviews)
                    </span>
                  </div>
                  <p className="text-gray-500 mt-2">
                    High-capacity solutions for businesses, offices, and
                    industrial facilities.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-sky-800">
                      From R8,999
                    </span>
                    <Button
                      variant="outline"
                      className="text-sky-600 border-sky-600"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchoicebestforyou.com%2Fwp-content%2Fuploads%2F2020%2F06%2FBest-water-purifier-for-home-in-india-1-9.jpg&f=1&nofb=1&ipt=6d2f120b102e72341c3f3dcc39139e2aaa2d85204e7e54fc69e9a1686dc619ba?height=350&width=350&text=Replacement+Filters"
                    alt="Water Filters"
                    width={350}
                    height={350}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Replacement Filters</h3>
                  <div className="flex items-center mt-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      (214 reviews)
                    </span>
                  </div>
                  <p className="text-gray-500 mt-2">
                    High-quality replacement filters to maintain optimal
                    performance.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-sky-800">
                      From R349
                    </span>
                    <Button
                      variant="outline"
                      className="text-sky-600 border-sky-600"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-sky-600 hover:bg-sky-700">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Wellness Section */}
        <section className="w-full py-12 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600 mb-4">
                The Essence of Wellness
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Savor The <span className="text-sky-600">Purity Of Water</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-100 rounded-full opacity-70"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=250&text=Person+Drinking"
                        alt="Person drinking water"
                        width={250}
                        height={300}
                        className="w-full h-auto object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=250&text=Water+Bottle"
                        alt="Water bottle"
                        width={250}
                        height={200}
                        className="w-full h-auto object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=250&text=Water+Filter"
                        alt="Water filter"
                        width={250}
                        height={200}
                        className="w-full h-auto object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=250&text=Family+Drinking"
                        alt="Family drinking water"
                        width={250}
                        height={300}
                        className="w-full h-auto object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Experience the Difference
                </h3>
                <p className="text-gray-600">
                  At PuriFlow, we believe that water is more than just a
                  necessity—it's the essence of life and wellness. Our premium
                  water solutions are designed to enhance your hydration
                  experience with:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Electrolyte Enhancement</h4>
                      <p className="text-sm text-gray-500">
                        Optimal mineral balance for better hydration and
                        cellular function
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Oxygen Infusion</h4>
                      <p className="text-sm text-gray-500">
                        Increased oxygen content for improved energy and mental
                        clarity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Alkaline Balance</h4>
                      <p className="text-sm text-gray-500">
                        Perfectly balanced pH levels to support your body's
                        natural processes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Superior Taste</h4>
                      <p className="text-sm text-gray-500">
                        Crisp, refreshing flavor that makes staying hydrated a
                        pleasure
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-sky-600 hover:bg-sky-700 mt-4">
                  Discover Our Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Experience Pure, Revitalizing Water?
                </h2>
                <p className="md:text-xl/relaxed">
                  Join thousands of satisfied customers who have transformed
                  their hydration experience with PuriFlow's premium water
                  solutions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-sky-600 hover:bg-gray-100">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Consultation
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-500 rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-500 rounded-full opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mx-auto">
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
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-center">99.9%</h3>
                      <p className="text-sm text-center text-white/80">
                        Contaminant Removal
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mx-auto">
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
                          <path d="M12 22V8" />
                          <path d="m5 12 7-4 7 4" />
                          <path d="M5 16l7-4 7 4" />
                          <path d="M5 20l7-4 7 4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-center">5-Stage</h3>
                      <p className="text-sm text-center text-white/80">
                        Filtration Process
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mx-auto">
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
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-center">10,000+</h3>
                      <p className="text-sm text-center text-white/80">
                        Happy Customers
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mx-auto">
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
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-center">24/7</h3>
                      <p className="text-sm text-center text-white/80">
                        Customer Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 bg-gray-50" id="testimonials">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Hear from people who have experienced the PuriFlow difference.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-xl border bg-white p-6 shadow-sm">
                <div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600">
                    "The water quality from our PuriFlow system is exceptional.
                    Installation was quick and professional, and the difference
                    in taste is remarkable. My family has noticed improved
                    energy levels since switching."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=SJ"
                      alt="Sarah Johnson"
                      width={50}
                      height={50}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">
                      Homeowner, Cape Town
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-xl border bg-white p-6 shadow-sm">
                <div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600">
                    "We installed PuriFlow systems in all our office locations.
                    The service has been excellent, and our employees appreciate
                    having clean, great-tasting water. It's been a worthwhile
                    investment in our team's health."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=MN"
                      alt="Michael Ndlovu"
                      width={50}
                      height={50}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Michael Ndlovu</p>
                    <p className="text-sm text-gray-500">
                      Business Owner, Johannesburg
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-xl border bg-white p-6 shadow-sm">
                <div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600">
                    "The maintenance service from PuriFlow is outstanding.
                    They're always prompt and professional, ensuring our system
                    continues to provide clean water. The technicians are
                    knowledgeable and courteous."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=LV"
                      alt="Lisa van der Merwe"
                      width={50}
                      height={50}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Lisa van der Merwe</p>
                    <p className="text-sm text-gray-500">
                      Restaurant Manager, Durban
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" className="border-sky-600 text-sky-600">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-full bg-sky-600 opacity-20 blur-md"></div>
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Droplet className="h-6 w-6 text-sky-600" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-sky-800">
                    PuriFlow
                  </span>
                  <p className="text-xs text-gray-500 -mt-1">
                    PURE WATER SOLUTIONS
                  </p>
                </div>
              </Link>
              <p className="text-sm text-gray-500">
                Providing premium water purification solutions for homes and
                businesses across South Africa since 2005.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-sky-600">
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
                <Link href="#" className="text-gray-500 hover:text-sky-600">
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
                <Link href="#" className="text-gray-500 hover:text-sky-600">
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
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Home Purifiers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Commercial Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Replacement Filters
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Water Softeners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    News & Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Maintenance Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-sky-600 transition-colors"
                  >
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
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Link href="#" className="hover:text-sky-600 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-sky-600 transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-sky-600 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
