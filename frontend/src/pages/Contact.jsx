import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'

const contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'}text2={'US'}/>
      </div>


      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact} alt="Contact Us Image" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">14164 Circuit House Para <br/> Jashore,Khulna,Bangladesh</p>
          <p className="text-gray-500">Tel: (+880) 00224422 <br/> Email: admin@mimsari.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at mimsari</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white focus:bg-gray-700 focus:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>


      <NewsletterBox />
    </div>

  )
}

export default contact