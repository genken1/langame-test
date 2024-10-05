import cls from './LanguageSelector.module.pcss'
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <select className={cls.container} value={i18n.language} onChange={(e) => i18n.changeLanguage(e.currentTarget.value)}>
      <option value="en">En</option>
      <option value="ru">Ру</option>
    </select>
  );
};
