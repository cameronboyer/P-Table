
function init()
{
// $(this).mouseover($(this).css('border', '1'))
// $(this).mouseout($(this).css('border', '0'))

$(".alkaliMetals").mouseover(function() {$('.alkaliMetals').addClass('border')}); 
$(".alkaliMetals").mouseout(function() {$('.alkaliMetals').removeClass('border')});
       
$(".Alkaline_earth_metals").mouseover(function() {$('.Alkaline_earth_metals').addClass('border')});
$(".Alkaline_earth_metals").mouseout(function() {$('.Alkaline_earth_metals').removeClass('border')});

$(".Transition_metals").mouseover(function() {$('.Transition_metals').addClass('border')});
$(".Transition_metals").mouseout(function() {$('.Transition_metals').removeClass('border')});

$(".Metalloid").mouseover(function() {$('.Metalloid').addClass('border')});
$(".Metalloid").mouseout(function() {$('.Metalloid').removeClass('border')});

$(".Lanthanides").mouseover(function() {$('.Lanthanides').addClass('border')});
$(".Lanthanides").mouseout(function() {$('.Lanthanides').removeClass('border')});

$(".Actinides").mouseover(function() {$('.Actinides').addClass('border')});
$(".Actinides").mouseout(function() {$('.Actinides').removeClass('border')});

$(".Nonmetals").mouseover(function() {$('.Nonmetals').addClass('border')});
$(".Nonmetals").mouseout(function() {$('.Nonmetals').removeClass('border')});

$(".nonmetalsS").mouseover(function() {$('.nonmetalsS').addClass('border')});
$(".nonmetalsS").mouseout(function() {$('.nonmetalsS').removeClass('border')});

$(".Halogens").mouseover(function() {$('.Halogens').addClass('border')});
$(".Halogens").mouseout(function() {$('.Halogens').removeClass('border')});

$(".Noble_gases").mouseover(function() {$('.Noble_gases').addClass('border')});
$(".Noble_gases").mouseout(function() {$('.Noble_gases').removeClass('border')});

$(".Poor_Metals").mouseover(function() {$('.Poor_Metals').addClass('border')});
$(".Poor_Metals").mouseout(function() {$('.Poor_Metals').removeClass('border')});

$(".Halogens").mouseover(function() {$('.Halogens').addClass('border')});
$(".Halogens").mouseout(function() {$('.Halogens').removeClass('border')});

$(".gas").mouseover(function() {$('.gas').addClass('gasses')});
$(".gas").mouseout(function() {$('.gas').removeClass('gasses')});

$(".liquid").mouseover(function() {$('.liquid').addClass('liquids')});
$(".liquid").mouseout(function() {$('.liquid').removeClass('liquids')});

}
