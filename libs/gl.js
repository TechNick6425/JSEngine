function glInit() {
	
	var canvas = document.getElementById("gl");
	
	var gl = init(canvas);
	
	if (gl) {
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
		gl.viewport(0, 0, canvas.width, canvas.height);
		
		return true;
	} else {
		return false;
	}
	
}

function init(canvas) {
	
	gl = null;
	
	try {
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	} catch(e) {}
	
	if (!gl) {
		alert("Failed to initialize GLES. Please update your browser.");
		gl = null;
	}
	
	return gl;
	
}