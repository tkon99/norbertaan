//Mustache: https://github.com/janl/mustache.js

var OneSignal = window.OneSignal || [];

var protestAPIend = "censored";

//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34961541-1', 'auto');
ga('send', 'pageview');

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

/* Fittext */
(function( $ ){$.fn.fitText = function( kompressor, options ) {var compressor = kompressor || 1, settings = $.extend({'minFontSize' : Number.NEGATIVE_INFINITY, 'maxFontSize' : Number.POSITIVE_INFINITY }, options); return this.each(function(){var $this = $(this); var resizer = function () {$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize))); }; resizer(); $(window).on('resize.fittext orientationchange.fittext', resizer); }); }; })( jQuery );

/* Prepend zeros */
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/* Cookie handler */
// https://github.com/niyazpk/cookie-wrapper
Cookie=function(){function a(a,e,s){"object"==typeof e&&(e=JSON.stringify(e));var t=new Date,l="; expires=";s!==void 0?(t.setTime(t.getTime()+1e3*s),l+=t.toGMTString()):l="",document.cookie=a+"="+encodeURIComponent(e)+l+"; path=/"}function e(a){for(var e=a+"=",s=document.cookie.split(";"),t=0;s.length>t;t++){for(var l=s[t];" "===l.charAt(0);)l=l.substring(1,l.length);try{if(0===l.indexOf(e)){var n=decodeURIComponent(l.substring(e.length,l.length));return JSON.parse(n)}}catch(c){return n}}return null}function s(e){a(e,"",-1)}function t(s,t,l){var n=e(s);n=n||{},n[t]=l,a(s,n,30)}function l(a,s){var t=e(a);return t&&t[s]||null}function n(s,t){var l=e(s);delete l[t],a(s,l,30)}return{get:e,set:a,clear:s,hget:l,hset:t,hclear:n}}();
function deleteAllCookies()
{   
	Cookie.set("user", "");
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {   
        var spcook =  cookies[i].split("=");
        deleteCookie(spcook[0]);
    }
    function deleteCookie(cookiename)
    {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var expires = ";expires="+d;
        var name=cookiename;
        //alert(name);
        var value="";
        document.cookie = name + "=" + value + expires + "; path=/acc/html";                    
    }
    window.location.hash = "";
    window.location = "/"; // TO REFRESH THE PAGE
}

var user = Cookie.get("user");
if(user == ""){
	user = undefined;
}
var sections = Cookie.get("sections");
/* Flush older versions */
if(Cookie.get("nc_magister_verified")){
	deleteAllCookies();
	location.reload();
}
var tempresp;

var currentView = "";
function renderView(template, data){
	var prerender = $('[data-template-name="'+template+'"]').html();
	Mustache.parse(prerender);
	var rendered = Mustache.render(prerender, data);
	$('#app').html(rendered);
	currentView = template;
}
function renderString(template, data){
	var prerender = $('[data-template-name="'+template+'"]').html();
	Mustache.parse(prerender);
	var rendered = Mustache.render(prerender, data);
	return rendered;
}

var currentPage,
	hash;
function handleUrl(){
	currentPage = window.location.pathname.split("/");
	currentPage = currentPage[currentPage.length-1];
	hash = window.location.hash;
	if(hash == undefined){hash = ""}else{hash = hash.substring(1).trim()}
}
handleUrl();

window.onhashchange = function(){
	handleUrl();
	appInit();
};

/* Special messages */
/* You don't even know me half*/
function special(){
	if(user){
		if(user.leerling == "120003609"){
			return('<br><br><b><span class="fa fa-info"></span> You da Boss m9</b>');
		}else if(user.leerling == "120003836"){
			return('<br><br><b><span class="fa fa-info"></span> This website only uses stattrak factory new servers</b>');
		}else if(user.leerling == "120004093"){
			return('<br><br><b><span class="fa fa-info"></span> Weet je wat. Ik schrijf hier gewoon helemaal niks.</b>');
		}else if(user.leerling == "120004061"){
			return('<br><br><b><span class="fa fa-info></span> The Brifff</b>');
		}else if(user.leerling == "120004071"){
			return('<br><br><b><span class="fa fa-magic"></span> Knijn</b>');
		}
	}else{
		//U wot m8
	}
}

