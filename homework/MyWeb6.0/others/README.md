## 技術手段

參考網頁: https://j11y.io/javascript/zerg-rush-in-javascript/

這個有使用JQuery!

創建了一堆Zerg。每個 Zerg 搜索目標，
即附近的任何 DOM 元素。Zerg實例將首先觀察它的
附近，elementFromPoint以八度轉彎並圍繞一個
穩步增加的半徑呼叫：
```
// (Zergling.prototype.findTarget)
 
for (radius = 10; radius < Zergling.VISION; radius += 50) {
  for (degree = 0; degree < 360; degree += 45) {
 
    x = this.x + halfWidth + radius * cos(PI/180 * degree) - scrollLeft;
    y = this.y + halfHeight + radius * sin(PI/180 * degree) - scrollTop;
 
    if (Zergling.isSuitableTarget(el = doc.elementFromPoint(x, y))) {
      // We have a viable target
      // ...
      break;
    }
  }

```
有些元素不是目標。我們希望避免
頁面上的其他Zerg把非目標幹掉。我們也希望避免任何過大
的BODY元素。添加了一項antiZerg功能，以便
頁面上的元素可以保護自己免受Zerg攻擊：

```
Zergling.isSuitableTarget = function isSuitableTarget(candidate) {
 
  var targetData;
 
  if (!candidate) {
    return false;
  }
 
  // Make sure none of its ancestors are currently targets:
  for (var parent = candidate; parent = parent.parentNode;) {
    if ($.data(parent, Zergling.DATA_KEY) || /antiZerg/i.test(parent.className)) {
      return false;
    }
  }
 
  targetData = $.data(candidate, Zergling.DATA_KEY);
 
  candidate = $(candidate);
 
  return !/zergling/i.test(candidate[0].nodeName) &&
    !/antiZerg/i.test(candidate[0].className) && 
    // Make sure it's either yet-to-be-a-target or still alive:
    (!targetData || targetData.life > 0) &&
    // Make sure it's not too big
    candidate.width() * candidate.height() < Zergling.MAX_TARGET_AREA;
 
};
```

一旦我們感應到目標，就開始朝著它前進。

```
alcMovement: function() {
 
  var target = this.target,
      // Move towards random position within the target element:
      xDiff = (target.position.left + random() * target.width) - this.x,
      yDiff = (target.position.top + random() * target.height) - this.y,
      angle = atan2(yDiff, xDiff);
 
  // Assign deltaX/Y (i.e. how much we move {x,y} on each step)
  this.dx = this.speed * cos(angle);
  this.dy = this.speed * sin(angle);
 
}, //...
```

每一步，Zerg都需要檢查它是否已經到要幹掉的目標位置：

```
hasReachedTarget: function() {
 
  var target = this.target,
      pos = target.position;
 
  return  this.x >= pos.left &&
          this.y >= pos.top &&
          this.x <= pos.left + target.width &&
          this.y <= pos.top + target.height
}, //...
```

當一隻跳蟲到達它的目標時，它就會開始殺死它：

```
if (this.hasReachedTarget()) {
  this.isKilling = true;
  return;
}
```

殺的過程

```
if (this.isKilling) {
  if (target.life > 0) {
    // It's still alive! Pulsate and continue to kill:
    target.life--;
    this.pulsate();
    target.dom.css('opacity', target.life / Zergling.LIFE);//把目標變透明
  } else {
    // It's DEAD! 
    target.dom.css('visibility', 'hidden');
    this.pulsate(0);
    this.isKilling = false;
    this.target = null;
  }
  return;
}
```
設置this.target為null意味著Zerg
將在下一步開始尋找新目標。

為了管理所有的Zerg，這裡整理了一個ZergRush類：

```
function ZergRush(nZerglings) {
 
  var me = this,
      zerglings = this.zerglings = [],
      targets = this.targets = [];
 
  for (var i = 0; i < nZerglings; ++i) {
    zerglings.push(
      new Zergling(
        Math.random() * 300,
        Math.random() * 300,
        this
      )
    );
  }
 
  this.intervalID = setInterval(function() {
    me.step()
  }, 30);
 
}
```


所有Zerg從頁面中間的隨機位置開始
（從{700,500}到 的任意位置{300,300}）。

Zerg目前只是小紅點，如下所示：

```
// (in Zergling constructor):
 
// <zergling> element used to avoid CSS conflicts and because its cool..
this.dom = $('<zergling>').css({
  width: this.width,
  height: this.height,
  position: 'absolute',
  display: 'block',
  background: 'red',
  left: x+700,
  top: y+500,
  borderRadius: '5px',
  zIndex: 9999
}).
```