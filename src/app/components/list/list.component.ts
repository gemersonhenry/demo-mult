import { Component, Input } from '@angular/core';
import { ServiceModel } from 'src/app/models/main';
import { CrudService } from 'src/app/services/crud.service';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() services: ServiceModel[];

  constructor(
    private crud: CrudService,
    private formService: FormServiceService
  ) { }

  public deleteService($event: ServiceModel) {
    this.crud.deleteService($event.id);
    this.formService.resetPersistanceForm();
  }

  public editService($event) {
    this.formService.setForm($event);
  }

}
