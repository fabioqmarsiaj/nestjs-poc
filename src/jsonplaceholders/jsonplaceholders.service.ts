import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { CreateApiDto } from 'src/api/dto/create-api.dto';
import { UpdateApiDto } from 'src/api/dto/update-api.dto';

@Injectable()
export class JsonplaceholdersService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}
  async create(createApiDto: CreateApiDto): Promise<CreateApiDto> {
    const baseUrl = this.configService.get<string>('JSONPLACEHOLDER_BASE_URL');

    const request = {
      id: createApiDto.id,
      title: createApiDto.title,
      body: createApiDto.body,
      userId: createApiDto.userId,
    };

    const response = this.httpService.post(baseUrl, request);

    const result = firstValueFrom(response);

    return (await result).data;
  }

  async findAll(): Promise<CreateApiDto[]> {
    const baseUrl = this.configService.get<string>('JSONPLACEHOLDER_BASE_URL');

    const response = this.httpService.get(baseUrl);

    const result = firstValueFrom(response);

    return (await result).data;
  }

  async findOne(id: number): Promise<CreateApiDto> {
    const baseUrl = this.configService.get<string>('JSONPLACEHOLDER_BASE_URL');

    const response = this.httpService.get(baseUrl + id);

    const result = firstValueFrom(response);

    return (await result).data;
  }

  async update(id: number, updateApiDto: UpdateApiDto): Promise<CreateApiDto> {
    const baseUrl = this.configService.get<string>('JSONPLACEHOLDER_BASE_URL');

    const request = {
      id: updateApiDto.id,
      title: updateApiDto.title,
      body: updateApiDto.body,
      userId: updateApiDto.userId,
    };

    const response = this.httpService.patch(baseUrl + id, request);

    const result = firstValueFrom(response);

    return (await result).data;
  }

  remove(id: number) {
    return `This action removes a #${id} jsonplaceholder`;
  }
}
