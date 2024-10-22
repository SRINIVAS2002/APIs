const link="https://randomuser.me/api/"
fetch(link).then(res=>{
    if(res.ok) return res.json()
    else {
    console.log("Error:",res.status)
    }).then(fetch=>{
    // fetch=fetch["results"]
    document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;"> TITLE WITH NAME => LIVING PLACE => GENDER => EMAIL ADDRESS => AGE => CONTACT  </h1>`)
    for(i of fetch["results"]){
        document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;"> ${i.name.title} ${i.name.first} ${i.name.last} => ${i.location.country} => ${i.gender}  => ${i.email} => ${i.dob.age} => ${i.phone}  </h1>`)
    }
})
