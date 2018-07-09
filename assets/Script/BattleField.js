var MonsterDataConst=require("MonsterDataConst")

cc.Class({
	extends:cc.Component,

	properties:{
		MonsterPrefab:cc.Prefab,
	},

	onLoad:function(){
		//导出变量
		let array=MonsterDataConst.monsterDataList;
		let Monster=MonsterDataConst.Monster;
		//创建所有怪物
		for(var i=1;i<6;++i){
			let monster=Monster(array[i]);//构造怪物数据
			//创建怪物预置物
			let prefab=cc.instantiate(this.MonsterPrefab).getComponent("Monster");
			this.node.addChild(prefab.node);
			prefab.node.setPosition(0,i*40);
			//设置怪物数据
			prefab.setMonster(monster);
		}
	},
	update:function(dt){},
});