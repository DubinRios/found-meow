import CatsSlider from '../../components/CatsSlider/CatsSlider'
import './Home.css'
import AdoptionCounter from '../../components/AdoptionCounter/AdoptionCounter'


const Home = () => {
  return (
    <>

      <div className='home'>
        <h2 className='home__title'>Gatitos buscando hogar</h2>
        <CatsSlider />
      </div>
      <AdoptionCounter />
      
    </>
  )
}

export default Home
