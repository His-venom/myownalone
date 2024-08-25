import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuestRegistrationService } from "./guestRegistration.service";
import { GuestRegistrationControllerBase } from "./base/guestRegistration.controller.base";

@swagger.ApiTags("guestRegistrations")
@common.Controller("guestRegistrations")
export class GuestRegistrationController extends GuestRegistrationControllerBase {
  constructor(
    protected readonly service: GuestRegistrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
