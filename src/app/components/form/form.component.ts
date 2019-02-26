import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { IServiceFrontend } from 'src/app/interfaces/main';
import { ServiceTypeStoreService } from 'src/app/store/service-type-store.service';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private form: FormGroup;
  private id: number;

  constructor(
    private fb: FormBuilder,
    private crud: CrudService,
    private stStore: ServiceTypeStoreService,
    private formService: FormServiceService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      serviceType: ['', Validators.required]
    });
    this.formService.$form.subscribe((service) => {
      console.log('seteando formulario');
      this.name.setValue(service.name);
      this.description.setValue(service.description);
      this.serviceType.setValue(service.serviceType);
      this.id = service.id;
    });
  }

  private get name(): AbstractControl {
    return this.form.controls['name'];
  }

  private get description(): AbstractControl {
    return this.form.controls['description'];
  }

  private get serviceType(): AbstractControl {
    return this.form.controls['serviceType'];
  }

  public guardarInformacion() {
    const isInvalidId = this.id === -1;
    const id = isInvalidId ? this.stStore.nextServiceId : this.id;
    const service = {
      id: id,
      name: this.name.value,
      description: this.description.value,
      serviceType: this.serviceType.value,
    } as IServiceFrontend;
    if (isInvalidId) {
      this.crud.createService(service);
    } else {
      const position = service.id - 1;
      this.crud.updateService(position, service);
    }
    this.id = -1;
  }

  public cancelarCambios() {
    this.form.reset();
  }

}
