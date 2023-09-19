import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from "fs";

export default defineConfig({ 
    plugins: [vue()],
    server: {
        port: 6996,
        host: "127.0.0.1",
        hmr: {
            protocol: "wss",
            host: "localhost",
            overlay: false
        },
        https: {
          cert: fs.readFileSync(path.resolve("public/localhost.pem")),
          key: fs.readFileSync(path.resolve("public/private.pem")),
          ca: fs.readFileSync(path.resolve("public/private.pem"))
      },
    }
})