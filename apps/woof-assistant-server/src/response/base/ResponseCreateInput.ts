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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { VoiceCommandWhereUniqueInput } from "../../voiceCommand/base/VoiceCommandWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ResponseCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  responseText?: string | null;

  @ApiProperty({
    required: false,
    type: () => VoiceCommandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VoiceCommandWhereUniqueInput)
  @IsOptional()
  @Field(() => VoiceCommandWhereUniqueInput, {
    nullable: true,
  })
  voiceCommand?: VoiceCommandWhereUniqueInput | null;
}

export { ResponseCreateInput as ResponseCreateInput };
