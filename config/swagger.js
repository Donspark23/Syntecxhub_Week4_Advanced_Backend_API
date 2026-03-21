const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Advanced Backend API",
      version: "1.0.0",
      description: "User Management, Roles & Audit Logging API"
    },
    servers: [
      {
        url: "http://localhost:5000",
	description: "Local server"
      },
     {
	url: "https://syntecxhub-week4-advanced-backend-api.onrender.com",
	description: "Live server"
     }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },

      // 🔥 ADD THIS PART
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            role: { type: "string", example: "user" }
          }
        },

        RegisterInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", example: "John Doe" },
            email: { type: "string", example: "john@example.com" },
            password: { type: "string", example: "123456" }
          }
        },

        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", example: "john@example.com" },
            password: { type: "string", example: "123456" }
          }
        },

        AuthResponse: {
          type: "object",
          properties: {
            token: { type: "string" },
            user: { $ref: "#/components/schemas/User" }
          }
        },

        Log: {
          type: "object",
          properties: {
            action: { type: "string", example: "PROMOTE_USER" },
            performedBy: { type: "string" },
            createdAt: { type: "string" }
          }
        }
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ]
  },

  apis: ["./routes/*.js"]
};

module.exports = swaggerJsDoc(options);
