const link="https://pokeapi.co/api/v2/pokemon/ditto"
fetch(link).then(res=>{
    if(res.ok) return res.json()
    else {
    console.log("Error:",res.status)
    }
}).then(fetch=>{
    document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;">
         ABILITY NAME => SLOT NUMBER </h1>`)
    for(i of fetch["abilities"]){
        document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;">
             ${i.ability.name} => ${i.slot} </h1>`)
    }
    document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;">
         GAME NAME => GAME INDEX </h1>`)
    for(i of fetch["game_indices"]){
        document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;"> 
            ${i.version.name} => ${i.game_index} </h1>`)
    }
    // document.write(`<h1 style="background-color: orange; padding : 10px; margin :50px; text-align: center;"> VERSION NAME => RARITY </h1>`)
    // for(i of fetch["held_items"]){
    //     document.write(`<h1 style="background-color: lightgreen; padding : 10px; margin :50px; text-align: center;"> ${i.version_details.version.name} => ${i.version_details.rarity} </h1>`)
    // }
})
