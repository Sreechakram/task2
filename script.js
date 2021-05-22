var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var i in data){
        try{
    var name=data[i].name;
    var lang=data[i].latlng;
    if(lang.length===0)throw new Error("Longitude is not found");
    weatherdata(name,...lang);
        }catch(x){
            console.log("some co-ordinates are invalid"+name+" "+x.message);
        }
 // console.log(name+" "+lang);
}
}
var weatherdata=function(name,lat,lang){
    var request=new XMLHttpRequest();
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=b38eb966dd553a11205e174b0f2bdb5f';
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(`${name} :${data.main.temp}`);
}
}