---
templateKey: blog-post
path: /vs-code-theme
title: VS Code Custom Theme
date: 2018-02-06T04:48:03.105Z
description: "\nI've been using themes built by other people for a while now and for the most part they've been great. I don't know if it's my inner designer coming out or what but I've finally had enough of all these themes and decided to build one of my own. \U0001F60A"
---
## Getting Started



For VS Code it's really rather simple. All you really need is a JSON file. There's a couple of tricks that I've learned the hard way so hopefully you won't have to.

### Scopes

Use `Cmd+Shift+P` again and this time run `Developer: Inspect TM Scopes`. As long as this “mode” is enabled, that is, until you press `Esc`, you can move through the file with the mouse or the keyboard and inspect it while looking for interesting scopes.

### Custom Colors

The important parts are the `colors` and `tokenColors` sections here. Within the `colors` section, you’ll change the aspect of the UI, while in `tokenColors` you'll define the syntax highlight aspects.

The `colors` object contains key value pairs like these:

```
"colors": {
  "editor.background": "#193549", // This is the main background color
  "editor.foreground": "#fff", // this is the main text colour
  "editor.findMatchBackground": "#ff9900", // Currently found item
}
```
While `tokenColors` is an array of objects that look something like this:
```
"tokenColors": [
    {
      "name": "Comment",
      "scope": [
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#0088ff"
      }
    },
    {
      "name": "Constant",
      "scope": "constant",
      "settings": {
        "foreground": "#D18EC2" // null
      }
    }
```

pro tip: Once you learn what a color/style actual means in relation to your editor/code, write it inline as a comment. You'll thank yourself later 😉

For the complete list for these values (which I guess is going to change over time), I suggest you to take a look at a specific file ([editorColorRegistry.ts](https://github.com/Microsoft/vscode/blob/master/src/vs/editor/common/view/editorColorRegistry.ts)) in the VS Code repository which contains all the definitions instead of relying on a more-or-less up-to-date [official documentation](https://code.visualstudio.com/docs/getstarted/theme-color-reference).

> Please note that you can also change these colors without having to write a whole theme! Since a quite recent version of VS Code those colors can also be set via the `workbench.colorCustomizations` object, as explained in the [official docs](https://code.visualstudio.com/docs/getstarted/themes#_customize-a-color-theme). These settings will always override the theme customizations.

### See Changes
There's two ways to view your theme in your editor.

One is to publish to the  [VS Code Marketplace](https://code.visualstudio.com/docs/extensions/publish-extension) (which you'll have to do eventually).

The second is load it locally via `.vscode/extensions`. To do this you'll just need to move/make a folder which contains your theme & structured something like  this `my-custom-theme/theme/whatever.json`. It's worth noting that you also need a `package.json` at the route of this folder.

Now again `Cmd+Shift+P` and run `Preferences: Color Theme`. If your theme and `package.json` files are syntactically correct, you should be able to see (and select) your new theme from the list.


If you need a reference then check out [my theme](https://github.com/tcasey/caddy-vscode). Once you've got all that in place you just need to `refresh` your editor via `Cmd+Shift+P` and then run `Reload Window`.

## Conclusion
This is basically it. You can now — with a lot of patience, start writing your own theme. When I was making mine I found it both very satisfying and also a bit tricky at times. Hopefully these tips can help you avoid any tricky moments that I encountered.

 If you need a reference point feel free to check out, or use, [my theme Caddy](https://github.com/tcasey/caddy-vscode).
