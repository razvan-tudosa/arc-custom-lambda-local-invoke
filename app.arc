@app
arc-custom-lambda-local-invoke

@aws
# profile default
runtime typescript
region us-west-1
architecture arm64

@plugins
architect/plugin-typescript
process-new-file-upload
  src src/plugins/process-new-file-upload/index.mjs

@typescript
base-runtime nodejs18.x
