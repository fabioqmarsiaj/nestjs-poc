import { Injectable } from '@nestjs/common';
import { RecordDto } from './record.dto';

@Injectable()
export class AppService {
  create(recordDto: RecordDto): RecordDto {
    return recordDto;
  }
  findAll(): string {
    return 'All records';
  }

  find(id: string): string {
    return `Returning the record id: ${id} from the database `;
  }
}
