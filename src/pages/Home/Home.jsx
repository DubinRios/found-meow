import CatsSlider from '../../components/CatsSlider/CatsSlider'
import './Home.css'
import AdoptionCounter from '../../components/AdoptionCounter/AdoptionCounter'


const Home = () => {
  return (
   <div className='home-container'> 
      <h1 className='home__title'>Aquí Hay un Gatito Esperando por Ti</h1>
      <h3 className='home__subtitle'>Dale un hogar y transforma su historia (y la tuya)</h3>
      <p className='home__text'>Aquí no solo adoptas: recibes a un compañero fiel, juguetón, curioso y lleno de ternura.
Los gatitos que forman parte de este proyecto llegan con un pasado distinto, algunos llegaron tras ser rescatados, 
otros fueron entregados en busca de una vida mejor. Todos han sido cuidados con esmero y están preparados para llenar tu casa de amor, 
ronroneos tranquilos, siestas al sol y miradas que lo dicen todo.
</p>
      <CatsSlider />
      <AdoptionCounter />
    </div> 
  )
}

export default Home


