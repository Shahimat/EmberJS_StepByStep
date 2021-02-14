import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
    async model(params) {
        const { item_id } = params;
        const response = await fetch('http://0.0.0.0:8080/http://localhost:3000');
        const { data } = await response.json();
        const product = data.find(({id}) => id === item_id);
        return product;
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.color = model.colors[0].color;
    }
}
