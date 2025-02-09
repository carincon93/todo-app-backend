# ToDo App Backend UManizales Installation

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local.

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/carincon93/todo-app-backend.git
cd todo-app-backend
```

## 📄 Configurar .env
Renombre el archivo .env.example por .env y complete las siguientes variables de entorno:
```sh
DATABASE_URL="postgresql://username:password@localhost:5432/example_db"
CORS_ALLOWED_ORIGINS=
PORT=
```
En la variable CORS_ALLOWED_ORIGINS debe diligenciar la ip y el puerto del servidor del frontend para evitar problemas con el CORS.

## ⌨️ Comandos

| Comando                    | Acción                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Instalar dependencias                            |
| `pnpx prisma generate`     | Generar cliente de Prisma ORM                    |
| `pnpx prisma migrate dev`  | Cargar la base de datos                          |
| `pnpm run start:dev`       | Sube el servidor local en  `localhost:3000`      |

Para revisar la documentación de los endpoints ingrese a `localhost:3000/api`

## License

Nest is [MIT licensed](LICENSE).
