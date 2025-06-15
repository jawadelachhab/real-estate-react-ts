import Awards from "./Awards/Awards"
import Featured from "./Featured/Featured"
import Hero from "./Hero/Hero"
import Location from "./Location/Location"
import Price from "./Price/Price"
import Recent from "./Recent/Recent"
import Team from "./Team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home
