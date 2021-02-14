import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @tracked text = 'Нажми на меня';
    index = 0;

    @action
    async getData() {
        const response = await fetch('http://0.0.0.0:8080/http://localhost:3000');
        const { data } = await response.json();
        this.text = data[this.index].name;
        this.index = this.index + 1;
        if (this.index > 1) {
            this.index = 0;
        }
    }

}
