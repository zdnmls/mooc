<template>
    <div class="top">
        <div class="top-left">
            <a href="#/"><div class="tl1"><</div></a>
            <div class="tl2">{{list.title}}</div>
            <div class="tl3">二级标题</div>
        </div>
        <div class="top-right">
            <div class="tr1">
                <div class="gwc">购物车</div>
            </div>
            <div class="tr2">个人中心</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "header",
  data() {
    return {
      list: {}
    };
  },
  mounted: function() {
    fetch("/play_data?course_id=1")
      .then(r => r.json())
      .then(v => (this.list = v));
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

#volume {
  width: 100px;
  height: 3px;
  margin: 0 15px;
  border: 1px solid black;
  background: #999;
  border-radius: 5px;
  position: relative;
}

#volume .circle2 {
  /*width:8px;*/
  height: 3px;
  border-radius: 5px;
  background: #ff1325;
  position: absolute;
}

#volume .circle {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-left: -4px;
  background: #cccccc;
  position: absolute;
  top: -2px;
}

main {
  width: auto;
  height: calc(100vh - 0px);
  min-height: 320px;
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.kj {
  width: 100%;
  /*height: auto;*/
  display: flex;
  justify-content: center;
  padding: 50px 0 50px 0;
}

video {
  width: 75%;
  height: calc(100vh - 100px);
  min-height: 220px;
  cursor: pointer;
}

.top {
  width: 100%;
  height: 60px;
  background: #14191e;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  border: 1px solid #000;
  box-sizing: border-box;
}
.top-left {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.tl1 {
  width: 60px;
  height: 100%;
  font-weight: bold;
  font-family: "宋体";
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  color: #999;
}

.tl2 {
  width: auto;
  max-width: 250px;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
  padding: 0 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tl3 {
  width: auto;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  padding: 0 25px;
}

.top-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.tr1 {
  width: 150px;
  height: 100%;
  color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gwc {
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 20px;
  font-size: 12px;
  color: #ccc;
  border: 1px solid #999;
}

.tr2 {
  width: 100px;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 12px;
  color: #ccc;
  padding: 0 20px;
}

.bottom {
  width: 100%;
  height: 40px;
  background: #070c11;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
}

.sjz {
  width: 100%;
  height: 2px;
  background: #171015;
  /*background: #ff1325;*/
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  cursor: pointer;
}

.sjz:hover {
  width: 100%;
  height: 6px;
  background: #381e0b;
  /*background: #ff1325;*/
  position: absolute;
  top: -4px;
  left: 0;
  z-index: 9999;
  cursor: pointer;
}

.sjz:hover .sjz-tiao {
  height: 6px;
  cursor: pointer;
}

.sjz-lable {
  display: none;
}

.sjz:hover .sjz-lable {
  width: 36px;
  height: 18px;
  padding: 2px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: -27px;
  left: 10%;
  color: #eeeeee;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -18px;
}

.sjz-tiao {
  width: 0%;
  height: 2px;
  background: #ff1325;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  cursor: pointer;
}

.sjz:hover .sjz-yuan {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  position: absolute;
  top: -2.2px;
  margin-left: -5px;
  z-index: 9999;
}

.bot-left {
  width: auto;
  height: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#bl1 {
  width: auto;
  height: 40px;
  padding: 0 25px;
  cursor: pointer;
}

.bl2 {
  width: auto;
  height: 40px;

  padding: 0 25px;
  cursor: default;
}

.bot-right {
  width: auto;
  height: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.br1 {
  width: auto;
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.br2 {
  width: auto;
  height: 40px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.kuan {
  width: auto;
  height: 8px;
  padding: 5px;
  display: flex;
  color: #666;
  font-size: 10px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  background: #ccc;
  cursor: pointer;
}

.you {
  width: 400px;
  height: 100%;
  background: #14191e;
  position: absolute;
  top: 0;
  right: -400px;
  padding: 60px 35px 60px;
  box-sizing: border-box;
}

.you-dian {
  width: 50px;
  height: 70px;
  background: #ff1325;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #eeeeee;
  position: absolute;
  top: 40%;
  left: -50px;
  /*border:1px solid #000;*/
  box-sizing: border-box;
  cursor: pointer;
}

.you h3 {
  color: #ccc;
  font-size: 16px;
  line-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list li {
  line-height: 40px;
  color: #666;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list li span {
  padding: 15px;
  box-sizing: border-box;
}

.play {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTJDRUQ4MTg5MThDMTFFNUE2NUZDNjQ4OEMxQzQ4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTJDRUQ4MTc5MThDMTFFNUE2NUZDNjQ4OEMxQzQ4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDlEMjA5QTgyOTA2MTFFNTk2NDg4OTk3Rjc0NEFDRjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDlEMjA5QTkyOTA2MTFFNTk2NDg4OTk3Rjc0NEFDRjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zq0uVAAAAOUlEQVR42mL8//8/w0dRRgZyAP/r/wwsSPz/aPLopmKVZ2KgEIwaMGrAqAEQwIIn9zEQyJ1gABBgAIKJCCO+oOX0AAAAAElFTkSuQmCC)
    no-repeat;
  background-position: center;
  width: 16px;
  height: 16px;
}

.pause {
  left: 12px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjhFQzgyMDY5MThCMTFFNTg2QTRDNzU4RUUyMzQxMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjhFQzgyMDU5MThCMTFFNTg2QTRDNzU4RUUyMzQxMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDk3QzYxRTE5MThCMTFFNUI0QTI5NjQxNEM0MzBEMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDk3QzYxRTI5MThCMTFFNUI0QTI5NjQxNEM0MzBEMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5rcFh2AAAAh0lEQVR42pyS4QmAIBCFVW6F3KwaohYr2qamsF9NYHegIKHdeQ8+wqD3vigbYzSUZ7B02ZAVuY0w7nOekAsZtQUUj+wJrynIIYuTs3HMAGvjhK/atJEWNG16Cqo2mgKKTRhQPHwgCxJ6DejvnJN6yDdBs9rzFaqrZUCzyhmwq38GotUyrwADAFOyICvEROhlAAAAAElFTkSuQmCC)
    no-repeat;
  background-position: center;
}

.ylicon {
  width: 35px;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzMyMkMwOEI5MTkwMTFFNUIwMkNCQzI3REI3MTcyMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzMyMkMwOEE5MTkwMTFFNUIwMkNCQzI3REI3MTcyMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2NDZCRjYyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2NDZCRjcyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71OHQdAAABHElEQVR42qTSMUgCcRTHcRNxCEQHR5sicGgIRJDQaBI0aK+9hayfanfxcwmiegqhahvqrkesx1cqhaujdjmmjygibq3vwqsef3l3+IcP97//vf/v7t7dQrFUds0z3BbXA3LM4RZrTgL8aMh8hG10cGgnwIdHROX8Bit4xikyswIW8YB109obUmiigiXjgkcK9lXxLhKm0ANM5O576CGL4m/ApY1mH+Mer2gjbQS4HX6xlMy7WLbzGc3j2+l/oIfRg7rMV9HXTcyowh1smjZPUcAAYcRwogOuVHENT9hQa+f4hBfX+EL1v1f4wBZaas3YHJLgOPIYzurBu4S8qNfqy1MdyVNYNnGMpMyDuEMEZ7rIY9H5sRwvxJ/xI8AAbOY0dQ4A1dYAAAAASUVORK5CYII=)
    no-repeat;
  background-position: center;
}

.ylicon2 {
  width: 35px;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVBNTFBODc5MTkwMTFFNUE1NUJFOTdFRkE3QjYzQzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVBNTFBODY5MTkwMTFFNUE1NUJFOTdFRkE3QjYzQzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2NDZCRjYyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2NDZCRjcyOTA2MTFFNThGQThBQjlFNDZBN0Q0MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4gP6oRAAABJklEQVR42qSSvUsDQRBHkxBSWKRLbxkstbcOxFSaCCLYWAg2lhFyBhP/hBQqtiJ+NCJYWFhYWIiIVgEJ2Eq0MYVFQM07+C0My54GHHjMsrvzbm920/WolfpPZJS3oRFYzykvQRsKSYIvbWh4xWca57XWg/mQIP6PpidZhIrGuzADL3AMNSfIGplrRlt5B6bMvgeYhWvYhxt4dYKqchduJUnDpuY3YKDCVcnWIXKCk0AD7Yne4UBff4Q7mLOCpLCSIpSgA0+w7PfgL0kdJk3zM+MKmoEGT8OzFdRMwQqUAyewkiv4toJTU3CuB1TxJD9GEt/OhH1INoawABfe/CW8SRLBZ5IgJFmDe+0/NJJfm+gkcXzAFuxBXw3MjXMLQ+WjhKtNjQQYAJMVQimyaKLpAAAAAElFTkSuQmCC)
    no-repeat;
  background-position: center;
}

.video-list {
  margin-left: 20px;
  color: #8a8a8a;
}

.xxzt {
  opacity: 0;
}

.zzx {
  font-size: 12px;
  color: #00aa00;
  opacity: 1;
}

#beishu {
  position: relative;
  z-index: 30;
}

#beishu:hover .beishu {
  display: block;
}

.beishu {
  display: block;
}

.beishu {
  width: 80px;
  height: 210px;
  border-radius: 5px;
  background: #24272b;
  position: absolute;
  bottom: 39px;
  padding: 0 12px;
  box-sizing: border-box;
  border: 1px solid #555;
  display: none;
}

.beishu h4 {
  font-size: 12px;
  line-height: 30px;
  font-weight: normal;
  border-bottom: 2px solid #666;
}

.bs_li {
  line-height: 34px;
  display: flex;
  justify-content: space-between;
}

.beishu ul {
  margin-top: 6px;
}
</style>