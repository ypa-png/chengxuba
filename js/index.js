var url = "http://www.yangbq.top/chengxuba/file/";
// var url1 = "http://localhost:9001/chengxuba/file/";
// var url = "http://localhost:8080/chengxuba/file/";

document.write("<script src='js/wangpan_module/pages/page.js'></script>"); //引入网盘功能模块静态页面
document.write("<script src='js/wangpan_module/methods/index.js'></script>"); //引入网盘功能模块函数

$(document).ready(function() {
	//默认加载主页面
	main()

	$(".nav>.tab>#cloud").click(function() {
		$(".center").html(wangpan)
		getList()
		tabChanges(this)
		upload()
	})

	$(".nav>.tab>#mainPage").click(function() {
		main()
	})

	window.onscroll = function() {
		var t = $(document).scrollTop()
		if (t > 50) {
			$(".nav").css("background", "#121212")
		}
		if (t < 50) {
			$(".nav").css("background", "transparent")
		}
	}
})

function main() {
	tabChanges("#mainPage")
	$(".center").html(mainPage)
	var str = ""
	for (var i = 0; i < 9; i++) {
		$(".center>.home>.articles").append(article)
	}
	// console.log(str)
	// load($(".center>.home>.articles"), str)

	$(".center>.home").append(pagination)
}

function load(destval, val) {
	destval.html(val)
}

function tabChanges(th) {
	$(th).css("background", "#FFFFAA")
	$(th).css("color", "#242424")
	$(th).css("font-size", "17px")
	$(th).nextAll().css("background", "#3B3B3B")
	$(th).nextAll().css("color", "#FFFFFF")
	$(th).nextAll().css("font-size", "15px")
	$(th).prevAll().css("background", "#3B3B3B")
	$(th).prevAll().css("color", "#FFFFFF")
	$(th).prevAll().css("font-size", "15px")
}
