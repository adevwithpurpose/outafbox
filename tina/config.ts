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
                name: "page",
                label: "Pages",
                path: "content/pages",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Page Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "object",
                        list: true,
                        name: "blocks",
                        label: "Sections",
                        templates: [
                            // 1. Hero Block
                            {
                                name: "hero",
                                label: "Hero",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                    { type: "string", name: "subhead", label: "Subhead", ui: { component: "textarea" } },
                                    { type: "string", name: "ctaText", label: "CTA Text" },
                                    { type: "string", name: "ctaLink", label: "CTA Link" },
                                    { type: "string", name: "secondaryCtaText", label: "Secondary CTA Text" },
                                    { type: "string", name: "secondaryCtaLink", label: "Secondary CTA Link" },
                                    { type: "image", name: "image", label: "Image" },
                                ],
                            },
                            // 2. Features Block (Grid)
                            {
                                name: "features",
                                label: "Features / Grid",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                    { type: "string", name: "id", label: "Section ID (for anchors)" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "Items",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "title", label: "Title" },
                                            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                            { type: "string", name: "icon", label: "Icon (Emoji or SVG path)" },
                                        ],
                                    },
                                    {
                                        type: "string",
                                        name: "variant",
                                        label: "Layout Variant",
                                        options: [
                                            { label: "Standard Grid", value: "grid" },
                                            { label: "Vertical Steps", value: "steps" },
                                            { label: "Horizontal Cards", value: "horizontal" }
                                        ]
                                    }
                                ],
                            },
                            // 3. Content Block (Rich Text)
                            {
                                name: "content",
                                label: "Rich Text Content",
                                fields: [
                                    { type: "rich-text", name: "body", label: "Body" },
                                    { type: "boolean", name: "centered", label: "Center Text?" },
                                ],
                            },
                            // 4. Testimonials
                            {
                                name: "testimonials",
                                label: "Testimonials",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 5. Trust Bar
                            {
                                name: "trustBar",
                                label: "Trust Bar / Logos",
                                fields: [
                                    { type: "string", name: "label", label: "Label Text" },
                                ],
                            },
                            // 6. Special: Audit Form
                            {
                                name: "auditForm",
                                label: "Audit Application & Calculator",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 7. Special: Creator Form
                            {
                                name: "creatorForm",
                                label: "Creator Application Form",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 8. Team Grid
                            {
                                name: "team",
                                label: "Team Grid",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 9. Jobs List
                            {
                                name: "jobs",
                                label: "Jobs List",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                    {
                                        type: "object",
                                        name: "listings",
                                        label: "Job Listings",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "title", label: "Role Title" },
                                            { type: "string", name: "type", label: "Type (e.g. Full-Time)" },
                                            { type: "string", name: "location", label: "Location" },
                                            { type: "string", name: "description", label: "Short Description" },
                                        ]
                                    }
                                ],
                            },
                            // 10. FAQ
                            {
                                name: "faq",
                                label: "FAQ",
                                fields: [
                                    {
                                        type: "object",
                                        name: "questions",
                                        label: "Questions",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "question", label: "Question" },
                                            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                                        ]
                                    }
                                ],
                            },
                            // 11. VSL
                            {
                                name: "vsl",
                                label: "VSL Video",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 12. Comparison Table
                            {
                                name: "comparison",
                                label: "Comparison Table",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 13. Founder
                            {
                                name: "founder",
                                label: "Founder Note",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 14. Results Teaser
                            {
                                name: "resultsTeaser",
                                label: "Results Teaser",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 15. Guarantee
                            {
                                name: "guarantee",
                                label: "Guarantee Section",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                    { type: "string", name: "subhead", label: "Subhead", ui: { component: "textarea" } },
                                    { type: "string", name: "ctaText", label: "CTA Text" },
                                    { type: "string", name: "ctaLink", label: "CTA Link" },
                                ],
                            },
                            // 16. ROI Simulator
                            {
                                name: "roiSimulator",
                                label: "ROI Growth Simulator",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 17. Ad Fatigue
                            {
                                name: "adFatigue",
                                label: "Ad Fatigue Estimator",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                            // 18. Strategy Quiz
                            {
                                name: "strategyQuiz",
                                label: "Strategy Finder Quiz",
                                fields: [
                                    { type: "string", name: "headline", label: "Headline" },
                                ],
                            },
                        ],
                    },
                ],
            },
            // New Course Collection for LMS
            {
                name: "course",
                label: "Courses",
                path: "content/course",
                format: "mdx",
                ui: {
                    router: ({ document }) => `/course/${document._sys.filename}`
                },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Course Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "module",
                        label: "Module Name",
                        ui: { component: "textarea" },
                        required: true,
                    },
                    {
                        type: "string",
                        name: "cloudVideoUrl",
                        label: "Google Drive Video URL (Preview Link)",
                        ui: { component: "textarea" },
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Course Content",
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
