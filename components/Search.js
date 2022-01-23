const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <form action="/Browse" method="get">
          <label htmlFor="nft-search">
              <span className="visually-hidden">Search NFTs</span>
          </label>
          <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="searchbar-component"
            placeholder="Search NFTs"
            name="s"
          />
          <button>Search</button>
        </form>
    )
}

export default Search;