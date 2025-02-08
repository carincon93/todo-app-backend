import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder().addBearerAuth().setTitle('ToDo App').setDescription('ToDo App').setVersion('1.0').addTag('todo-app').build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    // Lista de orí­genes permitidos
    const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS?.split(',') || []

    // Configurar CORS con validación de origen
    app.enableCors({
        origin: (origin, callback) => {
            console.log('refresh')

            // Permitir solicitudes sin origen (como Postman o herramientas locales)
            if (!origin) return callback(null, true)

            if (allowedOrigins.includes(origin)) {
                callback(null, true) // Permitir el origen si está en la lista
            } else {
                callback(new Error('Not allowed by CORS')) // Rechazar el origen
            }
        },
        credentials: true, // Permitir cookies y cabeceras de autorización
    })

    await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
