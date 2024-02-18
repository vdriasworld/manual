# 指令及插件

[[toc]]

## 网页地图

在浏览器打开 [https://play.vdrias.cn:8100](https://play.vdrias.cn:8100) 即可

## 传送到传送点

在服务器内，你可以使用`/warp <传送点名称>`的指令传送到已有的传送点

目前服务器有以下几个传送点（及传送指令）：

- 资源世界 `/warp mine`

- 末地 `/warp end`

- 下界 `/warp nether`

- 小黑塔 (末地) `/warp xiaoheita`

## 传送

`/spawn` 回到出生点

`/tpon` 开启接收传送请求

`/tpoff` 关闭接收传送请求

`/tpa [玩家名]` 请求传送到某名玩家身边

`/tpahere [玩家名]` 请求将某位玩家传送到您身边

`/tpaccept` 接受传送请求。

`/tpdeny` 拒绝传送请求

`/tpcancel` 取消传送请求

`/sethome [名称]` 设置家，如果不填名称则默认名称为`home`

`/delhome [名称]` 删除家，如果您设置家的时候没有填名称，则名称为默认的`home`

`/home` 回家

## mcMMO

**官方文档：**

https://www.spigotmc.org/resources/official-mcmmo-original-author-returns.64348/

https://wiki.mcmmo.org/en/skills

## 粘液科技

::: danger 主世界部分禁止物品无法在 指南 中显示

我们在主世界禁止了部分具有破坏性的物品，但它们在其它世界是可用的。

下面是主世界禁用物品的列表：

- 爆炸镐
- 爆破铲
- 伐木斧
- 淘金盘
- 工业矿机
- 进阶工业矿机
- 寻矿镐
- 矿脉镐
- 可编程机器人(矿工)
- 可编程机器人(樵夫)

:::

第五周目新加入了 粘液科技4 插件，是通过插件形式重现经典模组粘液科技的插件。

`/sf guide` 获取粘液科技指南

## 查询所在区块是否为史莱姆区块

`/slime` 显示所在区块是否为 史莱姆区块，并显示区块实体数量

## 核心保护 (CoreProtect)

> CoreProtect 是一个快速高效的数据记录和防止破坏的工具。可以回滚和还原任意数量的损坏。专为大型服务器设计，CoreProtect 可以在不影响服务器性能的情况下记录和管理数据。
> 
> CoreProtect 是最受欢迎的防破坏插件之一，自 2012 年初以来一直在积极开发中。

**官方文档：**

https://www.spigotmc.org/resources/coreprotect.8631/

输入`/co i`可以左键点击方块、右键点击箱子查询日志（例如：谁放进去/拿走箱子里的什么东西，谁放置/破坏了什么方块），再次输入`/co i`退出
