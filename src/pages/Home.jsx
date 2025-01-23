import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Faqs from "../components/Faqs"
import Hero from "../components/welcome/hero"
import Discovercourses from "../components/welcome/Discovercourses"
import DiscoverTeachers from "../components/welcome/DiscoverTeachers"
import WhyChoose from "../components/welcome/WhyChoose"
import DiscoverBooks from "../components/welcome/DiscoverBooks"
import CallToAction from "../components/welcome/CallToAction"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <main className=  "bg-gray-50">
      <Hero/>
      <Discovercourses/>
      <DiscoverTeachers/>
      <WhyChoose/>
      <Faqs />
      <DiscoverBooks/>
      <CallToAction/>
    </main>
  )
}

