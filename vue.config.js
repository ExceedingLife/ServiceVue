const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const baseFolder =
    process.env.APPDATA !== undefined && process.env.APPDATA !== ''
        ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;

const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];
const certificateName = certificateArg ? certificateArg.groups.value : "ServiceVue";

if (!certificateName) {
    console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.')
    process.exit(-1);
}

const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

module.exports = {
    devServer: {
        disableHostCheck: true,
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath),
        },
        proxy: {
            '^/weatherforecast': {
                target: 'https://localhost:5001/'
            }
        },
        port: 5002
    },
    //module.exports = {
        chainWebpack: config => {
            config.resolve.alias.set(
                'vue$',
                path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
            )
		},
        configureWebpack: {
            resolve: {
                extensions: ['.js'],
                alias: {
                    'jquery': 'jquery/dist/jquery.slim.js',
				}
            },
            plugins: [
                new webpack.ProvidePlugin({
                    '$': 'jquery',
                    jQuery: 'jquery',
                    Popper: ['popper.js', 'default']
				})
            ]
		}
	//}
}