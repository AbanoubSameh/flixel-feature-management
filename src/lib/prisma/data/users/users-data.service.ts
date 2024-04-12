import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export class UserDataService {
  public static async getItems(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}
