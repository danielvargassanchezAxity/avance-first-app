import { TestBed } from '@angular/core/testing';

import { DataResolver } from './data.resolver';
import { UsersService } from './users.service';
import { of } from 'rxjs';
import { User } from '../models/user.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('DataResolver', () => {
  let resolver: DataResolver;
  let userServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj<UsersService>('UsersService', ['getById']);
    userServiceSpy.getById.and.returnValue(of(new User()))


    TestBed.configureTestingModule({
      providers: [
        { provide: UsersService, useValue: userServiceSpy }
      ]
    });
    resolver = TestBed.inject(DataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should resolve', () => {
    resolver.resolve(new ActivatedRouteSnapshot(), {} as RouterStateSnapshot);
    expect(userServiceSpy.getById).toHaveBeenCalled();
  });
});
