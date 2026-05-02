export const formatMoney = (value: number, currencySymbol = '$') => {
  return `${currencySymbol}${value.toLocaleString('es-AR')}`;
};
