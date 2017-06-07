# mvy [![NPM version][npm-image]][npm-url]

> mvy = mkdirp + mv // a cli for moving to a new directory

## Installation

```sh
$ npm install mvy --global
```

## Usage

```sh
# MAJOR KEY ALERT:
#
# 1. When the <target> has a trailing slash, 
#    the <source> will be placed inside the <target>
#
# 2. When both the <source> and <target> have trailing slashes, 
#    the *ENTIRE* <source> path will be appended to the <target> path
#    and the <source> files will be placed inside the appended <target> path


# move a file into a new directory
$ mvy somewhere/exists/a.file yet/to/be/created/directory/
# => yet/to/be/created/directory/a.file


# move a file into a new directory and rename the file
$ mvy somewhere/exists/a.file yet/to/be/created/directory/b.file
# => yet/to/be/created/directory/b.file


# move a directory into a new directory
$ mvy somewhere/exists yet/to/be/created/directory/
# => yet/to/be/created/directory/exists/
# => yet/to/be/created/directory/exists/a.file


# move a directory into a new directory and rename the directory
$ mvy somewhere/exists yet/to/be/created/directory
# => yet/to/be/created/directory/
# => yet/to/be/created/directory/a.file


# move a directory into a new directory *APPENDING THE SOURCE PATH*
$ mvy somewhere/exists/ yet/to/be/created/directory/
# => yet/to/be/created/directory/somewhere/exists/
# => yet/to/be/created/directory/somewhere/exists/a.file

```

## License

ISC © [Buster Collings](https://about.me/buster)

[npm-image]: https://badge.fury.io/js/mvy.svg
[npm-url]: https://npmjs.org/package/mvy
