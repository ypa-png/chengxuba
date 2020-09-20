

const wangpan=`
<div class="file">
	<div class="sideMenu">
		测试页面
	</div>
	<div class="fileUpload">
		<form id="form" enctype="multipart/form-data">
			选择上传文件:<input type="file" id="file" name="file" width="120px"> <input width="100px" id="file_btn" type="button" name="filebtn" value="上传">
		</form>
	
		<hr>
		<table style="margin:30px 0;width:90%">
			<thead>
				<tr>
					<td colspan="3">文件列表</td>
				</tr>
				<tr>
					<td>文件名</td>
					<td>文件大小</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
</div>
`;

const mainPage=`
			<div class="top">
				<h2>程序吧</h2>
				<p>没有自学能力的人没有未来。 — 李笑来</p>
				</div>
			<div class="home">
				<div class="articles"></div>
			</div>
`;
var s="手把手搭建博客"

const article=`
	<div class="article">
		<header></header>
		<div class="card-body">
			<p>${s}</p>
		</div>
		<footer>
			<img src="./icon/日期.png">
			<p>2020-09-19</p>
			<p>28</p>
			<img src="./icon/眼睛.png">
			<p>28</p>
			<img src="./icon/评论.png">
		</footer>
	</div>
`;
const pagination=`
	<ul class="mui-pagination">
		<li class="mui-disabled">
			<span> &laquo; </span>
		</li>
		<li class="mui-active">
			<a href="#">1</a>
		</li>
		<li>
			<a href="#">2</a>
		</li>
		<li>
			<a href="#">&raquo;</a>
		</li>
	</ul>
`

