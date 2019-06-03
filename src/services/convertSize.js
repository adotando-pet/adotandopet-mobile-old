const convertSize = (size) => {
  if (size === 'small') return 'Pequeno';
  if (size === 'medium') return 'Médio';
  if (size === 'large') return 'Grande';
  return 'Pequeno';
};

export default convertSize;
