import React from 'react'

import { CodeIcon, DatabaseIcon,TerminalIcon, UploadIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


const features = [
  {
    name: '100% Hand Coded',
    description:
    "All of our sites are made from scratch using our own custom code. This allows us full control over the design and functionality for your clients. Meaning our sites are higher quality and always faster to load. Custom or page built sites can't compete with our quality.",
    icon: CodeIcon,
  },
  {
    name: 'Optimization',
    description:
      "Optimization & speed is our driving force for a high quality site. The number one reason visitors will leave your website is if it's too slow, or not user-friendly. But optimization also includes making every site accessible and SEO friendly to rank higher on Google.",
    icon: LightningBoltIcon,
  },
  {
    name: 'Subscription Pricing',
    description:
      "I personally have created a new pricing model that uses a unique subscription w/ very a low setup fee, and low monthly fee. This way, you enjoy affordable packages, no huge upfront costs, simple contracts, & no hidden fees.",
    icon: ScaleIcon,
  },
  {
    name: 'Wholesale Websites',
    description:
      "We work directly with business consultants, SEO specialists, graphic designers, and other business services to bring high quality websites to small businesses. Our wholesale websites are perfect for you and your clients.",
    icon: TerminalIcon,
  },
]


const metricsImg = require('../../images/metrics.png')
export default function FeatureSection() {
  return (
    <div className="py-12 pr-4 bg-white" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Affordable and coded by hand</h2>
          <p className="mt-2 max-w-3xl text-3xl leading-8 font-extrabold tracking-tight text-gray-900 lg:mx-auto">
          A New Way of Making Websites
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We are changing how small business web design & development is being done
          with our custom designed single page applications that we offer at a wholesale discount to business services.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}