/// <reference types="astro/client" />

declare module '*.json' {
    const value: any;
    export default value;
}

// Node.js fs module type declarations for Astro
import type { ReadOptions } from 'astro';
