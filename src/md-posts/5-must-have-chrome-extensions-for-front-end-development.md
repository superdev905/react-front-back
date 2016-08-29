For a long time, developer tools were pretty poor, but the developer tools in today’s browsers are robust and include many excellent features. Chrome, in particular, has developed a reputation for offering the best developer tools. Still, there are some other, less well-known tools you can use in conjunction with those dev-tools to vastly improve front end development workflow. Here are some great Chrome extensions and apps you might not know about but should probably be using:

## PerfectPixel

Often, all we get as far as designs go are a PDF and/or some images. It's a little tricky to figure out exactly how to lay out a page without spending hours in trial and error. The end result never looks quite like the designs. [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en) is a Chrome extension that can help you build websites with pixel-for-pixel accuracy. This extension allows you to use a semi-transparent image overlay over the top of a webpage and perform a per-pixel comparison. This ensures that the end result is exactly what the designer envisioned.

![PixelPerfect](/images/pixel-perfect.png)

## ColorPick EyeDropper

[ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) is an eye-dropper & color-picker tool that allows you to select color values from webpages. This is especially helpful because exact color values are typically missing from designs. When using PixelPerfect, you are able to design images as completely opaque and get the exact color values from the design. Although there are a few other color picker extensions out there, PixelPerfect stands out because of its zoom feature. Hover over even small elements, like text, on any webpage to get their color values much more easily.

![ColorPick](/images/colorpicker.png)

## Edge: The Web Ruler

[Edge: The Web Ruler](https://chrome.google.com/webstore/detail/edge-the-web-ruler/njlkegdphefeellhaongiopcfgcinikh?hl=en) is an on-screen ruler that supports multiple units, horizontal & vertical orientation, and even looks like a native application. It's perfect for figuring out the sizes of and distances between elements often not specified in designs. The ruler units are in pixels, so if you're using ems or rems, a little translation might be need. Overall, this is an awesome tool to get accurate results down to the last pixel.

![Edge Ruler](/images/ruler.png)

## React Developer Tools

The [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) is an extension for React-based applications. It allows you to inspect the React component hierarchies in the Chrome Developer Tools. When accessing the Chrome DevTools, you will get a new "React" tab that displays not only the root React components that are rendered on the page, but also its subcomponents and their props.

By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right. In the breadcrumbs, you can inspect the selected component, the Component that created it, the Component that created that one, and so on. If you inspect a React element on the page using the regular Elements tab and then switch over to the React tab, that very element will be automatically selected in the React tree.

Similarly, if you have a breakpoint within the render phase of a Component, that too will be automatically selected in the React tab. This feature allows you to step through the rendering tree and see how each Component affects the others. By breaking on errors, you can easily identify which component threw an error during rendering and which props lead to it.


![React Developer Tools](/images/react-devtools.png)

## Redux DevTools

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) might be as good or better than the React Developer Tools. Redux is fast becoming the default data management library for React-based applications. This useful Chrome extension makes it easy to see your Redux store and its internal state. It’s great for debugging.

<p style="text-align: center">
  <img src="/images/redux-devtools.gif" alt="Redux DevTools">
</p>
