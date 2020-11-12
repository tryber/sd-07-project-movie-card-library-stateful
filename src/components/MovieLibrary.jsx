// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList'
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
	constructor(props) {
		super(props);

		const { movies } = this.props;
		this.state = {
			searchText: '',
			bookmarkedOnly: false,
			selectedGenre: '',
			movies: movies,
		};
	}

	handleCallbacksStates = target => {
		const { type, name, value, checkbox } = target;
		let newValue = value;
		if (type === 'checkbox') newValue = checkbox;

		this.setState({
			[name]: newValue,
		});
	};

	render() {
		return (
			<div>
				<SearchBar
					searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
					onSearchTextChange={this.handleCallbacksStates}
					onBookmarkedChange={this.handleCallbacksStates}
					onSelectedGenreChange={this.handleCallbacksStates}
				/>
        <MovieList movies={this.state.movies} />
			</div>
		);
	}
}

export default MovieLibrary;
