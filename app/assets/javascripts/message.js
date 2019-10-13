$(function(){
  function buildHTML(message){
    var html = `<div class="one">
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
      $('.input--message').val('')
      $('.hidden').val('')
      $('.sendbtn').attr('disabled', false);
      $('.box1').animate({
          scrollTop: $('.box1')[0].scrollHeight},1000);
    })
    .fail(function(){
      alert('エラー');
      $('.sendbtn').attr('disabled', false);
    })
  })
});
