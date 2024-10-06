import cls from './Footer.module.pcss'
import { Link } from '@/widgets';
import { useTranslation } from 'react-i18next';
import logoText from '@/assets/svg/logo-text.svg'

const links = [
  {
    localeName: 'link.info',
    link: 'https://langame.ru/software'
  },
  {
    localeName: 'link.vacancies',
    link: ''
  },
  {
    localeName: 'link.help',
    link: ''
  },
  {
    localeName: 'link.privacy',
    link: 'https://langame.ru/policy'
  },
  {
    localeName: 'link.term',
    link: 'https://langame.ru/user-agreement'
  },
  {
    localeName: 'link.faq',
    link: ''
  },
  {
    localeName: 'link.priceList',
    link: ''
  },
]

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.footer}>
      <div className={cls.footerLinks}>
        {links.map(({ link, localeName }) => (
          <Link key={localeName} newTab to={link}>{t(localeName)}</Link>
        ))}
      </div>
      <div className={cls.footerCompany}>
        <span className={cls.footerCompanyFirstPart}>Powered by&nbsp;</span>
        <img src={logoText} alt="Text logo" />
        <span className={cls.footerCompanySecondPart}>&nbsp;SOFTWARE</span>
      </div>
    </div>
  );
};
