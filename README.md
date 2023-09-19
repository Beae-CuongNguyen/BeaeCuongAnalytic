## Beae Analytics

Before setting up in a new computer, delete folder `node_modules` and `package.lock.json`

1. Run command `npm i`
2. Install mkcert at: [https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)
3. Run command: `mkcert -key-file public/private.pem -cert-file public/localhost.pem localhost 127.0.0.1`
4. Run command `npx vite`
5. Open this url on browse: `https://127.0.0.1:6996`