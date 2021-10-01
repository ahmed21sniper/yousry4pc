function getCurrentYear(){var e=new Date;return e.getFullYear()}el=document.getElementById("current-year"),el.innerHTML=getCurrentYear();
function show(e){document.getElementById(e).style.display="block"}function hide(e){document.getElementById(e).style.display="none"}
$(function(){$("#simplify-click > li").hover(function(i){var l=$("ul",this);return $("#simplify-click > li "ul").not(l).slideUp(),l.stop(!0,!0).slideToggle(400),!1}),$("#simplify-click > li > ul > li").click(function(i){i.stopPropagation()})});

// Back to top button
$(function(){$(window).scroll(function(){$(this).scrollTop()>400?$(".simplifytotop").addClass('arlniainf'):$(".simplifytotop").removeClass('arlniainf')}),$(".simplifytotop").click(function(){return $("html,body").animate({scrollTop:0},400),!1})});
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
$(function(){if($("#HTML1").length){var o=$("#HTML1"),t=$("#HTML1").offset().top,i=$("#HTML1").height();$(window).scroll(function(){var s=$("#comments").offset().top-i-20,f=$(window).scrollTop();if(f>t?o.css({position :"fixed",top:83}):o.css("position","static"),f>s){var n=s-f;o.css({top:n})}})}});
!function(t){var e=t("a.blog-pager-newer-link"),l=t("a.blog-pager-older-link");t.get(e.attr("href"),function(l){e.html(t(l).find(".post h1.post-title").text())},"html"),t.get(l.attr("href"),function(e){l.html(t(e).find(".post h1.post-title").text())},"html")}(jQuery);
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
function blockLinks(e,n){for(var a=document.getElementById(e),m=a.getElementsByTagName(n),t=0;t<m.length;t++)-1!==m[t].innerHTML.indexOf("</a>")&&(m[t].innerHTML="تحذير!! ممنوع وضع الروابط في التعليقات",m[t].className="spammer-detected")}blockLinks("comment_block","p");
