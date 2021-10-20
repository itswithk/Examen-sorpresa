const API = "https://ghibliapi.herokuapp.com/films";

const getData = (api) => {
return fetch(api)
    .then((response) => response.json())
    .then((json) => {
    console.log(json);
    fillData(json);
    })
    .catch((error) => {
    console.log("Error", error);
    });
};



const fillData = (data) => {
let html = "";
data.forEach((cc) => {
    
    html += ' <div class="col">';
    html += '<div class="card h-100"> <style="width: 12rem;">';
    html += `<img src="${cc.image}" class="card-img-top" width="200" height="250" alt="${cc.title}"></img>`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title"> ${cc.title} </h5>`;
    
    html += "</div>";
    html += "</div>";
    html += "</div>";
    
    });
    document.getElementById("dataMovies").innerHTML = html;

};

getData(API);