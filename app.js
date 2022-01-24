//evcent bubbling
//on concept
//new learning from this project

// Creating a new todo
$("#inp").keypress(function (e) {
    if(e.which === 13) {
        const todoText = $('#inp').val();
        // console.log(todoText);
        $('#list').append(`<li><span>X</span> ${todoText}</li>`);
        $('#inp').val("");
    }
})

//mark todo as completed
// $('li').click( function () {
//     $(this).toggleClass('completed');
// });

$('ul').on( 'click','li', function () {
    $(this).toggleClass('completed');
});

$('#list').on('click','span', function () {
    $(this).parent().fadeOut(700,function () {
        //this refer to span here
        $(this).remove();
    });
    e.stopPropagation();  //now completed wala trigger nhi hoga
    // $(this).parent().remove();
});

//dynamically created todo pr na check ho rha h na delete 
// why is this is so??

$('#plus').click(function () {
    $('#inp').fadeToggle();
})





