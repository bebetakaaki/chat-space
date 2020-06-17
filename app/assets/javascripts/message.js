	
$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message">
          <div class="message__upper-info">
            <div class="message__upper-info__talker">
              ${message.user_name}
            </div>
            <div class="message__upper-info__talker__data">
              ${message.created_at}
            </div>
          </div>
          <div class="ifmessages">
            <p class="ifmessages__text">
              ${message.content}
            </p>
            <img class="message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message">
        <div class="message__upper-info">
          <div class="message__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="message__upper-info__talker__data">
            ${message.created_at}
          </div>
        </div>
        <div class="ifmessages">
          <p class="ifmessages__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);      
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $(".submit-btn").prop("disabled", false);
      $('form')[0].reset();
    })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      });
  })
});