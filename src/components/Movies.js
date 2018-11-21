import React from "react";

class Movies extends React.Component {
  listMovies = () => {
    const items = (
      <table
        style={{
          marginTop: "20px"
        }}
      >
        {this.props.movie.map(movie => {
          // when checkbox is selected,list the movies which has +7 imdb points else list them all
          if (!this.props.check || movie.vote_average > 7) {
            // if image url is not defined, use dummy image from placeholder.
            const image = movie.poster_path
              ? "https://image.tmdb.org/t/p/w400/" + movie.poster_path
              : "https://via.placeholder.com/100x150.png";

            // conditional coloring to show the movies in different colors which has +7 imdb points.
            let text = "";
            movie.vote_average > 7
              ? (text = "text-danger")
              : (text = "text-secondary");
            console.log(this.props.check);

            return (
              <div
                key={movie.id}
                className="recipes__box"
                style={{
                  padding: 12,
                  paddingBottom: 5,
                  boxShadow: " 0px 9px 6px #888888"
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <img
                        alt="movie poster"
                        src={image}
                        style={{
                          width: 100,
                          borderRadius: "12px",
                          top: "%20",
                          bottom: "%20",
                          position: "relative"
                        }}
                      />
                    </td>
                    <td className="text-secondary" style={{ paddingLeft: 12 }}>
                      <h3>{movie.title}</h3>
                      <p>
                        {movie.overview.length < 1 ? (
                          <p className="text-danger">
                            <strong>No Overview</strong>
                          </p>
                        ) : (
                          movie.overview
                        )}
                      </p>
                      <p
                        style={{
                          marginLeft: "700px",
                          paddingBottom: "0px",
                          fontSize: 16,
                          fontFamily: "Monospace"
                        }}
                      >
                        Release Year : {movie.release_date.substr(0, 4)}
                        <p
                          value={movie.vote_average}
                          className={text}
                          style={{ fontSize: 16, fontFamily: "Monospace" }}
                        >
                          IMDB : {movie.vote_average}
                        </p>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </div>
            );
          }
        })}
      </table>
    );

    return items;
  };

  render() {
    return <div>{this.listMovies()}</div>;
  }
}
export default Movies;
