import React from 'react'

export default function JoinUs () {
  return (
    <section className="mt-14 lg:mt-28">
      <div className="text-center md:w-9/12 w-11/12 mx-auto flex flex-col justify-center items-center py-12 lg:py-20 bg-[#FFF7FC] text-primary-dark-brown border-[#B70569] md:border-[15px] border-[10px] rounded-xl">
        <h2 className="text-2xl font-normal text-primary-dark-brown">
          Become a member
        </h2>
        <p className="text-sm lg:text-base py-6 lg:w-[55ch]">
          Be a part of a community that celebrates diversity and empowers women to thrive in tech.
          Connect with like-minded individuals, gain access to resources and events, and help shape the future of the industry.
        </p>
        <a
          href="https://bit.ly/joinshecodeafrica"
          target="_blank"
          rel="noreferrer"
          className="rounded-full text-white px-12 py-3 bg-primary-main-pink focus:ring-4 focus:ring-[#FDC0E3]">
          Join Us
        </a>
      </div>
    </section>
  )
}
