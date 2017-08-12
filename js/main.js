
	jQuery(document).ready(function(){

		$('.animated_bg2').animatedBG({
			colorSet: ['#FA8072', '#FF6347', '#DC143C', '#B22222'],
			speed: 2000
		});

		$('.animated_bg3').animatedBG({
			colorSet: ['#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500', '#B22222'],
			speed: 6000
		});

	});



$("#rect")
  .delay(1000)
  .velocity({
    fill: "#ff0000",
    height: "100",
    width: "100"
  }, {
    duration: 1000
  })
