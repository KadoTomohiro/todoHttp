import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { TodoRepositoryService } from '../todo-repository.service';

@Component({
  selector: 'tdh-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private repo: TodoRepositoryService) {
    this.initForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.repo.post({
      finish: false,
      task: this.form.value['task']
    })
      .subscribe(() => {
        this.form.reset();
      });
  }

  private initForm() {
    this.form = this.fb.group({
      task: ['', Validators.required]
    });
  }

}
