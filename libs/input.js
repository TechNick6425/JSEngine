var Keyboard = {
	_pressed: {},
	
	A: 65,
	B: 66,
	C: 67,
	D: 68,
	E: 69,
	F: 70,
	G: 71,
	H: 72,
	I: 73,
	J: 74,
	K: 75,
	L: 76,
	M: 77,
	N: 78,
	O: 79,
	P: 80,
	Q: 81,
	R: 82,
	S: 83,
	T: 84,
	U: 85,
	V: 86,
	W: 87,
	X: 88,
	Y: 89,
	Z: 90,
	
	a: 97,
	b: 98,
	c: 99,
	d: 100,
	e: 101,
	f: 102,
	g: 103,
	h: 104,
	i: 105,
	j: 106,
	k: 107,
	l: 108,
	m: 109,
	n: 110,
	o: 111,
	p: 112,
	q: 113,
	r: 114,
	s: 115,
	t: 116,
	u: 117,
	v: 118,
	w: 119,
	x: 120,
	y: 121,
	z: 122,
	
	Space: 32,
	Enter: 13,
	Tab: 9,
	Escape: 27,
	Backspace: 8,
	
	Shift: 16,
	Control: 17,
	Alt: 18,
	Caps_Lock: 20,
	Num_Lock: 144,
	
	One: 49,
	Two: 50,
	Three: 51,
	Four: 52,
	Five: 53,
	Six: 54,
	Seven: 55,
	Eight: 56,
	Nine: 57,
	Ten: 58,
	
	Left: 37,
	Up: 38,
	Right: 39,
	Down: 40,
	
	Insert: 45,
	Delete: 46,
	Home: 36,
	End: 35,
	PageUp: 33,
	PageDown: 34,
	
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,
	
	isDown: function(keyCode) {
		return this._pressed[keyCode];
	}
	
	onKeyDown: function(event) {
		this._pressed[event.keyCode] = true;
	}
	
	onKeyUp: function(event) {
		delete this._pressed[event.keyCode];
	}
	
}