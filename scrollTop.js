(function(scrollToTop) {

	let options = {
			bgColor: '#C03221',
			fontColor: '#fff',
			fontSize: '2',
			fontSizeUnits: 'rem',
			size: '50',
			sizeUnits: 'px',
			borderRadius: '50',
			borderRadiusUnits: '%'
		},

		button, 
		animScroll,

		 /**
		 * Extend options defaults
		 */
		 extendDefaults = function(defaults, properties) {
			let property;
			 for(property in properties) {
				 if(properties.hasOwnProperty(property)) {
					 defaults[property] = properties[property];
				 }
			 }
			 
			 return defaults;
		 },

		 /**
		  * Attach Event Listeners
		  */
		 attachEventListeners = function() {
			 window.addEventListener('scroll', toggleScrollTopBtn);
			 button.addEventListener('click', scrollTop);
		 },

		 /**
		  * Render button
		  */
		 renderBtn = function() {
			 btn = document.createElement('DIV');
			 btn.className = 'scrollTop';
			 btn.setAttribute('id', 'scrollTop');
			 btn.style.backgroundColor = options.bgColor;
			 btn.style.height = String(options.size + options.sizeUnits);
			 btn.style.width = String(options.size + options.sizeUnits);
			 btn.style.color = options.fontColor;
			 btn.style.fontSize = String(options.fontSize + options.fontSizeUnits);
			 btn.style.lineHeight = 'calc(' + String(options.size + options.sizeUnits) + ' + ' + String((options.fontSize / 2) + options.fontSizeUnits) + ')';
			 btn.style.borderRadius = String(options.borderRadius + options.borderRadiusUnits);
			 btn.innerHTML = '&#8963;';

			 document.body.appendChild(btn);

			 button = document.getElementById('scrollTop');
		 }, 

		 /**
		  * Toggle button visibility
		  */
		 toggleScrollTopBtn = function() {
			 if(window.scrollY > 100) {
				 btn.classList.add('visible');
			 } else {
				 btn.classList.remove('visible');
			 }
		 },
		 
		 /**
		  * Scroll page to top
		  */
		 scrollTop = function() {
			 animScroll = setInterval(scrollStep, 10);
		 },

		 /**
		  * Scroll page by 50px steps
		  */
		 scrollStep = function() {
			if (window.pageYOffset === 0) {
				clearInterval(animScroll);
			}
			window.scroll(0, window.pageYOffset - 50);
		 };

	/**
	 * Plublic init function
	 */
	scrollToTop.init = function(custom) {
		if(custom && typeof(custom) === 'object') {
			this.options = extendDefaults(options, custom);
		} 

		renderBtn();
		attachEventListeners();
	}

})(window.scrollToTop = window.scrollToTop || {}) 

scrollToTop.init();