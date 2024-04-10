import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() selectedUser = new User();
  @Output() userCreated = new EventEmitter<User>();
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
      imageUrl: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedUser) {
      this.userForm.get('name')?.setValue(this.selectedUser.name);
      this.userForm.get('email')?.setValue(this.selectedUser.email);
      this.userForm.get('phone')?.setValue(this.selectedUser.phone);
      this.userForm.get('imageUrl')?.setValue(this.selectedUser.image);
    }
  }

  ngOnInit(): void {
  }

  save(): void {
    const user = new User();
    user.name = this.userForm.get('name')?.value;
    user.phone = this.userForm.get('phone')?.value;
    user.email = this.userForm.get('email')?.value;
    user.image = this.userForm.get('imageUrl')?.value;
    user.id = this.selectedUser.id;
    this.userCreated.emit(user);
    this.userForm.reset();
  }
}
