# PugDAG Desktop Applets

PugDAG Desktop provides a miniature framework that enables you to
easily create an NWJS window within PugDAG Desktop that has access
to the configuration.

This is an equivalent to a NodeJs application with a web interface
that receives PugDAG Desktop + Pugdag Application Stack
configuration on startup.

Applets can be located within the PugDAG Desktop application folder
inside `apps` subfolder or symlinked to this location. Alternatively
applets can be configured to run from a custom location via
configuration settings.

## Configuration Settings

The following applet configuration settings can should be created
inside of PugDAG Desktop module configuration settings (located in
the *Settings tab*) or can be placed inside the `"pugdag-desktop"`
property of `packaje.json` manifest file if located within the apps
folder:

```json
{
    "name": "DAGViz",
    "location": "http://localhost:8689",
    "stop": "http://localhost:8689/stop",
    "width": 1600,
    "height": 680,
    "args": [
      "node",
      "dagviz",
      "--pugdag-desktop",
      "--no-auth",
      "--port=8689",
      "--mqtt-address=mqtt://localhost:$MQTT-PORT"
    ]
}
```

The following is a `package.json` sample file:

```json
{
    "name": "my-app",
    "version": "1.2.3",
    "pugdag-desktop": { 
        "name": "My App",
        "location": "https://pugdag.com"
    }
}
```

## Supported properties

* `name` - name of the application
* `location` - URL PugDAG Desktop should open
* `stop` *optional* - URL to signal PugDAG Desktop shutdown
* `width` *optional* - Applet window width
* `height` *optional* - Applet window height
* `args` *optional* - array of command line arguments to spawn at
  PugDAG Desktop startup
* `advanced` *optional* - this option will cause applet to show up
  only if *Advanced Settings* option is enabled.
