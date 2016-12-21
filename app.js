$(function() {
	var width = $(window).width();
	width = Math.min(width, 522);
	var height = width / 522 * 552;
	$('#spinner').spritespin({
		// generate an array of image urls.
		// this is a helper function that takes a {frame} placeholder
		source: SpriteSpin.sourceArray('images/{frame}.png', {
			// this ramge of numbers is interpolated into the {frame} placeholder
			frame: [1,8],
			// the frame placeholder will be padded with leading '0' up to the number of 'digits'
			digits: 1
		}),
		// Specify the display width and height of the frame.
		// Optionally the size of the container can be defined with CSS.
		width: width,
		height: height,
		// Sense controls the direction and speed of the animation for mouse/touch interactions.
		// Here a negative value is chosen to invert the rotation, so the animation 'follows' the drag direction.
		// Values towards 0 will slow the animation down.
		// sense: -1
	});
});
