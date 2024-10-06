'use client'

import {XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup} from "@headlessui/react";
import {StarIcon} from "@heroicons/react/20/solid";
import {useState} from "react";

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        rating: 3.9,
        reviewCount: 117, colors: [
            {name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400'},
            {name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400'},
            {name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900'},
        ],
        sizes: [
            {name: 'XXS', inStock: true},
            {name: 'XS', inStock: true},
            {name: 'S', inStock: true},
            {name: 'M', inStock: true},
            {name: 'L', inStock: true},
            {name: 'XL', inStock: true},
            {name: 'XXL', inStock: true},
            {name: 'XXXL', inStock: false},
        ],
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in aspen white.",
        price: '$35',
        color: 'Aspen White',
        rating: 3.9,
        reviewCount: 117, colors: [
            {name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400'},
            {name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400'},
            {name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900'},
        ],
        sizes: [
            {name: 'XXS', inStock: true},
            {name: 'XS', inStock: true},
            {name: 'S', inStock: true},
            {name: 'M', inStock: true},
            {name: 'L', inStock: true},
            {name: 'XL', inStock: true},
            {name: 'XXL', inStock: true},
            {name: 'XXXL', inStock: false},
        ],
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in Charcoal.",
        price: '$35',
        color: 'Charcoal',
        rating: 3.9,
        reviewCount: 117, colors: [
            {name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400'},
            {name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400'},
            {name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900'},
        ],
        sizes: [
            {name: 'XXS', inStock: true},
            {name: 'XS', inStock: true},
            {name: 'S', inStock: true},
            {name: 'M', inStock: true},
            {name: 'L', inStock: true},
            {name: 'XL', inStock: true},
            {name: 'XXL', inStock: true},
            {name: 'XXXL', inStock: false},
        ],
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in Iso Dots.",
        price: '$35',
        color: 'Iso Dots',
        rating: 3.9,
        reviewCount: 117, colors: [
            {name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400'},
            {name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400'},
            {name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900'},
        ],
        sizes: [
            {name: 'XXS', inStock: true},
            {name: 'XS', inStock: true},
            {name: 'S', inStock: true},
            {name: 'M', inStock: true},
            {name: 'L', inStock: true},
            {name: 'XL', inStock: true},
            {name: 'XXL', inStock: true},
            {name: 'XXXL', inStock: false},
        ],
    },
]

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {
    const [openProductId, setOpenProductId] = useState(null);
    const [selectedColor, setSelectedColor] = useState(products.map((product) => product.colors[0]))
    const [selectedSize, setSelectedSize] = useState(products.map((product) => product.sizes[2]))

    return (
        <>
            <div className="relative overflow-hidden">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world
                                that doesn&#39;t care
                                if you live or die.
                            </p>
                        </div>
                        <a href="#"
                           className="mt-10 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                            Shop Collection
                        </a>
                        <div>
                            <div className="py-36 mt-28">
                                {/* Decorative image grid */}
                                <div aria-hidden="true"
                                     className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div
                                        className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div
                                                    className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group/product relative">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover/product:opacity-75 lg:h-80">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a onClick={() => setOpenProductId(product.id)}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {products.map((product) => (
                    <Dialog key={product.id} open={openProductId === product.id} onClose={() => setOpenProductId(null)}
                            className="relative z-10">
                        <DialogBackdrop transition
                                        className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"/>
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div
                                className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                                <DialogPanel transition
                                             className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl">
                                    <div
                                        className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            onClick={() => setOpenProductId(null)}
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                                        </button>

                                        <div
                                            className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">

                                            <div
                                                className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                                <img alt={product.imageAlt} src={product.imageSrc}
                                                     className="object-cover object-center"/>
                                            </div>
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                                                <section aria-labelledby="information-heading" className="mt-2">
                                                    <h3 id="information-heading" className="sr-only">
                                                        Product information
                                                    </h3>

                                                    <p className="text-2xl text-gray-900">{product.price}</p>

                                                    {/* Reviews */}
                                                    <div className="mt-6">
                                                        <h4 className="sr-only">Reviews</h4>
                                                        <div className="flex items-center">
                                                            <div className="flex items-center">
                                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                                    <StarIcon
                                                                        key={rating}
                                                                        aria-hidden="true"
                                                                        className={classNames(
                                                                            product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                            'h-5 w-5 flex-shrink-0',
                                                                        )}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <p className="sr-only">{product.rating} out of 5 stars</p>
                                                            <a href="#"
                                                               className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                {product.reviewCount} reviews
                                                            </a>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section aria-labelledby="options-heading" className="mt-10">
                                                    <h3 id="options-heading" className="sr-only">
                                                        Product options
                                                    </h3>

                                                    <form>
                                                        {/* Colors */}
                                                        <fieldset aria-label="Choose a color">
                                                            <legend className="text-sm font-medium text-gray-900">Color
                                                            </legend>

                                                            <RadioGroup
                                                                value={selectedColor}
                                                                onChange={setSelectedColor}
                                                                className="mt-4 flex items-center space-x-3"
                                                            >
                                                                {product.colors.map((color) => (
                                                                    <Radio
                                                                        key={color.name}
                                                                        value={color}
                                                                        aria-label={color.name}
                                                                        className={classNames(
                                                                            color.selectedClass,
                                                                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                                                        )}
                                                                    >
                                                                          <span
                                                                              aria-hidden="true"
                                                                              className={classNames(
                                                                                  color.class,
                                                                                  'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                                              )}
                                                                          />
                                                                    </Radio>
                                                                ))}
                                                            </RadioGroup>
                                                        </fieldset>

                                                        {/* Sizes */}
                                                        <fieldset aria-label="Choose a size" className="mt-10">
                                                            <div className="flex items-center justify-between">
                                                                <div
                                                                    className="text-sm font-medium text-gray-900">Size
                                                                </div>
                                                                <a href="#"
                                                                   className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Size guide
                                                                </a>
                                                            </div>

                                                            <RadioGroup
                                                                value={selectedSize}
                                                                onChange={setSelectedSize}
                                                                className="mt-4 grid grid-cols-4 gap-4"
                                                            >
                                                                {product.sizes.map((size) => (
                                                                    <Radio
                                                                        key={size.name}
                                                                        value={size}
                                                                        disabled={!size.inStock}
                                                                        className={classNames(
                                                                            size.inStock
                                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1',
                                                                        )}
                                                                    >
                                                                        <span>{size.name}</span>
                                                                        {size.inStock ? (
                                                                            <span
                                                                                aria-hidden="true"
                                                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                                            />
                                                                        ) : (
                                                                            <span
                                                                                aria-hidden="true"
                                                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                            >
                                                                          <svg
                                                                              stroke="currentColor"
                                                                              viewBox="0 0 100 100"
                                                                              preserveAspectRatio="none"
                                                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                          >
                                                                            <line x1={0} x2={100} y1={100} y2={0}
                                                                                  vectorEffect="non-scaling-stroke"/>
                                                                          </svg>
                                                                        </span>
                                                                        )}
                                                                    </Radio>
                                                                ))}
                                                            </RadioGroup>
                                                        </fieldset>

                                                        <div className="grid grid-cols-2 gap-2 w-full">
                                                            <a href="#"
                                                               className="mt-6 flex w-3/4 items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-black hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:accebg-gray-800 focus:ring-offset-2"
                                                            >
                                                                Details
                                                            </a>

                                                            <button
                                                                type="submit"
                                                                className="mt-6 flex w-full items-center justify-between rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            >
                                                                Add to bag
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                                     stroke="currentColor"
                                                                     className="size-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                ))}
            </div>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div
                                        className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            alt={callout.imageAlt}
                                            src={callout.imageSrc}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={callout.href}>
                                            <span className="absolute inset-0"/>
                                            {callout.name}
                                        </a>
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}