import { PrismaClient } from "@prisma/client";

export class BaseDataService<S extends BaseDataService<S>> {
  private static instance: BaseDataService<any>;
  protected prisma: PrismaClient;
  protected constructor() {
    this.prisma = this.initPrisma();
  }

  static getInstance<T extends BaseDataService<T>>(): T {
    if (this.instance) {
      return this.instance as T;
    }
    this.instance = new BaseDataService();
    return this.instance as T;
  }

  private initPrisma() {
    if (process.env.NODE_ENV === "production") {
      return new PrismaClient();
    } else {
      let globalWithPrisma = global as typeof globalThis & {
        prisma: PrismaClient;
      };
      if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = new PrismaClient();
      }
      return globalWithPrisma.prisma;
    }
  }
}
