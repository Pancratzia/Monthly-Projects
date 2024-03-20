import { useTranslation } from 'react-i18next'
import '../assets/styles/errorPage.css'

const ErrorPage = () => {
  const {t} = useTranslation('global');
  return (
    <div className="errorPage container">
      <h1 className="title">{t('ErrorPage.title')}</h1>
      <p className="subtitle">{t('ErrorPage.text')}</p>
    </div>
  )
}

export default ErrorPage