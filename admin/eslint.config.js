import { configApp } from '@adonisjs/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default configApp(...pluginQuery.configs['flat/recommended']);

