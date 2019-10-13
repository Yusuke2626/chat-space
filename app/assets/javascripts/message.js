$(function(){
  function buildHTML(message){
    var html = `<div class="one">
                  <div class="one_title">
                  ${message.user_name}
                  </div>
                  <div class="one_time">
                  ${message.created_at}
                  </div>
                  <div class="one-text">
                    <p class="lower-message_content">
                    ${message.content}
                    </p>
                  </div>
                </div>`
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
      $('.sendbtn').attr('disabled', false);
    })
  })
});
