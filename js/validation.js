$(function(){
    $('#mail-btn').click(function(){
        if($("#mail").val() == "" || $("#check").prop('checked') != true){
            alert("Tapez votre email et selectionnez la case!")
            console.log("ddd")
        }
    })

    $('#search').click(function(){
        if($("#s-box").val() == ""){
            alert("Remplissez le champ recherche svp!")
        }
    })
})