function telegram(elem){
	if(user){
		$.getJSON("https://api.norbertaan.nl/notif/create/"+user.leerling, function(data){
			$(elem).html("Klik hier, of code: "+data.body.code);
			$(elem).attr("href", "https://telegram.me/NorbertaanBot?start="+data.body.code);
			$(elem).attr("onclick", "");
		});
	}
}

function font(){
	var font = Cookie.get('font');
	if(font == 1){
		$("body").attr("class", "");
	}else if(font == 2){
		$("body").attr("class", "serif");
	}else if(font == 3){
		$("body").attr("class", "dyslexic");
	}
}

function bindHotkeys(){
	Mousetrap.bind(['command+/', 'ctrl+/'], function(e) {
	    $(".hotkey").toggle();
	    $(".label").toggleClass("goright");
	    return false;
	});
	Mousetrap.bind('r', function(e) {
	    location.href = "l.html";
	    return false;
	});
	Mousetrap.bind('z', function(e) {
	    location.href = "#lookup";
	    return false;
	});
	Mousetrap.bind('m', function(e) {
	    location.href = "#match";
	    return false;
	});
	Mousetrap.bind('c', function(e) {
	    location.href = "#cluster";
	    return false;
	});
	Mousetrap.bind('s', function(e) {
	    location.href = "#settings";
	    return false;
	});
}

function bindBackHotkey(){
	Mousetrap.bind(['o',"backspace"], function(e) {
		location.href="index.html";
		return false;
	});
}

function checkProtest(){
	if(user){
		//User exists
		$.getJSON(protestAPIend+"/check/"+user.leerling, function(data){
			console.log(data);
			if(data.show_protest == true){
				$("#app").html("");
				renderView('plz',{});
				Mousetrap.unbind(["ctrl+/","command+/","r","z","m","c","s","o","backspace"]);
			}else if(data.show_protest == "disabled"){
				$("#app").addClass("nope");
				$("#title").html("<a href='#' onclick='tochwel()'>Protesteren?</a>");
			}else{

			}
		});
	}
}

function tochwel(){
	$("#app").removeClass("nope");
	renderView('plz', {});
	$("#title").html("Norbertaan");
}

