const openMenuMobile=()=>{jQuery(".boxes_ .box.left").animate({marginLeft:0}),jQuery(".overlay").show()},openMenuMobileCart=()=>{console.log("openMenuMobileCart"),jQuery(".boxes_ .box.right").animate({marginRight:0}),jQuery(".overlay").show()},closeMenuMobile=()=>{jQuery(".boxes_ .box.left").animate({marginLeft:"-300px"}),jQuery(".overlay").hide()},closeMenuMobileCart=()=>{jQuery(".boxes_ .box.right").animate({marginRight:"-300px"}),jQuery(".overlay").hide()};jQuery(".woocommerce-shop .woocommerce").each(function(){jQuery(this).find(".product").eq(0).after('<li class="line"></li>'),jQuery(this).find(".product").eq(1).after('<li class="line"></li>')}),jQuery(".content-mobile .menu-action i").on("click",function(){jQuery(".boxes_ .box.left").animate({marginLeft:0}),jQuery(".overlay").show()}),jQuery("header .content-mobile .cols .icons a").on("click",function(){console.log("openMenuMobileCart"),jQuery(".boxes_ .box.right").animate({marginRight:0}),jQuery(".overlay").show()}),jQuery(".overlay, .content-mobile .action-bar .close i").on("click",function(){console.log("fechar"),closeMenuMobile(),closeMenuMobileCart()}),window.addEventListener("resize",function(e){closeMenuMobile(),closeMenuMobileCart()});