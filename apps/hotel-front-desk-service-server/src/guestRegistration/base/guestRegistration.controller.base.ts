/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GuestRegistrationService } from "../guestRegistration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GuestRegistrationCreateInput } from "./GuestRegistrationCreateInput";
import { GuestRegistration } from "./GuestRegistration";
import { GuestRegistrationFindManyArgs } from "./GuestRegistrationFindManyArgs";
import { GuestRegistrationWhereUniqueInput } from "./GuestRegistrationWhereUniqueInput";
import { GuestRegistrationUpdateInput } from "./GuestRegistrationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GuestRegistrationControllerBase {
  constructor(
    protected readonly service: GuestRegistrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GuestRegistration })
  @nestAccessControl.UseRoles({
    resource: "GuestRegistration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGuestRegistration(
    @common.Body() data: GuestRegistrationCreateInput
  ): Promise<GuestRegistration> {
    return await this.service.createGuestRegistration({
      data: data,
      select: {
        amountPaid: true,
        checkIn: true,
        checkOut: true,
        createdAt: true,
        date: true,
        id: true,
        name: true,
        phoneNumber: true,
        roomNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GuestRegistration] })
  @ApiNestedQuery(GuestRegistrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GuestRegistration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guestRegistrations(
    @common.Req() request: Request
  ): Promise<GuestRegistration[]> {
    const args = plainToClass(GuestRegistrationFindManyArgs, request.query);
    return this.service.guestRegistrations({
      ...args,
      select: {
        amountPaid: true,
        checkIn: true,
        checkOut: true,
        createdAt: true,
        date: true,
        id: true,
        name: true,
        phoneNumber: true,
        roomNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GuestRegistration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuestRegistration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guestRegistration(
    @common.Param() params: GuestRegistrationWhereUniqueInput
  ): Promise<GuestRegistration | null> {
    const result = await this.service.guestRegistration({
      where: params,
      select: {
        amountPaid: true,
        checkIn: true,
        checkOut: true,
        createdAt: true,
        date: true,
        id: true,
        name: true,
        phoneNumber: true,
        roomNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GuestRegistration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuestRegistration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGuestRegistration(
    @common.Param() params: GuestRegistrationWhereUniqueInput,
    @common.Body() data: GuestRegistrationUpdateInput
  ): Promise<GuestRegistration | null> {
    try {
      return await this.service.updateGuestRegistration({
        where: params,
        data: data,
        select: {
          amountPaid: true,
          checkIn: true,
          checkOut: true,
          createdAt: true,
          date: true,
          id: true,
          name: true,
          phoneNumber: true,
          roomNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GuestRegistration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuestRegistration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGuestRegistration(
    @common.Param() params: GuestRegistrationWhereUniqueInput
  ): Promise<GuestRegistration | null> {
    try {
      return await this.service.deleteGuestRegistration({
        where: params,
        select: {
          amountPaid: true,
          checkIn: true,
          checkOut: true,
          createdAt: true,
          date: true,
          id: true,
          name: true,
          phoneNumber: true,
          roomNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
