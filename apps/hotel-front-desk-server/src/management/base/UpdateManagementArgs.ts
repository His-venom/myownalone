/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ManagementWhereUniqueInput } from "./ManagementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ManagementUpdateInput } from "./ManagementUpdateInput";

@ArgsType()
class UpdateManagementArgs {
  @ApiProperty({
    required: true,
    type: () => ManagementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ManagementWhereUniqueInput)
  @Field(() => ManagementWhereUniqueInput, { nullable: false })
  where!: ManagementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ManagementUpdateInput,
  })
  @ValidateNested()
  @Type(() => ManagementUpdateInput)
  @Field(() => ManagementUpdateInput, { nullable: false })
  data!: ManagementUpdateInput;
}

export { UpdateManagementArgs as UpdateManagementArgs };
