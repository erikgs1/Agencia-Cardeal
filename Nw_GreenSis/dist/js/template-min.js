const openMenuMobile=()=>{jQuery(".boxes_ .box.left").animate({marginLeft:0}),jQuery(".overlay").show()},openMenuMobileCart=()=>{console.log("openMenuMobileCart"),jQuery(".boxes_ .box.right").animate({marginRight:0}),jQuery(".overlay").show()},closeMenuMobile=()=>{console.log("closeMenuMobile"),jQuery(".boxes_ .box.left").animate({marginLeft:"-300px"}),jQuery(".overlay").hide()},closeMenuMobileCart=()=>{jQuery(".boxes_ .box.right").animate({marginRight:"-300px"}),jQuery(".overlay").hide()},showSearchBar=()=>{jQuery("header .social .icons .search").on("click",function(){jQuery("header .menu-lista").hide(),jQuery("header .gsearchfield").fadeIn()})},closeSearchBar=()=>{jQuery("header .gsearchfield .close i").on("click",function(){jQuery("header .gsearchfield").hide(),jQuery("header .menu-lista").fadeIn()})},shop=()=>{jQuery(".woocommerce-shop .woocommerce").each(function(){jQuery(this).find(".product").eq(0).after('<li class="line"></li>'),jQuery(this).find(".product").eq(1).after('<li class="line"></li>')})},woocommerceMessage=()=>{if(jQuery("body").hasClass("woocommerce-cart")){elem=jQuery(".woocommerce-notices-wrapper")[0],new ResizeObserver(()=>{jQuery(".woocommerce .woocommerce-message").each(function(){var e=this;jQuery(this).find(".close").remove(),jQuery(this).append("<span class='close'>x</span>"),jQuery(this).find(".close").on("click",function(){jQuery(e).hide()})}),jQuery(".woocommerce .woocommerce-info").each(function(){var e=this;jQuery(this).find(".close").remove(),jQuery(this).append("<span class='close'>x</span>"),jQuery(this).find(".close").on("click",function(){jQuery(e).hide()})})}).observe(elem)}};jQuery(".content-mobile .menu-action i").on("click",function(){jQuery(".boxes_ .box.left").animate({marginLeft:0}),jQuery(".overlay").show()}),jQuery(".overlay, .content-mobile .action-bar .close i").on("click",function(){closeMenuMobile()});const pdp=()=>{let e=jQuery(".product .text-content p").text().substring(0,190);jQuery(".product .text-content").append('<br /><a href="javascript:void(0)" class="recolher">Recolher</a>'),jQuery(".product .text-content-short").html(`${e}...<br /><a href="javascript:void(0)" class="load-more">Mais...</a>`),jQuery(".product .text-content-short .load-more").on("click",function(){jQuery(".product .text-content-short").hide(),jQuery(".product .text-content").show()}),jQuery(".product .recolher").on("click",function(){jQuery(".product .text-content").hide(),jQuery(".product .text-content-short").show()})};window.addEventListener("resize",function(e){closeMenuMobile()}),window.addEventListener("load",function(e){shop(),jQuery(".content-mobile .aws-search-field").on("click",function(e){console.log("foo"),e.stopPropagation(),e.preventDefault()}),jQuery(window).width()>570&&(jQuery("header .social .icons .search").on("click",function(){jQuery("header .menu-lista").hide(),jQuery("header .gsearchfield").fadeIn()}),jQuery("header .gsearchfield .close i").on("click",function(){jQuery("header .gsearchfield").hide(),jQuery("header .menu-lista").fadeIn()})),pdp(),woocommerceMessage()});