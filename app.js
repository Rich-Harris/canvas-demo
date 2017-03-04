var canvas = document.querySelector( 'canvas' );
var ctx = canvas.getContext( '2d' );

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// track the mouse position
var x = null;
var y = null;

canvas.addEventListener( 'mousemove', function ( event ) {
	x = event.clientX;
	y = event.clientY;
});

// this function runs 60 times a second...
function loop () {
	requestAnimationFrame( loop ); // ...because of this line

	if ( x == null ) {
		return; // don't do anything until the mouse is on the screen
	}

	// all the Math.sin() and Date.now() stuff is just an easy
	// way to rotate through colours and sizes. There are lots
	// of ways to do this!
	var hue = 360 * Math.sin( Date.now() / 1000 );
	var radius = 20 + ( 20 * Math.sin( Date.now() / 500 ) );

	ctx.fillStyle = ctx.fillStyle = 'hsla(' + hue + ',100%,50%,1)';

	ctx.beginPath();
	ctx.arc( x, y, radius, 0, Math.PI * 2, true ); // draw a circle at x, y
	ctx.fill();
}

loop();
