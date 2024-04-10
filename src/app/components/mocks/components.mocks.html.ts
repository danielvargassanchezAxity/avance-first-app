import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
    selector: 'app-child',
    template: ''
})
export class MockChildComponent {
    @Input() message = '';
    @Output() valueChange = new EventEmitter<string>();
}

@Component({
    selector: 'app-user-form',
    template: ''
})
export class MockUserFormComponent {
    @Input() selectedUser = new User();
    @Output() userCreated = new EventEmitter<User>();
}