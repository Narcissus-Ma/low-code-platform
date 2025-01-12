## 编排的选型与实现
三种： 流式、画布式、Grid
流式布局：
- 没有脱离文档流，自适应宽高
- 缺点也很明显：不是平铺模式，后期可能存在比较严重的性能问题，另外对于内层数据的处理不方便。
画布式：
- 脱离文档流了，布局更灵活
- 无法自适应宽高，如果实在需要自适应宽高，需要做非常复杂的处理
Grid：
- 比较折中的办法，有一定的灵活性有一定的规范
- 无法自适应宽高

## 问题
1. createMemoryHistory 是什么？
2. const { debug, toggle } = useEnvStore()， 这种写法为什么不对？
3. baseUrl怎么设置
   已解决

4. mock功能是如何实现的
   直接引入

5. deprecate_SmoothDndDraggable 这两个文件作用？

6. setup.ts文件有何作用？
   作为物料市场的插件机制引入

7. 插件机制怎么用？
   已解决
8. action flow组件有什么用？
9.  vite配置中的vue与vueJsx 作用？
10. 为啥要用react组件？
11. 版本号带^的意思？
    大于这个版本
12. watch函数的用法
13. 数据源有什么用？


14. 图表的拖拽有一个比较大的bug，怎么解决？
bug修复，除了toRaw外，还要在blocksBaseMeta.ts中添加 props, by: Narcissus

15. vue-json-pretty 这个包没有
    已解决

16. 导出功能还没有做？
    