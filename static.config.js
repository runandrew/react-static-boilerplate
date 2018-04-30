const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const matter = require("gray-matter");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getSingleFile(path) {
  const getFiles = () =>
    new Promise(resolve => {
      if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, "utf8");
        const dataObj = matter(data);
        dataObj.data.slug = dataObj.data.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
        delete dataObj.orig;
        resolve(dataObj);
      }
    });
  return getFiles();
}

export default {
  getSiteData: () => ({
    title: "React Static with Netlify CMS"
  }),
  getRoutes: async () => {
    const home = await getSingleFile("./src/data/pages/home.md");
    const about = await getSingleFile("./src/data/pages/about.md");
    return [
      {
        path: "/",
        component: "src/components/screens/home/Home",
        getData: () => ({
          home
        })
      },
      {
        path: "/about",
        component: "src/components/screens/about/About",
        getData: () => ({
          about
        })
      },
      {
        is404: true,
        component: "src/components/screens/404/404"
      }
    ];
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === "dev"
                ? [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                  ]
                : ExtractTextPlugin.extract({
                    use: [
                      {
                        loader: "css-loader",
                        options: {
                          importLoaders: 1,
                          minimize: true,
                          sourceMap: false
                        }
                      },
                      {
                        loader: "sass-loader",
                        options: { includePaths: ["src/"] }
                      }
                    ]
                  })
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader
        ]
      }
    ];
    return config;
  }
};
