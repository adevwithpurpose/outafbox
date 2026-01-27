import { defineConfig } from "tinacms";

export default defineConfig({
    branch: "main", // Your branch name
    clientId: null, // Local mode
    token: null, // Local mode
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "images",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "landing",
                label: "Landing Page",
                path: "content/landing",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "heroTitle",
                        label: "Hero Title",
                    },
                    {
                        type: "string",
                        name: "subtext",
                        label: "Subtext",
                        ui: {
                            component: "textarea"
                        }
                    },
                    {
                        type: "image",
                        name: "heroImage",
                        label: "Hero Image",
                    },
                ],
            },
        ],
    },
});
