/**
 * @name DiscordMessenger
 * @author DemetriusH
 * @version 0.1.0
 * @description Sets the Discord window into a compact, "Messenger" type layout that can be moved around with ease.
 * @source https://github.com/Demetrius-H/DiscordMessenger
 * @invite https://discord.gg/qAZPZgAPb5
 */

module.exports = class DiscordMessenger {
	start() {
		function buttonHoverOver() {
			button.style.backgroundColor = '#40A05E';
		}

		function buttonHoverOut() {
			button.style.backgroundColor = 'var(--background-primary)';
		}

		function buttonDown() {
			button.style.boxShadow = 'none';
			button.style.transform = 'translate(1px, 1px)';
		}

		function buttonUp() {
			button.style.boxShadow = '3px 3px var(--background-floating)';
			button.style.transform = 'translate(0px, 0px)';
		}

		function loadMessenger() {
			window.resizeTo(300, 300);
			document.body.style.zoom = "75%";
		}

		var button = document.createElement('button');
		button.setAttribute('id', 'messenger');
		var home = document.getElementsByClassName('tutorialContainer-2sGCg9')[0];
		home.insertAdjacentElement('afterend', button);

		button.style.width = '42px';
		button.style.height = '12px';
		button.style.margin = '15px';
		button.style.marginTop = '3px';
		button.style.marginBottom = '10px';
		button.style.borderRadius = '3px';
		button.style.border = '1px solid var(--background-secondary)';
		button.style.backgroundColor = 'var(--background-primary)';
		button.style.boxShadow = '3px 3px var(--background-floating)';
		button.style.transition = 'background-color .10s ease-out';

		button.addEventListener('mouseover', buttonHoverOver);
		button.addEventListener('mouseout', buttonHoverOut);
		button.addEventListener('mousedown', buttonDown);
		button.addEventListener('mouseup', buttonUp);
		button.addEventListener('click', loadMessenger);
	}

	stop() {
		console.log("Test");
		document.getElementById('messenger').remove();
	}
}
