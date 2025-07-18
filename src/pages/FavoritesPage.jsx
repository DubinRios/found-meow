import React from 'react'
import Favorites from '../components/Favorites/Favorites'
import { useTranslation } from 'react-i18next';

const FavoritesPage = () => {
  const { t } = useTranslation();

  return (
    <>
    <h1 className='titleF'>{t("Favoritos")}</h1>
        <Favorites />
    </>
  )
}

export default FavoritesPage