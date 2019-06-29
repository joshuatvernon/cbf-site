# [CBF](https://joshuatvernon.github.io/cbf-site/)

![cbf sloth](images/sloth.png)

A site written for *[cbf](https://www.github.com/joshuatvernon/cbf)* in React. It also serves as an example of how easy it is to use *cbf* in development.

# Quickstart

Download *cbf* and run it in documentation mode to see all project related commands.

```bash
$ npm install cbf -g
$ cbf -D
``` 

# Code style

This project uses TSLint, Prettier and Editorconfig to enforce style. Please add all to your editor. Optionally, you can lint directly from the command line by running `cbf` --> `lint`. Prettier will also run as a pre-commit hook using Husky. 

# Deploying

Run `cbf` --> `build` and then `cbf` --> `deploy` or manually do the following.

```bash
$ yarn build
$ yarn deploy
```
