import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

const isProduction = process.env.NODE_ENV?.toLocaleLowerCase() === 'development';
const basePath = isProduction ? 'src' : 'dist';

const configuracoes: DataSourceOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: false,
	entities: [`${basePath}/database/entities/**/*`],
	migrations: [`${basePath}/database/migrations/**/*`],
	ssl: {
		rejectUnauthorized: false,
	},
};

export default configuracoes;
