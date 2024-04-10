import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './components/03-components-comunication/lifecycle/lifecycle.component';
import { MyFirstComponent } from './components/01-my-first/my-first.component';
import { DatabindingComponent } from './components/02-databinding/databinding.component';
import { ParentComponent } from './components/03-components-comunication/parent/parent.component';
import { PipeComponent } from './components/04-pipes/pipe/pipe.component';
import { DirectivesComponent } from './components/05-directives/directives/directives.component';
import { UsersComponent } from './components/06-services/users/users.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: 'first-component',
    component: MyFirstComponent,
  },
  {
    path: 'databinding',
    component: DatabindingComponent,
  },
  {
    path: 'comunication',
    component: ParentComponent,
  },
  {
    path: 'pipes',
    component: PipeComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'first-page',
    loadChildren: () => import('./pages/first-page/first-page.module').then(m => m.FirstPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'protected',
    loadChildren: () => import('./pages/protected-page/protected-page.module').then(m => m.ProtectedPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/protected'
  },
  {
    path: '**',
    component: UsersComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
