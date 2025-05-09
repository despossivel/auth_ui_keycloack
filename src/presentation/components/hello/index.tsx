import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Container } from './styles';

export const Hello = () => {
    const { t } = useTranslation();



    return <div>
        <b>{t('translation.setup.init')}</b>
    </div>
}

export default Hello;