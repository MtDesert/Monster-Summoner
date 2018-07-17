/**Race 种族
@value Human 人类
@value Beast 兽族
@value Dragon 龙族
@value Magic 魔法族
*/
var Race={
	Human:0,
	Beast:1,
	Dragon:2,
	Magic:3,
}
/**MoveType 移动类型
@value Walk 步行
@value Swin 游泳
@value Fly 飞行
*/
var MoveType={
	Walk:0,
	Swin:1,
	Fly:2,
}
/**Attribute 属性
@value None 无
@value Fire 火
@value Ice 冰
@value Thunder 雷
@value Ground 地
@value Sacred 圣
*/
var Attribute={
	None:0,
	Fire:1,
	Ice:2,
	Thunder:3,
	Ground:4,
	Sacred:5,
}
/**AttackType 攻击类型
@value Direct 直接攻击
@value Indirect 间接攻击
@value Bomb 炸弹攻击
*/
var AttackType={
	Direct:0,
	Indirect:1,
	Bomb:2,
}
/**Feature 特性
@value AttrDefend 属性防御,不会陷入异常状态
@value FireAttrDefend 火属性防御,被火属性攻击时损伤/5,被冰属性攻击时损伤*3
@value IceAttrDefend 冰属性防御,被冰属性攻击时损伤/4,被火属性攻击时损伤*3
@value ThunderAttrDefend 雷属性防御,被雷属性攻击时损伤/4,被火属性攻击时损伤*3
@value GroundAttrDefend 地属性防御,被地属性攻击时损伤/4,被雷属性攻击时损伤*3
@value DirectAtkDefend 直接攻击防御,被直接攻击时损伤/2
@value IndirectAtkDefend 间接攻击防御,被间接攻击时损伤/2
@value BombAtkDefend 炸弹攻击防御,被炸弹攻击时损伤/5
@value Break 破坏,攻击召唤台时攻击*5
@value Capture 占领,可占领被破坏的召唤台
@value DestoryMagic 灭魔,对魔族攻击*4
@value DragonSlay 屠龙,对龙族攻击*4
@value DefenceRateIgnore 防御率无视,防御数值不参与计算
@value Stealth 攻击前或在自身攻击范围外,不会被发现
@value Aquatic 水生,在水上时移动力&攻击力*1.5
@value Plant 植物,被冰雷地属性攻击时损伤/4,被火属性攻击时损伤*3
@value Machine 机械,被火冰地属性攻击时损伤/4,被雷属性攻击时损伤*3
@value SoftBody 软体,被物理间接攻击时损伤/2,被魔法攻击时损伤*2
@value Monosome 单体,只能召唤1只
*/
var Feature={
	AttrDefend:0,
	FireAttrDefend:1,
	IceAttrDefend:2,
	ThunderAttrDefend:3,
	GroundAttrDefend:4,
	DirectAtkDefend:5,
	IndirectAtkDefend:6,
	BombAtkDefend:7,
	Break:8,
	Capture:9,
	DestoryMagic:10,
	DragonSlay:11,
	DefenceRateIgnore:12,
	Stealth:13,
	Aquatic:14,
	Plant:15,
	Machine:16,
	SoftBody:17,
	Monosome:18,
}
/**Status 怪物状态
@value Normal 正常
@value SlowDown 减速,通常是冰属性造成
@value Dizzy 眩晕,通常是雷属性造成
@value Confuse 混乱,通常是地属性造成
*/
var Status={
	Normal:0,
	SlowDown:1,
	Dizzy:2,
	Confuse:3,
}
/**MoveAttackType 移动攻击类型,特殊规则,用于推断
@value GroundDirect 地面直接攻击
@value GroundIndirect 地面间接攻击
@value Fly 飞行
@value Others 其它
*/
var MoveAttackType={
	GroundDirect:0,
	GroundIndirect:1,
	Fly:2,
	Others:3,
}
