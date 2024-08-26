import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuestService } from "./guest.service";
import { GuestControllerBase } from "./base/guest.controller.base";

@swagger.ApiTags("guests")
@common.Controller("guests")
export class GuestController extends GuestControllerBase {
  constructor(
    protected readonly service: GuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
