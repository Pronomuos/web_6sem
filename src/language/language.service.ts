import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Language, Prisma } from '@prisma/client';

@Injectable()
export class LanguageService {
  constructor(private prisma: PrismaService) {}

  async Language(
    LanguageWhereUniqueInput: Prisma.LanguageWhereUniqueInput,
  ): Promise<Language | null> {
    return this.prisma.language.findUnique({
      where: LanguageWhereUniqueInput,
    });
  }

  async Languages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LanguageWhereUniqueInput;
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithRelationInput;
  }): Promise<Language[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.language.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createLanguage(data: Prisma.LanguageCreateInput): Promise<Language> {
    return this.prisma.language.create({
      data,
    });
  }

  async updateLanguage(params: {
    where: Prisma.LanguageWhereUniqueInput;
    data: Prisma.LanguageUpdateInput;
  }): Promise<Language> {
    const { data, where } = params;
    return this.prisma.language.update({
      data,
      where,
    });
  }

  async deleteLanguage(
    where: Prisma.LanguageWhereUniqueInput,
  ): Promise<Language> {
    return this.prisma.language.delete({
      where,
    });
  }
}