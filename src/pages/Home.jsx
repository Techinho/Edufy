import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Faqs from "../components/welcome/Faqs"
import Hero from "../components/welcome/Hero"
import Discovercourses from "../components/welcome/Discovercourses"
import DiscoverTeachers from "../components/welcome/DiscoverTeachers"
import WhyChoose from "../components/welcome/WhyChoose"
import DiscoverBooks from "../components/welcome/DiscoverBooks"
import CallToAction from "../components/welcome/CallToAction"

export default function Home() {


  return (
      <main className=" min-h-screen">
        <Hero />
        <WhyChoose />
        <Discovercourses />
        <DiscoverTeachers />
        <DiscoverBooks />
        <Faqs />
        <CallToAction />
      </main>
  )
}

