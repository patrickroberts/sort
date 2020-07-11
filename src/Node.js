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

    const allDimensions = () => {
      top = this.bottom;
      height = this.height;
    };

    const allColor = () => {
      color = this.color;
    };

    switch (key) {
      case 'all':
        allDimensions();
        allColor();
        break;
      case 'top-all':
        allColor();
      case 'top':
        height = this.top;
        break;
      case 'bottom-all':
        allColor();
      case 'bottom':
        top = this.bottom;
        height = 100 - this.bottom;
        break;
      case 'height-all':
        allColor();
      case 'height':
        top = 50 - this.height / 2;
        height = this.height;
        break;
      case 'center-all':
        allColor();
      case 'center':
        top = this.center - 0.5;
        height = 1;
        break;
      case 'red-all':
        allDimensions();
      case 'red':
        color = `#${hex(this.red)}0000`;
        break;
      case 'green-all':
        allDimensions();
      case 'green':
        color = `#00${hex(this.green)}00`;
        break;
      case 'blue-all':
        allDimensions();
      case 'blue':
        color = `#0000${hex(this.blue)}`;
        break;
      case 'hue-all':
        allDimensions();
      case 'hue':
        color = `hsl(${this.hue}, var(--no-saturation), var(--no-lightness))`;
        break;
      case 'saturation-all':
        allDimensions();
      case 'saturation':
        color = `hsl(var(--no-hue), ${this.saturation}%, var(--no-lightness));`;
        break;
      case 'lightness-all':
        allDimensions();
      case 'lightness':
        color = `hsl(var(--no-hue), var(--no-saturation), ${this.lightness}%);`;
        break;
      case 'luminance-all':
        allDimensions();
      case 'luminance':
        color = `#${hex(this.luminance).repeat(3)}`;
        break;
    }

    this.value = `top: ${top}%; height: ${height}%; background-color: ${color};`;

    return this.value;
  }
}
