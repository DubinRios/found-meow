import React from 'react'
import Favorites from '../components/Favorites/Favorites'
import { useTranslation } from 'react-i18next';

const FavoritesPage = () => {
  const { t } = useTranslation();

  return (
    <>
    <h2 className='titleF'>{t("Favoritos")}</h2>
        <Favorites />
    </>
  )
}

export default FavoritesPage