function appInit(){
	Mousetrap.unbind(["ctrl+/","command+/","r","z","m","c","s","o","backspace"]);
	font();
	//alert("Pagina: "+currentPage+"\nHash: "+hash);
	if(user){
		ga('set', 'userId', user.leerling);
	}

	//checkProtest();

	if(currentPage == "" || currentPage == "index.html"){
		if(user){
			var found = false;
			if(hash !== "about" && hash !== "match" && hash !== "lookup" && hash !== "settings" && hash !== "cluster" && hash == ""){
				renderView('home', {name: user.naam, visible: "true", special: special(), ads: renderString("ads")});
				// if(Cookie.get("fb_seen") !== true){
				// 	$("#fb-like").show();
				// }
				OneSignal.push(["init", {
				     appId: "679cfbc2-0c31-40a3-b786-b85248582dcd",
				     safari_web_id: 'web.onesignal.auto.50aab334-fdef-4f2b-a12a-95c1e616813d',
				     autoRegister: false,
				     notifyButton: {
				       enable: true,
				       displayPredicate: function() {
				            return OneSignal.isPushNotificationsEnabled()
				                .then(function(isPushEnabled) {
				                    /* The user is subscribed, so we want to return "false" to hide the notify button */
				                    return !isPushEnabled;
				                });
				        },
				     },
				     welcomeNotification: {
				        "title": "Norbertaan",
				        "message": "Je ontvangt voortaan notificaties van Norbertaan.",
				        // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
				    }
				}]);
				OneSignal.push(function() {
				  OneSignal.on('subscriptionChange', function(isSubscribed) {
				    if (isSubscribed) {
				    	OneSignal.push(["sendTags", {leerling: user.leerling}]);
				    }
				  });
				});
				$(".hotkey").hide();
				bindHotkeys();
			}else if(hash == "about"){
				found = true;
				renderView('about', {name: user.naam});
				special();
				bindBackHotkey();
			}else if(hash == "match"){
				found = true;
				renderView('match', {name: user.naam});	
				$("#searchname").attr("placeholder", user.naam.split(" ")[0]);
				$("#searchname").focus();
				prefilMatchRes();
				bindBackHotkey();
			}else if(hash == "lookup"){
				found = true;
				renderView('lookup', {name: user.naam});
				$("#searchname").attr("placeholder", user.naam.split(" ")[0]);
				$("#searchname").focus();
				bindBackHotkey();
			}else if(hash == "settings"){
				found = true;
				renderView('settings', {name: user.naam});
				if(user.leerling !== "120003525" && user.leerling !== "120003528"){
					$("#telegram").hide();
				}
				var curFont = Cookie.get("font");
				if(curFont == undefined) curFont = 1;
				$("#fontselect option[value="+curFont+"]").attr("selected", "selected");				
				$("#fontselect").on('change', function(e){
					var value = $("#fontselect").val();
					Cookie.set("font", value);
					font();
				});
				bindBackHotkey();
			}else if(hash == "cluster"){
				found = true;
				renderView('cluster', {name: user.naam});
				cluster();
				bindBackHotkey();
			}else{
				var woord = hash.replace("+", " ");
				if(woord[woord.length-1] !== "."){
					woord = woord+".";
				}
				renderView('zelf', {word: woord});
				$("#zelf").fitText();
			}

			if(found){
				ga('set', 'page', '/'+hash);
			}else{
				ga('set', 'page', '/');
			}
			// Old mondeling code
			// if(user.richting == "vwo-5"){
			// 	$.getJSON("https://api.norbertaan.nl/mondeling/"+user.naam, function(data){
			// 		var dag = "";
			// 		if(data.body.dag == "di"){
			// 			dag = "dinsdag";
			// 		}else if(data.body.dag == "wo"){
			// 			dag = "woensdag";
			// 		}else if(data.body.dag == "do"){
			// 			dag = "donderdag";
			// 		}else if(data.body.dag == "vr"){
			// 			dag = "vrijdag";
			// 		}
			// 		$("#nav-contain div").prepend('<a class="btn btn-orange full" id="notice">Nederlands mondeling op '+dag+' van '+data.body.van+' tot '+data.body.tot+'</a>');
			// 	});
			// }
		}else{
			ga('set', 'page', '/login');
			renderView('newUser', {});
			$(".fit1").fitText(1, { minFontSize: '30px', maxFontSize: '80px' });
			$(".fit2").fitText(1, { minFontSize: '30px', maxFontSize: '60px' });
			$('#lln').keypress(function (e) {
			  if (e.which == 13) {
			    finishLln();
			    return false;    //<---- Add this line
			  }
			});
		}
	}else if(currentPage == "l.html"){
		bindBackHotkey();
		if(hash.substring(0,5) == "12000" && hash.length == 9){
			ga('set', 'page', 'l/other');
			$("#waitings").show();
			$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+hash, function(data){
				if(user){
					if(user.leerling !== data.body.leerling){
						$.getJSON("https://api.norbertaan.nl/tracker/"+user.leerling+"/"+data.body.leerling);
					}
				}
				var roosterUrl = "https://roosters5.gepro-osi.nl/roosters/rooster.php?leerling="+data.body.leerling+"&type=Leerlingrooster&afdeling="+data.body.richting+"&tabblad=2&wijzigingen=1&school=507";
				$("#roosterframe").get(0).contentWindow.location.replace(roosterUrl);
				setTimeout(function(){
					$("#waitings").hide();
				}, 500);
			});
		}else{
			if(user){
              /*
              $.getJSON(protestAPIend "/check/" user.leerling, function(data){
					if(data.show_protest == true){
						location.href = "index.html";
					}else if(data.show_protest == "disabled"){
						$("iframe").addClass("nope");
					}
				});
              */
				ga('set', 'page', '/l');
				var roosterUrl = "https://roosters5.gepro-osi.nl/roosters/rooster.php?leerling="+user.leerling+"&type=Leerlingrooster&afdeling="+user.richting+"&tabblad=2&wijzigingen=1&school=507";
				$("#roosterframe").attr("src", roosterUrl);
			}else{
				ga('set', 'page', '/l/unknown');
				//Not a user, show default schedule
			}
		}
	}else{
		document.location == "https://norbertaan.nl/";
	}
}

$(document).ready(function(){
	appInit();
	validateSections();
});

