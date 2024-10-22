const link="https://dummyjson.com/quotes"
fetch(link).then(resp=>{
    if(resp.ok) return resp.json()
    else {
    console.log("Error:",resp.status)
    }
}).then(d=>{
    // d=d["quotes"]
    document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;">AUTHOR NAME => AUTHOR'S QUOTE</h1>`)
    for(let ob of d["quotes"]){
        document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;">${ob["author"]} => "${ob["quote"]}"</h1>`)
    }
});