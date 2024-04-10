import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './02-databinding/databinding.component';
import { MyFirstComponent } from './01-my-first/my-first.component';
import { ChildComponent } from './03-components-comunication/child/child.component';
import { LifecycleComponent } from './03-components-comunication/lifecycle/lifecycle.component';
import { ParentComponent } from './03-components-comunication/parent/parent.component';
import { CreditCardPipe } from './04-pipes/credit-card.pipe';
import { PipeComponent } from './04-pipes/pipe/pipe.component';
import { DirectivesComponent } from './05-directives/directives/directives.component';
import { UsersComponent } from './06-services/users/users.component';
import { UserFormComponent } from './07-forms/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatabindingComponent,
    MyFirstComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    PipeComponent,
    CreditCardPipe,
    DirectivesComponent,
    UsersComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    DatabindingComponent,
    MyFirstComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    PipeComponent,
    CreditCardPipe,
    DirectivesComponent,
    UsersComponent,
    UserFormComponent
  ]
})
export class ComponentsModule { }
