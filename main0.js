

function getReddit(){
  var subreddit = document.getElementById('text').value;
  $('#image').show();
  // TODO: Purify input

  let promise = $.ajax({
    type: 'GET',
    url: `https://www.reddit.com/r/${subreddit}.json`,
    complete: function(){
    $('#image').hide();
    }
  });

  promise.then(function(data){
    let fragment = document.createDocumentFragment();

    data.data.children.forEach(function(child) {
      console.log(child);

      let div = document.createElement('div');

      let title = document.createElement('h4');
      title.innerText = child.data.title;

      let score = document.createElement('p');
      score.innerText = child.data.score;

      let author = document.createElement('p');
      author.innerText = child.data.author;

      div.appendChild(title);
      div.appendChild(score);
      div.appendChild(author);

      fragment.append(div);
    });

    $('#results').html(fragment);

  });
  return false;

}

  // $('#results').html('Loading...');
  // var subreddit = $('#name');
  // alert('hello');

  // let promise = $.ajax({
  //   type: 'GET',
  //   url: 'https://www.reddit.com/r/{subreddit}.json'
  // });
  //
  // promise.then(function(members) {
  //   let fragment = document.createDocumentFragment();
  //
  //   members.forEach(function(member) {
  //     let img = document.createElement('img');
  //     img.src = member.avatar_url;
//   //     img.width = 150;
//   //     img.alt = `image of ${member.login}`;
//   //     fragment.append(img);
//   //   });
//   //
//   //   $('#results').html(fragment);
//   // });
// });
