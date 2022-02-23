export const colors = {
  green: 'green',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow'
}

export function getColor(color, step){
  return `bg-${color}-${step <= 8 ? `${100+step*100}` : '900'}`
}