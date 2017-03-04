# canvas-demo

*This repo exists for the benefit of my students, but whoever you are — welcome!*

This is just a simple demo of how to paint stuff to a `<canvas>` element. It's very basic — for example it doesn't handle screen resizes at all well — but it illustrates the basic concepts:

```js
var canvas = document.querySelector( 'canvas' );
var ctx = canvas.getContext( '2d' );
```

Here, `canvas` is the HTML `<canvas>` element that lives in [index.html](index.html). `ctx` (pronounced 'context') is the *drawing context* — the thing we actually issue drawing commands to. (The alternative to `2d` is `webgl`, which is what 3D libraries like A-Frame use.)

Read the [source code in app.js](app.js) to see what else is going on. When you're ready, there's a [canvas tutorial on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) that will take you much deeper.
