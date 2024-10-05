import { useEffect, useState } from 'react';
import cls from './CurrentTimeViewer.module.pcss'

export const CurrentTimeViewer = () => {
  const [date,setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(()=> setDate(new Date()), 1000 )
    return function cleanup() {
      clearInterval(timer)
    }
  }, []);

  return(
    <div className={cls.timer}>
      <span>{date.getHours()}</span>:<span>{date.getMinutes()}</span>
    </div>
  )
};
