import CatsSlider from '../../components/CatsSlider/CatsSlider'
import './Home.css'
import AdoptionCounter from '../../components/AdoptionCounter/AdoptionCounter'
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();

  return (
    <>

      <h2 className='home-title'>{t('Gatitos buscando hogar')}</h2>
      <CatsSlider />
      <AdoptionCounter />
      
    </>
  )
}

export default Home
