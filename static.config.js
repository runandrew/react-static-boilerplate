const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const matter = require("gray-matter");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getProjects() {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if posts directory exists //
      if (fs.existsSync("./src/projects")) {
        klaw("./src/projects")
          .on("data", item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === ".md") {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, "utf8");
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.projectName
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
              // Remove unused key //
              // Push object into items array //
              delete dataObj.orig;
              items.push(dataObj);
            }
          })
          .on("error", e => {
            console.log(e);
          })
          .on("end", () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

export default {
  getSiteData: () => ({
    title: "React Static with Netlify CMS"
  }),
  getRoutes: async () => {
    const projects = await getProjects();
    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          projects
        })
      },
      {
        path: "/projects",
        children: projects.map(project => ({
          path: `/${project.data.slug}`,
          component: "src/containers/Project",
          getData: () => ({
            project
          })
        }))
      },
      {
        is404: true,
        component: "src/containers/404"
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
