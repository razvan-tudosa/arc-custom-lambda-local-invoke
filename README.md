This repo is meant to reproduce an issue I stumbled upon while working with Architect framework.

I'm trying to define a custom lambda through a plugin and manually invoke this lambda in sandbox for testing purposes.

At the moment I keep getting this message:

```
⚠️ Warning: Plugin invoke: @plugins process-new-file-upload missing Lambda handler file
Please create a handler file, or run [npx] arc init, or add 'autocreate true' to your project preferences file's '@create' pragma
```

Steps to reproduce:

- run `npm i` to install dependencies
- run `npx arc sandbox` to start the project
