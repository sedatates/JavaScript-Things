class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        this.xhr.open("GET",url); 
        this.xhr.onload=()=>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);//request ended
            }
            else{// if there is any error
                callback("error happened",null)
            }
        }
        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url)
        this.xhr.setRequestHeader("Content-type","application/json")//Json data

        this.xhr.onload = ()=> {
            if(this.xhr.status===201){//success
                callback(null,this.xhr.responseText)
            }
            else{
                callback("error occurred ",null)
            }
            
        } 
        this.xhr.send(JSON.stringify(data));
    }
    put(url,data,callback){
        this.xhr.open("Put",url)
        this.xhr.setRequestHeader("Content-type","application/json")//Json data

        this.xhr.onload = ()=> {
            if(this.xhr.status === 200){//success
                callback(null,this.xhr.responseText)
            }
            else{
                callback("put request: error",null)
            }
            
        } 
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("delete",url)
        this.xhr.onload = ()=> {
            if(this.xhr.status === 200){//success
                callback(null,this.xhr.responseText)
            }
            else{
                callback("delete request: error",null)
            }
            
        } 
        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if (err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});
/*
request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"thriller"},function(err,album){
    if (err===null) {
        console.log(album);   
    }
    else{
        //error occurred
        console.log(err);
    }
});*/
request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:10,title:"tarkan Karma"},function(err,album){
    if (err === null) {
        console.log(album);   
    }
    else{
        //error occurred
        console.log(err);
    }
});
request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if (err === null) {
        console.log(response);   
    }
    else{
        //error occurred
        console.log(err);
    }
});

