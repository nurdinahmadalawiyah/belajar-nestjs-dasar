import { Injectable } from '@nestjs/common';
import { ValidationService } from '../../validation/validation/validation.service';
import { z } from 'zod';

@Injectable()
export class UserService {
  constructor(private validationService: ValidationService) {}
  sayHello(name: string): string {
    const shcema = z.string().min(3).max(100);
    const result = this.validationService.validate(shcema, name);
    return `Hello ${result}`;
  }
}
