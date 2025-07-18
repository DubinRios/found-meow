import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const [language, setLanguege] = useState('es')
    
    useEffect(() => {
        changeLanguage(language)
    }, [language])

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
  
    const changeLanguage = (lng) => {
        if (lng !== currentLanguage) {
            i18n.changeLanguage(lng);
        }
    };
    return (
        <>
            <select onChange={(e) => setLanguege(e.target.value)} defaultValue={'es'} className='buttonSwitcher'>
                <option className='button-changeLanguage' value='es'>Español</option>
                <option className='button-changeLanguage' value='en'>English</option>
            </select>
        </>
    )
}
export default LanguageSwitcher;