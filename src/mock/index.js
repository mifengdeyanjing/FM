import Mock from "mockjs"

//定义接口
Mock.mock("/list","get",{
  "list|8":[
    {"id|+1":0,"name":"@cname","address":"county(true)","age":"20"}
  ]
});
Mock.mock("/books","get",{
  "list|5":[
    {
      "navTitle|+1":["全部","儿童故事","启蒙课堂","其他","国学经典"],
      "content|5":[{"id|+1":0,"name":"@ctitle","poster":"@image(100x100)","desc":"@cparagraph(1)","views|10000-99999":0,"ji|1000-2000":0,"flag":false}], 
    }
  ]
})