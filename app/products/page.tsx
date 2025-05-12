import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplet, Filter, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductsPage() {
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
              className="text-sm font-medium text-sky-600 underline underline-offset-4"
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
                  Our Products
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our range of premium water purification systems for
                  every need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="residential" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                  <TabsTrigger value="industrial">Industrial</TabsTrigger>
                  <TabsTrigger value="accessories">Accessories</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="residential" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Under-sink Water Purifier"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Under-sink Water Purifier</CardTitle>
                      <CardDescription className="mt-2">
                        Advanced multi-stage filtration system that fits neatly
                        under your sink, providing clean water directly from
                        your tap.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Removes 99.9% of contaminants
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            5-stage filtration process
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Easy installation and maintenance
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Countertop Water Filter"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Countertop Water Filter</CardTitle>
                      <CardDescription className="mt-2">
                        Compact and efficient water filter that sits on your
                        countertop, requiring no permanent installation.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Removes chlorine, lead, and other contaminants
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            3-stage filtration system
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">No plumbing required</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Whole House Water System"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Whole House Water System</CardTitle>
                      <CardDescription className="mt-2">
                        Comprehensive water filtration system that purifies
                        water for your entire home, from every tap and shower.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Complete home water purification
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Multi-stage filtration with UV sterilization
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Professional installation included
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="commercial" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Office Water Dispenser"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Office Water Dispenser</CardTitle>
                      <CardDescription className="mt-2">
                        High-capacity water dispenser with hot and cold options,
                        perfect for office environments.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Advanced filtration technology
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Hot and cold water options
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Energy-efficient design
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Restaurant Filtration System"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Restaurant Filtration System</CardTitle>
                      <CardDescription className="mt-2">
                        Specialized water filtration system designed for
                        restaurants and food service establishments.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Improves taste of food and beverages
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Reduces scale buildup in equipment
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            High-capacity system for busy establishments
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Hotel Water System"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Hotel Water System</CardTitle>
                      <CardDescription className="mt-2">
                        Comprehensive water treatment solution for hotels,
                        providing clean water throughout the property.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Whole-building purification
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Customizable to property size
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Maintenance service plans available
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="industrial" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Industrial Reverse Osmosis System"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Industrial Reverse Osmosis System</CardTitle>
                      <CardDescription className="mt-2">
                        High-capacity reverse osmosis system for industrial
                        applications requiring ultra-pure water.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            99.9% contaminant removal
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Customizable flow rates
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Automated monitoring system
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Water Recycling System"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Water Recycling System</CardTitle>
                      <CardDescription className="mt-2">
                        Advanced water recycling solution for industrial
                        facilities looking to reduce water consumption.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Reduces water usage by up to 70%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Multi-stage treatment process
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Environmentally friendly solution
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Wastewater Treatment System"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Wastewater Treatment System</CardTitle>
                      <CardDescription className="mt-2">
                        Complete wastewater treatment solution for industrial
                        facilities, ensuring compliance with environmental
                        regulations.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Meets all regulatory requirements
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Customizable to specific waste types
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Comprehensive service and support
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Replacement Filters"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Replacement Filters</CardTitle>
                      <CardDescription className="mt-2">
                        High-quality replacement filters for all PuriFlow water
                        purification systems.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Compatible with all PuriFlow systems
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Long-lasting performance
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">Easy to install</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Water Testing Kits"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Water Testing Kits</CardTitle>
                      <CardDescription className="mt-2">
                        DIY water testing kits to check the quality of your
                        water at home or business.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Tests for common contaminants
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Easy to use with clear instructions
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">
                            Professional lab analysis option available
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Faucets and Dispensers"
                        width={350}
                        height={200}
                        className="rounded-md object-cover w-full h-48"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Faucets and Dispensers</CardTitle>
                      <CardDescription className="mt-2">
                        Premium water faucets and dispensers designed to work
                        with PuriFlow filtration systems.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">
                            Stylish, modern designs
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4 text-sky-600" />
                          <span className="text-sm">Durable construction</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="h-4 w-4 text-sky-600"
                          >
                            <path d="M12 22V8" />
                            <path d="m5 12 7-4 7 4" />
                            <path d="M5 16l7-4 7 4" />
                            <path d="M5 20l7-4 7 4" />
                          </svg>
                          <span className="text-sm">Easy installation</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-sky-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Not sure which product is right for you?
                </h2>
                <p className="md:text-xl/relaxed">
                  Our water experts can help you find the perfect solution for
                  your specific needs. Contact us for a free consultation and
                  water quality assessment.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-sky-600 hover:bg-gray-100">
                    Get Expert Advice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Water expert consultation"
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
