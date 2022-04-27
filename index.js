console.log("Funcionando 😱");

var clusterWidth = $(".gallery__wrapper").width();

console.log(clusterWidth);

var numClusters = document.querySelectorAll(".gallery__wrapper").length;

console.log(numClusters);

var galleryWidth = clusterWidth * numClusters;
console.log(galleryWidth);

// Mouse over bubble item
var wrapper = $(".wrapper");
$(".bubble-item").mouseenter(function () {
  $(".wrapper").addClass("paused");
});

// Mouse leave bubble item
$(".bubble-item").mouseleave(function () {
  $(".wrapper").removeClass("paused");
});

// ******************************************
