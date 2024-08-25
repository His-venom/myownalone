import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManagementService } from "./management.service";
import { ManagementControllerBase } from "./base/management.controller.base";

@swagger.ApiTags("managements")
@common.Controller("managements")
export class ManagementController extends ManagementControllerBase {
  constructor(
    protected readonly service: ManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
