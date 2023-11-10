import { React, Fragment, useState } from 'react';
import { Disclosure } from '@headlessui/react'

import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const Filter = () => {



    const filters = [
        {
            id: 'color',
            name: 'Color',
            options: [
                { value: 'white', label: 'White', checked: false },
                { value: 'beige', label: 'Beige', checked: false },
                { value: 'blue', label: 'Blue', checked: true },
                { value: 'brown', label: 'Brown', checked: false },
                { value: 'green', label: 'Green', checked: false },
                { value: 'purple', label: 'Purple', checked: false },
            ],
        },
        {
            id: 'category',
            name: 'Category',
            options: [
                { value: 'new-arrivals', label: 'New Arrivals', checked: false },
                { value: 'sale', label: 'Sale', checked: false },
                { value: 'travel', label: 'Travel', checked: true },
                { value: 'organization', label: 'Organization', checked: false },
                { value: 'accessories', label: 'Accessories', checked: false },
            ],
        },
        {
            id: 'size',
            name: 'Size',
            options: [
                { value: '2l', label: '2L', checked: false },
                { value: '6l', label: '6L', checked: false },
                { value: '12l', label: '12L', checked: false },
                { value: '18l', label: '18L', checked: false },
                { value: '20l', label: '20L', checked: false },
                { value: '40l', label: '40L', checked: true },
            ],
        },
    ]

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


    return (

        <main className="mx-1  px-4 sm:px-6 lg:px-2">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">

                <div className="flex items-center">

                    <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                    >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <h2 id="products-heading" className="sr-only">
                    Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="hidden lg:block">
                        <h3 className="sr-only">Categories</h3>


                        {filters.map((section) => (
                            <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6 w-full">
                                {({ open }) => (
                                    <>
                                        <h3 className="-my-3 flow-root">
                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    {open ? (
                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                    ) : (
                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </h3>

                                        <Disclosure.Panel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            defaultValue={option.value}
                                                            type="checkbox"
                                                            defaultChecked={option.checked}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                                            className="ml-3 text-sm text-gray-600"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </form>

                </div>
            </section>
        </main>


    );

}


export default Filter;