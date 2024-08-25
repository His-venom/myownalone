import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuestRegistrationServiceBase } from "./base/guestRegistration.service.base";

@Injectable()
export class GuestRegistrationService extends GuestRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
