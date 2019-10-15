$(function(){

    var user_list = $(".user-search-result");
    var chat_member_list = $(".chat-group-users")

    function appendUser(user){
      var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                  ${user.name}
                  </p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                  </div>`

     user_list.append(html);
    }

    function chataddUser(name,id){
       var html = `<div class='chat-group-user'>
                   <input name='group[user_ids][]' type='hidden' value='${id}'>
                   <p class='chat-group-user__name'>${name}</p>
                   <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                   </div>`

          chat_member_list.append(html)
     }

    function addUser_id(user_ids){
      $('input[name="group[user_ids][]"]').each(function(){
        var user_id = $(this).attr('value');
        user_ids.push(user_id);
      });
      return user_ids;
    }

    $('.user-search-result').on('click','.user-search-add',function(){
       var userlist = $(this).parent()
         userlist.remove();
       var user_id = $(this).data('user-id');
       var user_name = $(this).data('user-name');
         chataddUser(user_name,user_id);
    });

    $(".chat-group-users").on('click','.user-search-remove',function(){
      var userlist = $(this).parent()
        userlist.remove();
    })

    $("#user-search-field").on("keyup", function() {
        var input = $("#user-search-field").val();
        var href = window.location.href
        var user_ids = [];
        addUser_id(user_ids);

        $.ajax({
          type:'GET',
          url:'/users',
          data: { keyword: input,user_ids:user_ids},
          dataType:'json',
        })

        .done(function(users){
          $(".user-search-result").empty();
          if(users.lenth !== 0) {
            users.forEach(function(user){
              appendUser(user);
            });
          }
          else{
           alert('no-user');
          }
        });
        .fail(function(){
          alert('error');
        });
    });
});
