/**
 * @name DiscordMessenger
 * @author DemetriusH
 * @version 0.0.1
 * @description Sets the Discord window into a compact, "Messenger" type layout that can be moved around with ease.
 */

module.exports = class DiscordMessenger {
	start() {
		window.resizeTo(400, 400);
	}
}