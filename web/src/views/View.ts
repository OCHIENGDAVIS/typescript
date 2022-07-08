import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
    this.render();
  };

  bindEvents = (fragement: DocumentFragment): void => {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragement.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  };
  mapRegions(fragement: DocumentFragment): void {
    const regMap = this.regionsMap();
    for (let key in regMap) {
      const selector = regMap[key];
      const element = fragement.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
