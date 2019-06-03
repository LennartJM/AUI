# \<AUI\>

INSTALLATIEHANDLEIDING:

1.Pull het project van github.

2.Pak de rar "bower_components" uit en zet de mappen "bower_components" in de root van het project.

3.Open een commandline prompt en voer "bower update" uit ( zonder de haakjes).

4.Voer in de commandline promt de code "polymer serve" uit (zonder haakjes).


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
