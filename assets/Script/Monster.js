cc.Class({
	extends:cc.Component,

	properties:{
		lblName:cc.Label//这可以显示各种名字,目前测试用
	},

	onLoad(){},
	update(dt){
		let slice=this.monster.moveSlice;//读取时间片
		slice+=dt;//累加时间片
		if(slice<0){
			this.monster.moveSlice=slice;
			return;
		}
		//根据时间片来推算位移
		let posX = this.monster.position.x + this.monster.monsterData.move * slice;
		this.node.setPositionX(posX);
		//时间片足够,更新位置状态
		if(slice>1){
			slice-=2;//给测试者目测结果
			this.monster.position.x += this.monster.monsterData.move;
		}
		//保存时间片
		this.monster.moveSlice=slice;
		//输出坐标
		this.lblName.string=Math.floor(posX).toString();
	},

	//设置怪物数据
	setMonster(monster){
		this.monster=monster;
		//在下面加上改变状态的代码,比如改变怪物样貌纹理
		this.lblName.string=monster.monsterData.name;
	},
	//移动到指定点(直线移动)
	moveTo(x,y){}
});