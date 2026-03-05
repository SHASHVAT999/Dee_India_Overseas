const x = require('lucide-react');
const icons = Object.keys(x).filter(k =>
    k.toLowerCase().includes('bike') ||
    k.toLowerCase().includes('car') ||
    k.toLowerCase().includes('truck') ||
    k.toLowerCase().includes('tire') ||
    k.toLowerCase().includes('wheel') ||
    k.toLowerCase().includes('motor') ||
    k.toLowerCase().includes('scooter')
);
console.log(icons);
