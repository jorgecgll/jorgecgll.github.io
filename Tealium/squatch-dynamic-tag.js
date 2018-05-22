!function(a,b){a("squatch","https://d2rcp9ak152ke1.cloudfront.net/assets/javascripts/v2/squatch.min.js",b)}(function(a,b,c){var d,e,f;c["_"+a]={},c[a]={},c[a].ready=function(b){c["_" + a].ready =  c["_" + a].ready || [];c["_" + a].ready.push(b);},e=document.createElement("script"),e.async=1,e.src=b,f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(e,f)},this);

window.squatch.ready(function(){
  squatch.init({
      tenantAlias: 'test_amtbexleynygg'
  });
  var initObj = {
    engagementMedium: utag.data.engagementMediumDestination,
    widgetType: 'REFERRER_WIDGET'
  };

  squatch.widgets().createCookieUser(initObj).then(function(response) {
    user = response.user;
  }).catch(function(error){
    console.log(error);
  }); 
});
