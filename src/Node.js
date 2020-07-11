import { luminosity, rgb2hsl } from './colors';

function hex(value, maxLength = 2) {
  return Math.floor(value).toString(16).padStart(maxLength, '0');
}

export default class Node {
  constructor() {
    const top = 100 * Math.random();
    const bottom = 100 * Math.random();
    const red = 256 * Math.random();
    const green = 256 * Math.random();
    const blue = 256 * Math.random();

    this.top = Math.max(top, bottom);
    this.bottom = Math.min(top, bottom);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.height = this.top - this.bottom;
    this.center = this.bottom + this.height / 2;

    const [hue, saturation, lightness] = rgb2hsl(red, green, blue);

    this.hue = 360 * hue;
    this.saturation = 100 * saturation;
    this.lightness = 100 * lightness;
    this.luminance = luminosity(red, green, blue);

    this.color = `#${hex(red)}${hex(green)}${hex(blue)}`;

    this.key = '';
    this.value = '';
  }

  style(key) {
    if (this.key === key) return this.value;

    this.key = key;

    let top = 0;
    let height = 100;
    let color = 'var(--no-color)';

    switch (key) {
      case 'all':
        top = this.bottom;
        height = this.height;
        color = this.color;
        break;
      case 'top':
        height = this.top;
        break;
      case 'bottom':
        top = this.bottom;
        height = 100 - this.bottom;
        break;
      case 'height':
        top = 50 - this.height / 2;
        height = this.height;
        break;
      case 'center':
        top = this.center - 0.5;
        height = 1;
        break;
      case 'red':
        color = `#${hex(this.red)}0000`;
        break;
      case 'green':
        color = `#00${hex(this.green)}00`;
        break;
      case 'blue':
        color = `#0000${hex(this.blue)}`;
        break;
      case 'hue':
        color = `hsl(${this.hue}, 50%, 50%)`;
        break;
      case 'saturation':
        color = `hsl(180, ${this.saturation}%, 50%);`;
        break;
      case 'lightness':
        color = `hsl(180, 50%, ${this.lightness}%);`;
        break;
      case 'luminance':
        color = `#${hex(this.luminance).repeat(3)}`;
        break;
    }

    this.value = `top: ${top}%; height: ${height}%; background-color: ${color};`;

    return this.value;
  }
}
