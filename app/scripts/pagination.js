function paginate() {
  $('.btn--paginate').remove();
  let numerOfItem = $(".table-group").length;
  let limitPerPage = 10;
  let totalPages = Math.round(numerOfItem/limitPerPage);

  $(".table-group:gt("+ (limitPerPage - 1) +")").hide();

  $(".btn__holder").append("<button class='btn btn__pages current-page active btn--paginate'>"+ 1 +"</button>")

  for(let i = 2; i <= totalPages; i++ ) {
    $(".btn__holder").append("<button class='btn btn__pages current-page btn--paginate'>"+ i +"</button>")
  }

  $(".current-page").on("click", function() {
    if($(this).hasClass("active")) {
      return false;
    }else {
          let currentPage = $(this).index();
          $(".btn__pages").removeClass("active");
          $(this).addClass("active");
          $(".table-group").hide();

          let total = limitPerPage * (currentPage+1);
          console.log(total);
          for(let i= total - limitPerPage; i< total; i++) {
            $(".table-group:eq("+ i +")").show();
          }
    }
  });
}
