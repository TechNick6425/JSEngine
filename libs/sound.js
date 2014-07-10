Sound = {
	
	tracks: {},
	enabled: true,
	
	enable: function() {
		Sound.enabled = true;
	},
	
	disable: function() {
		Sound.enabled = false;
	},
	
	play: function(url) {
		
		if (!Sound.enabled) return;
		
		var embed = document.createElement("embed");
		embed.setAttribute("src", url);
		embed.setAttribute("loop", false);
		embed.setAttribute("autostart", true);
		embed.setAttribute("hidden", true);
		
	}
	
}