function checkLln(){
	var nummer = $("#lln").val();
	if(nummer.toString().length >= 4){
		$("#lln").attr("style", "color: #FF9800");
		$("#defaultSched").hide();
		$.getJSON("https://api.norbertaan.nl/rooster/leerling/12000"+nummer, function(data){
			tempresp = data;
			if(!data.status.code){
				$("#lln").attr("style", "color: green");
				$("#continue").html("Doorgaan als "+data.body.naam);
				$("#continue-wrap").show();
			}else{
				$("#lln").attr("style", "color: red");
				$("#continue").html("");
				$("#continue-wrap").hide();
			}
		}).fail(function() {
		    $("#lln").attr("style", "color: red");
		    $("#continue").html("");
		    $("#continue-wrap").hide();
		  });
	}else{
		$("#lln").attr("style", "");
		$("#continue").html("");
		$("#continue-wrap").hide();
		$("#defaultSched").show();
	}
}
function checkSearch(){
	var search = $("#searchname").val();
	if(search.toLowerCase() == "je moeder"){
		alert("Je moeder past niet op deze pagina yo");
	}
	if(search.trim() !== ""){
		$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+search, function(data){
			if(!data.status.code){
				var responses = data.body;
				$("#searchresults").html("");
				var pushRes = "";
				var amount = 0;
				if(responses.length > 5 || responses.length == undefined){
					for(i = 0; i < 5; i++){
						amount++;
						pushRes = pushRes + '<a href="l.html#'+responses[i].leerling+'" class="list-group-item">'+responses[i].naam+'</a>';
					}
				}else{
					for(i in responses){
						amount++;
						pushRes = pushRes + '<a href="l.html#'+responses[i].leerling+'" class="list-group-item">'+responses[i].naam+'</a>';
					}
				}
				$("#searchresults").html(pushRes);
			}
		}).fail(function(){
		});
	}else{
		$("#searchresults").html("");
	}
}

function finishLln(){
	if($("#lln").val().toString().length >= 4){
		Cookie.set("user", tempresp.body, (10*365*24*60*60));
		window.location.reload();
	}
}

/* Automated schedule data renewal */
function validateSections(){
	if(user){
		$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+user.leerling, function(data){
			if(data.body.leerling !== user.leerling || data.body.naam !== user.naam || data.body.richting !== user.richting){
				Cookie.set("user", data.body, (10*365*24*60*60));
				user = data.body;
				if(currentView == "home"){
					$("#notice").html("Je richting is geüpdatet.");
					$("#notice").removeClass("vis-false");
				}
			}else{
				console.log("User is up-to-date.");
			}
		});
	}
}

