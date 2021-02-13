import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
    @tracked color = 'red';

    get productImage() {
        return `/assets/images/beats-solo-${this.color}.png`;
    }
    
    @action
    onChangeColorRed() {
        this.color = 'red';
    }

    @action
    onChangeColorBlack() {
        this.color = 'black';
    }
}
