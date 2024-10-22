const link="https://jsonplaceholder.typicode.com/photos"
fetch(link).then(res=>{
    if(res.ok) return res.json()
    else {
    console.log("Error:",res.status)
    }))
.then(fet=>{
    document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;">ID - ALBUM ID => TITLE NAME</h1>`)
    for(i of fet)
        document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;">${i["id"]} - ${i["albumId"]} => "${i["title"]}"</h1>`)
})
