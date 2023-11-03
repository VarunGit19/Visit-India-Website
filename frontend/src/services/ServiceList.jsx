import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Giving best tours as per weather`,
      desc: `The best tours as per regional weather`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `The best tours at the best possible rates`,
   },
   {
      imgUrl: customizationImg,
      title: 'Perfect Experience',
      desc: `We provide the best experience`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList