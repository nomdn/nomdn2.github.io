document.addEventListener('DOMContentLoaded', function() {
	    var adPopup = document.getElementById('ad-popup');
	    var closeBtn = document.getElementById('close-ad');
	    var adImage = document.getElementById('ad-image');
	
	    window.addEventListener('load', function() {
	        adPopup.style.display = 'block';
	    });
	
	    closeBtn.addEventListener('click', function() {
	        adPopup.style.display = 'none';
	    });
	
	    adImage.addEventListener('click', function() {
	        window.location.href = "more/guanggao.html";
	    });
	});
	
	
	
	        // 异步获取IP地址
	        async function getIPAddress() {
	            const response = await fetch('https://api.ipify.org?format=json');
	            if (response.ok) {
	                const data = await response.json();
	                document.getElementById('ip-address').textContent = data.ip;
	            } else {
	                document.getElementById('ip-address').textContent = '无法获取';
	            }
	        }
	
	        // 页面加载完成后获取信息
	        window.onload = function() {
	            getIPAddress();
	        };
