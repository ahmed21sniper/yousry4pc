var getFontawesome=document.createElement("link");getFontawesome.rel="stylesheet",getFontawesome.type="text/css",getFontawesome.href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css",document.querySelector("body").appendChild(getFontawesome);
var getAs=document.createElement("link");getAs.rel="stylesheet",getAs.type="text/css",getAs.href="https://fonts.googleapis.com/css?family=Tajawal:200,300,400,500,600,700,800,900",document.querySelector("body").appendChild(getAs);

function rdmode(){localStorage.setItem("mode","rdmode"===localStorage.getItem("mode")?"light":"rdmode"),"rdmode"===localStorage.getItem("mode")?document.querySelector("body").classList.add("edmn"):document.querySelector("body").classList.remove("edmn")};
(localStorage.getItem('mode')) === 'rdmode' ? document.querySelector('body').classList.add('edmn') : document.querySelector('body').classList.remove('edmn');
$(function(){ "use strict";
$("#linkm")["append"]($(".mobile #LinkList1 ul"));$("#soc")["append"]($(".mobile #LinkList2"));
});
$(document).ready(function () {$('#RicoRights').attr('style', 'margin-left: 3px;display:inline-block !important;visibility: visible!important; opacity: 1!important;z-index: 1!important;').html('<span class="ZienRightsClass"><a href="https://gat-filgoal.blogspot.com/" target="_blank" style="visibility: visible!important;opacity: 1!important;position: relative!important;z-index: 1!important;width:40px!important;height:40px!important;background: url(https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/cp0/234748246_249096023711918_775223328678797538_n.png?_nc_cat=108&ccb=1-4&_nc_sid=ae9488&_nc_ohc=m7GX8Jg5-LoAX84Pfme&_nc_ht=scontent-hbe1-1.xx&oh=a850f1422e869180c0bd257bfe69231b&oe=613643D2) top no-repeat;background-size:contain;-webkit-transition: all 0.15s ease-in-out;-moz-transition: all 0.15s ease-in-out;-ms-transition: all 0.15s ease-in-out;-o-transition: all 0.15s ease-in-out;transition: all 0.15s ease-in-out;display: inline-block!important;vertical-align: top;"></a></span>');setInterval(function () {if (!$('#RicoRights:visible').length) {window.location.href = 'https://gat-filgoal.blogspot.com/'}}, 5000)});
$(document).ready(function(){$(".match-event .match-date").each(function(){var t=$(this),m=t.data("start"),a=t.data("gameends"),e=moment(m,"YYYY-MM-DD HH:mm:ssZ"),s=moment(a,"YYYY-MM-DD HH:mm:ssZ"),a=moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),e=e.diff(a,"minutes"),a=s.diff(a,"minutes");switch(!0){case 60<e:var n=moment.utc(m).toDate(),n=moment(n).format("YYYY/MM/DD HH:mm:ssZ");t.parent().find("#match-hour").text(moment(n).format("LT")),t.html("???? ???????? ??????").addClass("not-start"),t.parents(".match-event").addClass("notstart");break;case 0<e:n=moment.utc(m).toDate(),n=moment(n).format("YYYY/MM/DD HH:mm:ssZ"),t.parent().find("#match-hour").text(moment(n).format("LT")),t.html("?????? ????????").addClass("soon"),t.parents(".match-event").addClass("ch-soon");break;case 0<a:n=moment.utc(m).toDate(),n=moment(n).format("YYYY/MM/DD HH:mm:ssZ"),t.parent().find("#match-hour").text(moment(n).format("LT")),t.html("?????????? ????????").addClass("live"),t.parents(".match-event").addClass("ch-live");break;default:n=moment.utc(m).toDate(),n=moment(n).format("YYYY/MM/DD HH:mm:ssZ"),t.html("?????????? ????????????????").addClass("end"),t.parents(".match-event").addClass("ch-end")}})});

$(document).ready(function(){
  $(".menublabel.op").click(function(){
    $(".mobile-navv").addClass("open");
  });  $(".menublabel.clo").click(function(){
    $(".mobile-navv").removeClass("open");
  });
$(".yema").click(function(){
  
    $(".toma").removeClass("active");
    $(".tomat").removeClass("active");
    $("#tomorrow").removeClass("active");
    $("#today").removeClass("active");
	
    $(".yema").addClass("active");
    $("#yesterday").addClass("active");
  });
  
  $(".toma").click(function(){
  
    $(".yema").removeClass("active");
    $(".tomat").removeClass("active");
    $("#yesterday").removeClass("active");
    $("#tomorrow").removeClass("active");
	
    $(".toma").addClass("active");
    $("#today").addClass("active");
  });
  
  $(".tomat").click(function(){
  
    $(".yema").removeClass("active");
    $(".toma").removeClass("active");
    $(".today").removeClass("active");
    $("#today").removeClass("active");
	
    $(".tomat").addClass("active");
    $("#tomorrow").addClass("active");
  });

});$(function() {
	$('#Zien-load-more-link').each(function() {
		var $this = $(this),
			$loadLink = $this.data('load');
		if ($loadLink) {
			$('#Zien-load-more-link').show()
		}
		$('#Zien-load-more-link').on('click', function(a) {
			$.ajax({
				url: $loadLink,
				success: function(data) {
					var $p = $(data).find('.blog-posts');
					$p.find('.index-post').addClass('post-animated post-fadeInUp');
					$('.blog-posts').append($p.html());
					$loadLink = $(data).find('#Zien-load-more-link').data('load');
					if ($loadLink) {
						$('#Zien-load-more-link').show()
					} else {
						$('#blog-pager .no-more').addClass('show')
					}
				},
				beforeSend: function() {
					$('#blog-pager .loading').show()
				},
				complete: function() {
					$('#blog-pager .loading').hide()
				}
			});
			a.preventDefault()
		})
	});

});$(function(){ "use strict";
$(".home-1")["append"]($("#HTML30"));
$(".home-2")["append"]($("#HTML31"));
$(".home-3")["append"]($("#HTML32"));
$(".home-4")["append"]($("#HTML33"));
$(".post-1")["append"]($("#HTML34"));
$(".post-2")["append"]($("#HTML35"));
var _0x8468x0 = Math["floor"]($(".post-body *")["length"] / 2);
        $(".post-body *:eq(" + _0x8468x0 + ")")["after"]($("#HTML36"));
});
