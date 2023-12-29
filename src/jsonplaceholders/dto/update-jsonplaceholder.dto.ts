import { PartialType } from '@nestjs/mapped-types';
import { CreateJsonplaceholderDto } from './create-jsonplaceholder.dto';

export class UpdateJsonplaceholderDto extends PartialType(CreateJsonplaceholderDto) {}
