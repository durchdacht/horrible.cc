			var i = 0;
			             var txt = 'Horrible.cc';
			             var speed = 600;
			    
			             function typeWriter() {
			               if (i < txt.length) {
			                 document.getElementById("meiden").innerHTML += txt.charAt(i);
			                 i++;
			                 setTimeout(typeWriter, speed);
			               }
			             }
