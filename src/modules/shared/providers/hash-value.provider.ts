import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class HashProvider {
  async hash(valueToBeHashed: string, salt: number): Promise<string> {
    const hashedValue = await bcryptjs.hash(valueToBeHashed, salt);
    return hashedValue;
  }
}
