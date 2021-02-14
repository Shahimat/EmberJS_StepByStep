import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('http://0.0.0.0:8080/http://localhost:3000');
        const { data } = await response.json();
        return data;
    }
}
