import contextOfSearchOptions from "./contextOfSearchOptions";

const ProviderOfSearchOptions: React.FC<{children: React.ReactNode}> = (props) => {
    
    const { children } = props;

    const searchOptions = {
        typesOfFilter: [
            'partial',
            'full',
            'free-ebooks',
            'paid-ebooks',
            'ebooks'
        ],
        typesOfOrder: [
            'newest',
            'relevance',
        ],
        typesOfCategory: [
            'all',
            'art',
            'biography',
            'computers',
            'history',
            'medical',
            'poetry'
        ],
        typesOfItem: [
            'all',
            'books',
            'magazines'
        ],
    };
    return (
        <contextOfSearchOptions.Provider value={searchOptions}>
            {children}
        </ contextOfSearchOptions.Provider>
    )
};

export default ProviderOfSearchOptions