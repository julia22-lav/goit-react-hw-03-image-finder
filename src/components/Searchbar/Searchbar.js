import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = { query: "" };

  reset = () => {
    this.setState({ query: "" });
  };

  onChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button
            type="submit"
            className={s.SearchFormBtn}
            onClick={this.onSubmit}
          >
            <span className={s.SearchFormBtnLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
