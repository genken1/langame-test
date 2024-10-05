import { useTranslation } from 'react-i18next';
import { ChangeEvent } from 'react';
import cls from './LanguageSelector.module.pcss'

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (e: ChangeEvent<HTMLSelectElement>) => {
    await i18n.changeLanguage(e.currentTarget.value)
  }

  return (
    <select className={cls.select} value={i18n.language} onChange={changeLanguage}>
      <option value="en">EN</option>
      <option value="ru">РУ</option>
    </select>
  );
};
