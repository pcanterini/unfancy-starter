Zepto(function($) {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {
    title: 'Unfancy Web App',
    body: 'Sometimes people forget that they do not need' +
      ' a Batmobile to get to the grocery store.'
  };
  var html = template(context);

  $('.app').append(html);
});
