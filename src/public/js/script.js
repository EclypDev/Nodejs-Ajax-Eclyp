const URI = "/api/movies";

$(function send() {
  $("#getMovies").on("click", () => {
    $.ajax({
      url: URI,
      success: function (movies) {
        let tbody = $("tbody");
        tbody.html("");
        movies.forEach((movie) => {
          tbody.append(`
              <tr>
                <td class="id">${movie.id}</td>
                <td>
                  <input type="text" class="name" value="${movie.name}"/>
                </td>
                <td>
                  <input type="text" class="price" value="${movie.price}"/>
                </td>
                <td>
                  <button class="update-button">UPDATE</button>
                  <button class="delete-button">DELETE</button>
                </td>
              </tr>
          `);
        });
      },
    });
  });
  $("#moviesForm").on("submit", (e) => {
    e.preventDefault();
    let newMovie = $("#newMovie");
    let newMoviePrice = $("#newMoviePrecio");
    console.log(newMoviePrice);
    $.ajax({
      url: URI,
      method: "POST",
      data: {
        name: newMovie.val(),
        price: newMoviePrice.val(),
      },
      success: function (response) {
        newMovie.val("");
        newMoviePrice.val("");
        $("#getMovies").click();
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
  $("table").on("click", ".update-button", function () {
    let row = $(this).closest("tr");
    let id = row.find(".id").text();
    let name = row.find(".name").val();
    let price = row.find(".price").val();

    $.ajax({
      url: `${URI}/${id}`,
      method: "PUT",
      data: {
        name: name,
        price: price,
      },
      success: function (response) {
        console.log(response);
        $("#getMovies").click();
      },
    });
  });
  $("table").on("click", ".delete-button", function () {
    let row = $(this).closest("tr");
    let id = row.find(".id").text();

    $.ajax({
      url: `${URI}/${id}`,
      method: "DELETE",
      success: function (response) {
        console.log(response);
        $("#getMovies").click();
      },
    });
  });
});
