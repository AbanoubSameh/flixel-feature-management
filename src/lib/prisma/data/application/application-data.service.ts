import "server-only";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { Application, UserRole } from "@prisma/client";

export class UserApplicationDataService {
  private _application: Application | null = null;
  private static _instance: UserApplicationDataService;

  public static get instance(): UserApplicationDataService {
    return this._instance ?? new UserApplicationDataService();
  }

  private constructor() {}

  public async getActiveApplication() {
    const userId = await this.getUserId();
    if (!userId) {
      return null;
    }
    if (!this._application) {
      const apps = await this.getUserApplications(userId);
      this._application =
        apps?.[0] ?? (await this.createItem(userId, "Default"));
    }
    return this._application;
  }

  public async getUserApplications(userId: string): Promise<Application[]> {
    if (!userId) {
      return [];
    }
    return await prisma.application.findMany({
      where: {
        users: {
          some: {
            user: {
              id: userId,
            },
          },
        },
      },
    });
  }

  public async createItem(userId: string, name: string) {
    if (!userId) {
      throw new Error("No loggedIn user");
    }
    return await prisma.application.create({
      data: {
        name,
        users: {
          create: [
            {
              role: UserRole.CREATOR,
              user: {
                connect: { id: userId },
              },
            },
          ],
        },
      },
    });
  }

  private async getUserId() {
    const session = await auth().catch((error: unknown) =>
      console.error(error),
    );
    if (!session) {
      return null;
    }
    return await session.user?.id;
  }
}
