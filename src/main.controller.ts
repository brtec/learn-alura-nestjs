'use strict'
import { Controller, Get, Post, Param, Body, Put, Delete } from "@nestjs/common"
import { Main } from "./main.model"
import {MainService} from "./main.service";

@Controller('main')
export class MainController {
    constructor(private mainService: MainService) {

    }


    @Get()
    getAll(): Main[] {
        return this.mainService.getAll();
    }

    @Get(':id')
    getOne(@Param() params): Main {
        return this.mainService.getOne(params.id);
    }

    @Post()
    create(@Body() data: Main) {
        return this.mainService.create(data);
    }

    @Put()
    edit(@Body() data: Main): Main {
        return this.mainService.edit(data);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.mainService.delete(params.id);
    }

}