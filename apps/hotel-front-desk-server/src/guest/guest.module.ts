import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuestModuleBase } from "./base/guest.module.base";
import { GuestService } from "./guest.service";
import { GuestController } from "./guest.controller";
import { GuestResolver } from "./guest.resolver";

@Module({
  imports: [GuestModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuestController],
  providers: [GuestService, GuestResolver],
  exports: [GuestService],
})
export class GuestModule {}
