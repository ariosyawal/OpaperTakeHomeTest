import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import mockServer from 'vite-plugin-mock-server'
import bodyParser from 'body-parser'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mockServer({
        logLevel: 'info',
        middlewares: [
            bodyParser.json(),
            bodyParser.urlencoded(),
            bodyParser.text(),
            bodyParser.raw()
        ]
    })],
})
