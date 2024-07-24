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
import { VoiceCommandService } from "../voiceCommand.service";
import { VoiceCommandCreateInput } from "./VoiceCommandCreateInput";
import { VoiceCommand } from "./VoiceCommand";
import { VoiceCommandFindManyArgs } from "./VoiceCommandFindManyArgs";
import { VoiceCommandWhereUniqueInput } from "./VoiceCommandWhereUniqueInput";
import { VoiceCommandUpdateInput } from "./VoiceCommandUpdateInput";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";

export class VoiceCommandControllerBase {
  constructor(protected readonly service: VoiceCommandService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VoiceCommand })
  async createVoiceCommand(
    @common.Body() data: VoiceCommandCreateInput
  ): Promise<VoiceCommand> {
    return await this.service.createVoiceCommand({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        device: data.device
          ? {
              connect: data.device,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        commandText: true,

        user: {
          select: {
            id: true,
          },
        },

        device: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VoiceCommand] })
  @ApiNestedQuery(VoiceCommandFindManyArgs)
  async voiceCommands(@common.Req() request: Request): Promise<VoiceCommand[]> {
    const args = plainToClass(VoiceCommandFindManyArgs, request.query);
    return this.service.voiceCommands({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        commandText: true,

        user: {
          select: {
            id: true,
          },
        },

        device: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VoiceCommand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async voiceCommand(
    @common.Param() params: VoiceCommandWhereUniqueInput
  ): Promise<VoiceCommand | null> {
    const result = await this.service.voiceCommand({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        commandText: true,

        user: {
          select: {
            id: true,
          },
        },

        device: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VoiceCommand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVoiceCommand(
    @common.Param() params: VoiceCommandWhereUniqueInput,
    @common.Body() data: VoiceCommandUpdateInput
  ): Promise<VoiceCommand | null> {
    try {
      return await this.service.updateVoiceCommand({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          device: data.device
            ? {
                connect: data.device,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          commandText: true,

          user: {
            select: {
              id: true,
            },
          },

          device: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: VoiceCommand })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVoiceCommand(
    @common.Param() params: VoiceCommandWhereUniqueInput
  ): Promise<VoiceCommand | null> {
    try {
      return await this.service.deleteVoiceCommand({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          commandText: true,

          user: {
            select: {
              id: true,
            },
          },

          device: {
            select: {
              id: true,
            },
          },
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

  @common.Get("/:id/responses")
  @ApiNestedQuery(ResponseFindManyArgs)
  async findResponses(
    @common.Req() request: Request,
    @common.Param() params: VoiceCommandWhereUniqueInput
  ): Promise<Response[]> {
    const query = plainToClass(ResponseFindManyArgs, request.query);
    const results = await this.service.findResponses(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        responseText: true,

        voiceCommand: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/responses")
  async connectResponses(
    @common.Param() params: VoiceCommandWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        connect: body,
      },
    };
    await this.service.updateVoiceCommand({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/responses")
  async updateResponses(
    @common.Param() params: VoiceCommandWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        set: body,
      },
    };
    await this.service.updateVoiceCommand({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/responses")
  async disconnectResponses(
    @common.Param() params: VoiceCommandWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        disconnect: body,
      },
    };
    await this.service.updateVoiceCommand({
      where: params,
      data,
      select: { id: true },
    });
  }
}
