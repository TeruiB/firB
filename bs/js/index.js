window.onload=function(){
	alert(123);
	function id(id){
		return document.getElementById(id);
	}
	
	function creat(){
		//创建节点
		//id('wrap')
		var html='';
		for(var i=0;i<16;i++){
			html+='<li><img src="video/'+(i+1)+'.jpg" alt="" /></li>';
		}
		id('wrap').innerHTML=html;
		console.log(html);
	}
	
	creat();
}
