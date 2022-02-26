export const colors = {
  green: 'green',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow'
}

export function getColor(color, step){
  return `bg-${color}-${step <= 9 ? `${step*100}` : '800'}`
}

export function randColor(){
  const randNumber = Math.floor(Math.random() * Object.keys(colors).length);
  return Object.values(colors)[randNumber]
}