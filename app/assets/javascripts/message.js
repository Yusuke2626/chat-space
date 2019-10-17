$(function(){


  function buildHTML(message){

    var html =   `<div class="one" id="message" data-id="${message.id}" >
                  <div class="one_title">
                  ${message.user_name}
                  </div>
                  <div class="one_time">
                  ${message.created_at}
                  </div>
                  <div class="one_text">
                  <p class="lower-message_content">
                  ${message.content}
                  </p>
                  `

                if(message.image_url==null){
                html = $(html).append(
                  `</div>
                  </div>`)
                }else{
                  html = $(html).append(
                  `<img src= "${message.image_url}">
                  </div>
                </div>`
                )}

    return html;
  }

  function add_message_id(message_ids){
     $('.one').each(function(){
       var message_id = $(this).data('id');
       message_ids.push(message_id);
     });
     return message_ids;
  }



  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data:formData,
      dataType:'json',
      processData:false,
      contentType:false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.box1').append(html)
      $('#new_message')[0].reset();
      $('.sendbtn').attr('disabled', false);
      $('.box1').animate({
          scrollTop: $('.box1')[0].scrollHeight},1000);
    })

    .fail(function(){
      alert('エラー');
      $('.sendbtn').attr('disabled', false);
    });
   });

    var reloadMessages = function(){
    var message_ids = [];
    var message_ids = add_message_id(message_ids);
    var last_message_id = message_ids[message_ids.length-1];
    console.log(last_message_id);

    $.ajax({
      url:'api/messages#index {:format=>"json"}',
      type:'get',
      dataType:'json',
      data:{ id:last_message_id }
    })
    .done(function(messages){
        console.log('ok');
      var insertHTML = '';
        console.log(messages);
       messages.forEach(function(message){
         console.log(message);
      var html = buildHTML(message);
         insertHTML = html
         console.log(html);

      })
        $('.box1').append(insertHTML);
        $('.box1').animate({
            scrollTop: $('.box1')[0].scrollHeight},1000);
    })
    .fail(function(){
      alert('error');
    });

  };

    if(document.URL.match(/..messages/)){
      setInterval(reloadMessages, 5000)
    }
  });
