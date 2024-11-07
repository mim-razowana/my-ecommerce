import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const about = () => {
  return (
    <div>

    <div className="text-2xl text-center pt-8 border-t">
    
        <Title text1={'ADOUT'} text2={'US'}/>
      
    </div>
  
 
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className="w-full md:max-w-[450px]" src={assets.about} alt="About Us Image"/>
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, dolorem. Maiores doloribus eaque velit dolore dolorum sed hic quaerat, magnam, totam sequi, eos magni provident perspiciatis delectus voluptatem consequatur unde sapiente officiis earum officia fuga? Voluptate itaque delectus laborum! Sit nulla labore magni modi porro? Aliquam quam odit eaque nobis dignissimos dolorum molestiae est deserunt excepturi, dolores iste velit recusandae accusamus, cum ad laboriosam veniam libero doloremque eveniet dolor nisi incidunt quibusdam? Voluptatibus necessitatibus corporis, nostrum amet debitis repellendus repudiandae adipisci recusandae nemo eum. Sunt dolores veritatis asperiores, ea quaerat vel ducimus corrupti est ad, ratione, voluptas quo eius. Alias?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi eaque, neque quibusdam accusantium doloribus quidem amet saepe? Ullam perspiciatis commodi aliquam eveniet officia sapiente nihil voluptatem qui quasi doloribus. Doloremque, explicabo! Fugiat laboriosam odio quisquam ullam error suscipit adipisci incidunt expedita, aliquam architecto delectus? Sed error labore necessitatibus veniam fugit, libero sit consequatur tenetur voluptates qui, temporibus dolorem aliquam quidem itaque sint iusto repellat ab optio natus sequi? Sit velit optio at quibusdam sint quisquam dolorem ipsum similique ex!</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, maiores....</p>
      </div>
    </div>
  
    

    <div className="text-xl py-4">
     <Title text1={'WHY '} text2={'CHOOSE US'}/>
    </div>
  
   
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className="text-gray-600">Our team of dedicated professionals is here to assist you every step of the way...</p>
      </div>
    </div>

    <NewsletterBox/>
  </div>
  )
}

export default about