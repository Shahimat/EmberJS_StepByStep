import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {

    @action
    async getData() {
        console.log(this.model);
        const response = await fetch('http://0.0.0.0:8080/http://localhost:3000');
        const { data } = await response.json();
        alert(data);
    }

}
