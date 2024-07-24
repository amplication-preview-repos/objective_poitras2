/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { VoiceCommand } from "./VoiceCommand";
import { VoiceCommandCountArgs } from "./VoiceCommandCountArgs";
import { VoiceCommandFindManyArgs } from "./VoiceCommandFindManyArgs";
import { VoiceCommandFindUniqueArgs } from "./VoiceCommandFindUniqueArgs";
import { CreateVoiceCommandArgs } from "./CreateVoiceCommandArgs";
import { UpdateVoiceCommandArgs } from "./UpdateVoiceCommandArgs";
import { DeleteVoiceCommandArgs } from "./DeleteVoiceCommandArgs";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { User } from "../../user/base/User";
import { Device } from "../../device/base/Device";
import { VoiceCommandService } from "../voiceCommand.service";
@graphql.Resolver(() => VoiceCommand)
export class VoiceCommandResolverBase {
  constructor(protected readonly service: VoiceCommandService) {}

  async _voiceCommandsMeta(
    @graphql.Args() args: VoiceCommandCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VoiceCommand])
  async voiceCommands(
    @graphql.Args() args: VoiceCommandFindManyArgs
  ): Promise<VoiceCommand[]> {
    return this.service.voiceCommands(args);
  }

  @graphql.Query(() => VoiceCommand, { nullable: true })
  async voiceCommand(
    @graphql.Args() args: VoiceCommandFindUniqueArgs
  ): Promise<VoiceCommand | null> {
    const result = await this.service.voiceCommand(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VoiceCommand)
  async createVoiceCommand(
    @graphql.Args() args: CreateVoiceCommandArgs
  ): Promise<VoiceCommand> {
    return await this.service.createVoiceCommand({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        device: args.data.device
          ? {
              connect: args.data.device,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => VoiceCommand)
  async updateVoiceCommand(
    @graphql.Args() args: UpdateVoiceCommandArgs
  ): Promise<VoiceCommand | null> {
    try {
      return await this.service.updateVoiceCommand({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          device: args.data.device
            ? {
                connect: args.data.device,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => VoiceCommand)
  async deleteVoiceCommand(
    @graphql.Args() args: DeleteVoiceCommandArgs
  ): Promise<VoiceCommand | null> {
    try {
      return await this.service.deleteVoiceCommand(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Response], { name: "responses" })
  async findResponses(
    @graphql.Parent() parent: VoiceCommand,
    @graphql.Args() args: ResponseFindManyArgs
  ): Promise<Response[]> {
    const results = await this.service.findResponses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: VoiceCommand): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Device, {
    nullable: true,
    name: "device",
  })
  async getDevice(
    @graphql.Parent() parent: VoiceCommand
  ): Promise<Device | null> {
    const result = await this.service.getDevice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
