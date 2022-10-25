export type Config = {
  /** 需要打包的组件目录 */
  entry: string;

  /** 源代码目录 */
  srcPath: string;

  /** 打包后存放代码的目标目录 */
  distPath: string;


  /** 开发中的组件存放目录 */
  devComponentPath: string;

  /** css开发使用语言 */
  css: "wxss" | "scss" | "less";

  /** 压缩 */
  minify: {
    /** js 和 ts是否压缩 */
    jsAndTs: boolean;
    /** css 是否压缩 */
    css: boolean;
    /** 图片 是否压缩 */
    img: boolean;
  };
};
