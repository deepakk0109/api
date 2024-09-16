/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { Widget } from './widget.schema';

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  @Post()
  async createMany(@Body() widgets: Widget[]) {
    return this.widgetsService.createMany(widgets);
  }

  @Get()
  async findAll() {
    return this.widgetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.widgetsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() widget: Widget) {
    return this.widgetsService.update(id, widget);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.widgetsService.delete(id);
  }
}
// import { Controller } from '@nestjs/common';

// @Controller('widgets')
// export class WidgetsController {}
