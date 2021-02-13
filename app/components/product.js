import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
    @action
    onShow() {
        console.log(this);
        alert(`DAAAA!`);
    }
}
