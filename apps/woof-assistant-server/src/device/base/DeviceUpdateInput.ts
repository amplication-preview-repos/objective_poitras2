/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumDeviceDeviceType } from "./EnumDeviceDeviceType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { VoiceCommandUpdateManyWithoutDevicesInput } from "./VoiceCommandUpdateManyWithoutDevicesInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DeviceUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumDeviceDeviceType,
  })
  @IsEnum(EnumDeviceDeviceType)
  @IsOptional()
  @Field(() => EnumDeviceDeviceType, {
    nullable: true,
  })
  deviceType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => VoiceCommandUpdateManyWithoutDevicesInput,
  })
  @ValidateNested()
  @Type(() => VoiceCommandUpdateManyWithoutDevicesInput)
  @IsOptional()
  @Field(() => VoiceCommandUpdateManyWithoutDevicesInput, {
    nullable: true,
  })
  voiceCommands?: VoiceCommandUpdateManyWithoutDevicesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { DeviceUpdateInput as DeviceUpdateInput };