import { useTranslation } from 'react-i18next';
import googlePlay from '@/assets/svg/google-play.svg';
import appstore from '@/assets/svg/appstore.svg';
import cls from './InstallMobilApp.module.pcss'

export const InstallMobilApp = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.container}>
      {t('installMobileApp')}
      <div className={ cls.groupButton }>
        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.f5computers.langame_aggregator">
          <img src={ googlePlay } alt="Download from Google Play"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/ru/app/langame/id1642484175">
          <img src={ appstore } alt="Download from AppStore"/>
        </a>
      </div>
    </div>
  );
};
