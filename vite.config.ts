import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [million.vite({ }), react()],
    build: {
      outDir: 'build'
    },
    server: {
      open: true,
      port: parseInt(process.env.PORT || '3000'),
    }
  });
}

