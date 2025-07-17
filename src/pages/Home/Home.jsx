import CatsSlider from '../../components/CatsSlider/CatsSlider'
import './Home.css'
import AdoptionCounter from '../../components/AdoptionCounter/AdoptionCounter'


const Home = () => {
  return (
    <>

      <h2 className='home-title'>Gatitos buscando hogar</h2>
      <CatsSlider />
      <AdoptionCounter />
      
    </>
  )
}

export default Home
