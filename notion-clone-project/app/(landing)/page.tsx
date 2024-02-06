import React from 'react'
import Heading from './_components/Heading'
import Heroes from './_components/Heroes'
import Footer from "./_components/Footer"

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex flex-col items-center px-6 pb-10 text-center ms:justify-start justify-normal gap-y-8 flex-1">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage