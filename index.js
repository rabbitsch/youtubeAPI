const youtubeApi= 'AIzaSyDdUGDSs5Dp-Z4ZtRGyKv8IenmvXxfV-wI'

const endPointYou = 'https://www.googleapis.com/youtube/v3/search'

// function getDataFromApi(searchTerm,callback){
//   const query = {
//     part: 'snippet',
//     key: 'AIzaSyDdUGDSs5Dp-Z4ZtRGyKv8IenmvXxfV-wI',
//     q: `${searchTerm} in:name`
// }
// $.getJSON(endPointYou, query, callback);
// }

//clicking search and preparing the request
// $(function(){
//   $("form").on("submit", function(event){
//     event.preventDefault();


// Gets DATA from API
function getAPIData (searchTerms){
  // var searchTerms = $('#js-query').val()
  console.log(`i am searching for ${searchTerms}`)
    let objFunct = {
      part: "snippet",
      type: "video",
      q: searchTerms,
      maxResults: 3,
      order: "viewCount",
     key: youtubeApi,
     url:endPointYou,

    }
    
    
      $.getJSON(endPointYou, objFunct, function(data){
    // console.log(data.items[0].snippet.thumbnails.medium);
       renderResult(data.items);
   })
 }

      ;

// // execute code
//  request.execute(function(response){
//       let results = response.result:
//       $.each(results.items, function(index, item){
//        console.log('hello')

// This is the click button to search
$(function(){
  $("form").submit('submit',function(event){
    event.preventDefault();
console.log('do you click')
     const queryTarget = $(event.currentTarget).find('#js-query');

    const query = queryTarget.val();
    // getRequest(query);
    // clear out the input
   queryTarget.val("");
    // $('main').html(renderResult());
     getAPIData(query);
    

  })
  console.log('click button can you hear me')
});


// function displayYoutubeData(data){
//   console.log('display can you hear me')
//    const results = data.items.map((item, index) => renderResult(item));
//   $('.js-search-results').html(results);
//   console.log('display can you hear me')
// }


function renderResult(results){
   $.each(results, function(index, value){
    $("ul").append("<li><a href=https://www.youtube.com/watch?v=" + value.id.videoId + " target='_blank'><img src=" + value.snippet.thumbnails.medium.url + "></a></li>")
  });
//   `<div>
// 	<span class ="vid-js">${result.html_url}</span>
// 	<span class = "vid-js">${result.type}</span>
// </div>`
console.log('can you render')
}

//AJAX Jquery try

// $.ajax({
//   type: 'GET',
//   url: 'https://www.googleapis.com/youtube/v3/search'
//   success: function(argu){
//     $.each(argu, function(index, item))

//   }
// })

// prepare API
function init(){
  gapi.client.setApiKey('AIzaSyDdUGDSs5Dp-Z4ZtRGyKv8IenmvXxfV-wI');
  gapi.client.load("youtube","v3",function(){

  })
}
// clickButton(); 
// renderResult();
// getAPIData();