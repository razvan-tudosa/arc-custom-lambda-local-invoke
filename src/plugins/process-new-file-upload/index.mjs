import { join } from "path";

export const set = {
  // Custom / bare Lambdas (with event sources to be defined by `deploy.start`)
  customLambdas: ({ _arc, _inventory }) => {
    return {
      name: "process-new-file-upload",
      src: join("src", "custom", "process-new-file-upload"),
    };
  },
};

export const sandbox = {
  watcher: async ({ filename, _event, _inventory, invoke }) => {
    // if (filename.includes("src/custom/process-new-file-upload")) {
    invoke({
      pragma: "plugins",
      name: "process-new-file-upload",
      payload: {
        Records: [
          {
            s3: {
              object: { key: "cdp_catalog_fr-de_30d_2023-08-09T0744.csv" },
            },
          },
        ],
      },
    });
    // }
  },
};
