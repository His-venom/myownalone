import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuestRegistrationModuleBase } from "./base/guestRegistration.module.base";
import { GuestRegistrationService } from "./guestRegistration.service";
import { GuestRegistrationController } from "./guestRegistration.controller";
import { GuestRegistrationResolver } from "./guestRegistration.resolver";

@Module({
  imports: [GuestRegistrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuestRegistrationController],
  providers: [GuestRegistrationService, GuestRegistrationResolver],
  exports: [GuestRegistrationService],
})
export class GuestRegistrationModule {}
