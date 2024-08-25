import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuestRegistrationResolverBase } from "./base/guestRegistration.resolver.base";
import { GuestRegistration } from "./base/GuestRegistration";
import { GuestRegistrationService } from "./guestRegistration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuestRegistration)
export class GuestRegistrationResolver extends GuestRegistrationResolverBase {
  constructor(
    protected readonly service: GuestRegistrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
