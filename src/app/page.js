import About from '@/components/About/About'
import Apoinment from '@/components/Apoimment/Apoinment'
import Category from '@/components/Category/Category'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing/Pricing'
import Process from '@/components/Process/Process'
import Service from '@/components/Service/Service'
import Subscribe from '@/components/Subscribe/Subscribe'
import Team from '@/components/Team/Team'
import Testimonial from '@/components/Testimonial/Testimonial'
import Chooseus from '@/components/Whychooseus/Chooseus'


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <Category />
      <About />
      <Service />
      <Chooseus />
      <Team />
      <Apoinment />
      <Process />
      <Testimonial />
      <Pricing />
      <Subscribe />
      <Footer />
    </main>
  )
}
