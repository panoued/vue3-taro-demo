import { defineConfig, type UserConfigExport } from '@tarojs/cli';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import devConfig from './dev';
import prodConfig from './prod';
import ComponentsPlugin from 'unplugin-vue-components/webpack';
import NutUIResolver from '@nutui/nutui-taro/dist/resolver';

function webpackChain(chain: any) {
    chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
    chain.plugin('unplugin-vue-components').use(ComponentsPlugin({
        resolvers: [NutUIResolver({ taro: true })]
    }));
    chain.merge({
        optimization: {
            splitChunks: {
                cacheGroups: {
                    lib: {
                        name: 'lib',
                        minChunks: 2,
                        priority: 2,
                    }
                }
            }
        }
    });
};

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, { command, mode }) => {
    console.log(`config/index.ts defineConfig command, mode: `, command, mode);
    const baseConfig: UserConfigExport = {
        projectName: 'test_3_16',
        date: '2023-8-18',
        designWidth(input: any) {
            // 配置 NutUI 375 尺寸
            if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
                return 375
            }
            // 全局使用 Taro 默认的 750 尺寸
            return 375
        },
        deviceRatio: {
            640: 2.34 / 2,
            750: 1,
            828: 1.81 / 2,
            375: 2 / 1
        },
        sourceRoot: 'src',
        outputRoot: 'dist_mini',
        plugins: ['@tarojs/plugin-html'],
        sass: {
            resource: [
                'src/nutui.scss'
            ],
            data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
        },
        defineConstants: {
        },
        copy: {
            patterns: [
            ],
            options: {
            }
        },
        framework: 'vue3',
        compiler: 'webpack5',
        cache: {
            enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
        },
        mini: {
            postcss: {
                pxtransform: {
                    enable: true,
                    config: {

                    }
                },
                url: {
                    enable: true,
                    config: {
                        limit: 1024 // 设定转换尺寸上限
                    }
                },
                cssModules: {
                    enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                    config: {
                        namingPattern: 'module', // 转换模式，取值为 global/module
                        generateScopedName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            },
            webpackChain,
            commonChunks: ['runtime', 'vendors', 'taro', 'lib'],
        },
        h5: {
            publicPath: '/',
            staticDirectory: 'static',
            output: {
                filename: 'js/[name].[hash:8].js',
                chunkFilename: 'js/[name].[chunkhash:8].js'
            },
            miniCssExtractPluginOption: {
                ignoreOrder: true,
                filename: 'css/[name].[hash].css',
                chunkFilename: 'css/[name].[chunkhash].css'
            },
            postcss: {
                autoprefixer: {
                    enable: true,
                    config: {}
                },
                cssModules: {
                    enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                    config: {
                        namingPattern: 'module', // 转换模式，取值为 global/module
                        generateScopedName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            },
            webpackChain,
        },
        rn: {
            appName: 'taroDemo',
            postcss: {
                cssModules: {
                    enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                }
            }
        },
    }
    if (process.env.NODE_ENV === 'development') {
        // 本地开发构建配置（不混淆压缩）
        return merge({}, baseConfig, devConfig)
    }
    // 生产构建配置（默认开启压缩混淆等）
    return merge({}, baseConfig, prodConfig)
})
