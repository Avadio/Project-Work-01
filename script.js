// Hara Krishna
// Radhaaa Radhaaa

// Alert Section

alert("Welcome To My World")

// Alert Section

// Main Section Start

$(document).ready(function(){
    $(".mainall2").slideUp(4000).fadeIn(4000)
})

$(document).ready(function(){
   $(".main3").hide(4000).fadeIn(4000)
})

$(document).ready(function(){
    $(".mainall3").hide(4000).show(4000)
})

$(document).ready(function(){
    $(".main04").slideUp(4000).show(4000)
})

// // Main Section End

// // Header Section Start

$(document).ready(function(){
    $(".headerall").slideUp(4000).slideDown(4000)
})

$(document).ready(function(){
    $(".mainall04").slideUp(4000).slideDown(4000)
})

$(document).ready(function(){

    $("#Sign").submit(function(){
    $(".fotter1").prepend("<div class='alert alert-secondary' role='alert'>Welcome  "+$('#Sign input[name="name"]').val() +",To Your Store</div>")

    $("#Sign").remove()

    return false;

    
})

})






// Header Section End

// Namaskar