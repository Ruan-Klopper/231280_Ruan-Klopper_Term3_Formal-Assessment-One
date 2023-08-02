$(document).ready(function () {
  console.log("Hello");

  //-----------------------------------------------------------
  //Home

  // When the document loads, animate the hero image upwards
  $("#hero-image").animate({ top: "-=100px" });

  //-----------------------------------------------------------
  //Browse

  $("#descriptionText").hide();

  //-----------------------------------------------------------
  //Wishlist

  $(".removeBtn").click(function () {
    //remove cell
    $(this).parents("tr").remove();
  });
});

// When a card is clicked
$(".card").click(function () {
  //Toggle p tags
  $("#priceText").toggle();
  $("#descriptionText").toggle();

  // Resize the image
  $(".card-img-top").toggleClass("small");
});
