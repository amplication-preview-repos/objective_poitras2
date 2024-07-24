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
import { VoiceCommandCreateInput } from "./VoiceCommandCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateVoiceCommandArgs {
  @ApiProperty({
    required: true,
    type: () => VoiceCommandCreateInput,
  })
  @ValidateNested()
  @Type(() => VoiceCommandCreateInput)
  @Field(() => VoiceCommandCreateInput, { nullable: false })
  data!: VoiceCommandCreateInput;
}

export { CreateVoiceCommandArgs as CreateVoiceCommandArgs };