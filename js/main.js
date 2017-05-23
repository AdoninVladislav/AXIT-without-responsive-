$(function(){

		$('.sale_box .wrapper .tab').click(function(){
		$('.sale_box .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.sale_box .tab_items').hide().eq($(this).index()).fadeIn();

	}).eq(0).addClass('active')
		
$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "../mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;

	});
});

