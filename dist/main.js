"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Yodemy Services')
        .setDescription('Yodemy Project')
        .setVersion('1.0')
        .addBearerAuth(undefined, 'defaultBearerAuth')
        .build();
    const options = {
        swaggerOptions: {
            authAction: {
                defaultBearerAuth: {
                    name: 'defaultBearerAuth',
                    schema: {
                        description: 'Default',
                        type: 'http',
                        in: 'header',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
        },
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, options);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map