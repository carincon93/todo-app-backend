import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TasksService {
    constructor(private readonly prisma: PrismaService) {}

    create(createTaskDto: CreateTaskDto) {
        return this.prisma.tasks.create({
            data: createTaskDto,
        })
    }

    findAll() {
        return this.prisma.tasks.findMany({
            orderBy: {
                id: 'asc',
            },
        })
    }

    findOne(id: number) {
        return this.prisma.tasks.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return this.prisma.tasks.update({
            where: {
                id,
            },
            data: updateTaskDto,
        })
    }

    remove(id: number) {
        return this.prisma.tasks.delete({
            where: {
                id,
            },
        })
    }
}
