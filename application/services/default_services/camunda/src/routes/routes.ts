import { CamundaController } from '../controllers/Camundacontroller';

export class Routes {

    public camunda: CamundaController = new CamundaController();


    public routes(app): void {

        app.route('/accesslevel').post(this.camunda.camundacontroller);
        app.route('/savescreen').post(this.camunda.postscreens);
        app.route('/getallscreens').get(this.camunda.getallscreens);
        app.route('/dmngenerate').post(this.camunda.generateDMN);

    }
}