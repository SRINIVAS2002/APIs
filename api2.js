const link="https://dummyjson.com/todos"
fetch(link).then(res=>{
    if(res.ok) return res.json()
    else {
    console.log("Error:",res.status)
    }
})
.then(fet=>{
    document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;">USER ID => WORK TO DO = WORK STATUS</h1>`)
    for(i of fet["todos"])
        document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;">${i["userId"]} => "${i["todo"]}" = ${i["completed"]}</h1>`)
})
