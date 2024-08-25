import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ManagementModuleBase } from "./base/management.module.base";
import { ManagementService } from "./management.service";
import { ManagementController } from "./management.controller";
import { ManagementResolver } from "./management.resolver";

@Module({
  imports: [ManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [ManagementController],
  providers: [ManagementService, ManagementResolver],
  exports: [ManagementService],
})
export class ManagementModule {}
