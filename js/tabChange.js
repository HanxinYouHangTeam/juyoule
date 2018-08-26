// tab切换
var tabs = document.getElementsByClassName('tab-head')[0].getElementsByClassName('head-item'),
contents = document.getElementsByClassName('tab-content')[0].getElementsByClassName('tab-content-item');

function changeTab(index) {
for(var i = 0, len = tabs.length; i < len; i++) {
    if(i === index) {
        tabs[i].className = 'head-item selected';
        contents[i].className = 'tab-content-item show';
    }else{
        tabs[i].className = 'head-item';
        contents[i].className = 'tab-content-item';
    }
}
}