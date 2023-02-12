
// 이 선택자의 요소가 화면에 나타날 때에 할 일
var waypoints = $('#options-only').waypoint({
  handler: function(direction) {
    notify(this.element.id + ' hit')
  }
})