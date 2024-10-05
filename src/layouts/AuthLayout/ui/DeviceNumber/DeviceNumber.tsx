import cls from './DeviceNumber.module.pcss'
import { useTranslation } from 'react-i18next';

export const DeviceNumber = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.container}>
      <div className={cls.text__number}>23</div>
      <div className={cls.text__word}>{t('deviceStandard')}</div>
    </div>
  );
};
