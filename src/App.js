import "./App.css";
import { Component } from "react";
import fetchImages from "./services/fetch.js";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class App extends Component {
  state = { query: "", page: 1, gallery: [] };

  componentDidUpdate = (_, prevState) => {
    const { query, page } = this.state;

    if (this.state.query !== prevState.query) {
      this.setState({ gallery: [] });
      fetchImages(query, page).then((images) => {
        this.setState({ gallery: [...images] });
      });
    }

    if (
      this.state.query === prevState.query &&
      this.state.page !== prevState.page
    ) {
      fetchImages(query, page).then((images) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...images],
        }));
      });
    }
  };

  onNewQuery = ({ query }) => {
    this.setState({ query });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onNewQuery} />
        {this.state.gallery ? (
          <ImageGallery images={this.state.gallery} />
        ) : (
          <Loader
            type="Hearts"
            color="violet"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.gallery.length && this.state.gallery.length % 12 === 0 ? (
          <Button
            onClick={() => {
              this.setState((prevState) => ({ page: prevState.page + 1 }));
            }}
          />
        ) : (
          false
        )}
      </>
    );
  }
}

export default App;
