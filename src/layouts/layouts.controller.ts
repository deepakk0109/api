import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LayoutService } from './layouts.service';
import { Layout } from './dto/layout.dto';

@Controller('layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}

  @Post()
  async create(@Body() layouts: Layout[]) {
    return this.layoutService.createMany(layouts);
  }

  @Get()
  async findAll() {
    return this.layoutService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.layoutService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() layout: Layout) {
    return this.layoutService.update(id, layout);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.layoutService.delete(id);
  }
}



// /* eslint-disable prettier/prettier */
// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { LayoutService } from './layouts.service';
// import { Layout } from './dto/layout.dto';


// @Controller('layout')
// export class LayoutController {
//   constructor(private readonly layoutService: LayoutService) {}

//   @Post()
//   async create(@Body() layout: Layout) {
//     return this.layoutService.create(layout);
//   }

//   @Get()
//   async findAll() {
//     return this.layoutService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     return this.layoutService.findOne(id);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() layout: Layout) {
//     return this.layoutService.update(id, layout);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string) {
//     return this.layoutService.delete(id);
//   }
// }