/* Cluster */
function clusterMatch(elem){
	var elem = $(elem);
	var lokaal = elem.attr("data-lokaal");
	var uur = elem.attr("data-uur");
	$.getJSON("https://api.norbertaan.nl/rooster/cluster/"+lokaal+"/"+uur+"/", function(raw){
		var data = raw.body;
		var updated = new Date(raw.status.update*1000);
		$("#updated").html("Laatst geüpdatet: "+pad(updated.getHours(), 2)+":"+pad(updated.getMinutes(), 2)+" op "+updated.getDate()+"-"+updated.getMonth()+"-"+updated.getFullYear());
		var pushRes = "";
		for(i in data){
			if(data[i].leerling == user.leerling){
				pushRes = pushRes + '<a href="l.html#'+data[i].leerling+'" class="list-group-item point"><b>'+data[i].naam+'</b></a>';
			}else{
				pushRes = pushRes + '<a href="l.html#'+data[i].leerling+'" class="list-group-item point">'+data[i].naam+'</a>';
			}
		}
		$("#clusterresults").html(pushRes);
		$('#clusterresults').scrollTop(0);

		uur = uur.split(",");
		var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
		$("#uur").html(dagen[parseInt(uur[0])]+" het "+(parseInt(uur[1])+1).toString()+"e uur");
		$("#lokaal").html(lokaal);
		$("#resultheader").attr("style", "");
	});
}
function cluster(){
	$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+user.leerling+"/rooster/", function(raw){
		var data = raw.body;
		var roosterContainer = '';

		roosterContainer += '<table><tbody><tr class="AccentDark"><td align="left" width="65" class="tableHeader"></td> <td align="center" width="auto" class="tableHeader">Maandag</td> <td align="center" width="auto" class="tableHeader">Dinsdag</td> <td align="center" width="auto" class="tableHeader">Woensdag</td> <td align="center" width="auto" class="tableHeader">Donderdag</td> <td align="center" width="auto" class="tableHeader">Vrijdag</td> </tr>';
				
		for(x = 0; x < 10; x++){
			roosterContainer += '<tr> <td align="left" width="50" class="tableHeader">'+(x+1)+'e uur</td>';
			for(i = 0; i < 5; i++){
				var uur = data[i][x];
				roosterContainer += '<td align="left" width="auto" class="tableCell">';

				for(a = 0; a < uur.length; a++){
					var type = 'tableCell';
					if(uur[a]["status"]["type"] == "1"){
						type = "tableCellNew";
					}else if(uur[a]["status"]["type"] == "2"){
						type = "tableCellRemoved";
					}

					var extra = "";
					//Als er een lokaal is heb je dus les
					if(uur[a]["lokaal"] !== ""){
						extra = 'class="click" onclick="clusterMatch(this)" data-uur="'+i+','+x+'" data-lokaal="'+uur[a]["lokaal"]+'"';
					}

					roosterContainer += '<table border="0" cellpadding="0" cellspacing="0" '+extra+'> <tbody><tr> <td align="left" width="43" class="'+type+'">';
					roosterContainer += uur[a]["leraar"];
					roosterContainer += '</td> <td align="left" width="3" class="'+type+'">&nbsp;</td> <td align="left" width="39" class="'+type+'">';
					roosterContainer += uur[a]["lokaal"];
					roosterContainer += '</td> <td align="left" width="3" class="'+type+'">&nbsp;</td> <td align="left" width="43" class="'+type+'">';
					roosterContainer += uur[a]["vak"];
					roosterContainer += '</td> <td align="left" width="9" class="'+type+'">';
					roosterContainer += uur[a]["cluster"];
					roosterContainer += '</td> </tr> </tbody></table>';
				}

				roosterContainer += '</td>';
			}
			roosterContainer += '</tr>';
		}
		roosterContainer += '</tbody></table>';
		$("#rooster").html(roosterContainer);
		$("#temp").hide();
		$("#cluster").show();
	});
}

