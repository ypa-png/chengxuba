function getList() {
	$.get(url + "getList", data => {
		var str = "";
		for (var i = 0; i < data.length; i++) {
			var s = data[i].fileName;
			str += "<tr><td>" +
				data[i].fileName +
				"</td><td>" +
				data[i].fileLength +
				" KB</td><td><div class='caozuo'><input class='filename' hidden value='" +
				data[i].fileName + "'><a id='down' href='"+url+"download?selectedfileName=" +
				data[i].fileName +
				"'>下载</a>-<a href='#' onclick='deletefile(this)'>删除</a></div></td></tr>";
		}
		console.log(data);
		$("tbody").html(str);
	})
}

//href='delete?selectedfileName="+data[i].fileName+"'
function deletefile(th) {
	console.log();
	var fileName = $(th).prevAll("input").eq(0).val();
	if (confirm("确认删除吗")) {
		$.ajax({
			url: url + 'delete',
			type: 'POST',
			data: {
				selectedfileName: fileName
			},
			dataType: 'json',
			success: function(data) {
				console.log(data);
				if (data.msg == "yes") {
					alert("删除成功！");
					getList();
				} else {
					alert("删除失败！");
				}
			}
		});
	}
}


function upload() {
	$("#form>input:eq(1)").click(function() {
		var data = new FormData(document.getElementById("form"));
		$.ajax({
			url: url + 'file',
			type: 'POST',
			data: data,
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data) {
				console.log(data);
				if (data.msg != "") {
					alert("上传成功！");
				} else {
					alert("请先选择文件！")
				}
				getList();
			},
			error: function(data) {
				alert("上传错误");
			}
		});
	});
}