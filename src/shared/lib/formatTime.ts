const formatTimeWithExtraZero = (time: number) => {
  if (time < 10) {
    return '0' + String(time);
  }
  return String(time)
}

export const formatTime = (date: Date) => {
  return formatTimeWithExtraZero(date.getHours()) + ':' + formatTimeWithExtraZero(date.getMinutes());
}
