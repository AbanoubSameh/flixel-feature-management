import "server-only";

import prisma from "@/lib/prisma";
import { Contact } from "@prisma/client";

export class ContactDataService {
  public static async getItems(application?: string): Promise<Contact[]> {
    return await prisma.contact.findMany({
      where: {},
    });
  }
}