/* Matcher */
function prefilMatchRes(){
	$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+user.leerling+"/matches", function(data){
		var responses = data.body;
		$("#searchresults").html("");
		var pushRes = "";
		var amount = 0;
		for(i = 0; i < 5; i++){
			amount++;
			var percent = Math.round(responses[i].percentage*1000)/10+"%";
			if(i == 0){
				pushRes = pushRes + '<a onclick="match('+responses[i].leerling+')" class="list-group-item point firstItem"><b>'+percent+"</b> - "+responses[i].naam+'</a>';
			}else{
				pushRes = pushRes + '<a onclick="match('+responses[i].leerling+')" class="list-group-item point"><b>'+percent+"</b> - "+responses[i].naam+'</a>';
			}
		}
		$("#searchresults").html(pushRes);
	});
}
function checkSearchMatch(){
	var search = $("#searchname").val();
	if(search.trim() !== ""){
		$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+search, function(data){
			if(!data.status.code){
				var responses = data.body;
				$("#searchresults").html("");
				var pushRes = "";
				var amount = 0;
				if(responses.length > 5 || responses.length == undefined){
					for(i = 0; i < 5; i++){
						amount++;
						pushRes = pushRes + '<a onclick="match('+responses[i].leerling+')" class="list-group-item point">'+responses[i].naam+'</a>';
					}
				}else{
					for(i in responses){
						amount++;
						pushRes = pushRes + '<a onclick="match('+responses[i].leerling+')" class="list-group-item point">'+responses[i].naam+'</a>';
					}
				}
				$("#searchresults").html(pushRes);
			}
		}).fail(function(){
		});
	}else{
		prefilMatchRes();
	}
}
function match(leerling){
	$("#searcher").hide();
	$("#matcher").show();

	var chosen_info;

	$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+leerling, function(data){
		var chosen_info = data.body;
		var samen_counter = 0;
		var total_counter = 0;
		$("#persoon").html(chosen_info.naam);
		//var chosen_url = "https://roosters5.gepro-osi.nl/roosters/rooster.php?leerling="+data.body.leerling+"&type=Leerlingrooster&afdeling="+data.body.richting+"&wijzigingen=0&school=507";
		$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+data.body.leerling+"/rooster/", function(data){
			var chosen_data = data.body;
			//var ownurl = "https://roosters5.gepro-osi.nl/roosters/rooster.php?leerling="+user.leerling+"&type=Leerlingrooster&afdeling="+user.richting+"&wijzigingen=0&school=507";
			$.getJSON("https://api.norbertaan.nl/rooster/leerling/"+user.leerling+"/rooster/", function(data){
				$.getJSON("https://api.norbertaan.nl/tracker/"+user.leerling+"/"+chosen_info.leerling);

				var my_data = data.body;
				console.log(chosen_data);
				console.log(my_data);

				console.log(chosen_info);
				console.log(user);

				var roosterContainer = '';

				roosterContainer += '<table><tbody><tr class="AccentDark"><td align="left" width="65" class="tableHeader"></td> <td align="center" width="auto" class="tableHeader">Maandag</td> <td align="center" width="auto" class="tableHeader">Dinsdag</td> <td align="center" width="auto" class="tableHeader">Woensdag</td> <td align="center" width="auto" class="tableHeader">Donderdag</td> <td align="center" width="auto" class="tableHeader">Vrijdag</td> </tr>';
				
				for(x = 0; x < 10; x++){
					roosterContainer += '<tr> <td align="left" width="50" class="tableHeader">'+(x+1)+'e uur</td>';
					for(i = 0; i < 5; i++){
						var deze_uur = my_data[i][x];
						var andere_uur = chosen_data[i][x];
						roosterContainer += '<td align="left" width="auto" class="tableCell">';

						for(a = 0; a < deze_uur.length; a++){
							for(b = 0; b < andere_uur.length; b++){
								var type = 'tableCell';
								var type2 = '';
								if(deze_uur[a]["status"]["type"] == "1"){
									type = "tableCellNew";
								}else if(deze_uur[a]["status"]["type"] == "2"){
									type = "tableCellRemoved";
								}

								if(deze_uur[a]["lokaal"].trim() !== ""){
									total_counter++;
								}

								if(deze_uur[a]["lokaal"].trim() == "" && andere_uur[b]["lokaal"].trim() == ""){
									type2 = " samenTussen";
								}

								if(deze_uur[a]["lokaal"] == andere_uur[b]["lokaal"] && deze_uur[a]["lokaal"] !== ""){
									type2 = " samen";
									samen_counter++;
								}else{

								}
								roosterContainer += '<table border="0" cellpadding="0" cellspacing="0" class="'+type2+'"> <tbody><tr> <td align="left" width="43" class="'+type+'">';
								roosterContainer += deze_uur[a]["leraar"];
								roosterContainer += '</td> <td align="left" width="3" class="'+type+'">&nbsp;</td> <td align="left" width="39" class="'+type+'">';
								roosterContainer += deze_uur[a]["lokaal"];
								roosterContainer += '</td> <td align="left" width="3" class="'+type+'">&nbsp;</td> <td align="left" width="43" class="'+type+'">';
								roosterContainer += deze_uur[a]["vak"];
								roosterContainer += '</td> <td align="left" width="9" class="'+type+'">';
								roosterContainer += deze_uur[a]["cluster"];
								roosterContainer += '</td> </tr> </tbody></table>';
							}

							
						}

						roosterContainer += '</td>';
					}
					roosterContainer += '</tr>';
				}
				roosterContainer += '</tbody></table>';
				$("#rooster").html(roosterContainer);

				var percentage = (Math.round((samen_counter/total_counter)*1000)/10).toString();
				$("#perc").html(percentage);
				$("#uur").html(samen_counter);

				$("#temp").hide();
				$("#result").show();

			});
		});
	});
}

function deleteAccount(){
	var r = confirm("Hierdoor worden al je account gegevens verwijderd van dit apparaat.");
	if(r == true){
		deleteAllCookies();
		location.reload();
	}
}

/* Favourite people <3 */
/* CURRENTLY WIP */
function addFav(num, name, elem){
	console.log(name+" - "+num);
}

/* Protestding */
function protest(){
	$.getJSON(protestAPIend+"/protest/"+user.leerling, function(data){
		alert("Thanks, "+user.naam+"!");
		location.reload();
	});
}

function neuj(){
	var r = confirm("Weet je het zeker? Als je niet protesteert draaien we Norbertaan voor je om ;-)");
	if(r == true){
		$.getJSON(protestAPIend+"/disable/"+user.leerling, function(data){
			appInit();
		});
	}
}