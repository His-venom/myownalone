import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManagementServiceBase } from "./base/management.service.base";

@Injectable()
export class ManagementService extends ManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
